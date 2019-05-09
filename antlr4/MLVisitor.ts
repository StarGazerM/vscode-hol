// Generated from antlr4/ML.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ValDecContext } from "./MLParser";
import { FuncDecContext } from "./MLParser";
import { TypeDecContext } from "./MLParser";
import { DatatypeDecContext } from "./MLParser";
import { DatatypeReplDecContext } from "./MLParser";
import { AbstractTypeDecContext } from "./MLParser";
import { ExnDecContext } from "./MLParser";
import { StructureDecContext } from "./MLParser";
import { EmpDecContext } from "./MLParser";
import { EmpHeadSeqDecContext } from "./MLParser";
import { SeqDecContext } from "./MLParser";
import { LocalDecContext } from "./MLParser";
import { IncludeDecContext } from "./MLParser";
import { NonfixDecContext } from "./MLParser";
import { LeftAssocInfixDecContext } from "./MLParser";
import { RightAssocInfixDecContext } from "./MLParser";
import { MatchBodyContext } from "./MLParser";
import { VarTypContext } from "./MLParser";
import { LongIdTypContext } from "./MLParser";
import { ConsOneTypContext } from "./MLParser";
import { ConsManyTypContext } from "./MLParser";
import { ParenthesesTypContext } from "./MLParser";
import { TupleTypContext } from "./MLParser";
import { FuncTypContext } from "./MLParser";
import { RecordTypContext } from "./MLParser";
import { DataTypeDataBindContext } from "./MLParser";
import { ValSpecContext } from "./MLParser";
import { TypeSpecContext } from "./MLParser";
import { EquaTypeSpecContext } from "./MLParser";
import { TypeAbbrevSpecContext } from "./MLParser";
import { DatatypeSpecContext } from "./MLParser";
import { DatatypeReplSpecContext } from "./MLParser";
import { ExnSpecContext } from "./MLParser";
import { StructureSpecContext } from "./MLParser";
import { EmpSpecContext } from "./MLParser";
import { EmpHeadSeqSpecContext } from "./MLParser";
import { SeqSpecContext } from "./MLParser";
import { IncludeOneSpecContext } from "./MLParser";
import { IncludeManySpecContext } from "./MLParser";
import { TypeSharingSpecContext } from "./MLParser";
import { StructureSharingSpecContext } from "./MLParser";
import { GenExnBindContext } from "./MLParser";
import { RenameExnBindContext } from "./MLParser";
import { DataConsConBindContext } from "./MLParser";
import { IdentSigContext } from "./MLParser";
import { SignatureBodyContext } from "./MLParser";
import { RefineSigContext } from "./MLParser";
import { StrDescContext } from "./MLParser";
import { DestValBindContext } from "./MLParser";
import { RecurValBindContext } from "./MLParser";
import { ValueOrConsExpContext } from "./MLParser";
import { IdentExpContext } from "./MLParser";
import { ConstExpContext } from "./MLParser";
import { RecordSelecExpContext } from "./MLParser";
import { ParenthesesExpContext } from "./MLParser";
import { TupleExpContext } from "./MLParser";
import { RecordExpContext } from "./MLParser";
import { ListExpContext } from "./MLParser";
import { SeqExpContext } from "./MLParser";
import { LocalDecExpContext } from "./MLParser";
import { InfixAppExpContext } from "./MLParser";
import { AppExpContext } from "./MLParser";
import { TypeAnnoExpContext } from "./MLParser";
import { ExnRaisingExpContext } from "./MLParser";
import { ExnHandlingExpContext } from "./MLParser";
import { ConjExpContext } from "./MLParser";
import { DisjExpContext } from "./MLParser";
import { CondExpContext } from "./MLParser";
import { IterExpContext } from "./MLParser";
import { CaseAnalysisExpContext } from "./MLParser";
import { FuncExpContext } from "./MLParser";
import { TypeRowContext } from "./MLParser";
import { ConstPatContext } from "./MLParser";
import { WildcardPatContext } from "./MLParser";
import { VarPatContext } from "./MLParser";
import { ConsPatContext } from "./MLParser";
import { InfixConsPatContext } from "./MLParser";
import { ParenthesesPatContext } from "./MLParser";
import { TuplePatContext } from "./MLParser";
import { RecordPatContext } from "./MLParser";
import { EmpListPatContext } from "./MLParser";
import { ListPatContext } from "./MLParser";
import { TypeAnnoPatContext } from "./MLParser";
import { LayeredPatContext } from "./MLParser";
import { ClausalFuncBindContext } from "./MLParser";
import { TypeRefineContext } from "./MLParser";
import { PlainFctBindCompContext } from "./MLParser";
import { PlainFctBindSmplContext } from "./MLParser";
import { OpenedFctBindCompContext } from "./MLParser";
import { OpenedFctBindSmplContext } from "./MLParser";
import { AbbrevTypBindContext } from "./MLParser";
import { DatDescContext } from "./MLParser";
import { CoreDecProgContext } from "./MLParser";
import { FunctorDecProgContext } from "./MLParser";
import { SignatureDecProgContext } from "./MLParser";
import { EmpProgContext } from "./MLParser";
import { EmpHeadSeqProgContext } from "./MLParser";
import { SeqProgContext } from "./MLParser";
import { IdentStrContext } from "./MLParser";
import { StructStrContext } from "./MLParser";
import { TranspAnnoStrContext } from "./MLParser";
import { OpaqueAnnoStrContext } from "./MLParser";
import { FunctorStrAppStrContext } from "./MLParser";
import { FunctorDecAppStrContext } from "./MLParser";
import { LocalDecStrContext } from "./MLParser";
import { ExpRowContext } from "./MLParser";
import { ValDescContext } from "./MLParser";
import { ExnDescContext } from "./MLParser";
import { NonfixFunMatchContext } from "./MLParser";
import { InfixFunmatchContext } from "./MLParser";
import { InfixManyFunmatchContext } from "./MLParser";
import { AbsTypeSpecContext } from "./MLParser";
import { WildcardPatRowContext } from "./MLParser";
import { PatRowContext } from "./MLParser";
import { VarPatRowContext } from "./MLParser";
import { CondDescContext } from "./MLParser";
import { StructStrBindCompContext } from "./MLParser";
import { StructStrBindSmplContext } from "./MLParser";
import { SigBindContext } from "./MLParser";
import { LongidContext } from "./MLParser";
import { ExpContext } from "./MLParser";
import { ExprowContext } from "./MLParser";
import { EmatchContext } from "./MLParser";
import { LabContext } from "./MLParser";
import { PatContext } from "./MLParser";
import { PatrowContext } from "./MLParser";
import { TypContext } from "./MLParser";
import { TyprowContext } from "./MLParser";
import { DecContext } from "./MLParser";
import { ValbindContext } from "./MLParser";
import { FunbindContext } from "./MLParser";
import { FunmatchContext } from "./MLParser";
import { TypbindContext } from "./MLParser";
import { DatabindContext } from "./MLParser";
import { ConbindContext } from "./MLParser";
import { ExnbindContext } from "./MLParser";
import { StrContext } from "./MLParser";
import { StrbindContext } from "./MLParser";
import { SigContext } from "./MLParser";
import { TyprefinContext } from "./MLParser";
import { SpecContext } from "./MLParser";
import { ValdescContext } from "./MLParser";
import { TypdescContext } from "./MLParser";
import { DatdescContext } from "./MLParser";
import { CondescContext } from "./MLParser";
import { ExndescContext } from "./MLParser";
import { StrdescContext } from "./MLParser";
import { ProgContext } from "./MLParser";
import { FctbindContext } from "./MLParser";
import { SigbindContext } from "./MLParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `MLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface MLVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by the `valDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValDec?: (ctx: ValDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncDec?: (ctx: FuncDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDec?: (ctx: TypeDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `datatypeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatatypeDec?: (ctx: DatatypeDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `datatypeReplDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatatypeReplDec?: (ctx: DatatypeReplDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `abstractTypeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbstractTypeDec?: (ctx: AbstractTypeDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `exnDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExnDec?: (ctx: ExnDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `structureDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructureDec?: (ctx: StructureDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `empDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpDec?: (ctx: EmpDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `empHeadSeqDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpHeadSeqDec?: (ctx: EmpHeadSeqDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `seqDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeqDec?: (ctx: SeqDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `localDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalDec?: (ctx: LocalDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `includeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeDec?: (ctx: IncludeDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `nonfixDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonfixDec?: (ctx: NonfixDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `leftAssocInfixDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftAssocInfixDec?: (ctx: LeftAssocInfixDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `rightAssocInfixDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRightAssocInfixDec?: (ctx: RightAssocInfixDecContext) => Result;

	/**
	 * Visit a parse tree produced by the `matchBody`
	 * labeled alternative in `MLParser.ematch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMatchBody?: (ctx: MatchBodyContext) => Result;

	/**
	 * Visit a parse tree produced by the `varTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarTyp?: (ctx: VarTypContext) => Result;

	/**
	 * Visit a parse tree produced by the `longIdTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLongIdTyp?: (ctx: LongIdTypContext) => Result;

	/**
	 * Visit a parse tree produced by the `consOneTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConsOneTyp?: (ctx: ConsOneTypContext) => Result;

	/**
	 * Visit a parse tree produced by the `consManyTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConsManyTyp?: (ctx: ConsManyTypContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesesTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesesTyp?: (ctx: ParenthesesTypContext) => Result;

	/**
	 * Visit a parse tree produced by the `tupleTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleTyp?: (ctx: TupleTypContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncTyp?: (ctx: FuncTypContext) => Result;

	/**
	 * Visit a parse tree produced by the `recordTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordTyp?: (ctx: RecordTypContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataTypeDataBind`
	 * labeled alternative in `MLParser.databind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataTypeDataBind?: (ctx: DataTypeDataBindContext) => Result;

	/**
	 * Visit a parse tree produced by the `valSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValSpec?: (ctx: ValSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSpec?: (ctx: TypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `equaTypeSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEquaTypeSpec?: (ctx: EquaTypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeAbbrevSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAbbrevSpec?: (ctx: TypeAbbrevSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `datatypeSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatatypeSpec?: (ctx: DatatypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `datatypeReplSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatatypeReplSpec?: (ctx: DatatypeReplSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `exnSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExnSpec?: (ctx: ExnSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `structureSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructureSpec?: (ctx: StructureSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `empSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpSpec?: (ctx: EmpSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `empHeadSeqSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpHeadSeqSpec?: (ctx: EmpHeadSeqSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `seqSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeqSpec?: (ctx: SeqSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `includeOneSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeOneSpec?: (ctx: IncludeOneSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `includeManySpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIncludeManySpec?: (ctx: IncludeManySpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeSharingSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeSharingSpec?: (ctx: TypeSharingSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `structureSharingSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructureSharingSpec?: (ctx: StructureSharingSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `genExnBind`
	 * labeled alternative in `MLParser.exnbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGenExnBind?: (ctx: GenExnBindContext) => Result;

	/**
	 * Visit a parse tree produced by the `renameExnBind`
	 * labeled alternative in `MLParser.exnbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRenameExnBind?: (ctx: RenameExnBindContext) => Result;

	/**
	 * Visit a parse tree produced by the `dataConsConBind`
	 * labeled alternative in `MLParser.conbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDataConsConBind?: (ctx: DataConsConBindContext) => Result;

	/**
	 * Visit a parse tree produced by the `identSig`
	 * labeled alternative in `MLParser.sig`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentSig?: (ctx: IdentSigContext) => Result;

	/**
	 * Visit a parse tree produced by the `signatureBody`
	 * labeled alternative in `MLParser.sig`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignatureBody?: (ctx: SignatureBodyContext) => Result;

	/**
	 * Visit a parse tree produced by the `refineSig`
	 * labeled alternative in `MLParser.sig`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRefineSig?: (ctx: RefineSigContext) => Result;

	/**
	 * Visit a parse tree produced by the `strDesc`
	 * labeled alternative in `MLParser.strdesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrDesc?: (ctx: StrDescContext) => Result;

	/**
	 * Visit a parse tree produced by the `destValBind`
	 * labeled alternative in `MLParser.valbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDestValBind?: (ctx: DestValBindContext) => Result;

	/**
	 * Visit a parse tree produced by the `recurValBind`
	 * labeled alternative in `MLParser.valbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecurValBind?: (ctx: RecurValBindContext) => Result;

	/**
	 * Visit a parse tree produced by the `valueOrConsExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueOrConsExp?: (ctx: ValueOrConsExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `identExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentExp?: (ctx: IdentExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `constExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstExp?: (ctx: ConstExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `recordSelecExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordSelecExp?: (ctx: RecordSelecExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesesExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesesExp?: (ctx: ParenthesesExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `tupleExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTupleExp?: (ctx: TupleExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `recordExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordExp?: (ctx: RecordExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `listExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListExp?: (ctx: ListExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `seqExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeqExp?: (ctx: SeqExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `localDecExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalDecExp?: (ctx: LocalDecExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `infixAppExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixAppExp?: (ctx: InfixAppExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `appExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAppExp?: (ctx: AppExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeAnnoExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAnnoExp?: (ctx: TypeAnnoExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `exnRaisingExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExnRaisingExp?: (ctx: ExnRaisingExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `exnHandlingExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExnHandlingExp?: (ctx: ExnHandlingExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `conjExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConjExp?: (ctx: ConjExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `disjExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDisjExp?: (ctx: DisjExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `condExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondExp?: (ctx: CondExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `iterExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIterExp?: (ctx: IterExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `caseAnalysisExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCaseAnalysisExp?: (ctx: CaseAnalysisExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `funcExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncExp?: (ctx: FuncExpContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeRow`
	 * labeled alternative in `MLParser.typrow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRow?: (ctx: TypeRowContext) => Result;

	/**
	 * Visit a parse tree produced by the `constPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstPat?: (ctx: ConstPatContext) => Result;

	/**
	 * Visit a parse tree produced by the `wildcardPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcardPat?: (ctx: WildcardPatContext) => Result;

	/**
	 * Visit a parse tree produced by the `varPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarPat?: (ctx: VarPatContext) => Result;

	/**
	 * Visit a parse tree produced by the `consPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConsPat?: (ctx: ConsPatContext) => Result;

	/**
	 * Visit a parse tree produced by the `infixConsPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixConsPat?: (ctx: InfixConsPatContext) => Result;

	/**
	 * Visit a parse tree produced by the `parenthesesPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParenthesesPat?: (ctx: ParenthesesPatContext) => Result;

	/**
	 * Visit a parse tree produced by the `tuplePat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTuplePat?: (ctx: TuplePatContext) => Result;

	/**
	 * Visit a parse tree produced by the `recordPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRecordPat?: (ctx: RecordPatContext) => Result;

	/**
	 * Visit a parse tree produced by the `empListPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpListPat?: (ctx: EmpListPatContext) => Result;

	/**
	 * Visit a parse tree produced by the `listPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListPat?: (ctx: ListPatContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeAnnoPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeAnnoPat?: (ctx: TypeAnnoPatContext) => Result;

	/**
	 * Visit a parse tree produced by the `layeredPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLayeredPat?: (ctx: LayeredPatContext) => Result;

	/**
	 * Visit a parse tree produced by the `clausalFuncBind`
	 * labeled alternative in `MLParser.funbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClausalFuncBind?: (ctx: ClausalFuncBindContext) => Result;

	/**
	 * Visit a parse tree produced by the `typeRefine`
	 * labeled alternative in `MLParser.typrefin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeRefine?: (ctx: TypeRefineContext) => Result;

	/**
	 * Visit a parse tree produced by the `plainFctBindComp`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlainFctBindComp?: (ctx: PlainFctBindCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `plainFctBindSmpl`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPlainFctBindSmpl?: (ctx: PlainFctBindSmplContext) => Result;

	/**
	 * Visit a parse tree produced by the `openedFctBindComp`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenedFctBindComp?: (ctx: OpenedFctBindCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `openedFctBindSmpl`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpenedFctBindSmpl?: (ctx: OpenedFctBindSmplContext) => Result;

	/**
	 * Visit a parse tree produced by the `abbrevTypBind`
	 * labeled alternative in `MLParser.typbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbbrevTypBind?: (ctx: AbbrevTypBindContext) => Result;

	/**
	 * Visit a parse tree produced by the `datDesc`
	 * labeled alternative in `MLParser.datdesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatDesc?: (ctx: DatDescContext) => Result;

	/**
	 * Visit a parse tree produced by the `coreDecProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCoreDecProg?: (ctx: CoreDecProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `functorDecProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctorDecProg?: (ctx: FunctorDecProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `signatureDecProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSignatureDecProg?: (ctx: SignatureDecProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `empProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpProg?: (ctx: EmpProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `empHeadSeqProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmpHeadSeqProg?: (ctx: EmpHeadSeqProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `seqProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSeqProg?: (ctx: SeqProgContext) => Result;

	/**
	 * Visit a parse tree produced by the `identStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentStr?: (ctx: IdentStrContext) => Result;

	/**
	 * Visit a parse tree produced by the `structStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructStr?: (ctx: StructStrContext) => Result;

	/**
	 * Visit a parse tree produced by the `transpAnnoStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTranspAnnoStr?: (ctx: TranspAnnoStrContext) => Result;

	/**
	 * Visit a parse tree produced by the `opaqueAnnoStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOpaqueAnnoStr?: (ctx: OpaqueAnnoStrContext) => Result;

	/**
	 * Visit a parse tree produced by the `functorStrAppStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctorStrAppStr?: (ctx: FunctorStrAppStrContext) => Result;

	/**
	 * Visit a parse tree produced by the `functorDecAppStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctorDecAppStr?: (ctx: FunctorDecAppStrContext) => Result;

	/**
	 * Visit a parse tree produced by the `localDecStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalDecStr?: (ctx: LocalDecStrContext) => Result;

	/**
	 * Visit a parse tree produced by the `expRow`
	 * labeled alternative in `MLParser.exprow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpRow?: (ctx: ExpRowContext) => Result;

	/**
	 * Visit a parse tree produced by the `valDesc`
	 * labeled alternative in `MLParser.valdesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValDesc?: (ctx: ValDescContext) => Result;

	/**
	 * Visit a parse tree produced by the `exnDesc`
	 * labeled alternative in `MLParser.exndesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExnDesc?: (ctx: ExnDescContext) => Result;

	/**
	 * Visit a parse tree produced by the `nonfixFunMatch`
	 * labeled alternative in `MLParser.funmatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNonfixFunMatch?: (ctx: NonfixFunMatchContext) => Result;

	/**
	 * Visit a parse tree produced by the `infixFunmatch`
	 * labeled alternative in `MLParser.funmatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixFunmatch?: (ctx: InfixFunmatchContext) => Result;

	/**
	 * Visit a parse tree produced by the `infixManyFunmatch`
	 * labeled alternative in `MLParser.funmatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInfixManyFunmatch?: (ctx: InfixManyFunmatchContext) => Result;

	/**
	 * Visit a parse tree produced by the `absTypeSpec`
	 * labeled alternative in `MLParser.typdesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAbsTypeSpec?: (ctx: AbsTypeSpecContext) => Result;

	/**
	 * Visit a parse tree produced by the `wildcardPatRow`
	 * labeled alternative in `MLParser.patrow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcardPatRow?: (ctx: WildcardPatRowContext) => Result;

	/**
	 * Visit a parse tree produced by the `patRow`
	 * labeled alternative in `MLParser.patrow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatRow?: (ctx: PatRowContext) => Result;

	/**
	 * Visit a parse tree produced by the `varPatRow`
	 * labeled alternative in `MLParser.patrow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarPatRow?: (ctx: VarPatRowContext) => Result;

	/**
	 * Visit a parse tree produced by the `condDesc`
	 * labeled alternative in `MLParser.condesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondDesc?: (ctx: CondDescContext) => Result;

	/**
	 * Visit a parse tree produced by the `structStrBindComp`
	 * labeled alternative in `MLParser.strbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructStrBindComp?: (ctx: StructStrBindCompContext) => Result;

	/**
	 * Visit a parse tree produced by the `structStrBindSmpl`
	 * labeled alternative in `MLParser.strbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStructStrBindSmpl?: (ctx: StructStrBindSmplContext) => Result;

	/**
	 * Visit a parse tree produced by the `sigBind`
	 * labeled alternative in `MLParser.sigbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSigBind?: (ctx: SigBindContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.longid`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLongid?: (ctx: LongidContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.exp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExp?: (ctx: ExpContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.exprow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprow?: (ctx: ExprowContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.ematch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmatch?: (ctx: EmatchContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.lab`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLab?: (ctx: LabContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.pat`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPat?: (ctx: PatContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.patrow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPatrow?: (ctx: PatrowContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.typ`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTyp?: (ctx: TypContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.typrow`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTyprow?: (ctx: TyprowContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.dec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDec?: (ctx: DecContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.valbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValbind?: (ctx: ValbindContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.funbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunbind?: (ctx: FunbindContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.funmatch`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunmatch?: (ctx: FunmatchContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.typbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypbind?: (ctx: TypbindContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.databind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatabind?: (ctx: DatabindContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.conbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConbind?: (ctx: ConbindContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.exnbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExnbind?: (ctx: ExnbindContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.str`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStr?: (ctx: StrContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.strbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrbind?: (ctx: StrbindContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.sig`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSig?: (ctx: SigContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.typrefin`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTyprefin?: (ctx: TyprefinContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.spec`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSpec?: (ctx: SpecContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.valdesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValdesc?: (ctx: ValdescContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.typdesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypdesc?: (ctx: TypdescContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.datdesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDatdesc?: (ctx: DatdescContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.condesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCondesc?: (ctx: CondescContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.exndesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExndesc?: (ctx: ExndescContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.strdesc`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStrdesc?: (ctx: StrdescContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.prog`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProg?: (ctx: ProgContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.fctbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFctbind?: (ctx: FctbindContext) => Result;

	/**
	 * Visit a parse tree produced by `MLParser.sigbind`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSigbind?: (ctx: SigbindContext) => Result;
}

