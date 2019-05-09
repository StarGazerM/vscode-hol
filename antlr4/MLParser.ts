// Generated from antlr4/ML.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { MLListener } from "./MLListener";
import { MLVisitor } from "./MLVisitor";


export class MLParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly T__18 = 19;
	public static readonly T__19 = 20;
	public static readonly T__20 = 21;
	public static readonly T__21 = 22;
	public static readonly T__22 = 23;
	public static readonly T__23 = 24;
	public static readonly T__24 = 25;
	public static readonly T__25 = 26;
	public static readonly T__26 = 27;
	public static readonly T__27 = 28;
	public static readonly T__28 = 29;
	public static readonly T__29 = 30;
	public static readonly T__30 = 31;
	public static readonly T__31 = 32;
	public static readonly T__32 = 33;
	public static readonly T__33 = 34;
	public static readonly T__34 = 35;
	public static readonly T__35 = 36;
	public static readonly T__36 = 37;
	public static readonly T__37 = 38;
	public static readonly T__38 = 39;
	public static readonly T__39 = 40;
	public static readonly T__40 = 41;
	public static readonly T__41 = 42;
	public static readonly T__42 = 43;
	public static readonly T__43 = 44;
	public static readonly T__44 = 45;
	public static readonly T__45 = 46;
	public static readonly T__46 = 47;
	public static readonly T__47 = 48;
	public static readonly T__48 = 49;
	public static readonly T__49 = 50;
	public static readonly T__50 = 51;
	public static readonly T__51 = 52;
	public static readonly T__52 = 53;
	public static readonly T__53 = 54;
	public static readonly T__54 = 55;
	public static readonly T__55 = 56;
	public static readonly T__56 = 57;
	public static readonly T__57 = 58;
	public static readonly T__58 = 59;
	public static readonly COMMENT = 60;
	public static readonly RESERVED_WORD = 61;
	public static readonly ID = 62;
	public static readonly CON = 63;
	public static readonly VAR = 64;
	public static readonly LETTER = 65;
	public static readonly DIGIT = 66;
	public static readonly WS = 67;
	public static readonly RULE_longid = 0;
	public static readonly RULE_exp = 1;
	public static readonly RULE_exprow = 2;
	public static readonly RULE_ematch = 3;
	public static readonly RULE_lab = 4;
	public static readonly RULE_pat = 5;
	public static readonly RULE_patrow = 6;
	public static readonly RULE_typ = 7;
	public static readonly RULE_typrow = 8;
	public static readonly RULE_dec = 9;
	public static readonly RULE_valbind = 10;
	public static readonly RULE_funbind = 11;
	public static readonly RULE_funmatch = 12;
	public static readonly RULE_typbind = 13;
	public static readonly RULE_databind = 14;
	public static readonly RULE_conbind = 15;
	public static readonly RULE_exnbind = 16;
	public static readonly RULE_str = 17;
	public static readonly RULE_strbind = 18;
	public static readonly RULE_sig = 19;
	public static readonly RULE_typrefin = 20;
	public static readonly RULE_spec = 21;
	public static readonly RULE_valdesc = 22;
	public static readonly RULE_typdesc = 23;
	public static readonly RULE_datdesc = 24;
	public static readonly RULE_condesc = 25;
	public static readonly RULE_exndesc = 26;
	public static readonly RULE_strdesc = 27;
	public static readonly RULE_prog = 28;
	public static readonly RULE_fctbind = 29;
	public static readonly RULE_sigbind = 30;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"longid", "exp", "exprow", "ematch", "lab", "pat", "patrow", "typ", "typrow", 
		"dec", "valbind", "funbind", "funmatch", "typbind", "databind", "conbind", 
		"exnbind", "str", "strbind", "sig", "typrefin", "spec", "valdesc", "typdesc", 
		"datdesc", "condesc", "exndesc", "strdesc", "prog", "fctbind", "sigbind",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'.'", "'op'", "'#'", "'('", "')'", "','", "'{'", "'}'", "'['", 
		"']'", "';'", "'let'", "'in'", "'end'", "':'", "'raise'", "'handle'", 
		"'andalso'", "'orelse'", "'if'", "'then'", "'else'", "'while'", "'do'", 
		"'case'", "'of'", "'fn'", "'='", "'=>'", "'|'", "'_'", "'as'", "'...'", 
		"'*'", "'->'", "'val'", "'fun'", "'type'", "'datatype'", "'withtype'", 
		"'abstype'", "'with'", "'exception'", "'structure'", "'local'", "'open'", 
		"'nonfix'", "'infix'", "'and'", "'rec'", "'struct'", "':>'", "'sig'", 
		"'where'", "'eqtype'", "'include'", "'sharing'", "'functor'", "'signature'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, undefined, "COMMENT", "RESERVED_WORD", 
		"ID", "CON", "VAR", "LETTER", "DIGIT", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(MLParser._LITERAL_NAMES, MLParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return MLParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "ML.g4"; }

	// @Override
	public get ruleNames(): string[] { return MLParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return MLParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(MLParser._ATN, this);
	}
	// @RuleVersion(0)
	public longid(): LongidContext {
		let _localctx: LongidContext = new LongidContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, MLParser.RULE_longid);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 62;
			this.match(MLParser.ID);
			this.state = 65;
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 63;
					this.match(MLParser.T__0);
					this.state = 64;
					this.match(MLParser.ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 67;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 0, this._ctx);
			} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public exp(): ExpContext;
	public exp(_p: number): ExpContext;
	// @RuleVersion(0)
	public exp(_p?: number): ExpContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpContext = new ExpContext(this._ctx, _parentState);
		let _prevctx: ExpContext = _localctx;
		let _startState: number = 2;
		this.enterRecursionRule(_localctx, 2, MLParser.RULE_exp, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 152;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				_localctx = new ValueOrConsExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 71;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__1) {
					{
					this.state = 70;
					this.match(MLParser.T__1);
					}
				}

				this.state = 73;
				this.longid();
				}
				break;

			case 2:
				{
				_localctx = new IdentExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 74;
				this.match(MLParser.ID);
				}
				break;

			case 3:
				{
				_localctx = new ConstExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 75;
				this.match(MLParser.CON);
				}
				break;

			case 4:
				{
				_localctx = new RecordSelecExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 76;
				this.match(MLParser.T__2);
				this.state = 77;
				this.lab();
				}
				break;

			case 5:
				{
				_localctx = new ParenthesesExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 78;
				this.match(MLParser.T__3);
				this.state = 79;
				this.match(MLParser.T__4);
				}
				break;

			case 6:
				{
				_localctx = new TupleExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 80;
				this.match(MLParser.T__3);
				this.state = 81;
				this.exp(0);
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MLParser.T__5) {
					{
					{
					this.state = 82;
					this.match(MLParser.T__5);
					this.state = 83;
					this.exp(0);
					}
					}
					this.state = 88;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 89;
				this.match(MLParser.T__4);
				}
				break;

			case 7:
				{
				_localctx = new RecordExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 91;
				this.match(MLParser.T__6);
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.ID || _la === MLParser.CON) {
					{
					this.state = 92;
					this.exprow();
					}
				}

				this.state = 95;
				this.match(MLParser.T__7);
				}
				break;

			case 8:
				{
				_localctx = new ListExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 96;
				this.match(MLParser.T__8);
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MLParser.T__1) | (1 << MLParser.T__2) | (1 << MLParser.T__3) | (1 << MLParser.T__6) | (1 << MLParser.T__8) | (1 << MLParser.T__11) | (1 << MLParser.T__15) | (1 << MLParser.T__19) | (1 << MLParser.T__22) | (1 << MLParser.T__24) | (1 << MLParser.T__26))) !== 0) || _la === MLParser.ID || _la === MLParser.CON) {
					{
					this.state = 97;
					this.exp(0);
					this.state = 102;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la === MLParser.T__5) {
						{
						{
						this.state = 98;
						this.match(MLParser.T__5);
						this.state = 99;
						this.exp(0);
						}
						}
						this.state = 104;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
				}

				this.state = 107;
				this.match(MLParser.T__9);
				}
				break;

			case 9:
				{
				_localctx = new SeqExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 108;
				this.match(MLParser.T__3);
				this.state = 109;
				this.exp(0);
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 110;
					this.match(MLParser.T__10);
					this.state = 111;
					this.exp(0);
					}
					}
					this.state = 114;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MLParser.T__10);
				this.state = 116;
				this.match(MLParser.T__4);
				}
				break;

			case 10:
				{
				_localctx = new LocalDecExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 118;
				this.match(MLParser.T__11);
				this.state = 119;
				this.dec(0);
				this.state = 120;
				this.match(MLParser.T__12);
				this.state = 121;
				this.exp(0);
				this.state = 126;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MLParser.T__10) {
					{
					{
					this.state = 122;
					this.match(MLParser.T__10);
					this.state = 123;
					this.exp(0);
					}
					}
					this.state = 128;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 129;
				this.match(MLParser.T__13);
				}
				break;

			case 11:
				{
				_localctx = new ExnRaisingExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 131;
				this.match(MLParser.T__15);
				this.state = 132;
				this.exp(8);
				}
				break;

			case 12:
				{
				_localctx = new CondExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 133;
				this.match(MLParser.T__19);
				this.state = 134;
				this.exp(0);
				this.state = 135;
				this.match(MLParser.T__20);
				this.state = 136;
				this.exp(0);
				this.state = 137;
				this.match(MLParser.T__21);
				this.state = 138;
				this.exp(4);
				}
				break;

			case 13:
				{
				_localctx = new IterExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 140;
				this.match(MLParser.T__22);
				this.state = 141;
				this.exp(0);
				this.state = 142;
				this.match(MLParser.T__23);
				this.state = 143;
				this.exp(3);
				}
				break;

			case 14:
				{
				_localctx = new CaseAnalysisExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 145;
				this.match(MLParser.T__24);
				this.state = 146;
				this.exp(0);
				this.state = 147;
				this.match(MLParser.T__25);
				this.state = 148;
				this.ematch();
				}
				break;

			case 15:
				{
				_localctx = new FuncExpContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 150;
				this.match(MLParser.T__26);
				this.state = 151;
				this.ematch();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 173;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 171;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixAppExpContext(new ExpContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_exp);
						this.state = 154;
						if (!(this.precpred(this._ctx, 11))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						}
						this.state = 155;
						this.match(MLParser.ID);
						this.state = 156;
						this.exp(12);
						}
						break;

					case 2:
						{
						_localctx = new AppExpContext(new ExpContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_exp);
						this.state = 157;
						if (!(this.precpred(this._ctx, 10))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 10)");
						}
						this.state = 158;
						this.exp(11);
						}
						break;

					case 3:
						{
						_localctx = new ConjExpContext(new ExpContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_exp);
						this.state = 159;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 160;
						this.match(MLParser.T__17);
						this.state = 161;
						this.exp(7);
						}
						break;

					case 4:
						{
						_localctx = new DisjExpContext(new ExpContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_exp);
						this.state = 162;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 163;
						this.match(MLParser.T__18);
						this.state = 164;
						this.exp(6);
						}
						break;

					case 5:
						{
						_localctx = new TypeAnnoExpContext(new ExpContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_exp);
						this.state = 165;
						if (!(this.precpred(this._ctx, 9))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						}
						this.state = 166;
						this.match(MLParser.T__14);
						this.state = 167;
						this.typ(0);
						}
						break;

					case 6:
						{
						_localctx = new ExnHandlingExpContext(new ExpContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_exp);
						this.state = 168;
						if (!(this.precpred(this._ctx, 7))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						}
						this.state = 169;
						this.match(MLParser.T__16);
						this.state = 170;
						this.ematch();
						}
						break;
					}
					}
				}
				this.state = 175;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exprow(): ExprowContext {
		let _localctx: ExprowContext = new ExprowContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, MLParser.RULE_exprow);
		let _la: number;
		try {
			_localctx = new ExpRowContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 176;
			this.lab();
			this.state = 177;
			this.match(MLParser.T__27);
			this.state = 178;
			this.exp(0);
			this.state = 181;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MLParser.T__5) {
				{
				this.state = 179;
				this.match(MLParser.T__5);
				this.state = 180;
				this.exprow();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public ematch(): EmatchContext {
		let _localctx: EmatchContext = new EmatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, MLParser.RULE_ematch);
		try {
			_localctx = new MatchBodyContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.pat(0);
			this.state = 184;
			this.match(MLParser.T__28);
			this.state = 185;
			this.exp(0);
			this.state = 188;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 186;
				this.match(MLParser.T__29);
				this.state = 187;
				this.ematch();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lab(): LabContext {
		let _localctx: LabContext = new LabContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, MLParser.RULE_lab);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 190;
			_la = this._input.LA(1);
			if (!(_la === MLParser.ID || _la === MLParser.CON)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public pat(): PatContext;
	public pat(_p: number): PatContext;
	// @RuleVersion(0)
	public pat(_p?: number): PatContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: PatContext = new PatContext(this._ctx, _parentState);
		let _prevctx: PatContext = _localctx;
		let _startState: number = 10;
		this.enterRecursionRule(_localctx, 10, MLParser.RULE_pat, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				_localctx = new ConstPatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 193;
				this.match(MLParser.CON);
				}
				break;

			case 2:
				{
				_localctx = new WildcardPatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 194;
				this.match(MLParser.T__30);
				}
				break;

			case 3:
				{
				_localctx = new VarPatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__1) {
					{
					this.state = 195;
					this.match(MLParser.T__1);
					}
				}

				this.state = 198;
				this.match(MLParser.ID);
				}
				break;

			case 4:
				{
				_localctx = new ConsPatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 200;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__1) {
					{
					this.state = 199;
					this.match(MLParser.T__1);
					}
				}

				this.state = 202;
				this.longid();
				this.state = 204;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
				case 1:
					{
					this.state = 203;
					this.pat(0);
					}
					break;
				}
				}
				break;

			case 5:
				{
				_localctx = new ParenthesesPatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 206;
				this.match(MLParser.T__3);
				this.state = 207;
				this.pat(0);
				this.state = 208;
				this.match(MLParser.T__4);
				}
				break;

			case 6:
				{
				_localctx = new TuplePatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 210;
				this.match(MLParser.T__3);
				this.state = 211;
				this.pat(0);
				this.state = 214;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 212;
					this.match(MLParser.T__5);
					this.state = 213;
					this.pat(0);
					}
					}
					this.state = 216;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MLParser.T__5);
				this.state = 218;
				this.match(MLParser.T__4);
				}
				break;

			case 7:
				{
				_localctx = new RecordPatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 220;
				this.match(MLParser.T__6);
				this.state = 221;
				this.patrow();
				this.state = 222;
				this.match(MLParser.T__7);
				}
				break;

			case 8:
				{
				_localctx = new EmpListPatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 224;
				this.match(MLParser.T__8);
				this.state = 225;
				this.match(MLParser.T__9);
				}
				break;

			case 9:
				{
				_localctx = new ListPatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 226;
				this.match(MLParser.T__8);
				this.state = 227;
				this.pat(0);
				this.state = 232;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === MLParser.T__5) {
					{
					{
					this.state = 228;
					this.match(MLParser.T__5);
					this.state = 229;
					this.pat(0);
					}
					}
					this.state = 234;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 235;
				this.match(MLParser.T__9);
				}
				break;

			case 10:
				{
				_localctx = new LayeredPatContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 238;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__1) {
					{
					this.state = 237;
					this.match(MLParser.T__1);
					}
				}

				this.state = 240;
				this.match(MLParser.ID);
				this.state = 243;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__14) {
					{
					this.state = 241;
					this.match(MLParser.T__14);
					this.state = 242;
					this.typ(0);
					}
				}

				this.state = 245;
				this.match(MLParser.T__31);
				this.state = 246;
				this.pat(1);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 257;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 255;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 21, this._ctx) ) {
					case 1:
						{
						_localctx = new InfixConsPatContext(new PatContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_pat);
						this.state = 249;
						if (!(this.precpred(this._ctx, 8))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						}
						this.state = 250;
						this.match(MLParser.ID);
						this.state = 251;
						this.pat(9);
						}
						break;

					case 2:
						{
						_localctx = new TypeAnnoPatContext(new PatContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_pat);
						this.state = 252;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 253;
						this.match(MLParser.T__14);
						this.state = 254;
						this.typ(0);
						}
						break;
					}
					}
				}
				this.state = 259;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patrow(): PatrowContext {
		let _localctx: PatrowContext = new PatrowContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, MLParser.RULE_patrow);
		let _la: number;
		try {
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				_localctx = new WildcardPatRowContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 260;
				this.match(MLParser.T__32);
				}
				break;

			case 2:
				_localctx = new PatRowContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 261;
				this.lab();
				this.state = 262;
				this.match(MLParser.T__27);
				this.state = 263;
				this.pat(0);
				this.state = 266;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__5) {
					{
					this.state = 264;
					this.match(MLParser.T__5);
					this.state = 265;
					this.patrow();
					}
				}

				}
				break;

			case 3:
				_localctx = new VarPatRowContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 268;
				this.match(MLParser.ID);
				this.state = 271;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__14) {
					{
					this.state = 269;
					this.match(MLParser.T__14);
					this.state = 270;
					this.typ(0);
					}
				}

				this.state = 275;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__31) {
					{
					this.state = 273;
					this.match(MLParser.T__31);
					this.state = 274;
					this.pat(0);
					}
				}

				this.state = 279;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__5) {
					{
					this.state = 277;
					this.match(MLParser.T__5);
					this.state = 278;
					this.patrow();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public typ(): TypContext;
	public typ(_p: number): TypContext;
	// @RuleVersion(0)
	public typ(_p?: number): TypContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: TypContext = new TypContext(this._ctx, _parentState);
		let _prevctx: TypContext = _localctx;
		let _startState: number = 14;
		this.enterRecursionRule(_localctx, 14, MLParser.RULE_typ, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 295;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MLParser.VAR:
				{
				_localctx = new VarTypContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 284;
				this.match(MLParser.VAR);
				}
				break;
			case MLParser.ID:
				{
				_localctx = new LongIdTypContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 285;
				this.longid();
				}
				break;
			case MLParser.T__3:
				{
				_localctx = new ParenthesesTypContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 286;
				this.match(MLParser.T__3);
				this.state = 287;
				this.typ(0);
				this.state = 288;
				this.match(MLParser.T__4);
				}
				break;
			case MLParser.T__6:
				{
				_localctx = new RecordTypContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 290;
				this.match(MLParser.T__6);
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.ID || _la === MLParser.CON) {
					{
					this.state = 291;
					this.typrow();
					}
				}

				this.state = 294;
				this.match(MLParser.T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 320;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 318;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 32, this._ctx) ) {
					case 1:
						{
						_localctx = new FuncTypContext(new TypContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_typ);
						this.state = 297;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 298;
						this.match(MLParser.T__34);
						this.state = 299;
						this.typ(3);
						}
						break;

					case 2:
						{
						_localctx = new ConsOneTypContext(new TypContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_typ);
						this.state = 300;
						if (!(this.precpred(this._ctx, 6))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						}
						this.state = 301;
						this.longid();
						}
						break;

					case 3:
						{
						_localctx = new ConsManyTypContext(new TypContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_typ);
						this.state = 302;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 305;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 303;
							this.match(MLParser.T__5);
							this.state = 304;
							this.typ(0);
							}
							}
							this.state = 307;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === MLParser.T__5);
						this.state = 309;
						this.longid();
						}
						break;

					case 4:
						{
						_localctx = new TupleTypContext(new TypContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_typ);
						this.state = 311;
						if (!(this.precpred(this._ctx, 3))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 3)");
						}
						this.state = 314;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 312;
								this.match(MLParser.T__33);
								this.state = 313;
								this.typ(0);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 316;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					}
					}
				}
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typrow(): TyprowContext {
		let _localctx: TyprowContext = new TyprowContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, MLParser.RULE_typrow);
		let _la: number;
		try {
			_localctx = new TypeRowContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 323;
			this.lab();
			this.state = 324;
			this.match(MLParser.T__14);
			this.state = 325;
			this.typ(0);
			this.state = 328;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MLParser.T__5) {
				{
				this.state = 326;
				this.match(MLParser.T__5);
				this.state = 327;
				this.typrow();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public dec(): DecContext;
	public dec(_p: number): DecContext;
	// @RuleVersion(0)
	public dec(_p?: number): DecContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: DecContext = new DecContext(this._ctx, _parentState);
		let _prevctx: DecContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, MLParser.RULE_dec, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 49, this._ctx) ) {
			case 1:
				{
				_localctx = new ValDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 331;
				this.match(MLParser.T__35);
				this.state = 342;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 333;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === MLParser.VAR) {
						{
						this.state = 332;
						this.match(MLParser.VAR);
						}
					}

					}
					break;

				case 2:
					{
					this.state = 335;
					this.match(MLParser.VAR);
					this.state = 338;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 336;
						this.match(MLParser.T__5);
						this.state = 337;
						this.match(MLParser.VAR);
						}
						}
						this.state = 340;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === MLParser.T__5);
					}
					break;
				}
				this.state = 344;
				this.valbind();
				}
				break;

			case 2:
				{
				_localctx = new FuncDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 345;
				this.match(MLParser.T__36);
				this.state = 356;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 40, this._ctx) ) {
				case 1:
					{
					this.state = 347;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === MLParser.VAR) {
						{
						this.state = 346;
						this.match(MLParser.VAR);
						}
					}

					}
					break;

				case 2:
					{
					this.state = 349;
					this.match(MLParser.VAR);
					this.state = 352;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					do {
						{
						{
						this.state = 350;
						this.match(MLParser.T__5);
						this.state = 351;
						this.match(MLParser.VAR);
						}
						}
						this.state = 354;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					} while (_la === MLParser.T__5);
					}
					break;
				}
				this.state = 358;
				this.funbind();
				}
				break;

			case 3:
				{
				_localctx = new TypeDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 359;
				this.match(MLParser.T__37);
				this.state = 360;
				this.typbind();
				}
				break;

			case 4:
				{
				_localctx = new DatatypeDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 361;
				this.match(MLParser.T__38);
				this.state = 362;
				this.databind();
				this.state = 365;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 41, this._ctx) ) {
				case 1:
					{
					this.state = 363;
					this.match(MLParser.T__39);
					this.state = 364;
					this.typbind();
					}
					break;
				}
				}
				break;

			case 5:
				{
				_localctx = new DatatypeReplDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 367;
				this.match(MLParser.T__38);
				this.state = 368;
				this.match(MLParser.ID);
				this.state = 369;
				this.match(MLParser.T__27);
				this.state = 370;
				this.match(MLParser.T__38);
				this.state = 371;
				this.longid();
				}
				break;

			case 6:
				{
				_localctx = new AbstractTypeDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 372;
				this.match(MLParser.T__40);
				this.state = 373;
				this.databind();
				this.state = 376;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__39) {
					{
					this.state = 374;
					this.match(MLParser.T__39);
					this.state = 375;
					this.typbind();
					}
				}

				this.state = 378;
				this.match(MLParser.T__41);
				this.state = 379;
				this.dec(0);
				this.state = 380;
				this.match(MLParser.T__13);
				}
				break;

			case 7:
				{
				_localctx = new ExnDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 382;
				this.match(MLParser.T__42);
				this.state = 383;
				this.exnbind();
				}
				break;

			case 8:
				{
				_localctx = new StructureDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 384;
				this.match(MLParser.T__43);
				this.state = 385;
				this.strbind();
				}
				break;

			case 9:
				{
				_localctx = new EmpDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				}
				break;

			case 10:
				{
				_localctx = new EmpHeadSeqDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 387;
				this.match(MLParser.T__10);
				this.state = 388;
				this.dec(7);
				}
				break;

			case 11:
				{
				_localctx = new LocalDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 389;
				this.match(MLParser.T__44);
				this.state = 390;
				this.dec(0);
				this.state = 391;
				this.match(MLParser.T__12);
				this.state = 392;
				this.dec(0);
				this.state = 393;
				this.match(MLParser.T__13);
				}
				break;

			case 12:
				{
				_localctx = new IncludeDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 395;
				this.match(MLParser.T__45);
				this.state = 397;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 396;
						this.longid();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 399;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 43, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 13:
				{
				_localctx = new NonfixDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 401;
				this.match(MLParser.T__46);
				this.state = 403;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 402;
						this.match(MLParser.ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 405;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 44, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 14:
				{
				_localctx = new LeftAssocInfixDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 407;
				this.match(MLParser.T__47);
				this.state = 409;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.DIGIT) {
					{
					this.state = 408;
					this.match(MLParser.DIGIT);
					}
				}

				this.state = 412;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 411;
						this.match(MLParser.ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 414;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;

			case 15:
				{
				_localctx = new RightAssocInfixDecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 416;
				this.match(MLParser.T__47);
				this.state = 418;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.DIGIT) {
					{
					this.state = 417;
					this.match(MLParser.DIGIT);
					}
				}

				this.state = 421;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 420;
						this.match(MLParser.ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 423;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 432;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new SeqDecContext(new DecContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_dec);
					this.state = 427;
					if (!(this.precpred(this._ctx, 6))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
					}
					this.state = 428;
					this.match(MLParser.T__10);
					this.state = 429;
					this.dec(7);
					}
					}
				}
				this.state = 434;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 50, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valbind(): ValbindContext {
		let _localctx: ValbindContext = new ValbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, MLParser.RULE_valbind);
		try {
			this.state = 444;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MLParser.T__1:
			case MLParser.T__3:
			case MLParser.T__6:
			case MLParser.T__8:
			case MLParser.T__30:
			case MLParser.ID:
			case MLParser.CON:
				_localctx = new DestValBindContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 435;
				this.pat(0);
				this.state = 436;
				this.match(MLParser.T__27);
				this.state = 437;
				this.exp(0);
				this.state = 440;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
				case 1:
					{
					this.state = 438;
					this.match(MLParser.T__48);
					this.state = 439;
					this.valbind();
					}
					break;
				}
				}
				break;
			case MLParser.T__49:
				_localctx = new RecurValBindContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 442;
				this.match(MLParser.T__49);
				this.state = 443;
				this.valbind();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funbind(): FunbindContext {
		let _localctx: FunbindContext = new FunbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, MLParser.RULE_funbind);
		try {
			_localctx = new ClausalFuncBindContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 446;
			this.funmatch();
			this.state = 449;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				{
				this.state = 447;
				this.match(MLParser.T__48);
				this.state = 448;
				this.funbind();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public funmatch(): FunmatchContext {
		let _localctx: FunmatchContext = new FunmatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, MLParser.RULE_funmatch);
		let _la: number;
		try {
			let _alt: number;
			this.state = 501;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				_localctx = new NonfixFunMatchContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 452;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
				case 1:
					{
					this.state = 451;
					this.match(MLParser.T__1);
					}
					break;
				}
				this.state = 455;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 454;
						this.pat(0);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 457;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				this.state = 460;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__3 || _la === MLParser.T__6 || _la === MLParser.ID || _la === MLParser.VAR) {
					{
					this.state = 459;
					this.typ(0);
					}
				}

				this.state = 462;
				this.match(MLParser.T__27);
				this.state = 463;
				this.exp(0);
				this.state = 466;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
				case 1:
					{
					this.state = 464;
					this.match(MLParser.T__29);
					this.state = 465;
					this.funmatch();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new InfixFunmatchContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 468;
				this.pat(0);
				this.state = 469;
				this.match(MLParser.ID);
				this.state = 470;
				this.pat(0);
				this.state = 473;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__14) {
					{
					this.state = 471;
					this.match(MLParser.T__14);
					this.state = 472;
					this.typ(0);
					}
				}

				this.state = 475;
				this.match(MLParser.T__27);
				this.state = 476;
				this.exp(0);
				this.state = 479;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 59, this._ctx) ) {
				case 1:
					{
					this.state = 477;
					this.match(MLParser.T__29);
					this.state = 478;
					this.funmatch();
					}
					break;
				}
				}
				break;

			case 3:
				_localctx = new InfixManyFunmatchContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 481;
				this.match(MLParser.T__3);
				this.state = 482;
				this.pat(0);
				this.state = 483;
				this.match(MLParser.ID);
				this.state = 484;
				this.pat(0);
				this.state = 485;
				this.match(MLParser.T__4);
				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 486;
					this.pat(0);
					}
					}
					this.state = 489;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << MLParser.T__1) | (1 << MLParser.T__3) | (1 << MLParser.T__6) | (1 << MLParser.T__8) | (1 << MLParser.T__30))) !== 0) || _la === MLParser.ID || _la === MLParser.CON);
				this.state = 493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__14) {
					{
					this.state = 491;
					this.match(MLParser.T__14);
					this.state = 492;
					this.typ(0);
					}
				}

				this.state = 495;
				this.match(MLParser.T__27);
				this.state = 496;
				this.exp(0);
				this.state = 499;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 62, this._ctx) ) {
				case 1:
					{
					this.state = 497;
					this.match(MLParser.T__29);
					this.state = 498;
					this.funmatch();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typbind(): TypbindContext {
		let _localctx: TypbindContext = new TypbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, MLParser.RULE_typbind);
		let _la: number;
		try {
			_localctx = new AbbrevTypBindContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 513;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				{
				this.state = 504;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.VAR) {
					{
					this.state = 503;
					this.match(MLParser.VAR);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 506;
				this.match(MLParser.VAR);
				this.state = 509;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 507;
					this.match(MLParser.T__5);
					this.state = 508;
					this.match(MLParser.VAR);
					}
					}
					this.state = 511;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MLParser.T__5);
				}
				break;
			}
			this.state = 515;
			this.match(MLParser.ID);
			this.state = 516;
			this.match(MLParser.T__27);
			this.state = 517;
			this.typ(0);
			this.state = 520;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 518;
				this.match(MLParser.T__48);
				this.state = 519;
				this.typbind();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public databind(): DatabindContext {
		let _localctx: DatabindContext = new DatabindContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, MLParser.RULE_databind);
		let _la: number;
		try {
			_localctx = new DataTypeDataBindContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 532;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 523;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.VAR) {
					{
					this.state = 522;
					this.match(MLParser.VAR);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 525;
				this.match(MLParser.VAR);
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 526;
					this.match(MLParser.T__5);
					this.state = 527;
					this.match(MLParser.VAR);
					}
					}
					this.state = 530;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MLParser.T__5);
				}
				break;
			}
			this.state = 534;
			this.match(MLParser.ID);
			this.state = 535;
			this.match(MLParser.T__27);
			this.state = 536;
			this.conbind();
			this.state = 539;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 537;
				this.match(MLParser.T__48);
				this.state = 538;
				this.databind();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public conbind(): ConbindContext {
		let _localctx: ConbindContext = new ConbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, MLParser.RULE_conbind);
		try {
			_localctx = new DataConsConBindContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 541;
			this.match(MLParser.ID);
			this.state = 544;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 542;
				this.match(MLParser.T__25);
				this.state = 543;
				this.typ(0);
				}
				break;
			}
			this.state = 548;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 546;
				this.match(MLParser.T__29);
				this.state = 547;
				this.conbind();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exnbind(): ExnbindContext {
		let _localctx: ExnbindContext = new ExnbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, MLParser.RULE_exnbind);
		try {
			this.state = 565;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				_localctx = new GenExnBindContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 550;
				this.match(MLParser.ID);
				{
				this.state = 551;
				this.match(MLParser.T__25);
				this.state = 552;
				this.typ(0);
				}
				this.state = 556;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 74, this._ctx) ) {
				case 1:
					{
					this.state = 554;
					this.match(MLParser.T__29);
					this.state = 555;
					this.exnbind();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new RenameExnBindContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 558;
				this.match(MLParser.ID);
				this.state = 559;
				this.match(MLParser.T__27);
				this.state = 560;
				this.longid();
				this.state = 563;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 75, this._ctx) ) {
				case 1:
					{
					this.state = 561;
					this.match(MLParser.T__48);
					this.state = 562;
					this.exnbind();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public str(): StrContext;
	public str(_p: number): StrContext;
	// @RuleVersion(0)
	public str(_p?: number): StrContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: StrContext = new StrContext(this._ctx, _parentState);
		let _prevctx: StrContext = _localctx;
		let _startState: number = 34;
		this.enterRecursionRule(_localctx, 34, MLParser.RULE_str, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 589;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				_localctx = new IdentStrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 568;
				this.longid();
				}
				break;

			case 2:
				{
				_localctx = new StructStrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 569;
				this.match(MLParser.T__50);
				this.state = 570;
				this.dec(0);
				this.state = 571;
				this.match(MLParser.T__13);
				}
				break;

			case 3:
				{
				_localctx = new FunctorStrAppStrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 573;
				this.match(MLParser.ID);
				this.state = 574;
				this.match(MLParser.T__3);
				this.state = 575;
				this.str(0);
				this.state = 576;
				this.match(MLParser.T__4);
				}
				break;

			case 4:
				{
				_localctx = new FunctorDecAppStrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 578;
				this.match(MLParser.ID);
				this.state = 579;
				this.match(MLParser.T__3);
				this.state = 580;
				this.dec(0);
				this.state = 581;
				this.match(MLParser.T__4);
				}
				break;

			case 5:
				{
				_localctx = new LocalDecStrContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 583;
				this.match(MLParser.T__11);
				this.state = 584;
				this.dec(0);
				this.state = 585;
				this.match(MLParser.T__12);
				this.state = 586;
				this.str(0);
				this.state = 587;
				this.match(MLParser.T__13);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 599;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 597;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 78, this._ctx) ) {
					case 1:
						{
						_localctx = new TranspAnnoStrContext(new StrContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_str);
						this.state = 591;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 592;
						this.match(MLParser.T__14);
						this.state = 593;
						this.sig(0);
						}
						break;

					case 2:
						{
						_localctx = new OpaqueAnnoStrContext(new StrContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_str);
						this.state = 594;
						if (!(this.precpred(this._ctx, 4))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 4)");
						}
						this.state = 595;
						this.match(MLParser.T__51);
						this.state = 596;
						this.sig(0);
						}
						break;
					}
					}
				}
				this.state = 601;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 79, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public strbind(): StrbindContext {
		let _localctx: StrbindContext = new StrbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, MLParser.RULE_strbind);
		let _la: number;
		try {
			this.state = 624;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				_localctx = new StructStrBindCompContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 602;
				this.match(MLParser.ID);
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__51) {
					{
					this.state = 603;
					this.match(MLParser.T__51);
					this.state = 604;
					this.sig(0);
					}
				}

				this.state = 607;
				this.match(MLParser.T__27);
				this.state = 608;
				this.str(0);
				this.state = 611;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 81, this._ctx) ) {
				case 1:
					{
					this.state = 609;
					this.match(MLParser.T__48);
					this.state = 610;
					this.strbind();
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new StructStrBindSmplContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 613;
				this.match(MLParser.ID);
				this.state = 616;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__14) {
					{
					this.state = 614;
					this.match(MLParser.T__14);
					this.state = 615;
					this.sig(0);
					}
				}

				this.state = 618;
				this.match(MLParser.T__27);
				this.state = 619;
				this.str(0);
				this.state = 622;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 83, this._ctx) ) {
				case 1:
					{
					this.state = 620;
					this.match(MLParser.T__48);
					this.state = 621;
					this.strbind();
					}
					break;
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sig(): SigContext;
	public sig(_p: number): SigContext;
	// @RuleVersion(0)
	public sig(_p?: number): SigContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SigContext = new SigContext(this._ctx, _parentState);
		let _prevctx: SigContext = _localctx;
		let _startState: number = 38;
		this.enterRecursionRule(_localctx, 38, MLParser.RULE_sig, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 632;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case MLParser.ID:
				{
				_localctx = new IdentSigContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 627;
				this.match(MLParser.ID);
				}
				break;
			case MLParser.T__52:
				{
				_localctx = new SignatureBodyContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 628;
				this.match(MLParser.T__52);
				this.state = 629;
				this.spec(0);
				this.state = 630;
				this.match(MLParser.T__13);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 640;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new RefineSigContext(new SigContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_sig);
					this.state = 634;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 635;
					this.match(MLParser.T__53);
					this.state = 636;
					this.match(MLParser.T__37);
					this.state = 637;
					this.typrefin();
					}
					}
				}
				this.state = 642;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 86, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typrefin(): TyprefinContext {
		let _localctx: TyprefinContext = new TyprefinContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, MLParser.RULE_typrefin);
		let _la: number;
		try {
			_localctx = new TypeRefineContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 653;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 89, this._ctx) ) {
			case 1:
				{
				this.state = 644;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.VAR) {
					{
					this.state = 643;
					this.match(MLParser.VAR);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 646;
				this.match(MLParser.VAR);
				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 647;
					this.match(MLParser.T__5);
					this.state = 648;
					this.match(MLParser.VAR);
					}
					}
					this.state = 651;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MLParser.T__5);
				}
				break;
			}
			this.state = 655;
			this.longid();
			this.state = 656;
			this.match(MLParser.T__27);
			this.state = 657;
			this.typ(0);
			{
			this.state = 658;
			this.match(MLParser.T__48);
			this.state = 659;
			this.match(MLParser.T__37);
			this.state = 660;
			this.typrefin();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public spec(): SpecContext;
	public spec(_p: number): SpecContext;
	// @RuleVersion(0)
	public spec(_p?: number): SpecContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: SpecContext = new SpecContext(this._ctx, _parentState);
		let _prevctx: SpecContext = _localctx;
		let _startState: number = 42;
		this.enterRecursionRule(_localctx, 42, MLParser.RULE_spec, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 693;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				_localctx = new ValSpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 663;
				this.match(MLParser.T__35);
				this.state = 664;
				this.valdesc();
				}
				break;

			case 2:
				{
				_localctx = new TypeSpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 665;
				this.match(MLParser.T__37);
				this.state = 666;
				this.typdesc();
				}
				break;

			case 3:
				{
				_localctx = new EquaTypeSpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 667;
				this.match(MLParser.T__54);
				this.state = 668;
				this.typdesc();
				}
				break;

			case 4:
				{
				_localctx = new TypeAbbrevSpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 669;
				this.match(MLParser.T__37);
				this.state = 670;
				this.typbind();
				}
				break;

			case 5:
				{
				_localctx = new DatatypeSpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 671;
				this.match(MLParser.T__38);
				this.state = 672;
				this.datdesc();
				}
				break;

			case 6:
				{
				_localctx = new DatatypeReplSpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 673;
				this.match(MLParser.T__38);
				this.state = 674;
				this.match(MLParser.ID);
				this.state = 675;
				this.match(MLParser.T__27);
				this.state = 676;
				this.match(MLParser.T__38);
				this.state = 677;
				this.longid();
				}
				break;

			case 7:
				{
				_localctx = new ExnSpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 678;
				this.match(MLParser.T__42);
				this.state = 679;
				this.exndesc();
				}
				break;

			case 8:
				{
				_localctx = new StructureSpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 680;
				this.match(MLParser.T__43);
				this.state = 681;
				this.strdesc();
				}
				break;

			case 9:
				{
				_localctx = new EmpSpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				}
				break;

			case 10:
				{
				_localctx = new EmpHeadSeqSpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 683;
				this.match(MLParser.T__10);
				this.state = 684;
				this.spec(6);
				}
				break;

			case 11:
				{
				_localctx = new IncludeOneSpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 685;
				this.match(MLParser.T__55);
				this.state = 686;
				this.sig(0);
				}
				break;

			case 12:
				{
				_localctx = new IncludeManySpecContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 687;
				this.match(MLParser.T__55);
				this.state = 689;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 688;
						this.match(MLParser.ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 691;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 90, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 721;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 719;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 94, this._ctx) ) {
					case 1:
						{
						_localctx = new SeqSpecContext(new SpecContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_spec);
						this.state = 695;
						if (!(this.precpred(this._ctx, 5))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						}
						this.state = 696;
						this.match(MLParser.T__10);
						this.state = 697;
						this.spec(6);
						}
						break;

					case 2:
						{
						_localctx = new TypeSharingSpecContext(new SpecContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_spec);
						this.state = 698;
						if (!(this.precpred(this._ctx, 2))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 2)");
						}
						this.state = 699;
						this.match(MLParser.T__56);
						this.state = 700;
						this.match(MLParser.T__37);
						this.state = 701;
						this.longid();
						this.state = 702;
						this.match(MLParser.T__27);
						this.state = 705;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 703;
								this.match(MLParser.T__27);
								this.state = 704;
								this.longid();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 707;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 92, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;

					case 3:
						{
						_localctx = new StructureSharingSpecContext(new SpecContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_spec);
						this.state = 709;
						if (!(this.precpred(this._ctx, 1))) {
							throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
						}
						this.state = 710;
						this.match(MLParser.T__56);
						this.state = 711;
						this.longid();
						this.state = 712;
						this.match(MLParser.T__27);
						this.state = 715;
						this._errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								this.state = 713;
								this.match(MLParser.T__27);
								this.state = 714;
								this.longid();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							this.state = 717;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 93, this._ctx);
						} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
						}
						break;
					}
					}
				}
				this.state = 723;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 95, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valdesc(): ValdescContext {
		let _localctx: ValdescContext = new ValdescContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, MLParser.RULE_valdesc);
		try {
			_localctx = new ValDescContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 724;
			this.match(MLParser.ID);
			this.state = 725;
			this.match(MLParser.T__14);
			this.state = 726;
			this.typ(0);
			this.state = 729;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				this.state = 727;
				this.match(MLParser.T__48);
				this.state = 728;
				this.valdesc();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public typdesc(): TypdescContext {
		let _localctx: TypdescContext = new TypdescContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, MLParser.RULE_typdesc);
		let _la: number;
		try {
			_localctx = new AbsTypeSpecContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 741;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 99, this._ctx) ) {
			case 1:
				{
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.VAR) {
					{
					this.state = 731;
					this.match(MLParser.VAR);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 734;
				this.match(MLParser.VAR);
				this.state = 737;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 735;
					this.match(MLParser.T__5);
					this.state = 736;
					this.match(MLParser.VAR);
					}
					}
					this.state = 739;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MLParser.T__5);
				}
				break;
			}
			this.state = 743;
			this.match(MLParser.ID);
			this.state = 746;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				{
				this.state = 744;
				this.match(MLParser.T__48);
				this.state = 745;
				this.typdesc();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public datdesc(): DatdescContext {
		let _localctx: DatdescContext = new DatdescContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, MLParser.RULE_datdesc);
		let _la: number;
		try {
			_localctx = new DatDescContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 103, this._ctx) ) {
			case 1:
				{
				this.state = 749;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.VAR) {
					{
					this.state = 748;
					this.match(MLParser.VAR);
					}
				}

				}
				break;

			case 2:
				{
				this.state = 751;
				this.match(MLParser.VAR);
				this.state = 754;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 752;
					this.match(MLParser.T__5);
					this.state = 753;
					this.match(MLParser.VAR);
					}
					}
					this.state = 756;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === MLParser.T__5);
				}
				break;
			}
			this.state = 760;
			this.match(MLParser.ID);
			this.state = 761;
			this.match(MLParser.T__27);
			this.state = 762;
			this.condesc();
			this.state = 765;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 104, this._ctx) ) {
			case 1:
				{
				this.state = 763;
				this.match(MLParser.T__48);
				this.state = 764;
				this.datdesc();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public condesc(): CondescContext {
		let _localctx: CondescContext = new CondescContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, MLParser.RULE_condesc);
		try {
			_localctx = new CondDescContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(MLParser.ID);
			this.state = 770;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 105, this._ctx) ) {
			case 1:
				{
				this.state = 768;
				this.match(MLParser.T__25);
				this.state = 769;
				this.typ(0);
				}
				break;
			}
			this.state = 774;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				this.state = 772;
				this.match(MLParser.T__29);
				this.state = 773;
				this.condesc();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public exndesc(): ExndescContext {
		let _localctx: ExndescContext = new ExndescContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, MLParser.RULE_exndesc);
		try {
			_localctx = new ExnDescContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 776;
			this.match(MLParser.ID);
			this.state = 779;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 107, this._ctx) ) {
			case 1:
				{
				this.state = 777;
				this.match(MLParser.T__25);
				this.state = 778;
				this.typ(0);
				}
				break;
			}
			this.state = 783;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 108, this._ctx) ) {
			case 1:
				{
				this.state = 781;
				this.match(MLParser.T__48);
				this.state = 782;
				this.exndesc();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public strdesc(): StrdescContext {
		let _localctx: StrdescContext = new StrdescContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, MLParser.RULE_strdesc);
		try {
			_localctx = new StrDescContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 785;
			this.match(MLParser.ID);
			this.state = 786;
			this.match(MLParser.T__14);
			this.state = 787;
			this.sig(0);
			this.state = 790;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 109, this._ctx) ) {
			case 1:
				{
				this.state = 788;
				this.match(MLParser.T__48);
				this.state = 789;
				this.strdesc();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public prog(): ProgContext;
	public prog(_p: number): ProgContext;
	// @RuleVersion(0)
	public prog(_p?: number): ProgContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ProgContext = new ProgContext(this._ctx, _parentState);
		let _prevctx: ProgContext = _localctx;
		let _startState: number = 56;
		this.enterRecursionRule(_localctx, 56, MLParser.RULE_prog, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 809;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 110, this._ctx) ) {
			case 1:
				{
				_localctx = new CoreDecProgContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 793;
				this.dec(0);
				this.state = 794;
				this.match(MLParser.EOF);
				}
				break;

			case 2:
				{
				_localctx = new FunctorDecProgContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 796;
				this.match(MLParser.T__57);
				this.state = 797;
				this.fctbind();
				this.state = 798;
				this.match(MLParser.EOF);
				}
				break;

			case 3:
				{
				_localctx = new SignatureDecProgContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 800;
				this.match(MLParser.T__58);
				this.state = 801;
				this.sigbind();
				this.state = 802;
				this.match(MLParser.EOF);
				}
				break;

			case 4:
				{
				_localctx = new EmpProgContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 804;
				this.match(MLParser.EOF);
				}
				break;

			case 5:
				{
				_localctx = new EmpHeadSeqProgContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 805;
				this.match(MLParser.T__10);
				this.state = 806;
				this.prog(0);
				this.state = 807;
				this.match(MLParser.EOF);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 818;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					{
					_localctx = new SeqProgContext(new ProgContext(_parentctx, _parentState));
					this.pushNewRecursionContext(_localctx, _startState, MLParser.RULE_prog);
					this.state = 811;
					if (!(this.precpred(this._ctx, 1))) {
						throw new FailedPredicateException(this, "this.precpred(this._ctx, 1)");
					}
					this.state = 812;
					this.match(MLParser.T__10);
					this.state = 813;
					this.prog(0);
					this.state = 814;
					this.match(MLParser.EOF);
					}
					}
				}
				this.state = 820;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 111, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fctbind(): FctbindContext {
		let _localctx: FctbindContext = new FctbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, MLParser.RULE_fctbind);
		let _la: number;
		try {
			this.state = 883;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 121, this._ctx) ) {
			case 1:
				_localctx = new PlainFctBindCompContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 821;
				this.match(MLParser.ID);
				this.state = 822;
				this.match(MLParser.T__3);
				this.state = 823;
				this.match(MLParser.ID);
				this.state = 824;
				this.match(MLParser.T__14);
				this.state = 825;
				this.sig(0);
				this.state = 826;
				this.match(MLParser.T__4);
				this.state = 829;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__51) {
					{
					this.state = 827;
					this.match(MLParser.T__51);
					this.state = 828;
					this.sig(0);
					}
				}

				this.state = 831;
				this.match(MLParser.T__27);
				this.state = 832;
				this.str(0);
				this.state = 835;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__48) {
					{
					this.state = 833;
					this.match(MLParser.T__48);
					this.state = 834;
					this.fctbind();
					}
				}

				}
				break;

			case 2:
				_localctx = new PlainFctBindSmplContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 837;
				this.match(MLParser.ID);
				this.state = 838;
				this.match(MLParser.T__3);
				this.state = 839;
				this.match(MLParser.ID);
				this.state = 840;
				this.match(MLParser.T__14);
				this.state = 841;
				this.sig(0);
				this.state = 842;
				this.match(MLParser.T__4);
				this.state = 845;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__14) {
					{
					this.state = 843;
					this.match(MLParser.T__14);
					this.state = 844;
					this.sig(0);
					}
				}

				this.state = 847;
				this.match(MLParser.T__27);
				this.state = 848;
				this.str(0);
				this.state = 851;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__48) {
					{
					this.state = 849;
					this.match(MLParser.T__48);
					this.state = 850;
					this.fctbind();
					}
				}

				}
				break;

			case 3:
				_localctx = new OpenedFctBindCompContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 853;
				this.match(MLParser.ID);
				this.state = 854;
				this.match(MLParser.T__3);
				this.state = 855;
				this.spec(0);
				this.state = 856;
				this.match(MLParser.T__4);
				this.state = 861;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 52)) & ~0x1F) === 0 && ((1 << (_la - 52)) & ((1 << (MLParser.T__51 - 52)) | (1 << (MLParser.T__52 - 52)) | (1 << (MLParser.ID - 52)))) !== 0)) {
					{
					this.state = 858;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === MLParser.T__51) {
						{
						this.state = 857;
						this.match(MLParser.T__51);
						}
					}

					this.state = 860;
					this.sig(0);
					}
				}

				this.state = 863;
				this.match(MLParser.T__27);
				this.state = 864;
				this.str(0);
				this.state = 867;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__48) {
					{
					this.state = 865;
					this.match(MLParser.T__48);
					this.state = 866;
					this.fctbind();
					}
				}

				}
				break;

			case 4:
				_localctx = new OpenedFctBindSmplContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 869;
				this.match(MLParser.ID);
				this.state = 870;
				this.match(MLParser.T__3);
				this.state = 871;
				this.spec(0);
				this.state = 872;
				this.match(MLParser.T__4);
				this.state = 875;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__14) {
					{
					this.state = 873;
					this.match(MLParser.T__14);
					this.state = 874;
					this.sig(0);
					}
				}

				this.state = 877;
				this.match(MLParser.T__27);
				this.state = 878;
				this.str(0);
				this.state = 881;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === MLParser.T__48) {
					{
					this.state = 879;
					this.match(MLParser.T__48);
					this.state = 880;
					this.fctbind();
					}
				}

				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sigbind(): SigbindContext {
		let _localctx: SigbindContext = new SigbindContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, MLParser.RULE_sigbind);
		let _la: number;
		try {
			_localctx = new SigBindContext(_localctx);
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 885;
			this.match(MLParser.ID);
			this.state = 886;
			this.match(MLParser.T__27);
			this.state = 887;
			this.sig(0);
			this.state = 890;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === MLParser.T__48) {
				{
				this.state = 888;
				this.match(MLParser.T__48);
				this.state = 889;
				this.sigbind();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.exp_sempred(_localctx as ExpContext, predIndex);

		case 5:
			return this.pat_sempred(_localctx as PatContext, predIndex);

		case 7:
			return this.typ_sempred(_localctx as TypContext, predIndex);

		case 9:
			return this.dec_sempred(_localctx as DecContext, predIndex);

		case 17:
			return this.str_sempred(_localctx as StrContext, predIndex);

		case 19:
			return this.sig_sempred(_localctx as SigContext, predIndex);

		case 21:
			return this.spec_sempred(_localctx as SpecContext, predIndex);

		case 28:
			return this.prog_sempred(_localctx as ProgContext, predIndex);
		}
		return true;
	}
	private exp_sempred(_localctx: ExpContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 11);

		case 1:
			return this.precpred(this._ctx, 10);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 7);
		}
		return true;
	}
	private pat_sempred(_localctx: PatContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 8);

		case 7:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}
	private typ_sempred(_localctx: TypContext, predIndex: number): boolean {
		switch (predIndex) {
		case 8:
			return this.precpred(this._ctx, 2);

		case 9:
			return this.precpred(this._ctx, 6);

		case 10:
			return this.precpred(this._ctx, 5);

		case 11:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}
	private dec_sempred(_localctx: DecContext, predIndex: number): boolean {
		switch (predIndex) {
		case 12:
			return this.precpred(this._ctx, 6);
		}
		return true;
	}
	private str_sempred(_localctx: StrContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 5);

		case 14:
			return this.precpred(this._ctx, 4);
		}
		return true;
	}
	private sig_sempred(_localctx: SigContext, predIndex: number): boolean {
		switch (predIndex) {
		case 15:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private spec_sempred(_localctx: SpecContext, predIndex: number): boolean {
		switch (predIndex) {
		case 16:
			return this.precpred(this._ctx, 5);

		case 17:
			return this.precpred(this._ctx, 2);

		case 18:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private prog_sempred(_localctx: ProgContext, predIndex: number): boolean {
		switch (predIndex) {
		case 19:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	private static readonly _serializedATNSegments: number = 2;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03E\u037F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C\x04" +
		"\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x03\x02\x03\x02\x03\x02" +
		"\x06\x02D\n\x02\r\x02\x0E\x02E\x03\x03\x03\x03\x05\x03J\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x07\x03W\n\x03\f\x03\x0E\x03Z\v\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x05\x03`\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03g\n" +
		"\x03\f\x03\x0E\x03j\v\x03\x05\x03l\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x06\x03s\n\x03\r\x03\x0E\x03t\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\x7F\n\x03\f\x03\x0E\x03\x82\v" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x9B\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x03\xAE\n" +
		"\x03\f\x03\x0E\x03\xB1\v\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05" +
		"\x04\xB8\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xBF\n\x05" +
		"\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07\x03\x07\x05\x07\xC7\n\x07\x03" +
		"\x07\x03\x07\x05\x07\xCB\n\x07\x03\x07\x03\x07\x05\x07\xCF\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07\xD9\n" +
		"\x07\r\x07\x0E\x07\xDA\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\xE9\n\x07\f\x07" +
		"\x0E\x07\xEC\v\x07\x03\x07\x03\x07\x03\x07\x05\x07\xF1\n\x07\x03\x07\x03" +
		"\x07\x03\x07\x05\x07\xF6\n\x07\x03\x07\x03\x07\x05\x07\xFA\n\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07\x07\x07\u0102\n\x07\f\x07\x0E" +
		"\x07\u0105\v\x07\x03\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\u010D\n\b\x03" +
		"\b\x03\b\x03\b\x05\b\u0112\n\b\x03\b\x03\b\x05\b\u0116\n\b\x03\b\x03\b" +
		"\x05\b\u011A\n\b\x05\b\u011C\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x03\t\x03" +
		"\t\x03\t\x03\t\x05\t\u0127\n\t\x03\t\x05\t\u012A\n\t\x03\t\x03\t\x03\t" +
		"\x03\t\x03\t\x03\t\x03\t\x03\t\x06\t\u0134\n\t\r\t\x0E\t\u0135\x03\t\x03" +
		"\t\x03\t\x03\t\x03\t\x06\t\u013D\n\t\r\t\x0E\t\u013E\x07\t\u0141\n\t\f" +
		"\t\x0E\t\u0144\v\t\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u014B\n\n\x03\v" +
		"\x03\v\x03\v\x05\v\u0150\n\v\x03\v\x03\v\x03\v\x06\v\u0155\n\v\r\v\x0E" +
		"\v\u0156\x05\v\u0159\n\v\x03\v\x03\v\x03\v\x05\v\u015E\n\v\x03\v\x03\v" +
		"\x03\v\x06\v\u0163\n\v\r\v\x0E\v\u0164\x05\v\u0167\n\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\v\u0170\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x05\v\u017B\n\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03" +
		"\v\x03\v\x03\v\x06\v\u0190\n\v\r\v\x0E\v\u0191\x03\v\x03\v\x06\v\u0196" +
		"\n\v\r\v\x0E\v\u0197\x03\v\x03\v\x05\v\u019C\n\v\x03\v\x06\v\u019F\n\v" +
		"\r\v\x0E\v\u01A0\x03\v\x03\v\x05\v\u01A5\n\v\x03\v\x06\v\u01A8\n\v\r\v" +
		"\x0E\v\u01A9\x05\v\u01AC\n\v\x03\v\x03\v\x03\v\x07\v\u01B1\n\v\f\v\x0E" +
		"\v\u01B4\v\v\x03\f\x03\f\x03\f\x03\f\x03\f\x05\f\u01BB\n\f\x03\f\x03\f" +
		"\x05\f\u01BF\n\f\x03\r\x03\r\x03\r\x05\r\u01C4\n\r\x03\x0E\x05\x0E\u01C7" +
		"\n\x0E\x03\x0E\x06\x0E\u01CA\n\x0E\r\x0E\x0E\x0E\u01CB\x03\x0E\x05\x0E" +
		"\u01CF\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01D5\n\x0E\x03\x0E" +
		"\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01DC\n\x0E\x03\x0E\x03\x0E\x03" +
		"\x0E\x03\x0E\x05\x0E\u01E2\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E" +
		"\x03\x0E\x06\x0E\u01EA\n\x0E\r\x0E\x0E\x0E\u01EB\x03\x0E\x03\x0E\x05\x0E" +
		"\u01F0\n\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u01F6\n\x0E\x05\x0E" +
		"\u01F8\n\x0E\x03\x0F\x05\x0F\u01FB\n\x0F\x03\x0F\x03\x0F\x03\x0F\x06\x0F" +
		"\u0200\n\x0F\r\x0F\x0E\x0F\u0201\x05\x0F\u0204\n\x0F\x03\x0F\x03\x0F\x03" +
		"\x0F\x03\x0F\x03\x0F\x05\x0F\u020B\n\x0F\x03\x10\x05\x10\u020E\n\x10\x03" +
		"\x10\x03\x10\x03\x10\x06\x10\u0213\n\x10\r\x10\x0E\x10\u0214\x05\x10\u0217" +
		"\n\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x05\x10\u021E\n\x10\x03" +
		"\x11\x03\x11\x03\x11\x05\x11\u0223\n\x11\x03\x11\x03\x11\x05\x11\u0227" +
		"\n\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u022F\n" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x05\x12\u0236\n\x12\x05\x12" +
		"\u0238\n\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x05\x13\u0250\n\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x07\x13\u0258\n\x13\f\x13\x0E" +
		"\x13\u025B\v\x13\x03\x14\x03\x14\x03\x14\x05\x14\u0260\n\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x05\x14\u0266\n\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\u026B\n\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14\u0271\n\x14\x05\x14" +
		"\u0273\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u027B" +
		"\n\x15\x03\x15\x03\x15\x03\x15\x03\x15\x07\x15\u0281\n\x15\f\x15\x0E\x15" +
		"\u0284\v\x15\x03\x16\x05\x16\u0287\n\x16\x03\x16\x03\x16\x03\x16\x06\x16" +
		"\u028C\n\x16\r\x16\x0E\x16\u028D\x05\x16\u0290\n\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x06\x17\u02B4\n\x17\r\x17\x0E\x17" +
		"\u02B5\x05\x17\u02B8\n\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03" +
		"\x17\x03\x17\x03\x17\x03\x17\x03\x17\x06\x17\u02C4\n\x17\r\x17\x0E\x17" +
		"\u02C5\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x03\x17\x06\x17\u02CE\n" +
		"\x17\r\x17\x0E\x17\u02CF\x07\x17\u02D2\n\x17\f\x17\x0E\x17\u02D5\v\x17" +
		"\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u02DC\n\x18\x03\x19\x05" +
		"\x19\u02DF\n\x19\x03\x19\x03\x19\x03\x19\x06\x19\u02E4\n\x19\r\x19\x0E" +
		"\x19\u02E5\x05\x19\u02E8\n\x19\x03\x19\x03\x19\x03\x19\x05\x19\u02ED\n" +
		"\x19\x03\x1A\x05\x1A\u02F0\n\x1A\x03\x1A\x03\x1A\x03\x1A\x06\x1A\u02F5" +
		"\n\x1A\r\x1A\x0E\x1A\u02F6\x05\x1A\u02F9\n\x1A\x03\x1A\x03\x1A\x03\x1A" +
		"\x03\x1A\x03\x1A\x05\x1A\u0300\n\x1A\x03\x1B\x03\x1B\x03\x1B\x05\x1B\u0305" +
		"\n\x1B\x03\x1B\x03\x1B\x05\x1B\u0309\n\x1B\x03\x1C\x03\x1C\x03\x1C\x05" +
		"\x1C\u030E\n\x1C\x03\x1C\x03\x1C\x05\x1C\u0312\n\x1C\x03\x1D\x03\x1D\x03" +
		"\x1D\x03\x1D\x03\x1D\x05\x1D\u0319\n\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u032C\n\x1E\x03\x1E\x03\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x07\x1E\u0333\n\x1E\f\x1E\x0E\x1E\u0336\v\x1E\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0340" +
		"\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0346\n\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0350\n\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0356\n\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x05\x1F\u035D\n\x1F\x03\x1F\x05\x1F\u0360\n\x1F\x03" +
		"\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0366\n\x1F\x03\x1F\x03\x1F\x03\x1F" +
		"\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u036E\n\x1F\x03\x1F\x03\x1F\x03\x1F\x03" +
		"\x1F\x05\x1F\u0374\n\x1F\x05\x1F\u0376\n\x1F\x03 \x03 \x03 \x03 \x03 " +
		"\x05 \u037D\n \x03 \x02\x02\n\x04\f\x10\x14$(,:!\x02\x02\x04\x02\x06\x02" +
		"\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A" +
		"\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x02" +
		"4\x026\x028\x02:\x02<\x02>\x02\x02\x03\x03\x02@A\x02\u0419\x02@\x03\x02" +
		"\x02\x02\x04\x9A\x03\x02\x02\x02\x06\xB2\x03\x02\x02\x02\b\xB9\x03\x02" +
		"\x02\x02\n\xC0\x03\x02\x02\x02\f\xF9\x03\x02\x02\x02\x0E\u011B\x03\x02" +
		"\x02\x02\x10\u0129\x03\x02\x02\x02\x12\u0145\x03\x02\x02\x02\x14\u01AB" +
		"\x03\x02\x02\x02\x16\u01BE\x03\x02\x02\x02\x18\u01C0\x03\x02\x02\x02\x1A" +
		"\u01F7\x03\x02\x02\x02\x1C\u0203\x03\x02\x02\x02\x1E\u0216\x03\x02\x02" +
		"\x02 \u021F\x03\x02\x02\x02\"\u0237\x03\x02\x02\x02$\u024F\x03\x02\x02" +
		"\x02&\u0272\x03\x02\x02\x02(\u027A\x03\x02\x02\x02*\u028F\x03\x02\x02" +
		"\x02,\u02B7\x03\x02\x02\x02.\u02D6\x03\x02\x02\x020\u02E7\x03\x02\x02" +
		"\x022\u02F8\x03\x02\x02\x024\u0301\x03\x02\x02\x026\u030A\x03\x02\x02" +
		"\x028\u0313\x03\x02\x02\x02:\u032B\x03\x02\x02\x02<\u0375\x03\x02\x02" +
		"\x02>\u0377\x03\x02\x02\x02@C\x07@\x02\x02AB\x07\x03\x02\x02BD\x07@\x02" +
		"\x02CA\x03\x02\x02\x02DE\x03\x02\x02\x02EC\x03\x02\x02\x02EF\x03\x02\x02" +
		"\x02F\x03\x03\x02\x02\x02GI\b\x03\x01\x02HJ\x07\x04\x02\x02IH\x03\x02" +
		"\x02\x02IJ\x03\x02\x02\x02JK\x03\x02\x02\x02K\x9B\x05\x02\x02\x02L\x9B" +
		"\x07@\x02\x02M\x9B\x07A\x02\x02NO\x07\x05\x02\x02O\x9B\x05\n\x06\x02P" +
		"Q\x07\x06\x02\x02Q\x9B\x07\x07\x02\x02RS\x07\x06\x02\x02SX\x05\x04\x03" +
		"\x02TU\x07\b\x02\x02UW\x05\x04\x03\x02VT\x03\x02\x02\x02WZ\x03\x02\x02" +
		"\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02Y[\x03\x02\x02\x02ZX\x03\x02\x02" +
		"\x02[\\\x07\x07\x02\x02\\\x9B\x03\x02\x02\x02]_\x07\t\x02\x02^`\x05\x06" +
		"\x04\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x03\x02\x02\x02a\x9B\x07" +
		"\n\x02\x02bk\x07\v\x02\x02ch\x05\x04\x03\x02de\x07\b\x02\x02eg\x05\x04" +
		"\x03\x02fd\x03\x02\x02\x02gj\x03\x02\x02\x02hf\x03\x02\x02\x02hi\x03\x02" +
		"\x02\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02kc\x03\x02\x02\x02kl\x03\x02" +
		"\x02\x02lm\x03\x02\x02\x02m\x9B\x07\f\x02\x02no\x07\x06\x02\x02or\x05" +
		"\x04\x03\x02pq\x07\r\x02\x02qs\x05\x04\x03\x02rp\x03\x02\x02\x02st\x03" +
		"\x02\x02\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02uv\x03\x02\x02\x02vw\x07" +
		"\x07\x02\x02w\x9B\x03\x02\x02\x02xy\x07\x0E\x02\x02yz\x05\x14\v\x02z{" +
		"\x07\x0F\x02\x02{\x80\x05\x04\x03\x02|}\x07\r\x02\x02}\x7F\x05\x04\x03" +
		"\x02~|\x03\x02\x02\x02\x7F\x82\x03\x02\x02\x02\x80~\x03\x02\x02\x02\x80" +
		"\x81\x03\x02\x02\x02\x81\x83\x03\x02\x02\x02\x82\x80\x03\x02\x02\x02\x83" +
		"\x84\x07\x10\x02\x02\x84\x9B\x03\x02\x02\x02\x85\x86\x07\x12\x02\x02\x86" +
		"\x9B\x05\x04\x03\n\x87\x88\x07\x16\x02\x02\x88\x89\x05\x04\x03\x02\x89" +
		"\x8A\x07\x17\x02\x02\x8A\x8B\x05\x04\x03\x02\x8B\x8C\x07\x18\x02\x02\x8C" +
		"\x8D\x05\x04\x03\x06\x8D\x9B\x03\x02\x02\x02\x8E\x8F\x07\x19\x02\x02\x8F" +
		"\x90\x05\x04\x03\x02\x90\x91\x07\x1A\x02\x02\x91\x92\x05\x04\x03\x05\x92" +
		"\x9B\x03\x02\x02\x02\x93\x94\x07\x1B\x02\x02\x94\x95\x05\x04\x03\x02\x95" +
		"\x96\x07\x1C\x02\x02\x96\x97\x05\b\x05\x02\x97\x9B\x03\x02\x02\x02\x98" +
		"\x99\x07\x1D\x02\x02\x99\x9B\x05\b\x05\x02\x9AG\x03\x02\x02\x02\x9AL\x03" +
		"\x02\x02\x02\x9AM\x03\x02\x02\x02\x9AN\x03\x02\x02\x02\x9AP\x03\x02\x02" +
		"\x02\x9AR\x03\x02\x02\x02\x9A]\x03\x02\x02\x02\x9Ab\x03\x02\x02\x02\x9A" +
		"n\x03\x02\x02\x02\x9Ax\x03\x02\x02\x02\x9A\x85\x03\x02\x02\x02\x9A\x87" +
		"\x03\x02\x02\x02\x9A\x8E\x03\x02\x02\x02\x9A\x93\x03\x02\x02\x02\x9A\x98" +
		"\x03\x02\x02\x02\x9B\xAF\x03\x02\x02\x02\x9C\x9D\f\r\x02\x02\x9D\x9E\x07" +
		"@\x02\x02\x9E\xAE\x05\x04\x03\x0E\x9F\xA0\f\f\x02\x02\xA0\xAE\x05\x04" +
		"\x03\r\xA1\xA2\f\b\x02\x02\xA2\xA3\x07\x14\x02\x02\xA3\xAE\x05\x04\x03" +
		"\t\xA4\xA5\f\x07\x02\x02\xA5\xA6\x07\x15\x02\x02\xA6\xAE\x05\x04\x03\b" +
		"\xA7\xA8\f\v\x02\x02\xA8\xA9\x07\x11\x02\x02\xA9\xAE\x05\x10\t\x02\xAA" +
		"\xAB\f\t\x02\x02\xAB\xAC\x07\x13\x02\x02\xAC\xAE\x05\b\x05\x02\xAD\x9C" +
		"\x03\x02\x02\x02\xAD\x9F\x03\x02\x02\x02\xAD\xA1\x03\x02\x02\x02\xAD\xA4" +
		"\x03\x02\x02\x02\xAD\xA7\x03\x02\x02\x02\xAD\xAA\x03\x02\x02\x02\xAE\xB1" +
		"\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02\x02\x02\xB0\x05" +
		"\x03\x02\x02\x02\xB1\xAF\x03\x02\x02\x02\xB2\xB3\x05\n\x06\x02\xB3\xB4" +
		"\x07\x1E\x02\x02\xB4\xB7\x05\x04\x03\x02\xB5\xB6\x07\b\x02\x02\xB6\xB8" +
		"\x05\x06\x04\x02\xB7\xB5\x03\x02\x02\x02\xB7\xB8\x03\x02\x02\x02\xB8\x07" +
		"\x03\x02\x02\x02\xB9\xBA\x05\f\x07\x02\xBA\xBB\x07\x1F\x02\x02\xBB\xBE" +
		"\x05\x04\x03\x02\xBC\xBD\x07 \x02\x02\xBD\xBF\x05\b\x05\x02\xBE\xBC\x03" +
		"\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\t\x03\x02\x02\x02\xC0\xC1\t\x02" +
		"\x02\x02\xC1\v\x03\x02\x02\x02\xC2\xC3\b\x07\x01\x02\xC3\xFA\x07A\x02" +
		"\x02\xC4\xFA\x07!\x02\x02\xC5\xC7\x07\x04\x02\x02\xC6\xC5\x03\x02\x02" +
		"\x02\xC6\xC7\x03\x02\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xFA\x07@\x02" +
		"\x02\xC9\xCB\x07\x04\x02\x02\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03\x02\x02" +
		"\x02\xCB\xCC\x03\x02\x02\x02\xCC\xCE\x05\x02\x02\x02\xCD\xCF\x05\f\x07" +
		"\x02\xCE\xCD\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xFA\x03\x02\x02" +
		"\x02\xD0\xD1\x07\x06\x02\x02\xD1\xD2\x05\f\x07\x02\xD2\xD3\x07\x07\x02" +
		"\x02\xD3\xFA\x03\x02\x02\x02\xD4\xD5\x07\x06\x02\x02\xD5\xD8\x05\f\x07" +
		"\x02\xD6\xD7\x07\b\x02\x02\xD7\xD9\x05\f\x07\x02\xD8\xD6\x03\x02\x02\x02" +
		"\xD9\xDA\x03\x02\x02\x02\xDA\xD8\x03\x02\x02\x02\xDA\xDB\x03\x02\x02\x02" +
		"\xDB\xDC\x03\x02\x02\x02\xDC\xDD\x07\x07\x02\x02\xDD\xFA\x03\x02\x02\x02" +
		"\xDE\xDF\x07\t\x02\x02\xDF\xE0\x05\x0E\b\x02\xE0\xE1\x07\n\x02\x02\xE1" +
		"\xFA\x03\x02\x02\x02\xE2\xE3\x07\v\x02\x02\xE3\xFA\x07\f\x02\x02\xE4\xE5" +
		"\x07\v\x02\x02\xE5\xEA\x05\f\x07\x02\xE6\xE7\x07\b\x02\x02\xE7\xE9\x05" +
		"\f\x07\x02\xE8\xE6\x03\x02\x02\x02\xE9\xEC\x03\x02\x02\x02\xEA\xE8\x03" +
		"\x02\x02\x02\xEA\xEB\x03\x02\x02\x02\xEB\xED\x03\x02\x02\x02\xEC\xEA\x03" +
		"\x02\x02\x02\xED\xEE\x07\f\x02\x02\xEE\xFA\x03\x02\x02\x02\xEF\xF1\x07" +
		"\x04\x02\x02\xF0\xEF\x03\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF2\x03" +
		"\x02\x02\x02\xF2\xF5\x07@\x02\x02\xF3\xF4\x07\x11\x02\x02\xF4\xF6\x05" +
		"\x10\t\x02\xF5\xF3\x03\x02\x02\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF7\x03" +
		"\x02\x02\x02\xF7\xF8\x07\"\x02\x02\xF8\xFA\x05\f\x07\x03\xF9\xC2\x03\x02" +
		"\x02\x02\xF9\xC4\x03\x02\x02\x02\xF9\xC6\x03\x02\x02\x02\xF9\xCA\x03\x02" +
		"\x02\x02\xF9\xD0\x03\x02\x02\x02\xF9\xD4\x03\x02\x02\x02\xF9\xDE\x03\x02" +
		"\x02\x02\xF9\xE2\x03\x02\x02\x02\xF9\xE4\x03\x02\x02\x02\xF9\xF0\x03\x02" +
		"\x02\x02\xFA\u0103\x03\x02\x02\x02\xFB\xFC\f\n\x02\x02\xFC\xFD\x07@\x02" +
		"\x02\xFD\u0102\x05\f\x07\v\xFE\xFF\f\x04\x02\x02\xFF\u0100\x07\x11\x02" +
		"\x02\u0100\u0102\x05\x10\t\x02\u0101\xFB\x03\x02\x02\x02\u0101\xFE\x03" +
		"\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02\u0103" +
		"\u0104\x03\x02\x02\x02\u0104\r\x03\x02\x02\x02\u0105\u0103\x03\x02\x02" +
		"\x02\u0106\u011C\x07#\x02\x02\u0107\u0108\x05\n\x06\x02\u0108\u0109\x07" +
		"\x1E\x02\x02\u0109\u010C\x05\f\x07\x02\u010A\u010B\x07\b\x02\x02\u010B" +
		"\u010D\x05\x0E\b\x02\u010C\u010A\x03\x02\x02\x02\u010C\u010D\x03\x02\x02" +
		"\x02\u010D\u011C\x03\x02\x02\x02\u010E\u0111\x07@\x02\x02\u010F\u0110" +
		"\x07\x11\x02\x02\u0110\u0112\x05\x10\t\x02\u0111\u010F\x03\x02\x02\x02" +
		"\u0111\u0112\x03\x02\x02\x02\u0112\u0115\x03\x02\x02\x02\u0113\u0114\x07" +
		"\"\x02\x02\u0114\u0116\x05\f\x07\x02\u0115\u0113\x03\x02\x02\x02\u0115" +
		"\u0116\x03\x02\x02\x02\u0116\u0119\x03\x02\x02\x02\u0117\u0118\x07\b\x02" +
		"\x02\u0118\u011A\x05\x0E\b\x02\u0119\u0117\x03\x02\x02\x02\u0119\u011A" +
		"\x03\x02\x02\x02\u011A\u011C\x03\x02\x02\x02\u011B\u0106\x03\x02\x02\x02" +
		"\u011B\u0107\x03\x02\x02\x02\u011B\u010E\x03\x02\x02\x02\u011C\x0F\x03" +
		"\x02\x02\x02\u011D\u011E\b\t\x01\x02\u011E\u012A\x07B\x02\x02\u011F\u012A" +
		"\x05\x02\x02\x02\u0120\u0121\x07\x06\x02\x02\u0121\u0122\x05\x10\t\x02" +
		"\u0122\u0123\x07\x07\x02\x02\u0123\u012A\x03\x02\x02\x02\u0124\u0126\x07" +
		"\t\x02\x02\u0125\u0127\x05\x12\n\x02\u0126\u0125\x03\x02\x02\x02\u0126" +
		"\u0127\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u012A\x07\n\x02" +
		"\x02\u0129\u011D\x03\x02\x02\x02\u0129\u011F\x03\x02\x02\x02\u0129\u0120" +
		"\x03\x02\x02\x02\u0129\u0124\x03\x02\x02\x02\u012A\u0142\x03\x02\x02\x02" +
		"\u012B\u012C\f\x04\x02\x02\u012C\u012D\x07%\x02\x02\u012D\u0141\x05\x10" +
		"\t\x05\u012E\u012F\f\b\x02\x02\u012F\u0141\x05\x02\x02\x02\u0130\u0133" +
		"\f\x07\x02\x02\u0131\u0132\x07\b\x02\x02\u0132\u0134\x05\x10\t\x02\u0133" +
		"\u0131\x03\x02\x02\x02\u0134\u0135\x03\x02\x02\x02\u0135\u0133\x03\x02" +
		"\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02\u0137" +
		"\u0138\x05\x02\x02\x02\u0138\u0141\x03\x02\x02\x02\u0139\u013C\f\x05\x02" +
		"\x02\u013A\u013B\x07$\x02\x02\u013B\u013D\x05\x10\t\x02\u013C\u013A\x03" +
		"\x02\x02\x02\u013D\u013E\x03\x02\x02\x02\u013E\u013C\x03\x02\x02\x02\u013E" +
		"\u013F\x03\x02\x02\x02\u013F\u0141\x03\x02\x02\x02\u0140\u012B\x03\x02" +
		"\x02\x02\u0140\u012E\x03\x02\x02\x02\u0140\u0130\x03\x02\x02\x02\u0140" +
		"\u0139\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02" +
		"\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\x11\x03\x02\x02\x02\u0144\u0142" +
		"\x03\x02\x02\x02\u0145\u0146\x05\n\x06\x02\u0146\u0147\x07\x11\x02\x02" +
		"\u0147\u014A\x05\x10\t\x02\u0148\u0149\x07\b\x02\x02\u0149\u014B\x05\x12" +
		"\n\x02\u014A\u0148\x03\x02\x02\x02\u014A\u014B\x03\x02\x02\x02\u014B\x13" +
		"\x03\x02\x02\x02\u014C\u014D\b\v\x01\x02\u014D\u0158\x07&\x02\x02\u014E" +
		"\u0150\x07B\x02\x02\u014F\u014E\x03\x02\x02\x02\u014F\u0150\x03\x02\x02" +
		"\x02\u0150\u0159\x03\x02\x02\x02\u0151\u0154\x07B\x02\x02\u0152\u0153" +
		"\x07\b\x02\x02\u0153\u0155\x07B\x02\x02\u0154\u0152\x03\x02\x02\x02\u0155" +
		"\u0156\x03\x02\x02\x02\u0156\u0154\x03\x02\x02\x02\u0156\u0157\x03\x02" +
		"\x02\x02\u0157\u0159\x03\x02\x02\x02\u0158\u014F\x03\x02\x02\x02\u0158" +
		"\u0151\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u01AC\x05\x16" +
		"\f\x02\u015B\u0166\x07\'\x02\x02\u015C\u015E\x07B\x02\x02\u015D\u015C" +
		"\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0167\x03\x02\x02\x02" +
		"\u015F\u0162\x07B\x02\x02\u0160\u0161\x07\b\x02\x02\u0161\u0163\x07B\x02" +
		"\x02\u0162\u0160\x03\x02\x02\x02\u0163\u0164\x03\x02\x02\x02\u0164\u0162" +
		"\x03\x02\x02\x02\u0164\u0165\x03\x02\x02\x02\u0165\u0167\x03\x02\x02\x02" +
		"\u0166\u015D\x03\x02\x02\x02\u0166\u015F\x03\x02\x02\x02\u0167\u0168\x03" +
		"\x02\x02\x02\u0168\u01AC\x05\x18\r\x02\u0169\u016A\x07(\x02\x02\u016A" +
		"\u01AC\x05\x1C\x0F\x02\u016B\u016C\x07)\x02\x02\u016C\u016F\x05\x1E\x10" +
		"\x02\u016D\u016E\x07*\x02\x02\u016E\u0170\x05\x1C\x0F\x02\u016F\u016D" +
		"\x03\x02\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u01AC\x03\x02\x02\x02" +
		"\u0171\u0172\x07)\x02\x02\u0172\u0173\x07@\x02\x02\u0173\u0174\x07\x1E" +
		"\x02\x02\u0174\u0175\x07)\x02\x02\u0175\u01AC\x05\x02\x02\x02\u0176\u0177" +
		"\x07+\x02\x02\u0177\u017A\x05\x1E\x10\x02\u0178\u0179\x07*\x02\x02\u0179" +
		"\u017B\x05\x1C\x0F\x02\u017A\u0178\x03\x02\x02\x02\u017A\u017B\x03\x02" +
		"\x02\x02\u017B\u017C\x03\x02\x02\x02\u017C\u017D\x07,\x02\x02\u017D\u017E" +
		"\x05\x14\v\x02\u017E\u017F\x07\x10\x02\x02\u017F\u01AC\x03\x02\x02\x02" +
		"\u0180\u0181\x07-\x02\x02\u0181\u01AC\x05\"\x12\x02\u0182\u0183\x07.\x02" +
		"\x02\u0183\u01AC\x05&\x14\x02\u0184\u01AC\x03\x02\x02\x02\u0185\u0186" +
		"\x07\r\x02\x02\u0186\u01AC\x05\x14\v\t\u0187\u0188\x07/\x02\x02\u0188" +
		"\u0189\x05\x14\v\x02\u0189\u018A\x07\x0F\x02\x02\u018A\u018B\x05\x14\v" +
		"\x02\u018B\u018C\x07\x10\x02\x02\u018C\u01AC\x03\x02\x02\x02\u018D\u018F" +
		"\x070\x02\x02\u018E\u0190\x05\x02\x02\x02\u018F\u018E\x03\x02\x02\x02" +
		"\u0190\u0191\x03\x02\x02\x02\u0191\u018F\x03\x02\x02\x02\u0191\u0192\x03" +
		"\x02\x02\x02\u0192\u01AC\x03\x02\x02\x02\u0193\u0195\x071\x02\x02\u0194" +
		"\u0196\x07@\x02\x02\u0195\u0194\x03\x02\x02\x02\u0196\u0197\x03\x02\x02" +
		"\x02\u0197\u0195\x03\x02\x02\x02\u0197\u0198\x03\x02\x02\x02\u0198\u01AC" +
		"\x03\x02\x02\x02\u0199\u019B\x072\x02\x02\u019A\u019C\x07D\x02\x02\u019B" +
		"\u019A\x03\x02\x02\x02\u019B\u019C\x03\x02\x02\x02\u019C\u019E\x03\x02" +
		"\x02\x02\u019D\u019F\x07@\x02\x02\u019E\u019D\x03\x02\x02\x02\u019F\u01A0" +
		"\x03\x02\x02\x02\u01A0\u019E\x03\x02\x02\x02\u01A0\u01A1\x03\x02\x02\x02" +
		"\u01A1\u01AC\x03\x02\x02\x02\u01A2\u01A4\x072\x02\x02\u01A3\u01A5\x07" +
		"D\x02\x02\u01A4\u01A3\x03\x02\x02\x02\u01A4\u01A5\x03\x02\x02\x02\u01A5" +
		"\u01A7\x03\x02\x02\x02\u01A6\u01A8\x07@\x02\x02\u01A7\u01A6\x03\x02\x02" +
		"\x02\u01A8\u01A9\x03\x02\x02\x02\u01A9\u01A7\x03\x02\x02\x02\u01A9\u01AA" +
		"\x03\x02\x02\x02\u01AA\u01AC\x03\x02\x02\x02\u01AB\u014C\x03\x02\x02\x02" +
		"\u01AB\u015B\x03\x02\x02\x02\u01AB\u0169\x03\x02\x02\x02\u01AB\u016B\x03" +
		"\x02\x02\x02\u01AB\u0171\x03\x02\x02\x02\u01AB\u0176\x03\x02\x02\x02\u01AB" +
		"\u0180\x03\x02\x02\x02\u01AB\u0182\x03\x02\x02\x02\u01AB\u0184\x03\x02" +
		"\x02\x02\u01AB\u0185\x03\x02\x02\x02\u01AB\u0187\x03\x02\x02\x02\u01AB" +
		"\u018D\x03\x02\x02\x02\u01AB\u0193\x03\x02\x02\x02\u01AB\u0199\x03\x02" +
		"\x02\x02\u01AB\u01A2\x03\x02\x02\x02\u01AC\u01B2\x03\x02\x02\x02\u01AD" +
		"\u01AE\f\b\x02\x02\u01AE\u01AF\x07\r\x02\x02\u01AF\u01B1\x05\x14\v\t\u01B0" +
		"\u01AD\x03\x02\x02\x02\u01B1\u01B4\x03\x02\x02\x02\u01B2\u01B0\x03\x02" +
		"\x02";
	private static readonly _serializedATNSegment1: string =
		"\x02\u01B2\u01B3\x03\x02\x02\x02\u01B3\x15\x03\x02\x02\x02\u01B4\u01B2" +
		"\x03\x02\x02\x02\u01B5\u01B6\x05\f\x07\x02\u01B6\u01B7\x07\x1E\x02\x02" +
		"\u01B7\u01BA\x05\x04\x03\x02\u01B8\u01B9\x073\x02\x02\u01B9\u01BB\x05" +
		"\x16\f\x02\u01BA\u01B8\x03\x02\x02\x02\u01BA\u01BB\x03\x02\x02\x02\u01BB" +
		"\u01BF\x03\x02\x02\x02\u01BC\u01BD\x074\x02\x02\u01BD\u01BF\x05\x16\f" +
		"\x02\u01BE\u01B5\x03\x02\x02\x02\u01BE\u01BC\x03\x02\x02\x02\u01BF\x17" +
		"\x03\x02\x02\x02\u01C0\u01C3\x05\x1A\x0E\x02\u01C1\u01C2\x073\x02\x02" +
		"\u01C2\u01C4\x05\x18\r\x02\u01C3\u01C1\x03\x02\x02\x02\u01C3\u01C4\x03" +
		"\x02\x02\x02\u01C4\x19\x03\x02\x02\x02\u01C5\u01C7\x07\x04\x02\x02\u01C6" +
		"\u01C5\x03\x02\x02\x02\u01C6\u01C7\x03\x02\x02\x02\u01C7\u01C9\x03\x02" +
		"\x02\x02\u01C8\u01CA\x05\f\x07\x02\u01C9\u01C8\x03\x02\x02\x02\u01CA\u01CB" +
		"\x03\x02\x02\x02\u01CB\u01C9\x03\x02\x02\x02\u01CB\u01CC\x03\x02\x02\x02" +
		"\u01CC\u01CE\x03\x02\x02\x02\u01CD\u01CF\x05\x10\t\x02\u01CE\u01CD\x03" +
		"\x02\x02\x02\u01CE\u01CF\x03\x02\x02\x02\u01CF\u01D0\x03\x02\x02\x02\u01D0" +
		"\u01D1\x07\x1E\x02\x02\u01D1\u01D4\x05\x04\x03\x02\u01D2\u01D3\x07 \x02" +
		"\x02\u01D3\u01D5\x05\x1A\x0E\x02\u01D4\u01D2\x03\x02\x02\x02\u01D4\u01D5" +
		"\x03\x02\x02\x02\u01D5\u01F8\x03\x02\x02\x02\u01D6\u01D7\x05\f\x07\x02" +
		"\u01D7\u01D8\x07@\x02\x02\u01D8\u01DB\x05\f\x07\x02\u01D9\u01DA\x07\x11" +
		"\x02\x02\u01DA\u01DC\x05\x10\t\x02\u01DB\u01D9\x03\x02\x02\x02\u01DB\u01DC" +
		"\x03\x02\x02\x02\u01DC\u01DD\x03\x02\x02\x02\u01DD\u01DE\x07\x1E\x02\x02" +
		"\u01DE\u01E1\x05\x04\x03\x02\u01DF\u01E0\x07 \x02\x02\u01E0\u01E2\x05" +
		"\x1A\x0E\x02\u01E1\u01DF\x03\x02\x02\x02\u01E1\u01E2\x03\x02\x02\x02\u01E2" +
		"\u01F8\x03\x02\x02\x02\u01E3\u01E4\x07\x06\x02\x02\u01E4\u01E5\x05\f\x07" +
		"\x02\u01E5\u01E6\x07@\x02\x02\u01E6\u01E7\x05\f\x07\x02\u01E7\u01E9\x07" +
		"\x07\x02\x02\u01E8\u01EA\x05\f\x07\x02\u01E9\u01E8\x03\x02\x02\x02\u01EA" +
		"\u01EB\x03\x02\x02\x02\u01EB\u01E9\x03\x02\x02\x02\u01EB\u01EC\x03\x02" +
		"\x02\x02\u01EC\u01EF\x03\x02\x02\x02\u01ED\u01EE\x07\x11\x02\x02\u01EE" +
		"\u01F0\x05\x10\t\x02\u01EF\u01ED\x03\x02\x02\x02\u01EF\u01F0\x03\x02\x02" +
		"\x02\u01F0\u01F1\x03\x02\x02\x02\u01F1\u01F2\x07\x1E\x02\x02\u01F2\u01F5" +
		"\x05\x04\x03\x02\u01F3\u01F4\x07 \x02\x02\u01F4\u01F6\x05\x1A\x0E\x02" +
		"\u01F5\u01F3\x03\x02\x02\x02\u01F5\u01F6\x03\x02\x02\x02\u01F6\u01F8\x03" +
		"\x02\x02\x02\u01F7\u01C6\x03\x02\x02\x02\u01F7\u01D6\x03\x02\x02\x02\u01F7" +
		"\u01E3\x03\x02\x02\x02\u01F8\x1B\x03\x02\x02\x02\u01F9\u01FB\x07B\x02" +
		"\x02\u01FA\u01F9\x03\x02\x02\x02\u01FA\u01FB\x03\x02\x02\x02\u01FB\u0204" +
		"\x03\x02\x02\x02\u01FC\u01FF\x07B\x02\x02\u01FD\u01FE\x07\b\x02\x02\u01FE" +
		"\u0200\x07B\x02\x02\u01FF\u01FD\x03\x02\x02\x02\u0200\u0201\x03\x02\x02" +
		"\x02\u0201\u01FF\x03\x02\x02\x02\u0201\u0202\x03\x02\x02\x02\u0202\u0204" +
		"\x03\x02\x02\x02\u0203\u01FA\x03\x02\x02\x02\u0203\u01FC\x03\x02\x02\x02" +
		"\u0204\u0205\x03\x02\x02\x02\u0205\u0206\x07@\x02\x02\u0206\u0207\x07" +
		"\x1E\x02\x02\u0207\u020A\x05\x10\t\x02\u0208\u0209\x073\x02\x02\u0209" +
		"\u020B\x05\x1C\x0F\x02\u020A\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02" +
		"\x02\x02\u020B\x1D\x03\x02\x02\x02\u020C\u020E\x07B\x02\x02\u020D\u020C" +
		"\x03\x02\x02\x02\u020D\u020E\x03\x02\x02\x02\u020E\u0217\x03\x02\x02\x02" +
		"\u020F\u0212\x07B\x02\x02\u0210\u0211\x07\b\x02\x02\u0211\u0213\x07B\x02" +
		"\x02\u0212\u0210\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0212" +
		"\x03\x02\x02\x02\u0214\u0215\x03\x02\x02\x02\u0215\u0217\x03\x02\x02\x02" +
		"\u0216\u020D\x03\x02\x02\x02\u0216\u020F\x03\x02\x02\x02\u0217\u0218\x03" +
		"\x02\x02\x02\u0218\u0219\x07@\x02\x02\u0219\u021A\x07\x1E\x02\x02\u021A" +
		"\u021D\x05 \x11\x02\u021B\u021C\x073\x02\x02\u021C\u021E\x05\x1E\x10\x02" +
		"\u021D\u021B\x03\x02\x02\x02\u021D\u021E\x03\x02\x02\x02\u021E\x1F\x03" +
		"\x02\x02\x02\u021F\u0222\x07@\x02\x02\u0220\u0221\x07\x1C\x02\x02\u0221" +
		"\u0223\x05\x10\t\x02\u0222\u0220\x03\x02\x02\x02\u0222\u0223\x03\x02\x02" +
		"\x02\u0223\u0226\x03\x02\x02\x02\u0224\u0225\x07 \x02\x02\u0225\u0227" +
		"\x05 \x11\x02\u0226\u0224\x03\x02\x02\x02\u0226\u0227\x03\x02\x02\x02" +
		"\u0227!\x03\x02\x02\x02\u0228\u0229\x07@\x02\x02\u0229\u022A\x07\x1C\x02" +
		"\x02\u022A\u022B\x05\x10\t\x02\u022B\u022E\x03\x02\x02\x02\u022C\u022D" +
		"\x07 \x02\x02\u022D\u022F\x05\"\x12\x02\u022E\u022C\x03\x02\x02\x02\u022E" +
		"\u022F\x03\x02\x02\x02\u022F\u0238\x03\x02\x02\x02\u0230\u0231\x07@\x02" +
		"\x02\u0231\u0232\x07\x1E\x02\x02\u0232\u0235\x05\x02\x02\x02\u0233\u0234" +
		"\x073\x02\x02\u0234\u0236\x05\"\x12\x02\u0235\u0233\x03\x02\x02\x02\u0235" +
		"\u0236\x03\x02\x02\x02\u0236\u0238\x03\x02\x02\x02\u0237\u0228\x03\x02" +
		"\x02\x02\u0237\u0230\x03\x02\x02\x02\u0238#\x03\x02\x02\x02\u0239\u023A" +
		"\b\x13\x01\x02\u023A\u0250\x05\x02\x02\x02\u023B\u023C\x075\x02\x02\u023C" +
		"\u023D\x05\x14\v\x02\u023D\u023E\x07\x10\x02\x02\u023E\u0250\x03\x02\x02" +
		"\x02\u023F\u0240\x07@\x02\x02\u0240\u0241\x07\x06\x02\x02\u0241\u0242" +
		"\x05$\x13\x02\u0242\u0243\x07\x07\x02\x02\u0243\u0250\x03\x02\x02\x02" +
		"\u0244\u0245\x07@\x02\x02\u0245\u0246\x07\x06\x02\x02\u0246\u0247\x05" +
		"\x14\v\x02\u0247\u0248\x07\x07\x02\x02\u0248\u0250\x03\x02\x02\x02\u0249" +
		"\u024A\x07\x0E\x02\x02\u024A\u024B\x05\x14\v\x02\u024B\u024C\x07\x0F\x02" +
		"\x02\u024C\u024D\x05$\x13\x02\u024D\u024E\x07\x10\x02\x02\u024E\u0250" +
		"\x03\x02\x02\x02\u024F\u0239\x03\x02\x02\x02\u024F\u023B\x03\x02\x02\x02" +
		"\u024F\u023F\x03\x02\x02\x02\u024F\u0244\x03\x02\x02\x02\u024F\u0249\x03" +
		"\x02\x02\x02\u0250\u0259\x03\x02\x02\x02\u0251\u0252\f\x07\x02\x02\u0252" +
		"\u0253\x07\x11\x02\x02\u0253\u0258\x05(\x15\x02\u0254\u0255\f\x06\x02" +
		"\x02\u0255\u0256\x076\x02\x02\u0256\u0258\x05(\x15\x02\u0257\u0251\x03" +
		"\x02\x02\x02\u0257\u0254\x03\x02\x02\x02\u0258\u025B\x03\x02\x02\x02\u0259" +
		"\u0257\x03\x02\x02\x02\u0259\u025A\x03\x02\x02\x02\u025A%\x03\x02\x02" +
		"\x02\u025B\u0259\x03\x02\x02\x02\u025C\u025F\x07@\x02\x02\u025D\u025E" +
		"\x076\x02\x02\u025E\u0260\x05(\x15\x02\u025F\u025D\x03\x02\x02\x02\u025F" +
		"\u0260\x03\x02\x02\x02\u0260\u0261\x03\x02\x02\x02\u0261\u0262\x07\x1E" +
		"\x02\x02\u0262\u0265\x05$\x13\x02\u0263\u0264\x073\x02\x02\u0264\u0266" +
		"\x05&\x14\x02\u0265\u0263\x03\x02\x02\x02\u0265\u0266\x03\x02\x02\x02" +
		"\u0266\u0273\x03\x02\x02\x02\u0267\u026A\x07@\x02\x02\u0268\u0269\x07" +
		"\x11\x02\x02\u0269\u026B\x05(\x15\x02\u026A\u0268\x03\x02\x02\x02\u026A" +
		"\u026B\x03\x02\x02\x02\u026B\u026C\x03\x02\x02\x02\u026C\u026D\x07\x1E" +
		"\x02\x02\u026D\u0270\x05$\x13\x02\u026E\u026F\x073\x02\x02\u026F\u0271" +
		"\x05&\x14\x02\u0270\u026E\x03\x02\x02\x02\u0270\u0271\x03\x02\x02\x02" +
		"\u0271\u0273\x03\x02\x02\x02\u0272\u025C\x03\x02\x02\x02\u0272\u0267\x03" +
		"\x02\x02\x02\u0273\'\x03\x02\x02\x02\u0274\u0275\b\x15\x01\x02\u0275\u027B" +
		"\x07@\x02\x02\u0276\u0277\x077\x02\x02\u0277\u0278\x05,\x17\x02\u0278" +
		"\u0279\x07\x10\x02\x02\u0279\u027B\x03\x02\x02\x02\u027A\u0274\x03\x02" +
		"\x02\x02\u027A\u0276\x03\x02\x02\x02\u027B\u0282\x03\x02\x02\x02\u027C" +
		"\u027D\f\x03\x02\x02\u027D\u027E\x078\x02\x02\u027E\u027F\x07(\x02\x02" +
		"\u027F\u0281\x05*\x16\x02\u0280\u027C\x03\x02\x02\x02\u0281\u0284\x03" +
		"\x02\x02\x02\u0282\u0280\x03\x02\x02\x02\u0282\u0283\x03\x02\x02\x02\u0283" +
		")\x03\x02\x02\x02\u0284\u0282\x03\x02\x02\x02\u0285\u0287\x07B\x02\x02" +
		"\u0286\u0285\x03\x02\x02\x02\u0286\u0287\x03\x02\x02\x02\u0287\u0290\x03" +
		"\x02\x02\x02\u0288\u028B\x07B\x02\x02\u0289\u028A\x07\b\x02\x02\u028A" +
		"\u028C\x07B\x02\x02\u028B\u0289\x03\x02\x02\x02\u028C\u028D\x03\x02\x02" +
		"\x02\u028D\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u0290" +
		"\x03\x02\x02\x02\u028F\u0286\x03\x02\x02\x02\u028F\u0288\x03\x02\x02\x02" +
		"\u0290\u0291\x03\x02\x02\x02\u0291\u0292\x05\x02\x02\x02\u0292\u0293\x07" +
		"\x1E\x02\x02\u0293\u0294\x05\x10\t\x02\u0294\u0295\x073\x02\x02\u0295" +
		"\u0296\x07(\x02\x02\u0296\u0297\x05*\x16\x02\u0297+\x03\x02\x02\x02\u0298" +
		"\u0299\b\x17\x01\x02\u0299\u029A\x07&\x02\x02\u029A\u02B8\x05.\x18\x02" +
		"\u029B\u029C\x07(\x02\x02\u029C\u02B8\x050\x19\x02\u029D\u029E\x079\x02" +
		"\x02\u029E\u02B8\x050\x19\x02\u029F\u02A0\x07(\x02\x02\u02A0\u02B8\x05" +
		"\x1C\x0F\x02\u02A1\u02A2\x07)\x02\x02\u02A2\u02B8\x052\x1A\x02\u02A3\u02A4" +
		"\x07)\x02\x02\u02A4\u02A5\x07@\x02\x02\u02A5\u02A6\x07\x1E\x02\x02\u02A6" +
		"\u02A7\x07)\x02\x02\u02A7\u02B8\x05\x02\x02\x02\u02A8\u02A9\x07-\x02\x02" +
		"\u02A9\u02B8\x056\x1C\x02\u02AA\u02AB\x07.\x02\x02\u02AB\u02B8\x058\x1D" +
		"\x02\u02AC\u02B8\x03\x02\x02\x02\u02AD\u02AE\x07\r\x02\x02\u02AE\u02B8" +
		"\x05,\x17\b\u02AF\u02B0\x07:\x02\x02\u02B0\u02B8\x05(\x15\x02\u02B1\u02B3" +
		"\x07:\x02\x02\u02B2\u02B4\x07@\x02\x02\u02B3\u02B2\x03\x02\x02\x02\u02B4" +
		"\u02B5\x03\x02\x02\x02\u02B5\u02B3\x03\x02\x02\x02\u02B5\u02B6\x03\x02" +
		"\x02\x02\u02B6\u02B8\x03\x02\x02\x02\u02B7\u0298\x03\x02\x02\x02\u02B7" +
		"\u029B\x03\x02\x02\x02\u02B7\u029D\x03\x02\x02\x02\u02B7\u029F\x03\x02" +
		"\x02\x02\u02B7\u02A1\x03\x02\x02\x02\u02B7\u02A3\x03\x02\x02\x02\u02B7" +
		"\u02A8\x03\x02\x02\x02\u02B7\u02AA\x03\x02\x02\x02\u02B7\u02AC\x03\x02" +
		"\x02\x02\u02B7\u02AD\x03\x02\x02\x02\u02B7\u02AF\x03\x02\x02\x02\u02B7" +
		"\u02B1\x03\x02\x02\x02\u02B8\u02D3\x03\x02\x02\x02\u02B9\u02BA\f\x07\x02" +
		"\x02\u02BA\u02BB\x07\r\x02\x02\u02BB\u02D2\x05,\x17\b\u02BC\u02BD\f\x04" +
		"\x02\x02\u02BD\u02BE\x07;\x02\x02\u02BE\u02BF\x07(\x02\x02\u02BF\u02C0" +
		"\x05\x02\x02\x02\u02C0\u02C3\x07\x1E\x02\x02\u02C1\u02C2\x07\x1E\x02\x02" +
		"\u02C2\u02C4\x05\x02\x02\x02\u02C3\u02C1\x03\x02\x02\x02\u02C4\u02C5\x03" +
		"\x02\x02\x02\u02C5\u02C3\x03\x02\x02\x02\u02C5\u02C6\x03\x02\x02\x02\u02C6" +
		"\u02D2\x03\x02\x02\x02\u02C7\u02C8\f\x03\x02\x02\u02C8\u02C9\x07;\x02" +
		"\x02\u02C9\u02CA\x05\x02\x02\x02\u02CA\u02CD\x07\x1E\x02\x02\u02CB\u02CC" +
		"\x07\x1E\x02\x02\u02CC\u02CE\x05\x02\x02\x02\u02CD\u02CB\x03\x02\x02\x02" +
		"\u02CE\u02CF\x03\x02\x02\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03" +
		"\x02\x02\x02\u02D0\u02D2\x03\x02\x02\x02\u02D1\u02B9\x03\x02\x02\x02\u02D1" +
		"\u02BC\x03\x02\x02\x02\u02D1\u02C7\x03\x02\x02\x02\u02D2\u02D5\x03\x02" +
		"\x02\x02\u02D3\u02D1\x03\x02\x02\x02\u02D3\u02D4\x03\x02\x02\x02\u02D4" +
		"-\x03\x02\x02\x02\u02D5\u02D3\x03\x02\x02\x02\u02D6\u02D7\x07@\x02\x02" +
		"\u02D7\u02D8\x07\x11\x02\x02\u02D8\u02DB\x05\x10\t\x02\u02D9\u02DA\x07" +
		"3\x02\x02\u02DA\u02DC\x05.\x18\x02\u02DB\u02D9\x03\x02\x02\x02\u02DB\u02DC" +
		"\x03\x02\x02\x02\u02DC/\x03\x02\x02\x02\u02DD\u02DF\x07B\x02\x02\u02DE" +
		"\u02DD\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02\u02DF\u02E8\x03\x02" +
		"\x02\x02\u02E0\u02E3\x07B\x02\x02\u02E1\u02E2\x07\b\x02\x02\u02E2\u02E4" +
		"\x07B\x02\x02\u02E3\u02E1\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02" +
		"\u02E5\u02E3\x03\x02\x02\x02\u02E5\u02E6\x03\x02\x02\x02\u02E6\u02E8\x03" +
		"\x02\x02\x02\u02E7\u02DE\x03\x02\x02\x02\u02E7\u02E0\x03\x02\x02\x02\u02E8" +
		"\u02E9\x03\x02\x02\x02\u02E9\u02EC\x07@\x02\x02\u02EA\u02EB\x073\x02\x02" +
		"\u02EB\u02ED\x050\x19\x02\u02EC\u02EA\x03\x02\x02\x02\u02EC\u02ED\x03" +
		"\x02\x02\x02\u02ED1\x03\x02\x02\x02\u02EE\u02F0\x07B\x02\x02\u02EF\u02EE" +
		"\x03\x02\x02\x02\u02EF\u02F0\x03\x02\x02\x02\u02F0\u02F9\x03\x02\x02\x02" +
		"\u02F1\u02F4\x07B\x02\x02\u02F2\u02F3\x07\b\x02\x02\u02F3\u02F5\x07B\x02" +
		"\x02\u02F4\u02F2\x03\x02\x02\x02\u02F5\u02F6\x03\x02\x02\x02\u02F6\u02F4" +
		"\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02\u02F7\u02F9\x03\x02\x02\x02" +
		"\u02F8\u02EF\x03\x02\x02\x02\u02F8\u02F1\x03\x02\x02\x02\u02F9\u02FA\x03" +
		"\x02\x02\x02\u02FA\u02FB\x07@\x02\x02\u02FB\u02FC\x07\x1E\x02\x02\u02FC" +
		"\u02FF\x054\x1B\x02\u02FD\u02FE\x073\x02\x02\u02FE\u0300\x052\x1A\x02" +
		"\u02FF\u02FD\x03\x02\x02\x02\u02FF\u0300\x03\x02\x02\x02\u03003\x03\x02" +
		"\x02\x02\u0301\u0304\x07@\x02\x02\u0302\u0303\x07\x1C\x02\x02\u0303\u0305" +
		"\x05\x10\t\x02\u0304\u0302\x03\x02\x02\x02\u0304\u0305\x03\x02\x02\x02" +
		"\u0305\u0308\x03\x02\x02\x02\u0306\u0307\x07 \x02\x02\u0307\u0309\x05" +
		"4\x1B\x02\u0308\u0306\x03\x02\x02\x02\u0308\u0309\x03\x02\x02\x02\u0309" +
		"5\x03\x02\x02\x02\u030A\u030D\x07@\x02\x02\u030B\u030C\x07\x1C\x02\x02" +
		"\u030C\u030E\x05\x10\t\x02\u030D\u030B\x03\x02\x02\x02\u030D\u030E\x03" +
		"\x02\x02\x02\u030E\u0311\x03\x02\x02\x02\u030F\u0310\x073\x02\x02\u0310" +
		"\u0312\x056\x1C\x02\u0311\u030F\x03\x02\x02\x02\u0311\u0312\x03\x02\x02" +
		"\x02\u03127\x03\x02\x02\x02\u0313\u0314\x07@\x02\x02\u0314\u0315\x07\x11" +
		"\x02\x02\u0315\u0318\x05(\x15\x02\u0316\u0317\x073\x02\x02\u0317\u0319" +
		"\x058\x1D\x02\u0318\u0316\x03\x02\x02\x02\u0318\u0319\x03\x02\x02\x02" +
		"\u03199\x03\x02\x02\x02\u031A\u031B\b\x1E\x01\x02\u031B\u031C\x05\x14" +
		"\v\x02\u031C\u031D\x07\x02\x02\x03\u031D\u032C\x03\x02\x02\x02\u031E\u031F" +
		"\x07<\x02\x02\u031F\u0320\x05<\x1F\x02\u0320\u0321\x07\x02\x02\x03\u0321" +
		"\u032C\x03\x02\x02\x02\u0322\u0323\x07=\x02\x02\u0323\u0324\x05> \x02" +
		"\u0324\u0325\x07\x02\x02\x03\u0325\u032C\x03\x02\x02\x02\u0326\u032C\x07" +
		"\x02\x02\x03\u0327\u0328\x07\r\x02\x02\u0328\u0329\x05:\x1E\x02\u0329" +
		"\u032A\x07\x02\x02\x03\u032A\u032C\x03\x02\x02\x02\u032B\u031A\x03\x02" +
		"\x02\x02\u032B\u031E\x03\x02\x02\x02\u032B\u0322\x03\x02\x02\x02\u032B" +
		"\u0326\x03\x02\x02\x02\u032B\u0327\x03\x02\x02\x02\u032C\u0334\x03\x02" +
		"\x02\x02\u032D\u032E\f\x03\x02\x02\u032E\u032F\x07\r\x02\x02\u032F\u0330" +
		"\x05:\x1E\x02\u0330\u0331\x07\x02\x02\x03\u0331\u0333\x03\x02\x02\x02" +
		"\u0332\u032D\x03\x02\x02\x02\u0333\u0336\x03\x02\x02\x02\u0334\u0332\x03" +
		"\x02\x02\x02\u0334\u0335\x03\x02\x02\x02\u0335;\x03\x02\x02\x02\u0336" +
		"\u0334\x03\x02\x02\x02\u0337\u0338\x07@\x02\x02\u0338\u0339\x07\x06\x02" +
		"\x02\u0339\u033A\x07@\x02\x02\u033A\u033B\x07\x11\x02\x02\u033B\u033C" +
		"\x05(\x15\x02\u033C\u033F\x07\x07\x02\x02\u033D\u033E\x076\x02\x02\u033E" +
		"\u0340\x05(\x15\x02\u033F\u033D\x03\x02\x02\x02\u033F\u0340\x03\x02\x02" +
		"\x02\u0340\u0341\x03\x02\x02\x02\u0341\u0342\x07\x1E\x02\x02\u0342\u0345" +
		"\x05$\x13\x02\u0343\u0344\x073\x02\x02\u0344\u0346\x05<\x1F\x02\u0345" +
		"\u0343\x03\x02\x02\x02\u0345\u0346\x03\x02\x02\x02\u0346\u0376\x03\x02" +
		"\x02\x02\u0347\u0348\x07@\x02\x02\u0348\u0349\x07\x06\x02\x02\u0349\u034A" +
		"\x07@\x02\x02\u034A\u034B\x07\x11\x02\x02\u034B\u034C\x05(\x15\x02\u034C" +
		"\u034F\x07\x07\x02\x02\u034D\u034E\x07\x11\x02\x02\u034E\u0350\x05(\x15" +
		"\x02\u034F\u034D\x03\x02\x02\x02\u034F\u0350\x03\x02\x02\x02\u0350\u0351" +
		"\x03\x02\x02\x02\u0351\u0352\x07\x1E\x02\x02\u0352\u0355\x05$\x13\x02" +
		"\u0353\u0354\x073\x02\x02\u0354\u0356\x05<\x1F\x02\u0355\u0353\x03\x02" +
		"\x02\x02\u0355\u0356\x03\x02\x02\x02\u0356\u0376\x03\x02\x02\x02\u0357" +
		"\u0358\x07@\x02\x02\u0358\u0359\x07\x06\x02\x02\u0359\u035A\x05,\x17\x02" +
		"\u035A\u035F\x07\x07\x02\x02\u035B\u035D\x076\x02\x02\u035C\u035B\x03" +
		"\x02\x02\x02\u035C\u035D\x03\x02\x02\x02\u035D\u035E\x03\x02\x02\x02\u035E" +
		"\u0360\x05(\x15\x02\u035F\u035C\x03\x02\x02\x02\u035F\u0360\x03\x02\x02" +
		"\x02\u0360\u0361\x03\x02\x02\x02\u0361\u0362\x07\x1E\x02\x02\u0362\u0365" +
		"\x05$\x13\x02\u0363\u0364\x073\x02\x02\u0364\u0366\x05<\x1F\x02\u0365" +
		"\u0363\x03\x02\x02\x02\u0365\u0366\x03\x02\x02\x02\u0366\u0376\x03\x02" +
		"\x02\x02\u0367\u0368\x07@\x02\x02\u0368\u0369\x07\x06\x02\x02\u0369\u036A" +
		"\x05,\x17\x02\u036A\u036D\x07\x07\x02\x02\u036B\u036C\x07\x11\x02\x02" +
		"\u036C\u036E\x05(\x15\x02\u036D\u036B\x03\x02\x02\x02\u036D\u036E\x03" +
		"\x02\x02\x02\u036E\u036F\x03\x02\x02\x02\u036F\u0370\x07\x1E\x02\x02\u0370" +
		"\u0373\x05$\x13\x02\u0371\u0372\x073\x02\x02\u0372\u0374\x05<\x1F\x02" +
		"\u0373\u0371\x03\x02\x02\x02\u0373\u0374\x03\x02\x02\x02\u0374\u0376\x03" +
		"\x02\x02\x02\u0375\u0337\x03\x02\x02\x02\u0375\u0347\x03\x02\x02\x02\u0375" +
		"\u0357\x03\x02\x02\x02\u0375\u0367\x03\x02\x02\x02\u0376=\x03\x02\x02" +
		"\x02\u0377\u0378\x07@\x02\x02\u0378\u0379\x07\x1E\x02\x02\u0379\u037C" +
		"\x05(\x15\x02\u037A\u037B\x073\x02\x02\u037B\u037D\x05> \x02\u037C\u037A" +
		"\x03\x02\x02\x02\u037C\u037D\x03\x02\x02\x02\u037D?\x03\x02\x02\x02}E" +
		"IX_hkt\x80\x9A\xAD\xAF\xB7\xBE\xC6\xCA\xCE\xDA\xEA\xF0\xF5\xF9\u0101\u0103" +
		"\u010C\u0111\u0115\u0119\u011B\u0126\u0129\u0135\u013E\u0140\u0142\u014A" +
		"\u014F\u0156\u0158\u015D\u0164\u0166\u016F\u017A\u0191\u0197\u019B\u01A0" +
		"\u01A4\u01A9\u01AB\u01B2\u01BA\u01BE\u01C3\u01C6\u01CB\u01CE\u01D4\u01DB" +
		"\u01E1\u01EB\u01EF\u01F5\u01F7\u01FA\u0201\u0203\u020A\u020D\u0214\u0216" +
		"\u021D\u0222\u0226\u022E\u0235\u0237\u024F\u0257\u0259\u025F\u0265\u026A" +
		"\u0270\u0272\u027A\u0282\u0286\u028D\u028F\u02B5\u02B7\u02C5\u02CF\u02D1" +
		"\u02D3\u02DB\u02DE\u02E5\u02E7\u02EC\u02EF\u02F6\u02F8\u02FF\u0304\u0308" +
		"\u030D\u0311\u0318\u032B\u0334\u033F\u0345\u034F\u0355\u035C\u035F\u0365" +
		"\u036D\u0373\u0375\u037C";
	public static readonly _serializedATN: string = Utils.join(
		[
			MLParser._serializedATNSegment0,
			MLParser._serializedATNSegment1,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!MLParser.__ATN) {
			MLParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(MLParser._serializedATN));
		}

		return MLParser.__ATN;
	}

}

export class LongidContext extends ParserRuleContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.ID);
		} else {
			return this.getToken(MLParser.ID, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_longid; }
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterLongid) {
			listener.enterLongid(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitLongid) {
			listener.exitLongid(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitLongid) {
			return visitor.visitLongid(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExpContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_exp; }
	public copyFrom(ctx: ExpContext): void {
		super.copyFrom(ctx);
	}
}
export class ValueOrConsExpContext extends ExpContext {
	public longid(): LongidContext {
		return this.getRuleContext(0, LongidContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterValueOrConsExp) {
			listener.enterValueOrConsExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitValueOrConsExp) {
			listener.exitValueOrConsExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitValueOrConsExp) {
			return visitor.visitValueOrConsExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IdentExpContext extends ExpContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterIdentExp) {
			listener.enterIdentExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitIdentExp) {
			listener.exitIdentExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitIdentExp) {
			return visitor.visitIdentExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConstExpContext extends ExpContext {
	public CON(): TerminalNode { return this.getToken(MLParser.CON, 0); }
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterConstExp) {
			listener.enterConstExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitConstExp) {
			listener.exitConstExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitConstExp) {
			return visitor.visitConstExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RecordSelecExpContext extends ExpContext {
	public lab(): LabContext {
		return this.getRuleContext(0, LabContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterRecordSelecExp) {
			listener.enterRecordSelecExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitRecordSelecExp) {
			listener.exitRecordSelecExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitRecordSelecExp) {
			return visitor.visitRecordSelecExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesesExpContext extends ExpContext {
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterParenthesesExp) {
			listener.enterParenthesesExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitParenthesesExp) {
			listener.exitParenthesesExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitParenthesesExp) {
			return visitor.visitParenthesesExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleExpContext extends ExpContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTupleExp) {
			listener.enterTupleExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTupleExp) {
			listener.exitTupleExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTupleExp) {
			return visitor.visitTupleExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RecordExpContext extends ExpContext {
	public exprow(): ExprowContext | undefined {
		return this.tryGetRuleContext(0, ExprowContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterRecordExp) {
			listener.enterRecordExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitRecordExp) {
			listener.exitRecordExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitRecordExp) {
			return visitor.visitRecordExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListExpContext extends ExpContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterListExp) {
			listener.enterListExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitListExp) {
			listener.exitListExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitListExp) {
			return visitor.visitListExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SeqExpContext extends ExpContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterSeqExp) {
			listener.enterSeqExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitSeqExp) {
			listener.exitSeqExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitSeqExp) {
			return visitor.visitSeqExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LocalDecExpContext extends ExpContext {
	public dec(): DecContext {
		return this.getRuleContext(0, DecContext);
	}
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterLocalDecExp) {
			listener.enterLocalDecExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitLocalDecExp) {
			listener.exitLocalDecExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitLocalDecExp) {
			return visitor.visitLocalDecExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InfixAppExpContext extends ExpContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterInfixAppExp) {
			listener.enterInfixAppExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitInfixAppExp) {
			listener.exitInfixAppExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitInfixAppExp) {
			return visitor.visitInfixAppExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AppExpContext extends ExpContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterAppExp) {
			listener.enterAppExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitAppExp) {
			listener.exitAppExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitAppExp) {
			return visitor.visitAppExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeAnnoExpContext extends ExpContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public typ(): TypContext {
		return this.getRuleContext(0, TypContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTypeAnnoExp) {
			listener.enterTypeAnnoExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTypeAnnoExp) {
			listener.exitTypeAnnoExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTypeAnnoExp) {
			return visitor.visitTypeAnnoExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExnRaisingExpContext extends ExpContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterExnRaisingExp) {
			listener.enterExnRaisingExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitExnRaisingExp) {
			listener.exitExnRaisingExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitExnRaisingExp) {
			return visitor.visitExnRaisingExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExnHandlingExpContext extends ExpContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public ematch(): EmatchContext {
		return this.getRuleContext(0, EmatchContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterExnHandlingExp) {
			listener.enterExnHandlingExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitExnHandlingExp) {
			listener.exitExnHandlingExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitExnHandlingExp) {
			return visitor.visitExnHandlingExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConjExpContext extends ExpContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterConjExp) {
			listener.enterConjExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitConjExp) {
			listener.exitConjExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitConjExp) {
			return visitor.visitConjExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DisjExpContext extends ExpContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterDisjExp) {
			listener.enterDisjExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitDisjExp) {
			listener.exitDisjExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitDisjExp) {
			return visitor.visitDisjExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CondExpContext extends ExpContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterCondExp) {
			listener.enterCondExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitCondExp) {
			listener.exitCondExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitCondExp) {
			return visitor.visitCondExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IterExpContext extends ExpContext {
	public exp(): ExpContext[];
	public exp(i: number): ExpContext;
	public exp(i?: number): ExpContext | ExpContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpContext);
		} else {
			return this.getRuleContext(i, ExpContext);
		}
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterIterExp) {
			listener.enterIterExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitIterExp) {
			listener.exitIterExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitIterExp) {
			return visitor.visitIterExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CaseAnalysisExpContext extends ExpContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public ematch(): EmatchContext {
		return this.getRuleContext(0, EmatchContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterCaseAnalysisExp) {
			listener.enterCaseAnalysisExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitCaseAnalysisExp) {
			listener.exitCaseAnalysisExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitCaseAnalysisExp) {
			return visitor.visitCaseAnalysisExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncExpContext extends ExpContext {
	public ematch(): EmatchContext {
		return this.getRuleContext(0, EmatchContext);
	}
	constructor(ctx: ExpContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterFuncExp) {
			listener.enterFuncExp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitFuncExp) {
			listener.exitFuncExp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitFuncExp) {
			return visitor.visitFuncExp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExprowContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_exprow; }
	public copyFrom(ctx: ExprowContext): void {
		super.copyFrom(ctx);
	}
}
export class ExpRowContext extends ExprowContext {
	public lab(): LabContext {
		return this.getRuleContext(0, LabContext);
	}
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public exprow(): ExprowContext | undefined {
		return this.tryGetRuleContext(0, ExprowContext);
	}
	constructor(ctx: ExprowContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterExpRow) {
			listener.enterExpRow(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitExpRow) {
			listener.exitExpRow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitExpRow) {
			return visitor.visitExpRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmatchContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_ematch; }
	public copyFrom(ctx: EmatchContext): void {
		super.copyFrom(ctx);
	}
}
export class MatchBodyContext extends EmatchContext {
	public pat(): PatContext {
		return this.getRuleContext(0, PatContext);
	}
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public ematch(): EmatchContext | undefined {
		return this.tryGetRuleContext(0, EmatchContext);
	}
	constructor(ctx: EmatchContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterMatchBody) {
			listener.enterMatchBody(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitMatchBody) {
			listener.exitMatchBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitMatchBody) {
			return visitor.visitMatchBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabContext extends ParserRuleContext {
	public ID(): TerminalNode | undefined { return this.tryGetToken(MLParser.ID, 0); }
	public CON(): TerminalNode | undefined { return this.tryGetToken(MLParser.CON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_lab; }
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterLab) {
			listener.enterLab(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitLab) {
			listener.exitLab(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitLab) {
			return visitor.visitLab(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_pat; }
	public copyFrom(ctx: PatContext): void {
		super.copyFrom(ctx);
	}
}
export class ConstPatContext extends PatContext {
	public CON(): TerminalNode { return this.getToken(MLParser.CON, 0); }
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterConstPat) {
			listener.enterConstPat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitConstPat) {
			listener.exitConstPat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitConstPat) {
			return visitor.visitConstPat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class WildcardPatContext extends PatContext {
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterWildcardPat) {
			listener.enterWildcardPat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitWildcardPat) {
			listener.exitWildcardPat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitWildcardPat) {
			return visitor.visitWildcardPat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarPatContext extends PatContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterVarPat) {
			listener.enterVarPat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitVarPat) {
			listener.exitVarPat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitVarPat) {
			return visitor.visitVarPat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConsPatContext extends PatContext {
	public longid(): LongidContext {
		return this.getRuleContext(0, LongidContext);
	}
	public pat(): PatContext | undefined {
		return this.tryGetRuleContext(0, PatContext);
	}
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterConsPat) {
			listener.enterConsPat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitConsPat) {
			listener.exitConsPat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitConsPat) {
			return visitor.visitConsPat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InfixConsPatContext extends PatContext {
	public pat(): PatContext[];
	public pat(i: number): PatContext;
	public pat(i?: number): PatContext | PatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatContext);
		} else {
			return this.getRuleContext(i, PatContext);
		}
	}
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterInfixConsPat) {
			listener.enterInfixConsPat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitInfixConsPat) {
			listener.exitInfixConsPat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitInfixConsPat) {
			return visitor.visitInfixConsPat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesesPatContext extends PatContext {
	public pat(): PatContext {
		return this.getRuleContext(0, PatContext);
	}
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterParenthesesPat) {
			listener.enterParenthesesPat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitParenthesesPat) {
			listener.exitParenthesesPat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitParenthesesPat) {
			return visitor.visitParenthesesPat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TuplePatContext extends PatContext {
	public pat(): PatContext[];
	public pat(i: number): PatContext;
	public pat(i?: number): PatContext | PatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatContext);
		} else {
			return this.getRuleContext(i, PatContext);
		}
	}
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTuplePat) {
			listener.enterTuplePat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTuplePat) {
			listener.exitTuplePat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTuplePat) {
			return visitor.visitTuplePat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RecordPatContext extends PatContext {
	public patrow(): PatrowContext {
		return this.getRuleContext(0, PatrowContext);
	}
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterRecordPat) {
			listener.enterRecordPat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitRecordPat) {
			listener.exitRecordPat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitRecordPat) {
			return visitor.visitRecordPat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmpListPatContext extends PatContext {
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterEmpListPat) {
			listener.enterEmpListPat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitEmpListPat) {
			listener.exitEmpListPat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitEmpListPat) {
			return visitor.visitEmpListPat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ListPatContext extends PatContext {
	public pat(): PatContext[];
	public pat(i: number): PatContext;
	public pat(i?: number): PatContext | PatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatContext);
		} else {
			return this.getRuleContext(i, PatContext);
		}
	}
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterListPat) {
			listener.enterListPat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitListPat) {
			listener.exitListPat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitListPat) {
			return visitor.visitListPat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeAnnoPatContext extends PatContext {
	public pat(): PatContext {
		return this.getRuleContext(0, PatContext);
	}
	public typ(): TypContext {
		return this.getRuleContext(0, TypContext);
	}
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTypeAnnoPat) {
			listener.enterTypeAnnoPat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTypeAnnoPat) {
			listener.exitTypeAnnoPat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTypeAnnoPat) {
			return visitor.visitTypeAnnoPat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LayeredPatContext extends PatContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public pat(): PatContext {
		return this.getRuleContext(0, PatContext);
	}
	public typ(): TypContext | undefined {
		return this.tryGetRuleContext(0, TypContext);
	}
	constructor(ctx: PatContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterLayeredPat) {
			listener.enterLayeredPat(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitLayeredPat) {
			listener.exitLayeredPat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitLayeredPat) {
			return visitor.visitLayeredPat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatrowContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_patrow; }
	public copyFrom(ctx: PatrowContext): void {
		super.copyFrom(ctx);
	}
}
export class WildcardPatRowContext extends PatrowContext {
	constructor(ctx: PatrowContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterWildcardPatRow) {
			listener.enterWildcardPatRow(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitWildcardPatRow) {
			listener.exitWildcardPatRow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitWildcardPatRow) {
			return visitor.visitWildcardPatRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PatRowContext extends PatrowContext {
	public lab(): LabContext {
		return this.getRuleContext(0, LabContext);
	}
	public pat(): PatContext {
		return this.getRuleContext(0, PatContext);
	}
	public patrow(): PatrowContext | undefined {
		return this.tryGetRuleContext(0, PatrowContext);
	}
	constructor(ctx: PatrowContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterPatRow) {
			listener.enterPatRow(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitPatRow) {
			listener.exitPatRow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitPatRow) {
			return visitor.visitPatRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class VarPatRowContext extends PatrowContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public typ(): TypContext | undefined {
		return this.tryGetRuleContext(0, TypContext);
	}
	public pat(): PatContext | undefined {
		return this.tryGetRuleContext(0, PatContext);
	}
	public patrow(): PatrowContext | undefined {
		return this.tryGetRuleContext(0, PatrowContext);
	}
	constructor(ctx: PatrowContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterVarPatRow) {
			listener.enterVarPatRow(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitVarPatRow) {
			listener.exitVarPatRow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitVarPatRow) {
			return visitor.visitVarPatRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_typ; }
	public copyFrom(ctx: TypContext): void {
		super.copyFrom(ctx);
	}
}
export class VarTypContext extends TypContext {
	public VAR(): TerminalNode { return this.getToken(MLParser.VAR, 0); }
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterVarTyp) {
			listener.enterVarTyp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitVarTyp) {
			listener.exitVarTyp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitVarTyp) {
			return visitor.visitVarTyp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LongIdTypContext extends TypContext {
	public longid(): LongidContext {
		return this.getRuleContext(0, LongidContext);
	}
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterLongIdTyp) {
			listener.enterLongIdTyp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitLongIdTyp) {
			listener.exitLongIdTyp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitLongIdTyp) {
			return visitor.visitLongIdTyp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConsOneTypContext extends TypContext {
	public typ(): TypContext {
		return this.getRuleContext(0, TypContext);
	}
	public longid(): LongidContext {
		return this.getRuleContext(0, LongidContext);
	}
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterConsOneTyp) {
			listener.enterConsOneTyp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitConsOneTyp) {
			listener.exitConsOneTyp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitConsOneTyp) {
			return visitor.visitConsOneTyp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ConsManyTypContext extends TypContext {
	public typ(): TypContext[];
	public typ(i: number): TypContext;
	public typ(i?: number): TypContext | TypContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypContext);
		} else {
			return this.getRuleContext(i, TypContext);
		}
	}
	public longid(): LongidContext {
		return this.getRuleContext(0, LongidContext);
	}
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterConsManyTyp) {
			listener.enterConsManyTyp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitConsManyTyp) {
			listener.exitConsManyTyp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitConsManyTyp) {
			return visitor.visitConsManyTyp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ParenthesesTypContext extends TypContext {
	public typ(): TypContext {
		return this.getRuleContext(0, TypContext);
	}
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterParenthesesTyp) {
			listener.enterParenthesesTyp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitParenthesesTyp) {
			listener.exitParenthesesTyp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitParenthesesTyp) {
			return visitor.visitParenthesesTyp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TupleTypContext extends TypContext {
	public typ(): TypContext[];
	public typ(i: number): TypContext;
	public typ(i?: number): TypContext | TypContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypContext);
		} else {
			return this.getRuleContext(i, TypContext);
		}
	}
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTupleTyp) {
			listener.enterTupleTyp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTupleTyp) {
			listener.exitTupleTyp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTupleTyp) {
			return visitor.visitTupleTyp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncTypContext extends TypContext {
	public typ(): TypContext[];
	public typ(i: number): TypContext;
	public typ(i?: number): TypContext | TypContext[] {
		if (i === undefined) {
			return this.getRuleContexts(TypContext);
		} else {
			return this.getRuleContext(i, TypContext);
		}
	}
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterFuncTyp) {
			listener.enterFuncTyp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitFuncTyp) {
			listener.exitFuncTyp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitFuncTyp) {
			return visitor.visitFuncTyp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RecordTypContext extends TypContext {
	public typrow(): TyprowContext | undefined {
		return this.tryGetRuleContext(0, TyprowContext);
	}
	constructor(ctx: TypContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterRecordTyp) {
			listener.enterRecordTyp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitRecordTyp) {
			listener.exitRecordTyp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitRecordTyp) {
			return visitor.visitRecordTyp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TyprowContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_typrow; }
	public copyFrom(ctx: TyprowContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeRowContext extends TyprowContext {
	public lab(): LabContext {
		return this.getRuleContext(0, LabContext);
	}
	public typ(): TypContext {
		return this.getRuleContext(0, TypContext);
	}
	public typrow(): TyprowContext | undefined {
		return this.tryGetRuleContext(0, TyprowContext);
	}
	constructor(ctx: TyprowContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTypeRow) {
			listener.enterTypeRow(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTypeRow) {
			listener.exitTypeRow(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTypeRow) {
			return visitor.visitTypeRow(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DecContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_dec; }
	public copyFrom(ctx: DecContext): void {
		super.copyFrom(ctx);
	}
}
export class ValDecContext extends DecContext {
	public valbind(): ValbindContext {
		return this.getRuleContext(0, ValbindContext);
	}
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.VAR);
		} else {
			return this.getToken(MLParser.VAR, i);
		}
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterValDec) {
			listener.enterValDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitValDec) {
			listener.exitValDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitValDec) {
			return visitor.visitValDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FuncDecContext extends DecContext {
	public funbind(): FunbindContext {
		return this.getRuleContext(0, FunbindContext);
	}
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.VAR);
		} else {
			return this.getToken(MLParser.VAR, i);
		}
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterFuncDec) {
			listener.enterFuncDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitFuncDec) {
			listener.exitFuncDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitFuncDec) {
			return visitor.visitFuncDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeDecContext extends DecContext {
	public typbind(): TypbindContext {
		return this.getRuleContext(0, TypbindContext);
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTypeDec) {
			listener.enterTypeDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTypeDec) {
			listener.exitTypeDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTypeDec) {
			return visitor.visitTypeDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DatatypeDecContext extends DecContext {
	public databind(): DatabindContext {
		return this.getRuleContext(0, DatabindContext);
	}
	public typbind(): TypbindContext | undefined {
		return this.tryGetRuleContext(0, TypbindContext);
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterDatatypeDec) {
			listener.enterDatatypeDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitDatatypeDec) {
			listener.exitDatatypeDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitDatatypeDec) {
			return visitor.visitDatatypeDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DatatypeReplDecContext extends DecContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public longid(): LongidContext {
		return this.getRuleContext(0, LongidContext);
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterDatatypeReplDec) {
			listener.enterDatatypeReplDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitDatatypeReplDec) {
			listener.exitDatatypeReplDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitDatatypeReplDec) {
			return visitor.visitDatatypeReplDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class AbstractTypeDecContext extends DecContext {
	public databind(): DatabindContext {
		return this.getRuleContext(0, DatabindContext);
	}
	public dec(): DecContext {
		return this.getRuleContext(0, DecContext);
	}
	public typbind(): TypbindContext | undefined {
		return this.tryGetRuleContext(0, TypbindContext);
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterAbstractTypeDec) {
			listener.enterAbstractTypeDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitAbstractTypeDec) {
			listener.exitAbstractTypeDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitAbstractTypeDec) {
			return visitor.visitAbstractTypeDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExnDecContext extends DecContext {
	public exnbind(): ExnbindContext {
		return this.getRuleContext(0, ExnbindContext);
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterExnDec) {
			listener.enterExnDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitExnDec) {
			listener.exitExnDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitExnDec) {
			return visitor.visitExnDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructureDecContext extends DecContext {
	public strbind(): StrbindContext {
		return this.getRuleContext(0, StrbindContext);
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterStructureDec) {
			listener.enterStructureDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitStructureDec) {
			listener.exitStructureDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitStructureDec) {
			return visitor.visitStructureDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmpDecContext extends DecContext {
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterEmpDec) {
			listener.enterEmpDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitEmpDec) {
			listener.exitEmpDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitEmpDec) {
			return visitor.visitEmpDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmpHeadSeqDecContext extends DecContext {
	public dec(): DecContext {
		return this.getRuleContext(0, DecContext);
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterEmpHeadSeqDec) {
			listener.enterEmpHeadSeqDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitEmpHeadSeqDec) {
			listener.exitEmpHeadSeqDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitEmpHeadSeqDec) {
			return visitor.visitEmpHeadSeqDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SeqDecContext extends DecContext {
	public dec(): DecContext[];
	public dec(i: number): DecContext;
	public dec(i?: number): DecContext | DecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecContext);
		} else {
			return this.getRuleContext(i, DecContext);
		}
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterSeqDec) {
			listener.enterSeqDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitSeqDec) {
			listener.exitSeqDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitSeqDec) {
			return visitor.visitSeqDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LocalDecContext extends DecContext {
	public dec(): DecContext[];
	public dec(i: number): DecContext;
	public dec(i?: number): DecContext | DecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(DecContext);
		} else {
			return this.getRuleContext(i, DecContext);
		}
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterLocalDec) {
			listener.enterLocalDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitLocalDec) {
			listener.exitLocalDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitLocalDec) {
			return visitor.visitLocalDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncludeDecContext extends DecContext {
	public longid(): LongidContext[];
	public longid(i: number): LongidContext;
	public longid(i?: number): LongidContext | LongidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LongidContext);
		} else {
			return this.getRuleContext(i, LongidContext);
		}
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterIncludeDec) {
			listener.enterIncludeDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitIncludeDec) {
			listener.exitIncludeDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitIncludeDec) {
			return visitor.visitIncludeDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class NonfixDecContext extends DecContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.ID);
		} else {
			return this.getToken(MLParser.ID, i);
		}
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterNonfixDec) {
			listener.enterNonfixDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitNonfixDec) {
			listener.exitNonfixDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitNonfixDec) {
			return visitor.visitNonfixDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LeftAssocInfixDecContext extends DecContext {
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(MLParser.DIGIT, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.ID);
		} else {
			return this.getToken(MLParser.ID, i);
		}
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterLeftAssocInfixDec) {
			listener.enterLeftAssocInfixDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitLeftAssocInfixDec) {
			listener.exitLeftAssocInfixDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitLeftAssocInfixDec) {
			return visitor.visitLeftAssocInfixDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RightAssocInfixDecContext extends DecContext {
	public DIGIT(): TerminalNode | undefined { return this.tryGetToken(MLParser.DIGIT, 0); }
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.ID);
		} else {
			return this.getToken(MLParser.ID, i);
		}
	}
	constructor(ctx: DecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterRightAssocInfixDec) {
			listener.enterRightAssocInfixDec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitRightAssocInfixDec) {
			listener.exitRightAssocInfixDec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitRightAssocInfixDec) {
			return visitor.visitRightAssocInfixDec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValbindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_valbind; }
	public copyFrom(ctx: ValbindContext): void {
		super.copyFrom(ctx);
	}
}
export class DestValBindContext extends ValbindContext {
	public pat(): PatContext {
		return this.getRuleContext(0, PatContext);
	}
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public valbind(): ValbindContext | undefined {
		return this.tryGetRuleContext(0, ValbindContext);
	}
	constructor(ctx: ValbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterDestValBind) {
			listener.enterDestValBind(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitDestValBind) {
			listener.exitDestValBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitDestValBind) {
			return visitor.visitDestValBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RecurValBindContext extends ValbindContext {
	public valbind(): ValbindContext {
		return this.getRuleContext(0, ValbindContext);
	}
	constructor(ctx: ValbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterRecurValBind) {
			listener.enterRecurValBind(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitRecurValBind) {
			listener.exitRecurValBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitRecurValBind) {
			return visitor.visitRecurValBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunbindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_funbind; }
	public copyFrom(ctx: FunbindContext): void {
		super.copyFrom(ctx);
	}
}
export class ClausalFuncBindContext extends FunbindContext {
	public funmatch(): FunmatchContext {
		return this.getRuleContext(0, FunmatchContext);
	}
	public funbind(): FunbindContext | undefined {
		return this.tryGetRuleContext(0, FunbindContext);
	}
	constructor(ctx: FunbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterClausalFuncBind) {
			listener.enterClausalFuncBind(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitClausalFuncBind) {
			listener.exitClausalFuncBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitClausalFuncBind) {
			return visitor.visitClausalFuncBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunmatchContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_funmatch; }
	public copyFrom(ctx: FunmatchContext): void {
		super.copyFrom(ctx);
	}
}
export class NonfixFunMatchContext extends FunmatchContext {
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public pat(): PatContext[];
	public pat(i: number): PatContext;
	public pat(i?: number): PatContext | PatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatContext);
		} else {
			return this.getRuleContext(i, PatContext);
		}
	}
	public typ(): TypContext | undefined {
		return this.tryGetRuleContext(0, TypContext);
	}
	public funmatch(): FunmatchContext | undefined {
		return this.tryGetRuleContext(0, FunmatchContext);
	}
	constructor(ctx: FunmatchContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterNonfixFunMatch) {
			listener.enterNonfixFunMatch(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitNonfixFunMatch) {
			listener.exitNonfixFunMatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitNonfixFunMatch) {
			return visitor.visitNonfixFunMatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InfixFunmatchContext extends FunmatchContext {
	public pat(): PatContext[];
	public pat(i: number): PatContext;
	public pat(i?: number): PatContext | PatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatContext);
		} else {
			return this.getRuleContext(i, PatContext);
		}
	}
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public typ(): TypContext | undefined {
		return this.tryGetRuleContext(0, TypContext);
	}
	public funmatch(): FunmatchContext | undefined {
		return this.tryGetRuleContext(0, FunmatchContext);
	}
	constructor(ctx: FunmatchContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterInfixFunmatch) {
			listener.enterInfixFunmatch(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitInfixFunmatch) {
			listener.exitInfixFunmatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitInfixFunmatch) {
			return visitor.visitInfixFunmatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class InfixManyFunmatchContext extends FunmatchContext {
	public pat(): PatContext[];
	public pat(i: number): PatContext;
	public pat(i?: number): PatContext | PatContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatContext);
		} else {
			return this.getRuleContext(i, PatContext);
		}
	}
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public exp(): ExpContext {
		return this.getRuleContext(0, ExpContext);
	}
	public typ(): TypContext | undefined {
		return this.tryGetRuleContext(0, TypContext);
	}
	public funmatch(): FunmatchContext | undefined {
		return this.tryGetRuleContext(0, FunmatchContext);
	}
	constructor(ctx: FunmatchContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterInfixManyFunmatch) {
			listener.enterInfixManyFunmatch(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitInfixManyFunmatch) {
			listener.exitInfixManyFunmatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitInfixManyFunmatch) {
			return visitor.visitInfixManyFunmatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypbindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_typbind; }
	public copyFrom(ctx: TypbindContext): void {
		super.copyFrom(ctx);
	}
}
export class AbbrevTypBindContext extends TypbindContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public typ(): TypContext {
		return this.getRuleContext(0, TypContext);
	}
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.VAR);
		} else {
			return this.getToken(MLParser.VAR, i);
		}
	}
	public typbind(): TypbindContext | undefined {
		return this.tryGetRuleContext(0, TypbindContext);
	}
	constructor(ctx: TypbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterAbbrevTypBind) {
			listener.enterAbbrevTypBind(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitAbbrevTypBind) {
			listener.exitAbbrevTypBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitAbbrevTypBind) {
			return visitor.visitAbbrevTypBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatabindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_databind; }
	public copyFrom(ctx: DatabindContext): void {
		super.copyFrom(ctx);
	}
}
export class DataTypeDataBindContext extends DatabindContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public conbind(): ConbindContext {
		return this.getRuleContext(0, ConbindContext);
	}
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.VAR);
		} else {
			return this.getToken(MLParser.VAR, i);
		}
	}
	public databind(): DatabindContext | undefined {
		return this.tryGetRuleContext(0, DatabindContext);
	}
	constructor(ctx: DatabindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterDataTypeDataBind) {
			listener.enterDataTypeDataBind(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitDataTypeDataBind) {
			listener.exitDataTypeDataBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitDataTypeDataBind) {
			return visitor.visitDataTypeDataBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ConbindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_conbind; }
	public copyFrom(ctx: ConbindContext): void {
		super.copyFrom(ctx);
	}
}
export class DataConsConBindContext extends ConbindContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public typ(): TypContext | undefined {
		return this.tryGetRuleContext(0, TypContext);
	}
	public conbind(): ConbindContext | undefined {
		return this.tryGetRuleContext(0, ConbindContext);
	}
	constructor(ctx: ConbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterDataConsConBind) {
			listener.enterDataConsConBind(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitDataConsConBind) {
			listener.exitDataConsConBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitDataConsConBind) {
			return visitor.visitDataConsConBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExnbindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_exnbind; }
	public copyFrom(ctx: ExnbindContext): void {
		super.copyFrom(ctx);
	}
}
export class GenExnBindContext extends ExnbindContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public typ(): TypContext | undefined {
		return this.tryGetRuleContext(0, TypContext);
	}
	public exnbind(): ExnbindContext | undefined {
		return this.tryGetRuleContext(0, ExnbindContext);
	}
	constructor(ctx: ExnbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterGenExnBind) {
			listener.enterGenExnBind(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitGenExnBind) {
			listener.exitGenExnBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitGenExnBind) {
			return visitor.visitGenExnBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RenameExnBindContext extends ExnbindContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public longid(): LongidContext {
		return this.getRuleContext(0, LongidContext);
	}
	public exnbind(): ExnbindContext | undefined {
		return this.tryGetRuleContext(0, ExnbindContext);
	}
	constructor(ctx: ExnbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterRenameExnBind) {
			listener.enterRenameExnBind(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitRenameExnBind) {
			listener.exitRenameExnBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitRenameExnBind) {
			return visitor.visitRenameExnBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_str; }
	public copyFrom(ctx: StrContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentStrContext extends StrContext {
	public longid(): LongidContext {
		return this.getRuleContext(0, LongidContext);
	}
	constructor(ctx: StrContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterIdentStr) {
			listener.enterIdentStr(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitIdentStr) {
			listener.exitIdentStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitIdentStr) {
			return visitor.visitIdentStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructStrContext extends StrContext {
	public dec(): DecContext {
		return this.getRuleContext(0, DecContext);
	}
	constructor(ctx: StrContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterStructStr) {
			listener.enterStructStr(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitStructStr) {
			listener.exitStructStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitStructStr) {
			return visitor.visitStructStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TranspAnnoStrContext extends StrContext {
	public str(): StrContext {
		return this.getRuleContext(0, StrContext);
	}
	public sig(): SigContext {
		return this.getRuleContext(0, SigContext);
	}
	constructor(ctx: StrContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTranspAnnoStr) {
			listener.enterTranspAnnoStr(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTranspAnnoStr) {
			listener.exitTranspAnnoStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTranspAnnoStr) {
			return visitor.visitTranspAnnoStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OpaqueAnnoStrContext extends StrContext {
	public str(): StrContext {
		return this.getRuleContext(0, StrContext);
	}
	public sig(): SigContext {
		return this.getRuleContext(0, SigContext);
	}
	constructor(ctx: StrContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterOpaqueAnnoStr) {
			listener.enterOpaqueAnnoStr(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitOpaqueAnnoStr) {
			listener.exitOpaqueAnnoStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitOpaqueAnnoStr) {
			return visitor.visitOpaqueAnnoStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctorStrAppStrContext extends StrContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public str(): StrContext {
		return this.getRuleContext(0, StrContext);
	}
	constructor(ctx: StrContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterFunctorStrAppStr) {
			listener.enterFunctorStrAppStr(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitFunctorStrAppStr) {
			listener.exitFunctorStrAppStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitFunctorStrAppStr) {
			return visitor.visitFunctorStrAppStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctorDecAppStrContext extends StrContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public dec(): DecContext {
		return this.getRuleContext(0, DecContext);
	}
	constructor(ctx: StrContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterFunctorDecAppStr) {
			listener.enterFunctorDecAppStr(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitFunctorDecAppStr) {
			listener.exitFunctorDecAppStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitFunctorDecAppStr) {
			return visitor.visitFunctorDecAppStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class LocalDecStrContext extends StrContext {
	public dec(): DecContext {
		return this.getRuleContext(0, DecContext);
	}
	public str(): StrContext {
		return this.getRuleContext(0, StrContext);
	}
	constructor(ctx: StrContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterLocalDecStr) {
			listener.enterLocalDecStr(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitLocalDecStr) {
			listener.exitLocalDecStr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitLocalDecStr) {
			return visitor.visitLocalDecStr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrbindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_strbind; }
	public copyFrom(ctx: StrbindContext): void {
		super.copyFrom(ctx);
	}
}
export class StructStrBindCompContext extends StrbindContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public str(): StrContext {
		return this.getRuleContext(0, StrContext);
	}
	public sig(): SigContext | undefined {
		return this.tryGetRuleContext(0, SigContext);
	}
	public strbind(): StrbindContext | undefined {
		return this.tryGetRuleContext(0, StrbindContext);
	}
	constructor(ctx: StrbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterStructStrBindComp) {
			listener.enterStructStrBindComp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitStructStrBindComp) {
			listener.exitStructStrBindComp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitStructStrBindComp) {
			return visitor.visitStructStrBindComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructStrBindSmplContext extends StrbindContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public str(): StrContext {
		return this.getRuleContext(0, StrContext);
	}
	public sig(): SigContext | undefined {
		return this.tryGetRuleContext(0, SigContext);
	}
	public strbind(): StrbindContext | undefined {
		return this.tryGetRuleContext(0, StrbindContext);
	}
	constructor(ctx: StrbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterStructStrBindSmpl) {
			listener.enterStructStrBindSmpl(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitStructStrBindSmpl) {
			listener.exitStructStrBindSmpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitStructStrBindSmpl) {
			return visitor.visitStructStrBindSmpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SigContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_sig; }
	public copyFrom(ctx: SigContext): void {
		super.copyFrom(ctx);
	}
}
export class IdentSigContext extends SigContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	constructor(ctx: SigContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterIdentSig) {
			listener.enterIdentSig(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitIdentSig) {
			listener.exitIdentSig(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitIdentSig) {
			return visitor.visitIdentSig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SignatureBodyContext extends SigContext {
	public spec(): SpecContext {
		return this.getRuleContext(0, SpecContext);
	}
	constructor(ctx: SigContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterSignatureBody) {
			listener.enterSignatureBody(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitSignatureBody) {
			listener.exitSignatureBody(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitSignatureBody) {
			return visitor.visitSignatureBody(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class RefineSigContext extends SigContext {
	public sig(): SigContext {
		return this.getRuleContext(0, SigContext);
	}
	public typrefin(): TyprefinContext {
		return this.getRuleContext(0, TyprefinContext);
	}
	constructor(ctx: SigContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterRefineSig) {
			listener.enterRefineSig(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitRefineSig) {
			listener.exitRefineSig(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitRefineSig) {
			return visitor.visitRefineSig(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TyprefinContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_typrefin; }
	public copyFrom(ctx: TyprefinContext): void {
		super.copyFrom(ctx);
	}
}
export class TypeRefineContext extends TyprefinContext {
	public longid(): LongidContext {
		return this.getRuleContext(0, LongidContext);
	}
	public typ(): TypContext {
		return this.getRuleContext(0, TypContext);
	}
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.VAR);
		} else {
			return this.getToken(MLParser.VAR, i);
		}
	}
	public typrefin(): TyprefinContext | undefined {
		return this.tryGetRuleContext(0, TyprefinContext);
	}
	constructor(ctx: TyprefinContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTypeRefine) {
			listener.enterTypeRefine(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTypeRefine) {
			listener.exitTypeRefine(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTypeRefine) {
			return visitor.visitTypeRefine(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SpecContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_spec; }
	public copyFrom(ctx: SpecContext): void {
		super.copyFrom(ctx);
	}
}
export class ValSpecContext extends SpecContext {
	public valdesc(): ValdescContext {
		return this.getRuleContext(0, ValdescContext);
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterValSpec) {
			listener.enterValSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitValSpec) {
			listener.exitValSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitValSpec) {
			return visitor.visitValSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeSpecContext extends SpecContext {
	public typdesc(): TypdescContext {
		return this.getRuleContext(0, TypdescContext);
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTypeSpec) {
			listener.enterTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTypeSpec) {
			listener.exitTypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTypeSpec) {
			return visitor.visitTypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EquaTypeSpecContext extends SpecContext {
	public typdesc(): TypdescContext {
		return this.getRuleContext(0, TypdescContext);
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterEquaTypeSpec) {
			listener.enterEquaTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitEquaTypeSpec) {
			listener.exitEquaTypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitEquaTypeSpec) {
			return visitor.visitEquaTypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeAbbrevSpecContext extends SpecContext {
	public typbind(): TypbindContext {
		return this.getRuleContext(0, TypbindContext);
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTypeAbbrevSpec) {
			listener.enterTypeAbbrevSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTypeAbbrevSpec) {
			listener.exitTypeAbbrevSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTypeAbbrevSpec) {
			return visitor.visitTypeAbbrevSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DatatypeSpecContext extends SpecContext {
	public datdesc(): DatdescContext {
		return this.getRuleContext(0, DatdescContext);
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterDatatypeSpec) {
			listener.enterDatatypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitDatatypeSpec) {
			listener.exitDatatypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitDatatypeSpec) {
			return visitor.visitDatatypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class DatatypeReplSpecContext extends SpecContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public longid(): LongidContext {
		return this.getRuleContext(0, LongidContext);
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterDatatypeReplSpec) {
			listener.enterDatatypeReplSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitDatatypeReplSpec) {
			listener.exitDatatypeReplSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitDatatypeReplSpec) {
			return visitor.visitDatatypeReplSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class ExnSpecContext extends SpecContext {
	public exndesc(): ExndescContext {
		return this.getRuleContext(0, ExndescContext);
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterExnSpec) {
			listener.enterExnSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitExnSpec) {
			listener.exitExnSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitExnSpec) {
			return visitor.visitExnSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructureSpecContext extends SpecContext {
	public strdesc(): StrdescContext {
		return this.getRuleContext(0, StrdescContext);
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterStructureSpec) {
			listener.enterStructureSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitStructureSpec) {
			listener.exitStructureSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitStructureSpec) {
			return visitor.visitStructureSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmpSpecContext extends SpecContext {
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterEmpSpec) {
			listener.enterEmpSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitEmpSpec) {
			listener.exitEmpSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitEmpSpec) {
			return visitor.visitEmpSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmpHeadSeqSpecContext extends SpecContext {
	public spec(): SpecContext {
		return this.getRuleContext(0, SpecContext);
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterEmpHeadSeqSpec) {
			listener.enterEmpHeadSeqSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitEmpHeadSeqSpec) {
			listener.exitEmpHeadSeqSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitEmpHeadSeqSpec) {
			return visitor.visitEmpHeadSeqSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SeqSpecContext extends SpecContext {
	public spec(): SpecContext[];
	public spec(i: number): SpecContext;
	public spec(i?: number): SpecContext | SpecContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SpecContext);
		} else {
			return this.getRuleContext(i, SpecContext);
		}
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterSeqSpec) {
			listener.enterSeqSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitSeqSpec) {
			listener.exitSeqSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitSeqSpec) {
			return visitor.visitSeqSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncludeOneSpecContext extends SpecContext {
	public sig(): SigContext {
		return this.getRuleContext(0, SigContext);
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterIncludeOneSpec) {
			listener.enterIncludeOneSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitIncludeOneSpec) {
			listener.exitIncludeOneSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitIncludeOneSpec) {
			return visitor.visitIncludeOneSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class IncludeManySpecContext extends SpecContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.ID);
		} else {
			return this.getToken(MLParser.ID, i);
		}
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterIncludeManySpec) {
			listener.enterIncludeManySpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitIncludeManySpec) {
			listener.exitIncludeManySpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitIncludeManySpec) {
			return visitor.visitIncludeManySpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class TypeSharingSpecContext extends SpecContext {
	public spec(): SpecContext {
		return this.getRuleContext(0, SpecContext);
	}
	public longid(): LongidContext[];
	public longid(i: number): LongidContext;
	public longid(i?: number): LongidContext | LongidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LongidContext);
		} else {
			return this.getRuleContext(i, LongidContext);
		}
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterTypeSharingSpec) {
			listener.enterTypeSharingSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitTypeSharingSpec) {
			listener.exitTypeSharingSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitTypeSharingSpec) {
			return visitor.visitTypeSharingSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class StructureSharingSpecContext extends SpecContext {
	public spec(): SpecContext {
		return this.getRuleContext(0, SpecContext);
	}
	public longid(): LongidContext[];
	public longid(i: number): LongidContext;
	public longid(i?: number): LongidContext | LongidContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LongidContext);
		} else {
			return this.getRuleContext(i, LongidContext);
		}
	}
	constructor(ctx: SpecContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterStructureSharingSpec) {
			listener.enterStructureSharingSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitStructureSharingSpec) {
			listener.exitStructureSharingSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitStructureSharingSpec) {
			return visitor.visitStructureSharingSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValdescContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_valdesc; }
	public copyFrom(ctx: ValdescContext): void {
		super.copyFrom(ctx);
	}
}
export class ValDescContext extends ValdescContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public typ(): TypContext {
		return this.getRuleContext(0, TypContext);
	}
	public valdesc(): ValdescContext | undefined {
		return this.tryGetRuleContext(0, ValdescContext);
	}
	constructor(ctx: ValdescContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterValDesc) {
			listener.enterValDesc(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitValDesc) {
			listener.exitValDesc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitValDesc) {
			return visitor.visitValDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TypdescContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_typdesc; }
	public copyFrom(ctx: TypdescContext): void {
		super.copyFrom(ctx);
	}
}
export class AbsTypeSpecContext extends TypdescContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.VAR);
		} else {
			return this.getToken(MLParser.VAR, i);
		}
	}
	public typdesc(): TypdescContext | undefined {
		return this.tryGetRuleContext(0, TypdescContext);
	}
	constructor(ctx: TypdescContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterAbsTypeSpec) {
			listener.enterAbsTypeSpec(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitAbsTypeSpec) {
			listener.exitAbsTypeSpec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitAbsTypeSpec) {
			return visitor.visitAbsTypeSpec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class DatdescContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_datdesc; }
	public copyFrom(ctx: DatdescContext): void {
		super.copyFrom(ctx);
	}
}
export class DatDescContext extends DatdescContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public condesc(): CondescContext {
		return this.getRuleContext(0, CondescContext);
	}
	public VAR(): TerminalNode[];
	public VAR(i: number): TerminalNode;
	public VAR(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.VAR);
		} else {
			return this.getToken(MLParser.VAR, i);
		}
	}
	public datdesc(): DatdescContext | undefined {
		return this.tryGetRuleContext(0, DatdescContext);
	}
	constructor(ctx: DatdescContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterDatDesc) {
			listener.enterDatDesc(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitDatDesc) {
			listener.exitDatDesc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitDatDesc) {
			return visitor.visitDatDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CondescContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_condesc; }
	public copyFrom(ctx: CondescContext): void {
		super.copyFrom(ctx);
	}
}
export class CondDescContext extends CondescContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public typ(): TypContext | undefined {
		return this.tryGetRuleContext(0, TypContext);
	}
	public condesc(): CondescContext | undefined {
		return this.tryGetRuleContext(0, CondescContext);
	}
	constructor(ctx: CondescContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterCondDesc) {
			listener.enterCondDesc(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitCondDesc) {
			listener.exitCondDesc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitCondDesc) {
			return visitor.visitCondDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ExndescContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_exndesc; }
	public copyFrom(ctx: ExndescContext): void {
		super.copyFrom(ctx);
	}
}
export class ExnDescContext extends ExndescContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public typ(): TypContext | undefined {
		return this.tryGetRuleContext(0, TypContext);
	}
	public exndesc(): ExndescContext | undefined {
		return this.tryGetRuleContext(0, ExndescContext);
	}
	constructor(ctx: ExndescContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterExnDesc) {
			listener.enterExnDesc(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitExnDesc) {
			listener.exitExnDesc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitExnDesc) {
			return visitor.visitExnDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StrdescContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_strdesc; }
	public copyFrom(ctx: StrdescContext): void {
		super.copyFrom(ctx);
	}
}
export class StrDescContext extends StrdescContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public sig(): SigContext {
		return this.getRuleContext(0, SigContext);
	}
	public strdesc(): StrdescContext | undefined {
		return this.tryGetRuleContext(0, StrdescContext);
	}
	constructor(ctx: StrdescContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterStrDesc) {
			listener.enterStrDesc(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitStrDesc) {
			listener.exitStrDesc(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitStrDesc) {
			return visitor.visitStrDesc(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ProgContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_prog; }
	public copyFrom(ctx: ProgContext): void {
		super.copyFrom(ctx);
	}
}
export class CoreDecProgContext extends ProgContext {
	public dec(): DecContext {
		return this.getRuleContext(0, DecContext);
	}
	public EOF(): TerminalNode { return this.getToken(MLParser.EOF, 0); }
	constructor(ctx: ProgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterCoreDecProg) {
			listener.enterCoreDecProg(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitCoreDecProg) {
			listener.exitCoreDecProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitCoreDecProg) {
			return visitor.visitCoreDecProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class FunctorDecProgContext extends ProgContext {
	public fctbind(): FctbindContext {
		return this.getRuleContext(0, FctbindContext);
	}
	public EOF(): TerminalNode { return this.getToken(MLParser.EOF, 0); }
	constructor(ctx: ProgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterFunctorDecProg) {
			listener.enterFunctorDecProg(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitFunctorDecProg) {
			listener.exitFunctorDecProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitFunctorDecProg) {
			return visitor.visitFunctorDecProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SignatureDecProgContext extends ProgContext {
	public sigbind(): SigbindContext {
		return this.getRuleContext(0, SigbindContext);
	}
	public EOF(): TerminalNode { return this.getToken(MLParser.EOF, 0); }
	constructor(ctx: ProgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterSignatureDecProg) {
			listener.enterSignatureDecProg(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitSignatureDecProg) {
			listener.exitSignatureDecProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitSignatureDecProg) {
			return visitor.visitSignatureDecProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmpProgContext extends ProgContext {
	public EOF(): TerminalNode { return this.getToken(MLParser.EOF, 0); }
	constructor(ctx: ProgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterEmpProg) {
			listener.enterEmpProg(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitEmpProg) {
			listener.exitEmpProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitEmpProg) {
			return visitor.visitEmpProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class EmpHeadSeqProgContext extends ProgContext {
	public prog(): ProgContext {
		return this.getRuleContext(0, ProgContext);
	}
	public EOF(): TerminalNode { return this.getToken(MLParser.EOF, 0); }
	constructor(ctx: ProgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterEmpHeadSeqProg) {
			listener.enterEmpHeadSeqProg(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitEmpHeadSeqProg) {
			listener.exitEmpHeadSeqProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitEmpHeadSeqProg) {
			return visitor.visitEmpHeadSeqProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class SeqProgContext extends ProgContext {
	public prog(): ProgContext[];
	public prog(i: number): ProgContext;
	public prog(i?: number): ProgContext | ProgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ProgContext);
		} else {
			return this.getRuleContext(i, ProgContext);
		}
	}
	public EOF(): TerminalNode { return this.getToken(MLParser.EOF, 0); }
	constructor(ctx: ProgContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterSeqProg) {
			listener.enterSeqProg(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitSeqProg) {
			listener.exitSeqProg(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitSeqProg) {
			return visitor.visitSeqProg(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FctbindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_fctbind; }
	public copyFrom(ctx: FctbindContext): void {
		super.copyFrom(ctx);
	}
}
export class PlainFctBindCompContext extends FctbindContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.ID);
		} else {
			return this.getToken(MLParser.ID, i);
		}
	}
	public sig(): SigContext[];
	public sig(i: number): SigContext;
	public sig(i?: number): SigContext | SigContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SigContext);
		} else {
			return this.getRuleContext(i, SigContext);
		}
	}
	public str(): StrContext {
		return this.getRuleContext(0, StrContext);
	}
	public fctbind(): FctbindContext | undefined {
		return this.tryGetRuleContext(0, FctbindContext);
	}
	constructor(ctx: FctbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterPlainFctBindComp) {
			listener.enterPlainFctBindComp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitPlainFctBindComp) {
			listener.exitPlainFctBindComp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitPlainFctBindComp) {
			return visitor.visitPlainFctBindComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class PlainFctBindSmplContext extends FctbindContext {
	public ID(): TerminalNode[];
	public ID(i: number): TerminalNode;
	public ID(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(MLParser.ID);
		} else {
			return this.getToken(MLParser.ID, i);
		}
	}
	public sig(): SigContext[];
	public sig(i: number): SigContext;
	public sig(i?: number): SigContext | SigContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SigContext);
		} else {
			return this.getRuleContext(i, SigContext);
		}
	}
	public str(): StrContext {
		return this.getRuleContext(0, StrContext);
	}
	public fctbind(): FctbindContext | undefined {
		return this.tryGetRuleContext(0, FctbindContext);
	}
	constructor(ctx: FctbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterPlainFctBindSmpl) {
			listener.enterPlainFctBindSmpl(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitPlainFctBindSmpl) {
			listener.exitPlainFctBindSmpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitPlainFctBindSmpl) {
			return visitor.visitPlainFctBindSmpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OpenedFctBindCompContext extends FctbindContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public spec(): SpecContext {
		return this.getRuleContext(0, SpecContext);
	}
	public str(): StrContext {
		return this.getRuleContext(0, StrContext);
	}
	public sig(): SigContext | undefined {
		return this.tryGetRuleContext(0, SigContext);
	}
	public fctbind(): FctbindContext | undefined {
		return this.tryGetRuleContext(0, FctbindContext);
	}
	constructor(ctx: FctbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterOpenedFctBindComp) {
			listener.enterOpenedFctBindComp(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitOpenedFctBindComp) {
			listener.exitOpenedFctBindComp(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitOpenedFctBindComp) {
			return visitor.visitOpenedFctBindComp(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class OpenedFctBindSmplContext extends FctbindContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public spec(): SpecContext {
		return this.getRuleContext(0, SpecContext);
	}
	public str(): StrContext {
		return this.getRuleContext(0, StrContext);
	}
	public sig(): SigContext | undefined {
		return this.tryGetRuleContext(0, SigContext);
	}
	public fctbind(): FctbindContext | undefined {
		return this.tryGetRuleContext(0, FctbindContext);
	}
	constructor(ctx: FctbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterOpenedFctBindSmpl) {
			listener.enterOpenedFctBindSmpl(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitOpenedFctBindSmpl) {
			listener.exitOpenedFctBindSmpl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitOpenedFctBindSmpl) {
			return visitor.visitOpenedFctBindSmpl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SigbindContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return MLParser.RULE_sigbind; }
	public copyFrom(ctx: SigbindContext): void {
		super.copyFrom(ctx);
	}
}
export class SigBindContext extends SigbindContext {
	public ID(): TerminalNode { return this.getToken(MLParser.ID, 0); }
	public sig(): SigContext {
		return this.getRuleContext(0, SigContext);
	}
	public sigbind(): SigbindContext | undefined {
		return this.tryGetRuleContext(0, SigbindContext);
	}
	constructor(ctx: SigbindContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: MLListener): void {
		if (listener.enterSigBind) {
			listener.enterSigBind(this);
		}
	}
	// @Override
	public exitRule(listener: MLListener): void {
		if (listener.exitSigBind) {
			listener.exitSigBind(this);
		}
	}
	// @Override
	public accept<Result>(visitor: MLVisitor<Result>): Result {
		if (visitor.visitSigBind) {
			return visitor.visitSigBind(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


