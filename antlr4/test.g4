/**
* this is the antlr4 version of Standard ML97
*/
grammar test;

// lexer
WS: [ \n\t\r]+ -> skip;

ID: ALPHANUMERIC | SYMBOLIC;
fragment ALPHANUMERIC: LETTER (LETTER | DIGIT | '\'' | '_')*;
fragment SYMBOLIC: ('!'|'%'|'&'|'$'|'#'|'+'|'-'|'/'|':'|'<'|'='|'>'|'?'|'@'|'\\'|'~'|'`'|'^'|'|'|'*')+;

// const
CON: INT | WORD | FLOAT | CHAR | STRING;
fragment INT: '-'? (NUM | HEX);
fragment WORD: DECIMAL | HEXADECIMAL;
fragment FLOAT: '-'?NUM'.'NUM ('e''-'?NUM)?;
fragment CHAR: '#"' ASCII '"';
fragment STRING: '"' ASCII* '"';
fragment DECIMAL: '-'? '0w' NUM;
fragment HEXADECIMAL: '-'? '0wx' HEX;
fragment NUM: DIGIT+;
fragment HEX: (DIGIT|[A-F])+;
fragment ASCII: [\u0040-\u0046\u0050-\u0133\u0135-\u0176];

// reserved word
RESERVED_WORD
    : 'abstype' | 'and' | 'andalso' | 'as' | 'case' | 'do' | 'dataype' | 'else'
    | 'end' | 'eqtype' | 'exception' | 'fn' | 'fun' | 'functor' | 'handle' | 'if'
    | 'in' | 'include' | 'infix' | 'infixr' | 'let' | 'local' | 'nonfix' | 'of'
    | 'op' | 'open' | 'orelse' | 'raise' | 'rec' | 'sharing' | 'sig' | 'signature'
    | 'struct' | 'structure' | 'then' | 'type' | 'val' | 'where' | 'with' | 'withtype'
    | 'while'
    ;

// identifier
//LAB: ID | NUM;
VAR: UNCONSTRAINED | EQUALITY;
fragment UNCONSTRAINED: '\''(LETTER | DIGIT | '\'' | '_')*;
fragment EQUALITY:  '\'\'' (LETTER | DIGIT | '\'' | '_')*;

LETTER: [a-zA-Z];
DIGIT: [0-9];

// parser

