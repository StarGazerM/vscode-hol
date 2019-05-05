/**
* this is the antlr4 version of Standard ML97
*/
grammar ML;

@header {
    package com.syr.sml.parser;
    import java.util.HashMap;
}

// lexer
COMMENT
    : '(*' .*? '*)' -> skip
    ;

// reserved word
RESERVED_WORD
    : 'abstype' | 'and' | 'andalso' | 'as' | 'case' | 'do' | 'dataype' | 'else'
    | 'end' | 'eqtype' | 'exception' | 'fn' | 'fun' | 'functor' | 'handle' | 'if'
    | 'in' | 'include' | 'infix' | 'infixr' | 'let' | 'local' | 'nonfix' | 'of'
    | 'op' | 'open' | 'orelse' | 'raise' | 'rec' | 'sharing' | 'sig' | 'signature'
    | 'struct' | 'structure' | 'then' | 'type' | 'val' | 'where' | 'with' | 'withtype'
    | 'while'
    ;

ID: ALPHANUMERIC | SYMBOLIC;
fragment ALPHANUMERIC: LETTER (LETTER | DIGIT | '\'' | '_')*;
fragment SYMBOLIC: ('!'|'%'|'&'|'$'|'#'|'+'|'-'|'/'|':'|'<'|'='|'>'|'?'|'@'|'\\'|'~'|'`'|'^'|'|'|'*')+;

// const
CON: INT | WORD | FLOAT | CHAR | STRING;
fragment INT: '-'? (NUM | HEX);
fragment WORD: DECIMAL | HEXADECIMAL;
fragment FLOAT: '-'?NUM'.'NUM ('e''-'?NUM)?;
fragment CHAR: '#"' ASCII '"';
fragment STRING: '"' (~'"'|'"')* '"';
fragment DECIMAL: '-'? '0w' NUM;
fragment HEXADECIMAL: '-'? '0wx' HEX;
fragment NUM: DIGIT+;
fragment HEX: (DIGIT|[a-fA-F])+;
fragment ASCII: [\u0040-\u0046\u0050-\u0133\u0135-\u0176];

// identifier
//LAB: ID | NUM;
VAR: UNCONSTRAINED | EQUALITY;
fragment UNCONSTRAINED: '\''(LETTER | DIGIT | '\'' | '_')*;
fragment EQUALITY:  '\'\'' (LETTER | DIGIT | '\'' | '_')*;

LETTER: [a-zA-Z];
DIGIT: [0-9];
WS: [ \n\t\r]+ -> skip;
// parser

longid: ID('.' ID)+;
// expression
exp
    : 'op'? longid                          # valueOrConsExp
    | ID                                    # identExp
    | CON                                   # constExp
    | '#' lab                               # recordSelecExp
    | '(' ')'                               # parenthesesExp
    //| '('exp')'                           // parentheses
    | '('exp(','exp)*')'                    # tupleExp
    | '{' exprow?'}'                        # recordExp
    | '[' (exp (','exp)*)? ']'              # listExp
    | '(' exp (';'exp)+ ')'                 # seqExp // (n ≥ 2)
    | 'let' dec 'in' exp (';'exp)* 'end'    # localDecExp // (n ≥ 1)
    | exp ID exp                            # infixAppExp
    | exp exp                               # appExp
    | exp ':' typ                           # typeAnnoExp
    | 'raise' exp                           # exnRaisingExp
    | exp 'handle' match                    # exnHandlingExp
    | exp 'andalso' exp                     # conjExp
    | exp 'orelse' exp                      # disjExp
    | 'if' exp 'then' exp 'else' exp        # condExp
    | 'while' exp 'do' exp                  # iterExp
    | 'case' exp 'of' match                 # caseAnalysisExp
    | 'fn' match                            # funcExp
    ;
exprow                                      // expression row
    : lab '=' exp (','exprow)?              # expRow
    ;
match                                       // match
    : pat '=>' exp ('|' match)?             # matchBody
    ;
lab:
    ID | CON                                # labelName
    ;
// pattern
pat
    : CON                                   # constPat
    | '_'                                   # wildcardPat
    | 'op'? ID                              # varPat
    | 'op'? longid pat?                     # consPat
    | pat ID pat                            # infixConsPat
    | '(' pat ')'                           # parenthesesPat
    | '(' pat (',' pat)+ ')'                # tuplePat
    | '{' patrow '}'                        # recordPat
    | '['']'                                # empListPat
    | '[' pat (',' pat)* ']'                # listPat
    | pat ':' typ                           # typeAnnoPat
    | 'op'? ID (':' typ)? 'as' pat          # layeredPat
    ;
patrow
    : '...'                                 # wildcardPatRow
    | lab '=' pat (',' patrow)?             # patRow
    | ID (':'typ)? ('as' pat)? (','patrow)? # varPatRow
    ;

// type
typ
    : VAR                                   # varTyp
    | longid                                # longIdTyp
    | typ longid                            # consOneTyp
    | typ (',' typ)+ longid                 # consManyTyp
    | '(' typ ')'                           # parenthesesTyp
    | typ ('*' typ)+                        # tupleTyp
    | typ '->' typ                          # funcTyp
    | '{' typrow? '}'                       # recordTyp
    ;
typrow
    : lab ':' typ (',' typrow)?             # typeRow
    ;

