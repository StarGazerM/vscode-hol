// Generated from antlr4/ML.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

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
 * This interface defines a complete listener for a parse tree produced by
 * `MLParser`.
 */
export interface MLListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `valDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterValDec?: (ctx: ValDecContext) => void;
	/**
	 * Exit a parse tree produced by the `valDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitValDec?: (ctx: ValDecContext) => void;

	/**
	 * Enter a parse tree produced by the `funcDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterFuncDec?: (ctx: FuncDecContext) => void;
	/**
	 * Exit a parse tree produced by the `funcDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitFuncDec?: (ctx: FuncDecContext) => void;

	/**
	 * Enter a parse tree produced by the `typeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterTypeDec?: (ctx: TypeDecContext) => void;
	/**
	 * Exit a parse tree produced by the `typeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitTypeDec?: (ctx: TypeDecContext) => void;

	/**
	 * Enter a parse tree produced by the `datatypeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterDatatypeDec?: (ctx: DatatypeDecContext) => void;
	/**
	 * Exit a parse tree produced by the `datatypeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitDatatypeDec?: (ctx: DatatypeDecContext) => void;

	/**
	 * Enter a parse tree produced by the `datatypeReplDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterDatatypeReplDec?: (ctx: DatatypeReplDecContext) => void;
	/**
	 * Exit a parse tree produced by the `datatypeReplDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitDatatypeReplDec?: (ctx: DatatypeReplDecContext) => void;

	/**
	 * Enter a parse tree produced by the `abstractTypeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterAbstractTypeDec?: (ctx: AbstractTypeDecContext) => void;
	/**
	 * Exit a parse tree produced by the `abstractTypeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitAbstractTypeDec?: (ctx: AbstractTypeDecContext) => void;

	/**
	 * Enter a parse tree produced by the `exnDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterExnDec?: (ctx: ExnDecContext) => void;
	/**
	 * Exit a parse tree produced by the `exnDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitExnDec?: (ctx: ExnDecContext) => void;

	/**
	 * Enter a parse tree produced by the `structureDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterStructureDec?: (ctx: StructureDecContext) => void;
	/**
	 * Exit a parse tree produced by the `structureDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitStructureDec?: (ctx: StructureDecContext) => void;

	/**
	 * Enter a parse tree produced by the `empDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterEmpDec?: (ctx: EmpDecContext) => void;
	/**
	 * Exit a parse tree produced by the `empDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitEmpDec?: (ctx: EmpDecContext) => void;

	/**
	 * Enter a parse tree produced by the `empHeadSeqDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterEmpHeadSeqDec?: (ctx: EmpHeadSeqDecContext) => void;
	/**
	 * Exit a parse tree produced by the `empHeadSeqDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitEmpHeadSeqDec?: (ctx: EmpHeadSeqDecContext) => void;

	/**
	 * Enter a parse tree produced by the `seqDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterSeqDec?: (ctx: SeqDecContext) => void;
	/**
	 * Exit a parse tree produced by the `seqDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitSeqDec?: (ctx: SeqDecContext) => void;

	/**
	 * Enter a parse tree produced by the `localDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterLocalDec?: (ctx: LocalDecContext) => void;
	/**
	 * Exit a parse tree produced by the `localDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitLocalDec?: (ctx: LocalDecContext) => void;

	/**
	 * Enter a parse tree produced by the `includeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterIncludeDec?: (ctx: IncludeDecContext) => void;
	/**
	 * Exit a parse tree produced by the `includeDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitIncludeDec?: (ctx: IncludeDecContext) => void;

	/**
	 * Enter a parse tree produced by the `nonfixDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterNonfixDec?: (ctx: NonfixDecContext) => void;
	/**
	 * Exit a parse tree produced by the `nonfixDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitNonfixDec?: (ctx: NonfixDecContext) => void;

	/**
	 * Enter a parse tree produced by the `leftAssocInfixDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterLeftAssocInfixDec?: (ctx: LeftAssocInfixDecContext) => void;
	/**
	 * Exit a parse tree produced by the `leftAssocInfixDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitLeftAssocInfixDec?: (ctx: LeftAssocInfixDecContext) => void;

	/**
	 * Enter a parse tree produced by the `rightAssocInfixDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterRightAssocInfixDec?: (ctx: RightAssocInfixDecContext) => void;
	/**
	 * Exit a parse tree produced by the `rightAssocInfixDec`
	 * labeled alternative in `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitRightAssocInfixDec?: (ctx: RightAssocInfixDecContext) => void;

	/**
	 * Enter a parse tree produced by the `matchBody`
	 * labeled alternative in `MLParser.ematch`.
	 * @param ctx the parse tree
	 */
	enterMatchBody?: (ctx: MatchBodyContext) => void;
	/**
	 * Exit a parse tree produced by the `matchBody`
	 * labeled alternative in `MLParser.ematch`.
	 * @param ctx the parse tree
	 */
	exitMatchBody?: (ctx: MatchBodyContext) => void;

	/**
	 * Enter a parse tree produced by the `varTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	enterVarTyp?: (ctx: VarTypContext) => void;
	/**
	 * Exit a parse tree produced by the `varTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	exitVarTyp?: (ctx: VarTypContext) => void;

	/**
	 * Enter a parse tree produced by the `longIdTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	enterLongIdTyp?: (ctx: LongIdTypContext) => void;
	/**
	 * Exit a parse tree produced by the `longIdTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	exitLongIdTyp?: (ctx: LongIdTypContext) => void;

	/**
	 * Enter a parse tree produced by the `consOneTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	enterConsOneTyp?: (ctx: ConsOneTypContext) => void;
	/**
	 * Exit a parse tree produced by the `consOneTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	exitConsOneTyp?: (ctx: ConsOneTypContext) => void;

	/**
	 * Enter a parse tree produced by the `consManyTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	enterConsManyTyp?: (ctx: ConsManyTypContext) => void;
	/**
	 * Exit a parse tree produced by the `consManyTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	exitConsManyTyp?: (ctx: ConsManyTypContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesesTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	enterParenthesesTyp?: (ctx: ParenthesesTypContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesesTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	exitParenthesesTyp?: (ctx: ParenthesesTypContext) => void;

	/**
	 * Enter a parse tree produced by the `tupleTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	enterTupleTyp?: (ctx: TupleTypContext) => void;
	/**
	 * Exit a parse tree produced by the `tupleTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	exitTupleTyp?: (ctx: TupleTypContext) => void;

	/**
	 * Enter a parse tree produced by the `funcTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	enterFuncTyp?: (ctx: FuncTypContext) => void;
	/**
	 * Exit a parse tree produced by the `funcTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	exitFuncTyp?: (ctx: FuncTypContext) => void;

	/**
	 * Enter a parse tree produced by the `recordTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	enterRecordTyp?: (ctx: RecordTypContext) => void;
	/**
	 * Exit a parse tree produced by the `recordTyp`
	 * labeled alternative in `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	exitRecordTyp?: (ctx: RecordTypContext) => void;

	/**
	 * Enter a parse tree produced by the `dataTypeDataBind`
	 * labeled alternative in `MLParser.databind`.
	 * @param ctx the parse tree
	 */
	enterDataTypeDataBind?: (ctx: DataTypeDataBindContext) => void;
	/**
	 * Exit a parse tree produced by the `dataTypeDataBind`
	 * labeled alternative in `MLParser.databind`.
	 * @param ctx the parse tree
	 */
	exitDataTypeDataBind?: (ctx: DataTypeDataBindContext) => void;

	/**
	 * Enter a parse tree produced by the `valSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterValSpec?: (ctx: ValSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `valSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitValSpec?: (ctx: ValSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `typeSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterTypeSpec?: (ctx: TypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `typeSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitTypeSpec?: (ctx: TypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `equaTypeSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterEquaTypeSpec?: (ctx: EquaTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `equaTypeSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitEquaTypeSpec?: (ctx: EquaTypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `typeAbbrevSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterTypeAbbrevSpec?: (ctx: TypeAbbrevSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `typeAbbrevSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitTypeAbbrevSpec?: (ctx: TypeAbbrevSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `datatypeSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterDatatypeSpec?: (ctx: DatatypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `datatypeSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitDatatypeSpec?: (ctx: DatatypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `datatypeReplSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterDatatypeReplSpec?: (ctx: DatatypeReplSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `datatypeReplSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitDatatypeReplSpec?: (ctx: DatatypeReplSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `exnSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterExnSpec?: (ctx: ExnSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `exnSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitExnSpec?: (ctx: ExnSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `structureSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterStructureSpec?: (ctx: StructureSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `structureSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitStructureSpec?: (ctx: StructureSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `empSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterEmpSpec?: (ctx: EmpSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `empSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitEmpSpec?: (ctx: EmpSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `empHeadSeqSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterEmpHeadSeqSpec?: (ctx: EmpHeadSeqSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `empHeadSeqSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitEmpHeadSeqSpec?: (ctx: EmpHeadSeqSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `seqSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterSeqSpec?: (ctx: SeqSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `seqSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitSeqSpec?: (ctx: SeqSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `includeOneSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterIncludeOneSpec?: (ctx: IncludeOneSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `includeOneSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitIncludeOneSpec?: (ctx: IncludeOneSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `includeManySpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterIncludeManySpec?: (ctx: IncludeManySpecContext) => void;
	/**
	 * Exit a parse tree produced by the `includeManySpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitIncludeManySpec?: (ctx: IncludeManySpecContext) => void;

	/**
	 * Enter a parse tree produced by the `typeSharingSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterTypeSharingSpec?: (ctx: TypeSharingSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `typeSharingSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitTypeSharingSpec?: (ctx: TypeSharingSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `structureSharingSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterStructureSharingSpec?: (ctx: StructureSharingSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `structureSharingSpec`
	 * labeled alternative in `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitStructureSharingSpec?: (ctx: StructureSharingSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `genExnBind`
	 * labeled alternative in `MLParser.exnbind`.
	 * @param ctx the parse tree
	 */
	enterGenExnBind?: (ctx: GenExnBindContext) => void;
	/**
	 * Exit a parse tree produced by the `genExnBind`
	 * labeled alternative in `MLParser.exnbind`.
	 * @param ctx the parse tree
	 */
	exitGenExnBind?: (ctx: GenExnBindContext) => void;

	/**
	 * Enter a parse tree produced by the `renameExnBind`
	 * labeled alternative in `MLParser.exnbind`.
	 * @param ctx the parse tree
	 */
	enterRenameExnBind?: (ctx: RenameExnBindContext) => void;
	/**
	 * Exit a parse tree produced by the `renameExnBind`
	 * labeled alternative in `MLParser.exnbind`.
	 * @param ctx the parse tree
	 */
	exitRenameExnBind?: (ctx: RenameExnBindContext) => void;

	/**
	 * Enter a parse tree produced by the `dataConsConBind`
	 * labeled alternative in `MLParser.conbind`.
	 * @param ctx the parse tree
	 */
	enterDataConsConBind?: (ctx: DataConsConBindContext) => void;
	/**
	 * Exit a parse tree produced by the `dataConsConBind`
	 * labeled alternative in `MLParser.conbind`.
	 * @param ctx the parse tree
	 */
	exitDataConsConBind?: (ctx: DataConsConBindContext) => void;

	/**
	 * Enter a parse tree produced by the `identSig`
	 * labeled alternative in `MLParser.sig`.
	 * @param ctx the parse tree
	 */
	enterIdentSig?: (ctx: IdentSigContext) => void;
	/**
	 * Exit a parse tree produced by the `identSig`
	 * labeled alternative in `MLParser.sig`.
	 * @param ctx the parse tree
	 */
	exitIdentSig?: (ctx: IdentSigContext) => void;

	/**
	 * Enter a parse tree produced by the `signatureBody`
	 * labeled alternative in `MLParser.sig`.
	 * @param ctx the parse tree
	 */
	enterSignatureBody?: (ctx: SignatureBodyContext) => void;
	/**
	 * Exit a parse tree produced by the `signatureBody`
	 * labeled alternative in `MLParser.sig`.
	 * @param ctx the parse tree
	 */
	exitSignatureBody?: (ctx: SignatureBodyContext) => void;

	/**
	 * Enter a parse tree produced by the `refineSig`
	 * labeled alternative in `MLParser.sig`.
	 * @param ctx the parse tree
	 */
	enterRefineSig?: (ctx: RefineSigContext) => void;
	/**
	 * Exit a parse tree produced by the `refineSig`
	 * labeled alternative in `MLParser.sig`.
	 * @param ctx the parse tree
	 */
	exitRefineSig?: (ctx: RefineSigContext) => void;

	/**
	 * Enter a parse tree produced by the `strDesc`
	 * labeled alternative in `MLParser.strdesc`.
	 * @param ctx the parse tree
	 */
	enterStrDesc?: (ctx: StrDescContext) => void;
	/**
	 * Exit a parse tree produced by the `strDesc`
	 * labeled alternative in `MLParser.strdesc`.
	 * @param ctx the parse tree
	 */
	exitStrDesc?: (ctx: StrDescContext) => void;

	/**
	 * Enter a parse tree produced by the `destValBind`
	 * labeled alternative in `MLParser.valbind`.
	 * @param ctx the parse tree
	 */
	enterDestValBind?: (ctx: DestValBindContext) => void;
	/**
	 * Exit a parse tree produced by the `destValBind`
	 * labeled alternative in `MLParser.valbind`.
	 * @param ctx the parse tree
	 */
	exitDestValBind?: (ctx: DestValBindContext) => void;

	/**
	 * Enter a parse tree produced by the `recurValBind`
	 * labeled alternative in `MLParser.valbind`.
	 * @param ctx the parse tree
	 */
	enterRecurValBind?: (ctx: RecurValBindContext) => void;
	/**
	 * Exit a parse tree produced by the `recurValBind`
	 * labeled alternative in `MLParser.valbind`.
	 * @param ctx the parse tree
	 */
	exitRecurValBind?: (ctx: RecurValBindContext) => void;

	/**
	 * Enter a parse tree produced by the `valueOrConsExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterValueOrConsExp?: (ctx: ValueOrConsExpContext) => void;
	/**
	 * Exit a parse tree produced by the `valueOrConsExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitValueOrConsExp?: (ctx: ValueOrConsExpContext) => void;

	/**
	 * Enter a parse tree produced by the `identExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterIdentExp?: (ctx: IdentExpContext) => void;
	/**
	 * Exit a parse tree produced by the `identExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitIdentExp?: (ctx: IdentExpContext) => void;

	/**
	 * Enter a parse tree produced by the `constExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterConstExp?: (ctx: ConstExpContext) => void;
	/**
	 * Exit a parse tree produced by the `constExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitConstExp?: (ctx: ConstExpContext) => void;

	/**
	 * Enter a parse tree produced by the `recordSelecExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterRecordSelecExp?: (ctx: RecordSelecExpContext) => void;
	/**
	 * Exit a parse tree produced by the `recordSelecExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitRecordSelecExp?: (ctx: RecordSelecExpContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesesExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterParenthesesExp?: (ctx: ParenthesesExpContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesesExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitParenthesesExp?: (ctx: ParenthesesExpContext) => void;

	/**
	 * Enter a parse tree produced by the `tupleExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterTupleExp?: (ctx: TupleExpContext) => void;
	/**
	 * Exit a parse tree produced by the `tupleExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitTupleExp?: (ctx: TupleExpContext) => void;

	/**
	 * Enter a parse tree produced by the `recordExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterRecordExp?: (ctx: RecordExpContext) => void;
	/**
	 * Exit a parse tree produced by the `recordExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitRecordExp?: (ctx: RecordExpContext) => void;

	/**
	 * Enter a parse tree produced by the `listExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterListExp?: (ctx: ListExpContext) => void;
	/**
	 * Exit a parse tree produced by the `listExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitListExp?: (ctx: ListExpContext) => void;

	/**
	 * Enter a parse tree produced by the `seqExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterSeqExp?: (ctx: SeqExpContext) => void;
	/**
	 * Exit a parse tree produced by the `seqExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitSeqExp?: (ctx: SeqExpContext) => void;

	/**
	 * Enter a parse tree produced by the `localDecExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterLocalDecExp?: (ctx: LocalDecExpContext) => void;
	/**
	 * Exit a parse tree produced by the `localDecExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitLocalDecExp?: (ctx: LocalDecExpContext) => void;

	/**
	 * Enter a parse tree produced by the `infixAppExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterInfixAppExp?: (ctx: InfixAppExpContext) => void;
	/**
	 * Exit a parse tree produced by the `infixAppExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitInfixAppExp?: (ctx: InfixAppExpContext) => void;

	/**
	 * Enter a parse tree produced by the `appExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterAppExp?: (ctx: AppExpContext) => void;
	/**
	 * Exit a parse tree produced by the `appExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitAppExp?: (ctx: AppExpContext) => void;

	/**
	 * Enter a parse tree produced by the `typeAnnoExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterTypeAnnoExp?: (ctx: TypeAnnoExpContext) => void;
	/**
	 * Exit a parse tree produced by the `typeAnnoExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitTypeAnnoExp?: (ctx: TypeAnnoExpContext) => void;

	/**
	 * Enter a parse tree produced by the `exnRaisingExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExnRaisingExp?: (ctx: ExnRaisingExpContext) => void;
	/**
	 * Exit a parse tree produced by the `exnRaisingExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExnRaisingExp?: (ctx: ExnRaisingExpContext) => void;

	/**
	 * Enter a parse tree produced by the `exnHandlingExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExnHandlingExp?: (ctx: ExnHandlingExpContext) => void;
	/**
	 * Exit a parse tree produced by the `exnHandlingExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExnHandlingExp?: (ctx: ExnHandlingExpContext) => void;

	/**
	 * Enter a parse tree produced by the `conjExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterConjExp?: (ctx: ConjExpContext) => void;
	/**
	 * Exit a parse tree produced by the `conjExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitConjExp?: (ctx: ConjExpContext) => void;

	/**
	 * Enter a parse tree produced by the `disjExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterDisjExp?: (ctx: DisjExpContext) => void;
	/**
	 * Exit a parse tree produced by the `disjExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitDisjExp?: (ctx: DisjExpContext) => void;

	/**
	 * Enter a parse tree produced by the `condExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterCondExp?: (ctx: CondExpContext) => void;
	/**
	 * Exit a parse tree produced by the `condExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitCondExp?: (ctx: CondExpContext) => void;

	/**
	 * Enter a parse tree produced by the `iterExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterIterExp?: (ctx: IterExpContext) => void;
	/**
	 * Exit a parse tree produced by the `iterExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitIterExp?: (ctx: IterExpContext) => void;

	/**
	 * Enter a parse tree produced by the `caseAnalysisExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterCaseAnalysisExp?: (ctx: CaseAnalysisExpContext) => void;
	/**
	 * Exit a parse tree produced by the `caseAnalysisExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitCaseAnalysisExp?: (ctx: CaseAnalysisExpContext) => void;

	/**
	 * Enter a parse tree produced by the `funcExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterFuncExp?: (ctx: FuncExpContext) => void;
	/**
	 * Exit a parse tree produced by the `funcExp`
	 * labeled alternative in `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitFuncExp?: (ctx: FuncExpContext) => void;

	/**
	 * Enter a parse tree produced by the `typeRow`
	 * labeled alternative in `MLParser.typrow`.
	 * @param ctx the parse tree
	 */
	enterTypeRow?: (ctx: TypeRowContext) => void;
	/**
	 * Exit a parse tree produced by the `typeRow`
	 * labeled alternative in `MLParser.typrow`.
	 * @param ctx the parse tree
	 */
	exitTypeRow?: (ctx: TypeRowContext) => void;

	/**
	 * Enter a parse tree produced by the `constPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterConstPat?: (ctx: ConstPatContext) => void;
	/**
	 * Exit a parse tree produced by the `constPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitConstPat?: (ctx: ConstPatContext) => void;

	/**
	 * Enter a parse tree produced by the `wildcardPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterWildcardPat?: (ctx: WildcardPatContext) => void;
	/**
	 * Exit a parse tree produced by the `wildcardPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitWildcardPat?: (ctx: WildcardPatContext) => void;

	/**
	 * Enter a parse tree produced by the `varPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterVarPat?: (ctx: VarPatContext) => void;
	/**
	 * Exit a parse tree produced by the `varPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitVarPat?: (ctx: VarPatContext) => void;

	/**
	 * Enter a parse tree produced by the `consPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterConsPat?: (ctx: ConsPatContext) => void;
	/**
	 * Exit a parse tree produced by the `consPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitConsPat?: (ctx: ConsPatContext) => void;

	/**
	 * Enter a parse tree produced by the `infixConsPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterInfixConsPat?: (ctx: InfixConsPatContext) => void;
	/**
	 * Exit a parse tree produced by the `infixConsPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitInfixConsPat?: (ctx: InfixConsPatContext) => void;

	/**
	 * Enter a parse tree produced by the `parenthesesPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterParenthesesPat?: (ctx: ParenthesesPatContext) => void;
	/**
	 * Exit a parse tree produced by the `parenthesesPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitParenthesesPat?: (ctx: ParenthesesPatContext) => void;

	/**
	 * Enter a parse tree produced by the `tuplePat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterTuplePat?: (ctx: TuplePatContext) => void;
	/**
	 * Exit a parse tree produced by the `tuplePat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitTuplePat?: (ctx: TuplePatContext) => void;

	/**
	 * Enter a parse tree produced by the `recordPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterRecordPat?: (ctx: RecordPatContext) => void;
	/**
	 * Exit a parse tree produced by the `recordPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitRecordPat?: (ctx: RecordPatContext) => void;

	/**
	 * Enter a parse tree produced by the `empListPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterEmpListPat?: (ctx: EmpListPatContext) => void;
	/**
	 * Exit a parse tree produced by the `empListPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitEmpListPat?: (ctx: EmpListPatContext) => void;

	/**
	 * Enter a parse tree produced by the `listPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterListPat?: (ctx: ListPatContext) => void;
	/**
	 * Exit a parse tree produced by the `listPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitListPat?: (ctx: ListPatContext) => void;

	/**
	 * Enter a parse tree produced by the `typeAnnoPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterTypeAnnoPat?: (ctx: TypeAnnoPatContext) => void;
	/**
	 * Exit a parse tree produced by the `typeAnnoPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitTypeAnnoPat?: (ctx: TypeAnnoPatContext) => void;

	/**
	 * Enter a parse tree produced by the `layeredPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterLayeredPat?: (ctx: LayeredPatContext) => void;
	/**
	 * Exit a parse tree produced by the `layeredPat`
	 * labeled alternative in `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitLayeredPat?: (ctx: LayeredPatContext) => void;

	/**
	 * Enter a parse tree produced by the `clausalFuncBind`
	 * labeled alternative in `MLParser.funbind`.
	 * @param ctx the parse tree
	 */
	enterClausalFuncBind?: (ctx: ClausalFuncBindContext) => void;
	/**
	 * Exit a parse tree produced by the `clausalFuncBind`
	 * labeled alternative in `MLParser.funbind`.
	 * @param ctx the parse tree
	 */
	exitClausalFuncBind?: (ctx: ClausalFuncBindContext) => void;

	/**
	 * Enter a parse tree produced by the `typeRefine`
	 * labeled alternative in `MLParser.typrefin`.
	 * @param ctx the parse tree
	 */
	enterTypeRefine?: (ctx: TypeRefineContext) => void;
	/**
	 * Exit a parse tree produced by the `typeRefine`
	 * labeled alternative in `MLParser.typrefin`.
	 * @param ctx the parse tree
	 */
	exitTypeRefine?: (ctx: TypeRefineContext) => void;

	/**
	 * Enter a parse tree produced by the `plainFctBindComp`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 */
	enterPlainFctBindComp?: (ctx: PlainFctBindCompContext) => void;
	/**
	 * Exit a parse tree produced by the `plainFctBindComp`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 */
	exitPlainFctBindComp?: (ctx: PlainFctBindCompContext) => void;

	/**
	 * Enter a parse tree produced by the `plainFctBindSmpl`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 */
	enterPlainFctBindSmpl?: (ctx: PlainFctBindSmplContext) => void;
	/**
	 * Exit a parse tree produced by the `plainFctBindSmpl`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 */
	exitPlainFctBindSmpl?: (ctx: PlainFctBindSmplContext) => void;

	/**
	 * Enter a parse tree produced by the `openedFctBindComp`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 */
	enterOpenedFctBindComp?: (ctx: OpenedFctBindCompContext) => void;
	/**
	 * Exit a parse tree produced by the `openedFctBindComp`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 */
	exitOpenedFctBindComp?: (ctx: OpenedFctBindCompContext) => void;

	/**
	 * Enter a parse tree produced by the `openedFctBindSmpl`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 */
	enterOpenedFctBindSmpl?: (ctx: OpenedFctBindSmplContext) => void;
	/**
	 * Exit a parse tree produced by the `openedFctBindSmpl`
	 * labeled alternative in `MLParser.fctbind`.
	 * @param ctx the parse tree
	 */
	exitOpenedFctBindSmpl?: (ctx: OpenedFctBindSmplContext) => void;

	/**
	 * Enter a parse tree produced by the `abbrevTypBind`
	 * labeled alternative in `MLParser.typbind`.
	 * @param ctx the parse tree
	 */
	enterAbbrevTypBind?: (ctx: AbbrevTypBindContext) => void;
	/**
	 * Exit a parse tree produced by the `abbrevTypBind`
	 * labeled alternative in `MLParser.typbind`.
	 * @param ctx the parse tree
	 */
	exitAbbrevTypBind?: (ctx: AbbrevTypBindContext) => void;

	/**
	 * Enter a parse tree produced by the `datDesc`
	 * labeled alternative in `MLParser.datdesc`.
	 * @param ctx the parse tree
	 */
	enterDatDesc?: (ctx: DatDescContext) => void;
	/**
	 * Exit a parse tree produced by the `datDesc`
	 * labeled alternative in `MLParser.datdesc`.
	 * @param ctx the parse tree
	 */
	exitDatDesc?: (ctx: DatDescContext) => void;

	/**
	 * Enter a parse tree produced by the `coreDecProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	enterCoreDecProg?: (ctx: CoreDecProgContext) => void;
	/**
	 * Exit a parse tree produced by the `coreDecProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	exitCoreDecProg?: (ctx: CoreDecProgContext) => void;

	/**
	 * Enter a parse tree produced by the `functorDecProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	enterFunctorDecProg?: (ctx: FunctorDecProgContext) => void;
	/**
	 * Exit a parse tree produced by the `functorDecProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	exitFunctorDecProg?: (ctx: FunctorDecProgContext) => void;

	/**
	 * Enter a parse tree produced by the `signatureDecProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	enterSignatureDecProg?: (ctx: SignatureDecProgContext) => void;
	/**
	 * Exit a parse tree produced by the `signatureDecProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	exitSignatureDecProg?: (ctx: SignatureDecProgContext) => void;

	/**
	 * Enter a parse tree produced by the `empProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	enterEmpProg?: (ctx: EmpProgContext) => void;
	/**
	 * Exit a parse tree produced by the `empProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	exitEmpProg?: (ctx: EmpProgContext) => void;

	/**
	 * Enter a parse tree produced by the `empHeadSeqProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	enterEmpHeadSeqProg?: (ctx: EmpHeadSeqProgContext) => void;
	/**
	 * Exit a parse tree produced by the `empHeadSeqProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	exitEmpHeadSeqProg?: (ctx: EmpHeadSeqProgContext) => void;

	/**
	 * Enter a parse tree produced by the `seqProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	enterSeqProg?: (ctx: SeqProgContext) => void;
	/**
	 * Exit a parse tree produced by the `seqProg`
	 * labeled alternative in `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	exitSeqProg?: (ctx: SeqProgContext) => void;

	/**
	 * Enter a parse tree produced by the `identStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	enterIdentStr?: (ctx: IdentStrContext) => void;
	/**
	 * Exit a parse tree produced by the `identStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	exitIdentStr?: (ctx: IdentStrContext) => void;

	/**
	 * Enter a parse tree produced by the `structStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	enterStructStr?: (ctx: StructStrContext) => void;
	/**
	 * Exit a parse tree produced by the `structStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	exitStructStr?: (ctx: StructStrContext) => void;

	/**
	 * Enter a parse tree produced by the `transpAnnoStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	enterTranspAnnoStr?: (ctx: TranspAnnoStrContext) => void;
	/**
	 * Exit a parse tree produced by the `transpAnnoStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	exitTranspAnnoStr?: (ctx: TranspAnnoStrContext) => void;

	/**
	 * Enter a parse tree produced by the `opaqueAnnoStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	enterOpaqueAnnoStr?: (ctx: OpaqueAnnoStrContext) => void;
	/**
	 * Exit a parse tree produced by the `opaqueAnnoStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	exitOpaqueAnnoStr?: (ctx: OpaqueAnnoStrContext) => void;

	/**
	 * Enter a parse tree produced by the `functorStrAppStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	enterFunctorStrAppStr?: (ctx: FunctorStrAppStrContext) => void;
	/**
	 * Exit a parse tree produced by the `functorStrAppStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	exitFunctorStrAppStr?: (ctx: FunctorStrAppStrContext) => void;

	/**
	 * Enter a parse tree produced by the `functorDecAppStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	enterFunctorDecAppStr?: (ctx: FunctorDecAppStrContext) => void;
	/**
	 * Exit a parse tree produced by the `functorDecAppStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	exitFunctorDecAppStr?: (ctx: FunctorDecAppStrContext) => void;

	/**
	 * Enter a parse tree produced by the `localDecStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	enterLocalDecStr?: (ctx: LocalDecStrContext) => void;
	/**
	 * Exit a parse tree produced by the `localDecStr`
	 * labeled alternative in `MLParser.str`.
	 * @param ctx the parse tree
	 */
	exitLocalDecStr?: (ctx: LocalDecStrContext) => void;

	/**
	 * Enter a parse tree produced by the `expRow`
	 * labeled alternative in `MLParser.exprow`.
	 * @param ctx the parse tree
	 */
	enterExpRow?: (ctx: ExpRowContext) => void;
	/**
	 * Exit a parse tree produced by the `expRow`
	 * labeled alternative in `MLParser.exprow`.
	 * @param ctx the parse tree
	 */
	exitExpRow?: (ctx: ExpRowContext) => void;

	/**
	 * Enter a parse tree produced by the `valDesc`
	 * labeled alternative in `MLParser.valdesc`.
	 * @param ctx the parse tree
	 */
	enterValDesc?: (ctx: ValDescContext) => void;
	/**
	 * Exit a parse tree produced by the `valDesc`
	 * labeled alternative in `MLParser.valdesc`.
	 * @param ctx the parse tree
	 */
	exitValDesc?: (ctx: ValDescContext) => void;

	/**
	 * Enter a parse tree produced by the `exnDesc`
	 * labeled alternative in `MLParser.exndesc`.
	 * @param ctx the parse tree
	 */
	enterExnDesc?: (ctx: ExnDescContext) => void;
	/**
	 * Exit a parse tree produced by the `exnDesc`
	 * labeled alternative in `MLParser.exndesc`.
	 * @param ctx the parse tree
	 */
	exitExnDesc?: (ctx: ExnDescContext) => void;

	/**
	 * Enter a parse tree produced by the `nonfixFunMatch`
	 * labeled alternative in `MLParser.funmatch`.
	 * @param ctx the parse tree
	 */
	enterNonfixFunMatch?: (ctx: NonfixFunMatchContext) => void;
	/**
	 * Exit a parse tree produced by the `nonfixFunMatch`
	 * labeled alternative in `MLParser.funmatch`.
	 * @param ctx the parse tree
	 */
	exitNonfixFunMatch?: (ctx: NonfixFunMatchContext) => void;

	/**
	 * Enter a parse tree produced by the `infixFunmatch`
	 * labeled alternative in `MLParser.funmatch`.
	 * @param ctx the parse tree
	 */
	enterInfixFunmatch?: (ctx: InfixFunmatchContext) => void;
	/**
	 * Exit a parse tree produced by the `infixFunmatch`
	 * labeled alternative in `MLParser.funmatch`.
	 * @param ctx the parse tree
	 */
	exitInfixFunmatch?: (ctx: InfixFunmatchContext) => void;

	/**
	 * Enter a parse tree produced by the `infixManyFunmatch`
	 * labeled alternative in `MLParser.funmatch`.
	 * @param ctx the parse tree
	 */
	enterInfixManyFunmatch?: (ctx: InfixManyFunmatchContext) => void;
	/**
	 * Exit a parse tree produced by the `infixManyFunmatch`
	 * labeled alternative in `MLParser.funmatch`.
	 * @param ctx the parse tree
	 */
	exitInfixManyFunmatch?: (ctx: InfixManyFunmatchContext) => void;

	/**
	 * Enter a parse tree produced by the `absTypeSpec`
	 * labeled alternative in `MLParser.typdesc`.
	 * @param ctx the parse tree
	 */
	enterAbsTypeSpec?: (ctx: AbsTypeSpecContext) => void;
	/**
	 * Exit a parse tree produced by the `absTypeSpec`
	 * labeled alternative in `MLParser.typdesc`.
	 * @param ctx the parse tree
	 */
	exitAbsTypeSpec?: (ctx: AbsTypeSpecContext) => void;

	/**
	 * Enter a parse tree produced by the `wildcardPatRow`
	 * labeled alternative in `MLParser.patrow`.
	 * @param ctx the parse tree
	 */
	enterWildcardPatRow?: (ctx: WildcardPatRowContext) => void;
	/**
	 * Exit a parse tree produced by the `wildcardPatRow`
	 * labeled alternative in `MLParser.patrow`.
	 * @param ctx the parse tree
	 */
	exitWildcardPatRow?: (ctx: WildcardPatRowContext) => void;

	/**
	 * Enter a parse tree produced by the `patRow`
	 * labeled alternative in `MLParser.patrow`.
	 * @param ctx the parse tree
	 */
	enterPatRow?: (ctx: PatRowContext) => void;
	/**
	 * Exit a parse tree produced by the `patRow`
	 * labeled alternative in `MLParser.patrow`.
	 * @param ctx the parse tree
	 */
	exitPatRow?: (ctx: PatRowContext) => void;

	/**
	 * Enter a parse tree produced by the `varPatRow`
	 * labeled alternative in `MLParser.patrow`.
	 * @param ctx the parse tree
	 */
	enterVarPatRow?: (ctx: VarPatRowContext) => void;
	/**
	 * Exit a parse tree produced by the `varPatRow`
	 * labeled alternative in `MLParser.patrow`.
	 * @param ctx the parse tree
	 */
	exitVarPatRow?: (ctx: VarPatRowContext) => void;

	/**
	 * Enter a parse tree produced by the `condDesc`
	 * labeled alternative in `MLParser.condesc`.
	 * @param ctx the parse tree
	 */
	enterCondDesc?: (ctx: CondDescContext) => void;
	/**
	 * Exit a parse tree produced by the `condDesc`
	 * labeled alternative in `MLParser.condesc`.
	 * @param ctx the parse tree
	 */
	exitCondDesc?: (ctx: CondDescContext) => void;

	/**
	 * Enter a parse tree produced by the `structStrBindComp`
	 * labeled alternative in `MLParser.strbind`.
	 * @param ctx the parse tree
	 */
	enterStructStrBindComp?: (ctx: StructStrBindCompContext) => void;
	/**
	 * Exit a parse tree produced by the `structStrBindComp`
	 * labeled alternative in `MLParser.strbind`.
	 * @param ctx the parse tree
	 */
	exitStructStrBindComp?: (ctx: StructStrBindCompContext) => void;

	/**
	 * Enter a parse tree produced by the `structStrBindSmpl`
	 * labeled alternative in `MLParser.strbind`.
	 * @param ctx the parse tree
	 */
	enterStructStrBindSmpl?: (ctx: StructStrBindSmplContext) => void;
	/**
	 * Exit a parse tree produced by the `structStrBindSmpl`
	 * labeled alternative in `MLParser.strbind`.
	 * @param ctx the parse tree
	 */
	exitStructStrBindSmpl?: (ctx: StructStrBindSmplContext) => void;

	/**
	 * Enter a parse tree produced by the `sigBind`
	 * labeled alternative in `MLParser.sigbind`.
	 * @param ctx the parse tree
	 */
	enterSigBind?: (ctx: SigBindContext) => void;
	/**
	 * Exit a parse tree produced by the `sigBind`
	 * labeled alternative in `MLParser.sigbind`.
	 * @param ctx the parse tree
	 */
	exitSigBind?: (ctx: SigBindContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.longid`.
	 * @param ctx the parse tree
	 */
	enterLongid?: (ctx: LongidContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.longid`.
	 * @param ctx the parse tree
	 */
	exitLongid?: (ctx: LongidContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	enterExp?: (ctx: ExpContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.exp`.
	 * @param ctx the parse tree
	 */
	exitExp?: (ctx: ExpContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.exprow`.
	 * @param ctx the parse tree
	 */
	enterExprow?: (ctx: ExprowContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.exprow`.
	 * @param ctx the parse tree
	 */
	exitExprow?: (ctx: ExprowContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.ematch`.
	 * @param ctx the parse tree
	 */
	enterEmatch?: (ctx: EmatchContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.ematch`.
	 * @param ctx the parse tree
	 */
	exitEmatch?: (ctx: EmatchContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.lab`.
	 * @param ctx the parse tree
	 */
	enterLab?: (ctx: LabContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.lab`.
	 * @param ctx the parse tree
	 */
	exitLab?: (ctx: LabContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	enterPat?: (ctx: PatContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.pat`.
	 * @param ctx the parse tree
	 */
	exitPat?: (ctx: PatContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.patrow`.
	 * @param ctx the parse tree
	 */
	enterPatrow?: (ctx: PatrowContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.patrow`.
	 * @param ctx the parse tree
	 */
	exitPatrow?: (ctx: PatrowContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	enterTyp?: (ctx: TypContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.typ`.
	 * @param ctx the parse tree
	 */
	exitTyp?: (ctx: TypContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.typrow`.
	 * @param ctx the parse tree
	 */
	enterTyprow?: (ctx: TyprowContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.typrow`.
	 * @param ctx the parse tree
	 */
	exitTyprow?: (ctx: TyprowContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	enterDec?: (ctx: DecContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.dec`.
	 * @param ctx the parse tree
	 */
	exitDec?: (ctx: DecContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.valbind`.
	 * @param ctx the parse tree
	 */
	enterValbind?: (ctx: ValbindContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.valbind`.
	 * @param ctx the parse tree
	 */
	exitValbind?: (ctx: ValbindContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.funbind`.
	 * @param ctx the parse tree
	 */
	enterFunbind?: (ctx: FunbindContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.funbind`.
	 * @param ctx the parse tree
	 */
	exitFunbind?: (ctx: FunbindContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.funmatch`.
	 * @param ctx the parse tree
	 */
	enterFunmatch?: (ctx: FunmatchContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.funmatch`.
	 * @param ctx the parse tree
	 */
	exitFunmatch?: (ctx: FunmatchContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.typbind`.
	 * @param ctx the parse tree
	 */
	enterTypbind?: (ctx: TypbindContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.typbind`.
	 * @param ctx the parse tree
	 */
	exitTypbind?: (ctx: TypbindContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.databind`.
	 * @param ctx the parse tree
	 */
	enterDatabind?: (ctx: DatabindContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.databind`.
	 * @param ctx the parse tree
	 */
	exitDatabind?: (ctx: DatabindContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.conbind`.
	 * @param ctx the parse tree
	 */
	enterConbind?: (ctx: ConbindContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.conbind`.
	 * @param ctx the parse tree
	 */
	exitConbind?: (ctx: ConbindContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.exnbind`.
	 * @param ctx the parse tree
	 */
	enterExnbind?: (ctx: ExnbindContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.exnbind`.
	 * @param ctx the parse tree
	 */
	exitExnbind?: (ctx: ExnbindContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.str`.
	 * @param ctx the parse tree
	 */
	enterStr?: (ctx: StrContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.str`.
	 * @param ctx the parse tree
	 */
	exitStr?: (ctx: StrContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.strbind`.
	 * @param ctx the parse tree
	 */
	enterStrbind?: (ctx: StrbindContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.strbind`.
	 * @param ctx the parse tree
	 */
	exitStrbind?: (ctx: StrbindContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.sig`.
	 * @param ctx the parse tree
	 */
	enterSig?: (ctx: SigContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.sig`.
	 * @param ctx the parse tree
	 */
	exitSig?: (ctx: SigContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.typrefin`.
	 * @param ctx the parse tree
	 */
	enterTyprefin?: (ctx: TyprefinContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.typrefin`.
	 * @param ctx the parse tree
	 */
	exitTyprefin?: (ctx: TyprefinContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	enterSpec?: (ctx: SpecContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.spec`.
	 * @param ctx the parse tree
	 */
	exitSpec?: (ctx: SpecContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.valdesc`.
	 * @param ctx the parse tree
	 */
	enterValdesc?: (ctx: ValdescContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.valdesc`.
	 * @param ctx the parse tree
	 */
	exitValdesc?: (ctx: ValdescContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.typdesc`.
	 * @param ctx the parse tree
	 */
	enterTypdesc?: (ctx: TypdescContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.typdesc`.
	 * @param ctx the parse tree
	 */
	exitTypdesc?: (ctx: TypdescContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.datdesc`.
	 * @param ctx the parse tree
	 */
	enterDatdesc?: (ctx: DatdescContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.datdesc`.
	 * @param ctx the parse tree
	 */
	exitDatdesc?: (ctx: DatdescContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.condesc`.
	 * @param ctx the parse tree
	 */
	enterCondesc?: (ctx: CondescContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.condesc`.
	 * @param ctx the parse tree
	 */
	exitCondesc?: (ctx: CondescContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.exndesc`.
	 * @param ctx the parse tree
	 */
	enterExndesc?: (ctx: ExndescContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.exndesc`.
	 * @param ctx the parse tree
	 */
	exitExndesc?: (ctx: ExndescContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.strdesc`.
	 * @param ctx the parse tree
	 */
	enterStrdesc?: (ctx: StrdescContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.strdesc`.
	 * @param ctx the parse tree
	 */
	exitStrdesc?: (ctx: StrdescContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	enterProg?: (ctx: ProgContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.prog`.
	 * @param ctx the parse tree
	 */
	exitProg?: (ctx: ProgContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.fctbind`.
	 * @param ctx the parse tree
	 */
	enterFctbind?: (ctx: FctbindContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.fctbind`.
	 * @param ctx the parse tree
	 */
	exitFctbind?: (ctx: FctbindContext) => void;

	/**
	 * Enter a parse tree produced by `MLParser.sigbind`.
	 * @param ctx the parse tree
	 */
	enterSigbind?: (ctx: SigbindContext) => void;
	/**
	 * Exit a parse tree produced by `MLParser.sigbind`.
	 * @param ctx the parse tree
	 */
	exitSigbind?: (ctx: SigbindContext) => void;
}