longid: '.' CON;
// expression
//exp
//    : 'op'? longid                          // value or constructor identifier
//    | CON                                  // 	constant
//    | '#' lab                                // record selector
//    | '(' ')'
//    //| '('exp')'                             // parentheses
//    | '('exp(','exp)*')'                    //tuple
//    | '{' exprow?'}'                        // record
//    | '[' (exp (','exp)* ','exp)? ']'       // list (n ≥ 0)
//    | '(' exp (';'exp)+ ')'                 // sequence (n ≥ 2)
//    | 'let' dec 'in' exp (';'exp)* 'end'    // local declaration (n ≥ 1)
//    | exp ID exp                            // infix application
//    | exp exp                               // application
//    | exp ':' typ                           // 	type annotation
//    | 'raise' exp                           // exception raising
//    | exp 'handle' match                    // 	exception handling
//    | exp 'andalso' exp                     // 	conjunction
//    | exp 'orelse' exp                      // disjunction
//    | 'if' exp 'then' exp 'else' exp        // conditional
//    | 'while' exp 'do' exp                  // iteration
//    | 'case' exp 'of' match                 // case analysis
//    | 'fn' match                            // function
//    ;
//exprow                                      // expression row
//    : lab '=' exp (','exprow)?
//    ;
//match                                       // match
//    : pat '=>' exp ('|' match)?
//    ;
//lab: ID | CON;
//// pattern
//pat
//    : CON
//    | '_'                                   // wildcard
//    | 'op'? ID                              // variable
//    | 'op'? longid pat?                     // construction
//    | pat ID pat                            // infix construction
//    | '(' pat ')'                           // parentheses
//    | '(' pat (',' pat)+ ')'                // tunple
//    | '{' patrow '}'                        // record
//    | '[' pat (',' pat)* ']'                // list
//    | pat ':' typ                           // type annotion
//    | 'op'? ID (':' typ)? 'as' pat          // layered
//    ;
//patrow
//    : '...'                                 // wildcard
//    | lab '=' pat (',' patrow)?             // pattern
//    | ID (':'typ)? ('as' pat)? (','patrow)? // variable
//    ;
//
//// type
//typ
//    : VAR                                   // var
//    | longid
//    | typ longid                           // constructor
//    | typ (',' typ)+ longid
//    | '(' typ ')'                           // parentheses
//    | typ ('*' typ)+                        // tunple
//    | typ '->' typ                          // function
//    | '{' typrow? '}'                       // record
//    ;
//typrow
//    : lab ':' typ (',' typrow)?             // type row
//    ;
//
//// declaration
//dec
//    : 'val' (VAR? | VAR (',' VAR)+) valbind     // value
//    | 'fun' (VAR? | VAR (',' VAR)+) funbind     // function
//    | 'type' typbind                            // type
//    | 'datatype' databind ('withtype' typbind)? // data type
//    | 'datatype' ID '=' 'datatype' longid       // data type replication
//    | 'abstype' databind ('withtype' typbind)?  'with' dec 'end'    // abstract type
//    | 'exception' exnbind                       // exception
//    | 'structure' strbind                       // structure (not allowed inside expressions)
//    |                                           // empty
//    | ';' dec
//    | dec ';' dec                               // sequence
//    | 'local' dec 'in' dec 'end'                // local
//    | 'open' longid+                            // inclusion (n ≥ 1)
//    | 'nonfix' ID+                              // 	nonfix (n ≥ 1)
//    | 'infix' DIGIT? ID+                        // 	left-associative infix (n ≥ 1)
//    | 'infix' DIGIT? ID+                        //	right-associative infix (n ≥ 1)
//    ;
//valbind
//    : pat '=' exp ('and' valbind)?              // 	destructuring
//    | 'rec' valbind                             //  recursive
//    ;
//funbind                                         // 	clausal function
//    : funmatch ('and' funbind)?
//    ;
//funmatch
//    : 'op'? pat+ (: typ)? '=' exp ('|' funmatch)?              //	nonfix (n ≥ 1) NOTE: the original rule have id here
//    | pat  pat (':'typ)? '=' exp ('|' funmatch)?              // infix
//    | '('pat ID pat')' pat+ (':'typ)? '=' exp ('|' funmatch)?   // infix (n ≥ 0)
//    ;
//typbind                                                         // 	abbreviation
//    : (VAR? | VAR (',' VAR)+) ID '=' typ ('and' typbind)?
//    ;
//databind
//    : (VAR? | VAR (',' VAR)+) ID '=' conbind ('and' databind)?  // data type
//    ;
//conbind
//    : ID ('of' typ)? ('|' conbind)?         // data constructor
//    ;
//exnbind
//    : ID ('of' typ) ('|' exnbind)?          // generative
//    | ID '=' longid ('and' exnbind)?        // renaming
//    ;
//
//// Module Language
//str
//    : longid                                // identifier
//    | 'struct' dec 'end'                    // structure
//    | str ':' sig                           // transparent annotation
//    | str ':>' sig                          // 	opaque annotation
//    | ID '('str')'                          // functor application
//    | ID '('dec')'                          // functor application
//    | 'let' dec 'in' str 'end'              // local declaration
//    ;
//strbind
//    : ID (':>' sig)? '=' str ('and' strbind)?   // structure
//    | ID (':' sig)? '=' str ('and' strbind)?
//    ;
//
//// signature
//sig
//    : ID
//    | 'sig' spec 'end'                      // signature
//    | sig 'where' 'type' typrefin           // refinement
//    ;
//typrefin
//    : (VAR? | VAR (',' VAR)+) longid '=' typ ('and' 'type' typrefin)    // type refinement
//    ;
//spec
//    : 'val' valdesc                         // value
//    | 'type' typdesc                        // type
//    | 'eqtype' typdesc                      // equality type
//    | 'type' typbind                        // type abbreviation
//    | 'datatype' datdesc                    // data type
//    | 'datatype' ID '=' 'datatype' longid   // datatype repliaction
//    | 'exception' exndesc                   // exception
//    | 'structure' strdesc                   // structure
//    |                                       // empty
//    | ';' spec
//    | spec ';' spec                        // sequence
//    | 'include' sig                        // inclusion
//    | 'include' ID+                         // inclusion (n>=1)
//    | spec 'sharing' 'type' longid '=' ('=' longid)+    // type sharing (n ≥ 2)
//    | spec 'sharing' longid '=' ('=' longid)+           // structure sharing (n ≥ 2)
//    ;
//valdesc: ID ':' typ ('and' valdesc)?;                       // value
//typdesc: (VAR? | VAR (',' VAR)+) ID ('and' typdesc)?;       //  abstract type
//datdesc: (VAR? | VAR (',' VAR)+) ID '=' condesc ('and' datdesc)?;   // data type
//condesc: ID ('of' typ)? ('|' condesc)?;                     // 	data constructor
//exndesc: ID ('of' typ)? ('and' exndesc)?;                   // exception
//strdesc: ID ':' sig ('and' strdesc)?;                       // structure
//
//// program
//prog
//    : dec                   // core declaration
//    | 'functor' fctbind     // functor declaration
//    | 'signature' sigbind   // signature declaration
//    |
//    | ':' prog
//    | prog ':' prog        // sequence
//    ;
//fctbind
//    : ID '(' ID ':' sig')' (':>' sig)? '=' str ('and' fctbind)? // plain
//    | ID '(' ID ':' sig')' (':' sig)? '=' str ('and' fctbind)?
//    | ID '('spec')' (':>'?  sig)? '=' str ('and' fctbind)?       // opened
//    | ID '('spec')' (':' sig)? '=' str ('and' fctbind)?
//    ;
//sigbind: ID '=' sig ('and' sigbind)?;        // signature
//