// declaration
dec
    : 'val' (VAR? | VAR (',' VAR)+) valbind     # valDec
    | 'fun' (VAR? | VAR (',' VAR)+) funbind     # funcDec
    | 'type' typbind                            # typeDec
    | 'datatype' databind ('withtype' typbind)? # datatypeDec
    | 'datatype' ID '=' 'datatype' longid       # datatypeReplDec
    | 'abstype' databind ('withtype' typbind)?  'with' dec 'end'    # abstractTypeDec
    | 'exception' exnbind                       # exnDec
    | 'structure' strbind                       # structureDec //(not allowed inside expressions)
    |                                           # empDec
    | ';' dec                                   # empHeadSeqDec
    | dec ';' dec                               # seqDec
    | 'local' dec 'in' dec 'end'                # localDec
    | 'open' longid+                            # includeDec //(n ≥ 1)
    | 'nonfix' ID+                              # nonfixDec // (n ≥ 1)
    | 'infix' DIGIT? ID+                        # leftAssocInfixDec //(n ≥ 1)
    | 'infix' DIGIT? ID+                        # rightAssocInfixDec // (n ≥ 1)
    ;
valbind
    : pat '=' exp ('and' valbind)?              # destValBind
    | 'rec' valbind                             # recurValBind
    ;
funbind
    : funmatch ('and' funbind)?                 # clausalFuncBind
    ;
funmatch
    : 'op'? pat+ (: typ)? '=' exp ('|' funmatch)?               # nonfixFunMatch // (n ≥ 1) NOTE: the original rule have id here
    | pat ID pat (':'typ)? '=' exp ('|' funmatch)?              # infixFunmatch
    | '('pat ID pat')' pat+ (':'typ)? '=' exp ('|' funmatch)?   # infixManyFunmatch // (n ≥ 0)
    ;
typbind
    : (VAR? | VAR (',' VAR)+) ID '=' typ ('and' typbind)?       # abbrevTypBind
    ;
databind
    : (VAR? | VAR (',' VAR)+) ID '=' conbind ('and' databind)?  # dataTypeDataBind
    ;
conbind
    : ID ('of' typ)? ('|' conbind)?         # dataConsConBind
    ;
exnbind
    : ID ('of' typ) ('|' exnbind)?          # genExnBind
    | ID '=' longid ('and' exnbind)?        # renameExnBind
    ;

// Module Language
str
    : longid                                # identStr
    | 'struct' dec 'end'                    # structStr
    | str ':' sig                           # transpAnnoStr
    | str ':>' sig                          # opaqueAnnoStr
    | ID '('str')'                          # functorStrAppStr
    | ID '('dec')'                          # functorDecAppStr
    | 'let' dec 'in' str 'end'              # localDecStr
    ;
strbind
    : ID (':>' sig)? '=' str ('and' strbind)?   # structStrBindComp
    | ID (':' sig)? '=' str ('and' strbind)?    # structStrBindSmpl
    ;

// signature
sig
    : ID                                    # identSig
    | 'sig' spec 'end'                      # signatureBody
    | sig 'where' 'type' typrefin           # refineSig
    ;
typrefin
    : (VAR? | VAR (',' VAR)+) longid '=' typ ('and' 'type' typrefin)    # typeRefine
    ;
spec
    : 'val' valdesc                         # valSpec
    | 'type' typdesc                        # typeSpec
    | 'eqtype' typdesc                      # equaTypeSpec
    | 'type' typbind                        # typeAbbrevSpec
    | 'datatype' datdesc                    # datatypeSpec
    | 'datatype' ID '=' 'datatype' longid   # datatypeReplSpec
    | 'exception' exndesc                   # exnSpec
    | 'structure' strdesc                   # structureSpec
    |                                       # empSpec
    | ';' spec                              # empHeadSeqSpec
    | spec ';' spec                         # seqSpec
    | 'include' sig                         # includeOneSpec
    | 'include' ID+                         # includeManySpec // (n>=1)
    | spec 'sharing' 'type' longid '=' ('=' longid)+    # typeSharingSpec // (n ≥ 2)
    | spec 'sharing' longid '=' ('=' longid)+           # structureSharingSpec // (n ≥ 2)
    ;
valdesc
    : ID ':' typ ('and' valdesc)?                       # valDesc
    ;
typdesc
    : (VAR? | VAR (',' VAR)+) ID ('and' typdesc)?       #  absTypeSpec
    ;
datdesc
    : (VAR? | VAR (',' VAR)+) ID '=' condesc ('and' datdesc)?   # datDesc
    ;
condesc
    : ID ('of' typ)? ('|' condesc)?                     # condDesc
    ;
exndesc
    : ID ('of' typ)? ('and' exndesc)?                   # exnDesc
    ;
strdesc
    : ID ':' sig ('and' strdesc)?                       # strDesc
    ;

// program
prog
    : dec EOF                   # coreDecProg
    | 'functor' fctbind EOF     # functorDecProg
    | 'signature' sigbind EOF   # signatureDecProg
    | EOF                       # empProg
    | ';' prog EOF              # empHeadSeqProg
    | prog ';' prog EOF         # seqProg
    ;
fctbind
    : ID '(' ID ':' sig')' (':>' sig)? '=' str ('and' fctbind)?     # plainFctBindComp
    | ID '(' ID ':' sig')' (':' sig)? '=' str ('and' fctbind)?      # plainFctBindSmpl
    | ID '('spec')' (':>'?  sig)? '=' str ('and' fctbind)?          # openedFctBindComp
    | ID '('spec')' (':' sig)? '=' str ('and' fctbind)?             # openedFctBindSmpl
    ;
sigbind
    : ID '=' sig ('and' sigbind)?       # sigBind
    ;

