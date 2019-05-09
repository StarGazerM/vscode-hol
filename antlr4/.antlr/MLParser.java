// Generated from /Users/stargazermiao/workspace/ts/vscode-hol/antlr4/ML.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MLParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.7.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		T__0=1, T__1=2, T__2=3, T__3=4, T__4=5, T__5=6, T__6=7, T__7=8, T__8=9, 
		T__9=10, T__10=11, T__11=12, T__12=13, T__13=14, T__14=15, T__15=16, T__16=17, 
		T__17=18, T__18=19, T__19=20, T__20=21, T__21=22, T__22=23, T__23=24, 
		T__24=25, T__25=26, T__26=27, T__27=28, T__28=29, T__29=30, T__30=31, 
		T__31=32, T__32=33, T__33=34, T__34=35, T__35=36, T__36=37, T__37=38, 
		T__38=39, T__39=40, T__40=41, T__41=42, T__42=43, T__43=44, T__44=45, 
		T__45=46, T__46=47, T__47=48, T__48=49, T__49=50, T__50=51, T__51=52, 
		T__52=53, T__53=54, T__54=55, T__55=56, T__56=57, T__57=58, T__58=59, 
		COMMENT=60, RESERVED_WORD=61, ID=62, CON=63, VAR=64, LETTER=65, DIGIT=66, 
		WS=67;
	public static final int
		RULE_longid = 0, RULE_exp = 1, RULE_exprow = 2, RULE_ematch = 3, RULE_lab = 4, 
		RULE_pat = 5, RULE_patrow = 6, RULE_typ = 7, RULE_typrow = 8, RULE_dec = 9, 
		RULE_valbind = 10, RULE_funbind = 11, RULE_funmatch = 12, RULE_typbind = 13, 
		RULE_databind = 14, RULE_conbind = 15, RULE_exnbind = 16, RULE_str = 17, 
		RULE_strbind = 18, RULE_sig = 19, RULE_typrefin = 20, RULE_spec = 21, 
		RULE_valdesc = 22, RULE_typdesc = 23, RULE_datdesc = 24, RULE_condesc = 25, 
		RULE_exndesc = 26, RULE_strdesc = 27, RULE_prog = 28, RULE_fctbind = 29, 
		RULE_sigbind = 30;
	public static final String[] ruleNames = {
		"longid", "exp", "exprow", "ematch", "lab", "pat", "patrow", "typ", "typrow", 
		"dec", "valbind", "funbind", "funmatch", "typbind", "databind", "conbind", 
		"exnbind", "str", "strbind", "sig", "typrefin", "spec", "valdesc", "typdesc", 
		"datdesc", "condesc", "exndesc", "strdesc", "prog", "fctbind", "sigbind"
	};

	private static final String[] _LITERAL_NAMES = {
		null, "'.'", "'op'", "'#'", "'('", "')'", "','", "'{'", "'}'", "'['", 
		"']'", "';'", "'let'", "'in'", "'end'", "':'", "'raise'", "'handle'", 
		"'andalso'", "'orelse'", "'if'", "'then'", "'else'", "'while'", "'do'", 
		"'case'", "'of'", "'fn'", "'='", "'=>'", "'|'", "'_'", "'as'", "'...'", 
		"'*'", "'->'", "'val'", "'fun'", "'type'", "'datatype'", "'withtype'", 
		"'abstype'", "'with'", "'exception'", "'structure'", "'local'", "'open'", 
		"'nonfix'", "'infix'", "'and'", "'rec'", "'struct'", "':>'", "'sig'", 
		"'where'", "'eqtype'", "'include'", "'sharing'", "'functor'", "'signature'"
	};
	private static final String[] _SYMBOLIC_NAMES = {
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		null, null, null, null, null, null, null, null, null, null, null, null, 
		"COMMENT", "RESERVED_WORD", "ID", "CON", "VAR", "LETTER", "DIGIT", "WS"
	};
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "ML.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public MLParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}
	public static class LongidContext extends ParserRuleContext {
		public List<TerminalNode> ID() { return getTokens(MLParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MLParser.ID, i);
		}
		public LongidContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_longid; }
	}

	public final LongidContext longid() throws RecognitionException {
		LongidContext _localctx = new LongidContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_longid);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(62);
			match(ID);
			setState(65); 
			_errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					setState(63);
					match(T__0);
					setState(64);
					match(ID);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(67); 
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,0,_ctx);
			} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpContext extends ParserRuleContext {
		public ExpContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exp; }
	 
		public ExpContext() { }
		public void copyFrom(ExpContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DisjExpContext extends ExpContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public DisjExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class IterExpContext extends ExpContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public IterExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class LocalDecExpContext extends ExpContext {
		public DecContext dec() {
			return getRuleContext(DecContext.class,0);
		}
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public LocalDecExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesesExpContext extends ExpContext {
		public ParenthesesExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class ListExpContext extends ExpContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public ListExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class FuncExpContext extends ExpContext {
		public EmatchContext ematch() {
			return getRuleContext(EmatchContext.class,0);
		}
		public FuncExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class ConjExpContext extends ExpContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public ConjExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class IdentExpContext extends ExpContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public IdentExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class ExnRaisingExpContext extends ExpContext {
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ExnRaisingExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class ExnHandlingExpContext extends ExpContext {
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public EmatchContext ematch() {
			return getRuleContext(EmatchContext.class,0);
		}
		public ExnHandlingExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class TupleExpContext extends ExpContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TupleExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class CondExpContext extends ExpContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public CondExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class RecordSelecExpContext extends ExpContext {
		public LabContext lab() {
			return getRuleContext(LabContext.class,0);
		}
		public RecordSelecExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class AppExpContext extends ExpContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public AppExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class RecordExpContext extends ExpContext {
		public ExprowContext exprow() {
			return getRuleContext(ExprowContext.class,0);
		}
		public RecordExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class ValueOrConsExpContext extends ExpContext {
		public LongidContext longid() {
			return getRuleContext(LongidContext.class,0);
		}
		public ValueOrConsExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class InfixAppExpContext extends ExpContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public InfixAppExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class ConstExpContext extends ExpContext {
		public TerminalNode CON() { return getToken(MLParser.CON, 0); }
		public ConstExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class SeqExpContext extends ExpContext {
		public List<ExpContext> exp() {
			return getRuleContexts(ExpContext.class);
		}
		public ExpContext exp(int i) {
			return getRuleContext(ExpContext.class,i);
		}
		public SeqExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class CaseAnalysisExpContext extends ExpContext {
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public EmatchContext ematch() {
			return getRuleContext(EmatchContext.class,0);
		}
		public CaseAnalysisExpContext(ExpContext ctx) { copyFrom(ctx); }
	}
	public static class TypeAnnoExpContext extends ExpContext {
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public TypeAnnoExpContext(ExpContext ctx) { copyFrom(ctx); }
	}

	public final ExpContext exp() throws RecognitionException {
		return exp(0);
	}

	private ExpContext exp(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpContext _localctx = new ExpContext(_ctx, _parentState);
		ExpContext _prevctx = _localctx;
		int _startState = 2;
		enterRecursionRule(_localctx, 2, RULE_exp, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(152);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,8,_ctx) ) {
			case 1:
				{
				_localctx = new ValueOrConsExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(71);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__1) {
					{
					setState(70);
					match(T__1);
					}
				}

				setState(73);
				longid();
				}
				break;
			case 2:
				{
				_localctx = new IdentExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(74);
				match(ID);
				}
				break;
			case 3:
				{
				_localctx = new ConstExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(75);
				match(CON);
				}
				break;
			case 4:
				{
				_localctx = new RecordSelecExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(76);
				match(T__2);
				setState(77);
				lab();
				}
				break;
			case 5:
				{
				_localctx = new ParenthesesExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(78);
				match(T__3);
				setState(79);
				match(T__4);
				}
				break;
			case 6:
				{
				_localctx = new TupleExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(80);
				match(T__3);
				setState(81);
				exp(0);
				setState(86);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__5) {
					{
					{
					setState(82);
					match(T__5);
					setState(83);
					exp(0);
					}
					}
					setState(88);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(89);
				match(T__4);
				}
				break;
			case 7:
				{
				_localctx = new RecordExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(91);
				match(T__6);
				setState(93);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ID || _la==CON) {
					{
					setState(92);
					exprow();
					}
				}

				setState(95);
				match(T__7);
				}
				break;
			case 8:
				{
				_localctx = new ListExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(96);
				match(T__8);
				setState(105);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__2) | (1L << T__3) | (1L << T__6) | (1L << T__8) | (1L << T__11) | (1L << T__15) | (1L << T__19) | (1L << T__22) | (1L << T__24) | (1L << T__26) | (1L << ID) | (1L << CON))) != 0)) {
					{
					setState(97);
					exp(0);
					setState(102);
					_errHandler.sync(this);
					_la = _input.LA(1);
					while (_la==T__5) {
						{
						{
						setState(98);
						match(T__5);
						setState(99);
						exp(0);
						}
						}
						setState(104);
						_errHandler.sync(this);
						_la = _input.LA(1);
					}
					}
				}

				setState(107);
				match(T__9);
				}
				break;
			case 9:
				{
				_localctx = new SeqExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(108);
				match(T__3);
				setState(109);
				exp(0);
				setState(112); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(110);
					match(T__10);
					setState(111);
					exp(0);
					}
					}
					setState(114); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__10 );
				setState(116);
				match(T__4);
				}
				break;
			case 10:
				{
				_localctx = new LocalDecExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(118);
				match(T__11);
				setState(119);
				dec(0);
				setState(120);
				match(T__12);
				setState(121);
				exp(0);
				setState(126);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__10) {
					{
					{
					setState(122);
					match(T__10);
					setState(123);
					exp(0);
					}
					}
					setState(128);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(129);
				match(T__13);
				}
				break;
			case 11:
				{
				_localctx = new ExnRaisingExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(131);
				match(T__15);
				setState(132);
				exp(8);
				}
				break;
			case 12:
				{
				_localctx = new CondExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(133);
				match(T__19);
				setState(134);
				exp(0);
				setState(135);
				match(T__20);
				setState(136);
				exp(0);
				setState(137);
				match(T__21);
				setState(138);
				exp(4);
				}
				break;
			case 13:
				{
				_localctx = new IterExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(140);
				match(T__22);
				setState(141);
				exp(0);
				setState(142);
				match(T__23);
				setState(143);
				exp(3);
				}
				break;
			case 14:
				{
				_localctx = new CaseAnalysisExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(145);
				match(T__24);
				setState(146);
				exp(0);
				setState(147);
				match(T__25);
				setState(148);
				ematch();
				}
				break;
			case 15:
				{
				_localctx = new FuncExpContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(150);
				match(T__26);
				setState(151);
				ematch();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(173);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(171);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
					case 1:
						{
						_localctx = new InfixAppExpContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(154);
						if (!(precpred(_ctx, 11))) throw new FailedPredicateException(this, "precpred(_ctx, 11)");
						setState(155);
						match(ID);
						setState(156);
						exp(12);
						}
						break;
					case 2:
						{
						_localctx = new AppExpContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(157);
						if (!(precpred(_ctx, 10))) throw new FailedPredicateException(this, "precpred(_ctx, 10)");
						setState(158);
						exp(11);
						}
						break;
					case 3:
						{
						_localctx = new ConjExpContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(159);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(160);
						match(T__17);
						setState(161);
						exp(7);
						}
						break;
					case 4:
						{
						_localctx = new DisjExpContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(162);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(163);
						match(T__18);
						setState(164);
						exp(6);
						}
						break;
					case 5:
						{
						_localctx = new TypeAnnoExpContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(165);
						if (!(precpred(_ctx, 9))) throw new FailedPredicateException(this, "precpred(_ctx, 9)");
						setState(166);
						match(T__14);
						setState(167);
						typ(0);
						}
						break;
					case 6:
						{
						_localctx = new ExnHandlingExpContext(new ExpContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_exp);
						setState(168);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(169);
						match(T__16);
						setState(170);
						ematch();
						}
						break;
					}
					} 
				}
				setState(175);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,10,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ExprowContext extends ParserRuleContext {
		public ExprowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exprow; }
	 
		public ExprowContext() { }
		public void copyFrom(ExprowContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ExpRowContext extends ExprowContext {
		public LabContext lab() {
			return getRuleContext(LabContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ExprowContext exprow() {
			return getRuleContext(ExprowContext.class,0);
		}
		public ExpRowContext(ExprowContext ctx) { copyFrom(ctx); }
	}

	public final ExprowContext exprow() throws RecognitionException {
		ExprowContext _localctx = new ExprowContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_exprow);
		int _la;
		try {
			_localctx = new ExpRowContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(176);
			lab();
			setState(177);
			match(T__27);
			setState(178);
			exp(0);
			setState(181);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(179);
				match(T__5);
				setState(180);
				exprow();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class EmatchContext extends ParserRuleContext {
		public EmatchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_ematch; }
	 
		public EmatchContext() { }
		public void copyFrom(EmatchContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class MatchBodyContext extends EmatchContext {
		public PatContext pat() {
			return getRuleContext(PatContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public EmatchContext ematch() {
			return getRuleContext(EmatchContext.class,0);
		}
		public MatchBodyContext(EmatchContext ctx) { copyFrom(ctx); }
	}

	public final EmatchContext ematch() throws RecognitionException {
		EmatchContext _localctx = new EmatchContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_ematch);
		try {
			_localctx = new MatchBodyContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(183);
			pat(0);
			setState(184);
			match(T__28);
			setState(185);
			exp(0);
			setState(188);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(186);
				match(T__29);
				setState(187);
				ematch();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class LabContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public TerminalNode CON() { return getToken(MLParser.CON, 0); }
		public LabContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_lab; }
	}

	public final LabContext lab() throws RecognitionException {
		LabContext _localctx = new LabContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_lab);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(190);
			_la = _input.LA(1);
			if ( !(_la==ID || _la==CON) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PatContext extends ParserRuleContext {
		public PatContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pat; }
	 
		public PatContext() { }
		public void copyFrom(PatContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class LayeredPatContext extends PatContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public PatContext pat() {
			return getRuleContext(PatContext.class,0);
		}
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public LayeredPatContext(PatContext ctx) { copyFrom(ctx); }
	}
	public static class InfixConsPatContext extends PatContext {
		public List<PatContext> pat() {
			return getRuleContexts(PatContext.class);
		}
		public PatContext pat(int i) {
			return getRuleContext(PatContext.class,i);
		}
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public InfixConsPatContext(PatContext ctx) { copyFrom(ctx); }
	}
	public static class TypeAnnoPatContext extends PatContext {
		public PatContext pat() {
			return getRuleContext(PatContext.class,0);
		}
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public TypeAnnoPatContext(PatContext ctx) { copyFrom(ctx); }
	}
	public static class ConsPatContext extends PatContext {
		public LongidContext longid() {
			return getRuleContext(LongidContext.class,0);
		}
		public PatContext pat() {
			return getRuleContext(PatContext.class,0);
		}
		public ConsPatContext(PatContext ctx) { copyFrom(ctx); }
	}
	public static class ConstPatContext extends PatContext {
		public TerminalNode CON() { return getToken(MLParser.CON, 0); }
		public ConstPatContext(PatContext ctx) { copyFrom(ctx); }
	}
	public static class TuplePatContext extends PatContext {
		public List<PatContext> pat() {
			return getRuleContexts(PatContext.class);
		}
		public PatContext pat(int i) {
			return getRuleContext(PatContext.class,i);
		}
		public TuplePatContext(PatContext ctx) { copyFrom(ctx); }
	}
	public static class RecordPatContext extends PatContext {
		public PatrowContext patrow() {
			return getRuleContext(PatrowContext.class,0);
		}
		public RecordPatContext(PatContext ctx) { copyFrom(ctx); }
	}
	public static class VarPatContext extends PatContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public VarPatContext(PatContext ctx) { copyFrom(ctx); }
	}
	public static class EmpListPatContext extends PatContext {
		public EmpListPatContext(PatContext ctx) { copyFrom(ctx); }
	}
	public static class ListPatContext extends PatContext {
		public List<PatContext> pat() {
			return getRuleContexts(PatContext.class);
		}
		public PatContext pat(int i) {
			return getRuleContext(PatContext.class,i);
		}
		public ListPatContext(PatContext ctx) { copyFrom(ctx); }
	}
	public static class WildcardPatContext extends PatContext {
		public WildcardPatContext(PatContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesesPatContext extends PatContext {
		public PatContext pat() {
			return getRuleContext(PatContext.class,0);
		}
		public ParenthesesPatContext(PatContext ctx) { copyFrom(ctx); }
	}

	public final PatContext pat() throws RecognitionException {
		return pat(0);
	}

	private PatContext pat(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		PatContext _localctx = new PatContext(_ctx, _parentState);
		PatContext _prevctx = _localctx;
		int _startState = 10;
		enterRecursionRule(_localctx, 10, RULE_pat, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(247);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,20,_ctx) ) {
			case 1:
				{
				_localctx = new ConstPatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(193);
				match(CON);
				}
				break;
			case 2:
				{
				_localctx = new WildcardPatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(194);
				match(T__30);
				}
				break;
			case 3:
				{
				_localctx = new VarPatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(196);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__1) {
					{
					setState(195);
					match(T__1);
					}
				}

				setState(198);
				match(ID);
				}
				break;
			case 4:
				{
				_localctx = new ConsPatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(200);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__1) {
					{
					setState(199);
					match(T__1);
					}
				}

				setState(202);
				longid();
				setState(204);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
				case 1:
					{
					setState(203);
					pat(0);
					}
					break;
				}
				}
				break;
			case 5:
				{
				_localctx = new ParenthesesPatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(206);
				match(T__3);
				setState(207);
				pat(0);
				setState(208);
				match(T__4);
				}
				break;
			case 6:
				{
				_localctx = new TuplePatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(210);
				match(T__3);
				setState(211);
				pat(0);
				setState(214); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(212);
					match(T__5);
					setState(213);
					pat(0);
					}
					}
					setState(216); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__5 );
				setState(218);
				match(T__4);
				}
				break;
			case 7:
				{
				_localctx = new RecordPatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(220);
				match(T__6);
				setState(221);
				patrow();
				setState(222);
				match(T__7);
				}
				break;
			case 8:
				{
				_localctx = new EmpListPatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(224);
				match(T__8);
				setState(225);
				match(T__9);
				}
				break;
			case 9:
				{
				_localctx = new ListPatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(226);
				match(T__8);
				setState(227);
				pat(0);
				setState(232);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==T__5) {
					{
					{
					setState(228);
					match(T__5);
					setState(229);
					pat(0);
					}
					}
					setState(234);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(235);
				match(T__9);
				}
				break;
			case 10:
				{
				_localctx = new LayeredPatContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(238);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__1) {
					{
					setState(237);
					match(T__1);
					}
				}

				setState(240);
				match(ID);
				setState(243);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__14) {
					{
					setState(241);
					match(T__14);
					setState(242);
					typ(0);
					}
				}

				setState(245);
				match(T__31);
				setState(246);
				pat(1);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(257);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(255);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,21,_ctx) ) {
					case 1:
						{
						_localctx = new InfixConsPatContext(new PatContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_pat);
						setState(249);
						if (!(precpred(_ctx, 8))) throw new FailedPredicateException(this, "precpred(_ctx, 8)");
						setState(250);
						match(ID);
						setState(251);
						pat(9);
						}
						break;
					case 2:
						{
						_localctx = new TypeAnnoPatContext(new PatContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_pat);
						setState(252);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(253);
						match(T__14);
						setState(254);
						typ(0);
						}
						break;
					}
					} 
				}
				setState(259);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,22,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class PatrowContext extends ParserRuleContext {
		public PatrowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_patrow; }
	 
		public PatrowContext() { }
		public void copyFrom(PatrowContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class WildcardPatRowContext extends PatrowContext {
		public WildcardPatRowContext(PatrowContext ctx) { copyFrom(ctx); }
	}
	public static class VarPatRowContext extends PatrowContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public PatContext pat() {
			return getRuleContext(PatContext.class,0);
		}
		public PatrowContext patrow() {
			return getRuleContext(PatrowContext.class,0);
		}
		public VarPatRowContext(PatrowContext ctx) { copyFrom(ctx); }
	}
	public static class PatRowContext extends PatrowContext {
		public LabContext lab() {
			return getRuleContext(LabContext.class,0);
		}
		public PatContext pat() {
			return getRuleContext(PatContext.class,0);
		}
		public PatrowContext patrow() {
			return getRuleContext(PatrowContext.class,0);
		}
		public PatRowContext(PatrowContext ctx) { copyFrom(ctx); }
	}

	public final PatrowContext patrow() throws RecognitionException {
		PatrowContext _localctx = new PatrowContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_patrow);
		int _la;
		try {
			setState(281);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				_localctx = new WildcardPatRowContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(260);
				match(T__32);
				}
				break;
			case 2:
				_localctx = new PatRowContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(261);
				lab();
				setState(262);
				match(T__27);
				setState(263);
				pat(0);
				setState(266);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__5) {
					{
					setState(264);
					match(T__5);
					setState(265);
					patrow();
					}
				}

				}
				break;
			case 3:
				_localctx = new VarPatRowContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(268);
				match(ID);
				setState(271);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__14) {
					{
					setState(269);
					match(T__14);
					setState(270);
					typ(0);
					}
				}

				setState(275);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__31) {
					{
					setState(273);
					match(T__31);
					setState(274);
					pat(0);
					}
				}

				setState(279);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__5) {
					{
					setState(277);
					match(T__5);
					setState(278);
					patrow();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypContext extends ParserRuleContext {
		public TypContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typ; }
	 
		public TypContext() { }
		public void copyFrom(TypContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class LongIdTypContext extends TypContext {
		public LongidContext longid() {
			return getRuleContext(LongidContext.class,0);
		}
		public LongIdTypContext(TypContext ctx) { copyFrom(ctx); }
	}
	public static class RecordTypContext extends TypContext {
		public TyprowContext typrow() {
			return getRuleContext(TyprowContext.class,0);
		}
		public RecordTypContext(TypContext ctx) { copyFrom(ctx); }
	}
	public static class TupleTypContext extends TypContext {
		public List<TypContext> typ() {
			return getRuleContexts(TypContext.class);
		}
		public TypContext typ(int i) {
			return getRuleContext(TypContext.class,i);
		}
		public TupleTypContext(TypContext ctx) { copyFrom(ctx); }
	}
	public static class VarTypContext extends TypContext {
		public TerminalNode VAR() { return getToken(MLParser.VAR, 0); }
		public VarTypContext(TypContext ctx) { copyFrom(ctx); }
	}
	public static class ParenthesesTypContext extends TypContext {
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public ParenthesesTypContext(TypContext ctx) { copyFrom(ctx); }
	}
	public static class FuncTypContext extends TypContext {
		public List<TypContext> typ() {
			return getRuleContexts(TypContext.class);
		}
		public TypContext typ(int i) {
			return getRuleContext(TypContext.class,i);
		}
		public FuncTypContext(TypContext ctx) { copyFrom(ctx); }
	}
	public static class ConsOneTypContext extends TypContext {
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public LongidContext longid() {
			return getRuleContext(LongidContext.class,0);
		}
		public ConsOneTypContext(TypContext ctx) { copyFrom(ctx); }
	}
	public static class ConsManyTypContext extends TypContext {
		public List<TypContext> typ() {
			return getRuleContexts(TypContext.class);
		}
		public TypContext typ(int i) {
			return getRuleContext(TypContext.class,i);
		}
		public LongidContext longid() {
			return getRuleContext(LongidContext.class,0);
		}
		public ConsManyTypContext(TypContext ctx) { copyFrom(ctx); }
	}

	public final TypContext typ() throws RecognitionException {
		return typ(0);
	}

	private TypContext typ(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		TypContext _localctx = new TypContext(_ctx, _parentState);
		TypContext _prevctx = _localctx;
		int _startState = 14;
		enterRecursionRule(_localctx, 14, RULE_typ, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(295);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case VAR:
				{
				_localctx = new VarTypContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(284);
				match(VAR);
				}
				break;
			case ID:
				{
				_localctx = new LongIdTypContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(285);
				longid();
				}
				break;
			case T__3:
				{
				_localctx = new ParenthesesTypContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(286);
				match(T__3);
				setState(287);
				typ(0);
				setState(288);
				match(T__4);
				}
				break;
			case T__6:
				{
				_localctx = new RecordTypContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(290);
				match(T__6);
				setState(292);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ID || _la==CON) {
					{
					setState(291);
					typrow();
					}
				}

				setState(294);
				match(T__7);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(320);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(318);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,32,_ctx) ) {
					case 1:
						{
						_localctx = new FuncTypContext(new TypContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typ);
						setState(297);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(298);
						match(T__34);
						setState(299);
						typ(3);
						}
						break;
					case 2:
						{
						_localctx = new ConsOneTypContext(new TypContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typ);
						setState(300);
						if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
						setState(301);
						longid();
						}
						break;
					case 3:
						{
						_localctx = new ConsManyTypContext(new TypContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typ);
						setState(302);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(305); 
						_errHandler.sync(this);
						_la = _input.LA(1);
						do {
							{
							{
							setState(303);
							match(T__5);
							setState(304);
							typ(0);
							}
							}
							setState(307); 
							_errHandler.sync(this);
							_la = _input.LA(1);
						} while ( _la==T__5 );
						setState(309);
						longid();
						}
						break;
					case 4:
						{
						_localctx = new TupleTypContext(new TypContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_typ);
						setState(311);
						if (!(precpred(_ctx, 3))) throw new FailedPredicateException(this, "precpred(_ctx, 3)");
						setState(314); 
						_errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								setState(312);
								match(T__33);
								setState(313);
								typ(0);
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							setState(316); 
							_errHandler.sync(this);
							_alt = getInterpreter().adaptivePredict(_input,31,_ctx);
						} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
						}
						break;
					}
					} 
				}
				setState(322);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,33,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TyprowContext extends ParserRuleContext {
		public TyprowContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typrow; }
	 
		public TyprowContext() { }
		public void copyFrom(TyprowContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TypeRowContext extends TyprowContext {
		public LabContext lab() {
			return getRuleContext(LabContext.class,0);
		}
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public TyprowContext typrow() {
			return getRuleContext(TyprowContext.class,0);
		}
		public TypeRowContext(TyprowContext ctx) { copyFrom(ctx); }
	}

	public final TyprowContext typrow() throws RecognitionException {
		TyprowContext _localctx = new TyprowContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_typrow);
		int _la;
		try {
			_localctx = new TypeRowContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(323);
			lab();
			setState(324);
			match(T__14);
			setState(325);
			typ(0);
			setState(328);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__5) {
				{
				setState(326);
				match(T__5);
				setState(327);
				typrow();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DecContext extends ParserRuleContext {
		public DecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_dec; }
	 
		public DecContext() { }
		public void copyFrom(DecContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class FuncDecContext extends DecContext {
		public FunbindContext funbind() {
			return getRuleContext(FunbindContext.class,0);
		}
		public List<TerminalNode> VAR() { return getTokens(MLParser.VAR); }
		public TerminalNode VAR(int i) {
			return getToken(MLParser.VAR, i);
		}
		public FuncDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class ExnDecContext extends DecContext {
		public ExnbindContext exnbind() {
			return getRuleContext(ExnbindContext.class,0);
		}
		public ExnDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class StructureDecContext extends DecContext {
		public StrbindContext strbind() {
			return getRuleContext(StrbindContext.class,0);
		}
		public StructureDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class SeqDecContext extends DecContext {
		public List<DecContext> dec() {
			return getRuleContexts(DecContext.class);
		}
		public DecContext dec(int i) {
			return getRuleContext(DecContext.class,i);
		}
		public SeqDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class ValDecContext extends DecContext {
		public ValbindContext valbind() {
			return getRuleContext(ValbindContext.class,0);
		}
		public List<TerminalNode> VAR() { return getTokens(MLParser.VAR); }
		public TerminalNode VAR(int i) {
			return getToken(MLParser.VAR, i);
		}
		public ValDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class RightAssocInfixDecContext extends DecContext {
		public TerminalNode DIGIT() { return getToken(MLParser.DIGIT, 0); }
		public List<TerminalNode> ID() { return getTokens(MLParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MLParser.ID, i);
		}
		public RightAssocInfixDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class AbstractTypeDecContext extends DecContext {
		public DatabindContext databind() {
			return getRuleContext(DatabindContext.class,0);
		}
		public DecContext dec() {
			return getRuleContext(DecContext.class,0);
		}
		public TypbindContext typbind() {
			return getRuleContext(TypbindContext.class,0);
		}
		public AbstractTypeDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class IncludeDecContext extends DecContext {
		public List<LongidContext> longid() {
			return getRuleContexts(LongidContext.class);
		}
		public LongidContext longid(int i) {
			return getRuleContext(LongidContext.class,i);
		}
		public IncludeDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class TypeDecContext extends DecContext {
		public TypbindContext typbind() {
			return getRuleContext(TypbindContext.class,0);
		}
		public TypeDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class DatatypeReplDecContext extends DecContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public LongidContext longid() {
			return getRuleContext(LongidContext.class,0);
		}
		public DatatypeReplDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class LeftAssocInfixDecContext extends DecContext {
		public TerminalNode DIGIT() { return getToken(MLParser.DIGIT, 0); }
		public List<TerminalNode> ID() { return getTokens(MLParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MLParser.ID, i);
		}
		public LeftAssocInfixDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class EmpDecContext extends DecContext {
		public EmpDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class DatatypeDecContext extends DecContext {
		public DatabindContext databind() {
			return getRuleContext(DatabindContext.class,0);
		}
		public TypbindContext typbind() {
			return getRuleContext(TypbindContext.class,0);
		}
		public DatatypeDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class EmpHeadSeqDecContext extends DecContext {
		public DecContext dec() {
			return getRuleContext(DecContext.class,0);
		}
		public EmpHeadSeqDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class LocalDecContext extends DecContext {
		public List<DecContext> dec() {
			return getRuleContexts(DecContext.class);
		}
		public DecContext dec(int i) {
			return getRuleContext(DecContext.class,i);
		}
		public LocalDecContext(DecContext ctx) { copyFrom(ctx); }
	}
	public static class NonfixDecContext extends DecContext {
		public List<TerminalNode> ID() { return getTokens(MLParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MLParser.ID, i);
		}
		public NonfixDecContext(DecContext ctx) { copyFrom(ctx); }
	}

	public final DecContext dec() throws RecognitionException {
		return dec(0);
	}

	private DecContext dec(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		DecContext _localctx = new DecContext(_ctx, _parentState);
		DecContext _prevctx = _localctx;
		int _startState = 18;
		enterRecursionRule(_localctx, 18, RULE_dec, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(425);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,49,_ctx) ) {
			case 1:
				{
				_localctx = new ValDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(331);
				match(T__35);
				setState(342);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,37,_ctx) ) {
				case 1:
					{
					setState(333);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==VAR) {
						{
						setState(332);
						match(VAR);
						}
					}

					}
					break;
				case 2:
					{
					setState(335);
					match(VAR);
					setState(338); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(336);
						match(T__5);
						setState(337);
						match(VAR);
						}
						}
						setState(340); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==T__5 );
					}
					break;
				}
				setState(344);
				valbind();
				}
				break;
			case 2:
				{
				_localctx = new FuncDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(345);
				match(T__36);
				setState(356);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
				case 1:
					{
					setState(347);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==VAR) {
						{
						setState(346);
						match(VAR);
						}
					}

					}
					break;
				case 2:
					{
					setState(349);
					match(VAR);
					setState(352); 
					_errHandler.sync(this);
					_la = _input.LA(1);
					do {
						{
						{
						setState(350);
						match(T__5);
						setState(351);
						match(VAR);
						}
						}
						setState(354); 
						_errHandler.sync(this);
						_la = _input.LA(1);
					} while ( _la==T__5 );
					}
					break;
				}
				setState(358);
				funbind();
				}
				break;
			case 3:
				{
				_localctx = new TypeDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(359);
				match(T__37);
				setState(360);
				typbind();
				}
				break;
			case 4:
				{
				_localctx = new DatatypeDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(361);
				match(T__38);
				setState(362);
				databind();
				setState(365);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,41,_ctx) ) {
				case 1:
					{
					setState(363);
					match(T__39);
					setState(364);
					typbind();
					}
					break;
				}
				}
				break;
			case 5:
				{
				_localctx = new DatatypeReplDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(367);
				match(T__38);
				setState(368);
				match(ID);
				setState(369);
				match(T__27);
				setState(370);
				match(T__38);
				setState(371);
				longid();
				}
				break;
			case 6:
				{
				_localctx = new AbstractTypeDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(372);
				match(T__40);
				setState(373);
				databind();
				setState(376);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__39) {
					{
					setState(374);
					match(T__39);
					setState(375);
					typbind();
					}
				}

				setState(378);
				match(T__41);
				setState(379);
				dec(0);
				setState(380);
				match(T__13);
				}
				break;
			case 7:
				{
				_localctx = new ExnDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(382);
				match(T__42);
				setState(383);
				exnbind();
				}
				break;
			case 8:
				{
				_localctx = new StructureDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(384);
				match(T__43);
				setState(385);
				strbind();
				}
				break;
			case 9:
				{
				_localctx = new EmpDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				}
				break;
			case 10:
				{
				_localctx = new EmpHeadSeqDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(387);
				match(T__10);
				setState(388);
				dec(7);
				}
				break;
			case 11:
				{
				_localctx = new LocalDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(389);
				match(T__44);
				setState(390);
				dec(0);
				setState(391);
				match(T__12);
				setState(392);
				dec(0);
				setState(393);
				match(T__13);
				}
				break;
			case 12:
				{
				_localctx = new IncludeDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(395);
				match(T__45);
				setState(397); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(396);
						longid();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(399); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,43,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case 13:
				{
				_localctx = new NonfixDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(401);
				match(T__46);
				setState(403); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(402);
						match(ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(405); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,44,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case 14:
				{
				_localctx = new LeftAssocInfixDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(407);
				match(T__47);
				setState(409);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DIGIT) {
					{
					setState(408);
					match(DIGIT);
					}
				}

				setState(412); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(411);
						match(ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(414); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,46,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			case 15:
				{
				_localctx = new RightAssocInfixDecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(416);
				match(T__47);
				setState(418);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DIGIT) {
					{
					setState(417);
					match(DIGIT);
					}
				}

				setState(421); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(420);
						match(ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(423); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,48,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(432);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new SeqDecContext(new DecContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_dec);
					setState(427);
					if (!(precpred(_ctx, 6))) throw new FailedPredicateException(this, "precpred(_ctx, 6)");
					setState(428);
					match(T__10);
					setState(429);
					dec(7);
					}
					} 
				}
				setState(434);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,50,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ValbindContext extends ParserRuleContext {
		public ValbindContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valbind; }
	 
		public ValbindContext() { }
		public void copyFrom(ValbindContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RecurValBindContext extends ValbindContext {
		public ValbindContext valbind() {
			return getRuleContext(ValbindContext.class,0);
		}
		public RecurValBindContext(ValbindContext ctx) { copyFrom(ctx); }
	}
	public static class DestValBindContext extends ValbindContext {
		public PatContext pat() {
			return getRuleContext(PatContext.class,0);
		}
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public ValbindContext valbind() {
			return getRuleContext(ValbindContext.class,0);
		}
		public DestValBindContext(ValbindContext ctx) { copyFrom(ctx); }
	}

	public final ValbindContext valbind() throws RecognitionException {
		ValbindContext _localctx = new ValbindContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_valbind);
		try {
			setState(444);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case T__1:
			case T__3:
			case T__6:
			case T__8:
			case T__30:
			case ID:
			case CON:
				_localctx = new DestValBindContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(435);
				pat(0);
				setState(436);
				match(T__27);
				setState(437);
				exp(0);
				setState(440);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,51,_ctx) ) {
				case 1:
					{
					setState(438);
					match(T__48);
					setState(439);
					valbind();
					}
					break;
				}
				}
				break;
			case T__49:
				_localctx = new RecurValBindContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(442);
				match(T__49);
				setState(443);
				valbind();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunbindContext extends ParserRuleContext {
		public FunbindContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funbind; }
	 
		public FunbindContext() { }
		public void copyFrom(FunbindContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ClausalFuncBindContext extends FunbindContext {
		public FunmatchContext funmatch() {
			return getRuleContext(FunmatchContext.class,0);
		}
		public FunbindContext funbind() {
			return getRuleContext(FunbindContext.class,0);
		}
		public ClausalFuncBindContext(FunbindContext ctx) { copyFrom(ctx); }
	}

	public final FunbindContext funbind() throws RecognitionException {
		FunbindContext _localctx = new FunbindContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_funbind);
		try {
			_localctx = new ClausalFuncBindContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(446);
			funmatch();
			setState(449);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,53,_ctx) ) {
			case 1:
				{
				setState(447);
				match(T__48);
				setState(448);
				funbind();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class FunmatchContext extends ParserRuleContext {
		public FunmatchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_funmatch; }
	 
		public FunmatchContext() { }
		public void copyFrom(FunmatchContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class NonfixFunMatchContext extends FunmatchContext {
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public List<PatContext> pat() {
			return getRuleContexts(PatContext.class);
		}
		public PatContext pat(int i) {
			return getRuleContext(PatContext.class,i);
		}
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public FunmatchContext funmatch() {
			return getRuleContext(FunmatchContext.class,0);
		}
		public NonfixFunMatchContext(FunmatchContext ctx) { copyFrom(ctx); }
	}
	public static class InfixManyFunmatchContext extends FunmatchContext {
		public List<PatContext> pat() {
			return getRuleContexts(PatContext.class);
		}
		public PatContext pat(int i) {
			return getRuleContext(PatContext.class,i);
		}
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public FunmatchContext funmatch() {
			return getRuleContext(FunmatchContext.class,0);
		}
		public InfixManyFunmatchContext(FunmatchContext ctx) { copyFrom(ctx); }
	}
	public static class InfixFunmatchContext extends FunmatchContext {
		public List<PatContext> pat() {
			return getRuleContexts(PatContext.class);
		}
		public PatContext pat(int i) {
			return getRuleContext(PatContext.class,i);
		}
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public ExpContext exp() {
			return getRuleContext(ExpContext.class,0);
		}
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public FunmatchContext funmatch() {
			return getRuleContext(FunmatchContext.class,0);
		}
		public InfixFunmatchContext(FunmatchContext ctx) { copyFrom(ctx); }
	}

	public final FunmatchContext funmatch() throws RecognitionException {
		FunmatchContext _localctx = new FunmatchContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_funmatch);
		int _la;
		try {
			int _alt;
			setState(501);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,63,_ctx) ) {
			case 1:
				_localctx = new NonfixFunMatchContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(452);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,54,_ctx) ) {
				case 1:
					{
					setState(451);
					match(T__1);
					}
					break;
				}
				setState(455); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(454);
						pat(0);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(457); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,55,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				setState(460);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 4)) & ~0x3f) == 0 && ((1L << (_la - 4)) & ((1L << (T__3 - 4)) | (1L << (T__6 - 4)) | (1L << (ID - 4)) | (1L << (VAR - 4)))) != 0)) {
					{
					setState(459);
					typ(0);
					}
				}

				setState(462);
				match(T__27);
				setState(463);
				exp(0);
				setState(466);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
				case 1:
					{
					setState(464);
					match(T__29);
					setState(465);
					funmatch();
					}
					break;
				}
				}
				break;
			case 2:
				_localctx = new InfixFunmatchContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(468);
				pat(0);
				setState(469);
				match(ID);
				setState(470);
				pat(0);
				setState(473);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__14) {
					{
					setState(471);
					match(T__14);
					setState(472);
					typ(0);
					}
				}

				setState(475);
				match(T__27);
				setState(476);
				exp(0);
				setState(479);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,59,_ctx) ) {
				case 1:
					{
					setState(477);
					match(T__29);
					setState(478);
					funmatch();
					}
					break;
				}
				}
				break;
			case 3:
				_localctx = new InfixManyFunmatchContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(481);
				match(T__3);
				setState(482);
				pat(0);
				setState(483);
				match(ID);
				setState(484);
				pat(0);
				setState(485);
				match(T__4);
				setState(487); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(486);
					pat(0);
					}
					}
					setState(489); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__1) | (1L << T__3) | (1L << T__6) | (1L << T__8) | (1L << T__30) | (1L << ID) | (1L << CON))) != 0) );
				setState(493);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__14) {
					{
					setState(491);
					match(T__14);
					setState(492);
					typ(0);
					}
				}

				setState(495);
				match(T__27);
				setState(496);
				exp(0);
				setState(499);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,62,_ctx) ) {
				case 1:
					{
					setState(497);
					match(T__29);
					setState(498);
					funmatch();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypbindContext extends ParserRuleContext {
		public TypbindContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typbind; }
	 
		public TypbindContext() { }
		public void copyFrom(TypbindContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AbbrevTypBindContext extends TypbindContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public List<TerminalNode> VAR() { return getTokens(MLParser.VAR); }
		public TerminalNode VAR(int i) {
			return getToken(MLParser.VAR, i);
		}
		public TypbindContext typbind() {
			return getRuleContext(TypbindContext.class,0);
		}
		public AbbrevTypBindContext(TypbindContext ctx) { copyFrom(ctx); }
	}

	public final TypbindContext typbind() throws RecognitionException {
		TypbindContext _localctx = new TypbindContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_typbind);
		int _la;
		try {
			_localctx = new AbbrevTypBindContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(513);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				{
				setState(504);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==VAR) {
					{
					setState(503);
					match(VAR);
					}
				}

				}
				break;
			case 2:
				{
				setState(506);
				match(VAR);
				setState(509); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(507);
					match(T__5);
					setState(508);
					match(VAR);
					}
					}
					setState(511); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__5 );
				}
				break;
			}
			setState(515);
			match(ID);
			setState(516);
			match(T__27);
			setState(517);
			typ(0);
			setState(520);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,67,_ctx) ) {
			case 1:
				{
				setState(518);
				match(T__48);
				setState(519);
				typbind();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DatabindContext extends ParserRuleContext {
		public DatabindContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_databind; }
	 
		public DatabindContext() { }
		public void copyFrom(DatabindContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DataTypeDataBindContext extends DatabindContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public ConbindContext conbind() {
			return getRuleContext(ConbindContext.class,0);
		}
		public List<TerminalNode> VAR() { return getTokens(MLParser.VAR); }
		public TerminalNode VAR(int i) {
			return getToken(MLParser.VAR, i);
		}
		public DatabindContext databind() {
			return getRuleContext(DatabindContext.class,0);
		}
		public DataTypeDataBindContext(DatabindContext ctx) { copyFrom(ctx); }
	}

	public final DatabindContext databind() throws RecognitionException {
		DatabindContext _localctx = new DatabindContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_databind);
		int _la;
		try {
			_localctx = new DataTypeDataBindContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(532);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,70,_ctx) ) {
			case 1:
				{
				setState(523);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==VAR) {
					{
					setState(522);
					match(VAR);
					}
				}

				}
				break;
			case 2:
				{
				setState(525);
				match(VAR);
				setState(528); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(526);
					match(T__5);
					setState(527);
					match(VAR);
					}
					}
					setState(530); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__5 );
				}
				break;
			}
			setState(534);
			match(ID);
			setState(535);
			match(T__27);
			setState(536);
			conbind();
			setState(539);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,71,_ctx) ) {
			case 1:
				{
				setState(537);
				match(T__48);
				setState(538);
				databind();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConbindContext extends ParserRuleContext {
		public ConbindContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_conbind; }
	 
		public ConbindContext() { }
		public void copyFrom(ConbindContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DataConsConBindContext extends ConbindContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public ConbindContext conbind() {
			return getRuleContext(ConbindContext.class,0);
		}
		public DataConsConBindContext(ConbindContext ctx) { copyFrom(ctx); }
	}

	public final ConbindContext conbind() throws RecognitionException {
		ConbindContext _localctx = new ConbindContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_conbind);
		try {
			_localctx = new DataConsConBindContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(541);
			match(ID);
			setState(544);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,72,_ctx) ) {
			case 1:
				{
				setState(542);
				match(T__25);
				setState(543);
				typ(0);
				}
				break;
			}
			setState(548);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,73,_ctx) ) {
			case 1:
				{
				setState(546);
				match(T__29);
				setState(547);
				conbind();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExnbindContext extends ParserRuleContext {
		public ExnbindContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exnbind; }
	 
		public ExnbindContext() { }
		public void copyFrom(ExnbindContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class GenExnBindContext extends ExnbindContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public ExnbindContext exnbind() {
			return getRuleContext(ExnbindContext.class,0);
		}
		public GenExnBindContext(ExnbindContext ctx) { copyFrom(ctx); }
	}
	public static class RenameExnBindContext extends ExnbindContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public LongidContext longid() {
			return getRuleContext(LongidContext.class,0);
		}
		public ExnbindContext exnbind() {
			return getRuleContext(ExnbindContext.class,0);
		}
		public RenameExnBindContext(ExnbindContext ctx) { copyFrom(ctx); }
	}

	public final ExnbindContext exnbind() throws RecognitionException {
		ExnbindContext _localctx = new ExnbindContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_exnbind);
		try {
			setState(565);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,76,_ctx) ) {
			case 1:
				_localctx = new GenExnBindContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(550);
				match(ID);
				{
				setState(551);
				match(T__25);
				setState(552);
				typ(0);
				}
				setState(556);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,74,_ctx) ) {
				case 1:
					{
					setState(554);
					match(T__29);
					setState(555);
					exnbind();
					}
					break;
				}
				}
				break;
			case 2:
				_localctx = new RenameExnBindContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(558);
				match(ID);
				setState(559);
				match(T__27);
				setState(560);
				longid();
				setState(563);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,75,_ctx) ) {
				case 1:
					{
					setState(561);
					match(T__48);
					setState(562);
					exnbind();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StrContext extends ParserRuleContext {
		public StrContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_str; }
	 
		public StrContext() { }
		public void copyFrom(StrContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StructStrContext extends StrContext {
		public DecContext dec() {
			return getRuleContext(DecContext.class,0);
		}
		public StructStrContext(StrContext ctx) { copyFrom(ctx); }
	}
	public static class TranspAnnoStrContext extends StrContext {
		public StrContext str() {
			return getRuleContext(StrContext.class,0);
		}
		public SigContext sig() {
			return getRuleContext(SigContext.class,0);
		}
		public TranspAnnoStrContext(StrContext ctx) { copyFrom(ctx); }
	}
	public static class OpaqueAnnoStrContext extends StrContext {
		public StrContext str() {
			return getRuleContext(StrContext.class,0);
		}
		public SigContext sig() {
			return getRuleContext(SigContext.class,0);
		}
		public OpaqueAnnoStrContext(StrContext ctx) { copyFrom(ctx); }
	}
	public static class IdentStrContext extends StrContext {
		public LongidContext longid() {
			return getRuleContext(LongidContext.class,0);
		}
		public IdentStrContext(StrContext ctx) { copyFrom(ctx); }
	}
	public static class FunctorStrAppStrContext extends StrContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public StrContext str() {
			return getRuleContext(StrContext.class,0);
		}
		public FunctorStrAppStrContext(StrContext ctx) { copyFrom(ctx); }
	}
	public static class FunctorDecAppStrContext extends StrContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public DecContext dec() {
			return getRuleContext(DecContext.class,0);
		}
		public FunctorDecAppStrContext(StrContext ctx) { copyFrom(ctx); }
	}
	public static class LocalDecStrContext extends StrContext {
		public DecContext dec() {
			return getRuleContext(DecContext.class,0);
		}
		public StrContext str() {
			return getRuleContext(StrContext.class,0);
		}
		public LocalDecStrContext(StrContext ctx) { copyFrom(ctx); }
	}

	public final StrContext str() throws RecognitionException {
		return str(0);
	}

	private StrContext str(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		StrContext _localctx = new StrContext(_ctx, _parentState);
		StrContext _prevctx = _localctx;
		int _startState = 34;
		enterRecursionRule(_localctx, 34, RULE_str, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(589);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,77,_ctx) ) {
			case 1:
				{
				_localctx = new IdentStrContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(568);
				longid();
				}
				break;
			case 2:
				{
				_localctx = new StructStrContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(569);
				match(T__50);
				setState(570);
				dec(0);
				setState(571);
				match(T__13);
				}
				break;
			case 3:
				{
				_localctx = new FunctorStrAppStrContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(573);
				match(ID);
				setState(574);
				match(T__3);
				setState(575);
				str(0);
				setState(576);
				match(T__4);
				}
				break;
			case 4:
				{
				_localctx = new FunctorDecAppStrContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(578);
				match(ID);
				setState(579);
				match(T__3);
				setState(580);
				dec(0);
				setState(581);
				match(T__4);
				}
				break;
			case 5:
				{
				_localctx = new LocalDecStrContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(583);
				match(T__11);
				setState(584);
				dec(0);
				setState(585);
				match(T__12);
				setState(586);
				str(0);
				setState(587);
				match(T__13);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(599);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,79,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(597);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,78,_ctx) ) {
					case 1:
						{
						_localctx = new TranspAnnoStrContext(new StrContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_str);
						setState(591);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(592);
						match(T__14);
						setState(593);
						sig(0);
						}
						break;
					case 2:
						{
						_localctx = new OpaqueAnnoStrContext(new StrContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_str);
						setState(594);
						if (!(precpred(_ctx, 4))) throw new FailedPredicateException(this, "precpred(_ctx, 4)");
						setState(595);
						match(T__51);
						setState(596);
						sig(0);
						}
						break;
					}
					} 
				}
				setState(601);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,79,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class StrbindContext extends ParserRuleContext {
		public StrbindContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_strbind; }
	 
		public StrbindContext() { }
		public void copyFrom(StrbindContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StructStrBindCompContext extends StrbindContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public StrContext str() {
			return getRuleContext(StrContext.class,0);
		}
		public SigContext sig() {
			return getRuleContext(SigContext.class,0);
		}
		public StrbindContext strbind() {
			return getRuleContext(StrbindContext.class,0);
		}
		public StructStrBindCompContext(StrbindContext ctx) { copyFrom(ctx); }
	}
	public static class StructStrBindSmplContext extends StrbindContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public StrContext str() {
			return getRuleContext(StrContext.class,0);
		}
		public SigContext sig() {
			return getRuleContext(SigContext.class,0);
		}
		public StrbindContext strbind() {
			return getRuleContext(StrbindContext.class,0);
		}
		public StructStrBindSmplContext(StrbindContext ctx) { copyFrom(ctx); }
	}

	public final StrbindContext strbind() throws RecognitionException {
		StrbindContext _localctx = new StrbindContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_strbind);
		int _la;
		try {
			setState(624);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,84,_ctx) ) {
			case 1:
				_localctx = new StructStrBindCompContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(602);
				match(ID);
				setState(605);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__51) {
					{
					setState(603);
					match(T__51);
					setState(604);
					sig(0);
					}
				}

				setState(607);
				match(T__27);
				setState(608);
				str(0);
				setState(611);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,81,_ctx) ) {
				case 1:
					{
					setState(609);
					match(T__48);
					setState(610);
					strbind();
					}
					break;
				}
				}
				break;
			case 2:
				_localctx = new StructStrBindSmplContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(613);
				match(ID);
				setState(616);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__14) {
					{
					setState(614);
					match(T__14);
					setState(615);
					sig(0);
					}
				}

				setState(618);
				match(T__27);
				setState(619);
				str(0);
				setState(622);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,83,_ctx) ) {
				case 1:
					{
					setState(620);
					match(T__48);
					setState(621);
					strbind();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SigContext extends ParserRuleContext {
		public SigContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sig; }
	 
		public SigContext() { }
		public void copyFrom(SigContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class RefineSigContext extends SigContext {
		public SigContext sig() {
			return getRuleContext(SigContext.class,0);
		}
		public TyprefinContext typrefin() {
			return getRuleContext(TyprefinContext.class,0);
		}
		public RefineSigContext(SigContext ctx) { copyFrom(ctx); }
	}
	public static class SignatureBodyContext extends SigContext {
		public SpecContext spec() {
			return getRuleContext(SpecContext.class,0);
		}
		public SignatureBodyContext(SigContext ctx) { copyFrom(ctx); }
	}
	public static class IdentSigContext extends SigContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public IdentSigContext(SigContext ctx) { copyFrom(ctx); }
	}

	public final SigContext sig() throws RecognitionException {
		return sig(0);
	}

	private SigContext sig(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SigContext _localctx = new SigContext(_ctx, _parentState);
		SigContext _prevctx = _localctx;
		int _startState = 38;
		enterRecursionRule(_localctx, 38, RULE_sig, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(632);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				{
				_localctx = new IdentSigContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(627);
				match(ID);
				}
				break;
			case T__52:
				{
				_localctx = new SignatureBodyContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(628);
				match(T__52);
				setState(629);
				spec(0);
				setState(630);
				match(T__13);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			_ctx.stop = _input.LT(-1);
			setState(640);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,86,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new RefineSigContext(new SigContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_sig);
					setState(634);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(635);
					match(T__53);
					setState(636);
					match(T__37);
					setState(637);
					typrefin();
					}
					} 
				}
				setState(642);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,86,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class TyprefinContext extends ParserRuleContext {
		public TyprefinContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typrefin; }
	 
		public TyprefinContext() { }
		public void copyFrom(TyprefinContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class TypeRefineContext extends TyprefinContext {
		public LongidContext longid() {
			return getRuleContext(LongidContext.class,0);
		}
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public List<TerminalNode> VAR() { return getTokens(MLParser.VAR); }
		public TerminalNode VAR(int i) {
			return getToken(MLParser.VAR, i);
		}
		public TyprefinContext typrefin() {
			return getRuleContext(TyprefinContext.class,0);
		}
		public TypeRefineContext(TyprefinContext ctx) { copyFrom(ctx); }
	}

	public final TyprefinContext typrefin() throws RecognitionException {
		TyprefinContext _localctx = new TyprefinContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_typrefin);
		int _la;
		try {
			_localctx = new TypeRefineContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(653);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,89,_ctx) ) {
			case 1:
				{
				setState(644);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==VAR) {
					{
					setState(643);
					match(VAR);
					}
				}

				}
				break;
			case 2:
				{
				setState(646);
				match(VAR);
				setState(649); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(647);
					match(T__5);
					setState(648);
					match(VAR);
					}
					}
					setState(651); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__5 );
				}
				break;
			}
			setState(655);
			longid();
			setState(656);
			match(T__27);
			setState(657);
			typ(0);
			{
			setState(658);
			match(T__48);
			setState(659);
			match(T__37);
			setState(660);
			typrefin();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SpecContext extends ParserRuleContext {
		public SpecContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_spec; }
	 
		public SpecContext() { }
		public void copyFrom(SpecContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ValSpecContext extends SpecContext {
		public ValdescContext valdesc() {
			return getRuleContext(ValdescContext.class,0);
		}
		public ValSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class EmpHeadSeqSpecContext extends SpecContext {
		public SpecContext spec() {
			return getRuleContext(SpecContext.class,0);
		}
		public EmpHeadSeqSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class EmpSpecContext extends SpecContext {
		public EmpSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class TypeAbbrevSpecContext extends SpecContext {
		public TypbindContext typbind() {
			return getRuleContext(TypbindContext.class,0);
		}
		public TypeAbbrevSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class ExnSpecContext extends SpecContext {
		public ExndescContext exndesc() {
			return getRuleContext(ExndescContext.class,0);
		}
		public ExnSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class DatatypeReplSpecContext extends SpecContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public LongidContext longid() {
			return getRuleContext(LongidContext.class,0);
		}
		public DatatypeReplSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class StructureSharingSpecContext extends SpecContext {
		public SpecContext spec() {
			return getRuleContext(SpecContext.class,0);
		}
		public List<LongidContext> longid() {
			return getRuleContexts(LongidContext.class);
		}
		public LongidContext longid(int i) {
			return getRuleContext(LongidContext.class,i);
		}
		public StructureSharingSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class DatatypeSpecContext extends SpecContext {
		public DatdescContext datdesc() {
			return getRuleContext(DatdescContext.class,0);
		}
		public DatatypeSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class TypeSharingSpecContext extends SpecContext {
		public SpecContext spec() {
			return getRuleContext(SpecContext.class,0);
		}
		public List<LongidContext> longid() {
			return getRuleContexts(LongidContext.class);
		}
		public LongidContext longid(int i) {
			return getRuleContext(LongidContext.class,i);
		}
		public TypeSharingSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class StructureSpecContext extends SpecContext {
		public StrdescContext strdesc() {
			return getRuleContext(StrdescContext.class,0);
		}
		public StructureSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class IncludeOneSpecContext extends SpecContext {
		public SigContext sig() {
			return getRuleContext(SigContext.class,0);
		}
		public IncludeOneSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class IncludeManySpecContext extends SpecContext {
		public List<TerminalNode> ID() { return getTokens(MLParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MLParser.ID, i);
		}
		public IncludeManySpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class TypeSpecContext extends SpecContext {
		public TypdescContext typdesc() {
			return getRuleContext(TypdescContext.class,0);
		}
		public TypeSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class EquaTypeSpecContext extends SpecContext {
		public TypdescContext typdesc() {
			return getRuleContext(TypdescContext.class,0);
		}
		public EquaTypeSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}
	public static class SeqSpecContext extends SpecContext {
		public List<SpecContext> spec() {
			return getRuleContexts(SpecContext.class);
		}
		public SpecContext spec(int i) {
			return getRuleContext(SpecContext.class,i);
		}
		public SeqSpecContext(SpecContext ctx) { copyFrom(ctx); }
	}

	public final SpecContext spec() throws RecognitionException {
		return spec(0);
	}

	private SpecContext spec(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		SpecContext _localctx = new SpecContext(_ctx, _parentState);
		SpecContext _prevctx = _localctx;
		int _startState = 42;
		enterRecursionRule(_localctx, 42, RULE_spec, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(693);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				{
				_localctx = new ValSpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(663);
				match(T__35);
				setState(664);
				valdesc();
				}
				break;
			case 2:
				{
				_localctx = new TypeSpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(665);
				match(T__37);
				setState(666);
				typdesc();
				}
				break;
			case 3:
				{
				_localctx = new EquaTypeSpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(667);
				match(T__54);
				setState(668);
				typdesc();
				}
				break;
			case 4:
				{
				_localctx = new TypeAbbrevSpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(669);
				match(T__37);
				setState(670);
				typbind();
				}
				break;
			case 5:
				{
				_localctx = new DatatypeSpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(671);
				match(T__38);
				setState(672);
				datdesc();
				}
				break;
			case 6:
				{
				_localctx = new DatatypeReplSpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(673);
				match(T__38);
				setState(674);
				match(ID);
				setState(675);
				match(T__27);
				setState(676);
				match(T__38);
				setState(677);
				longid();
				}
				break;
			case 7:
				{
				_localctx = new ExnSpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(678);
				match(T__42);
				setState(679);
				exndesc();
				}
				break;
			case 8:
				{
				_localctx = new StructureSpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(680);
				match(T__43);
				setState(681);
				strdesc();
				}
				break;
			case 9:
				{
				_localctx = new EmpSpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				}
				break;
			case 10:
				{
				_localctx = new EmpHeadSeqSpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(683);
				match(T__10);
				setState(684);
				spec(6);
				}
				break;
			case 11:
				{
				_localctx = new IncludeOneSpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(685);
				match(T__55);
				setState(686);
				sig(0);
				}
				break;
			case 12:
				{
				_localctx = new IncludeManySpecContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(687);
				match(T__55);
				setState(689); 
				_errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						setState(688);
						match(ID);
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					setState(691); 
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,90,_ctx);
				} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(721);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,95,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(719);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,94,_ctx) ) {
					case 1:
						{
						_localctx = new SeqSpecContext(new SpecContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_spec);
						setState(695);
						if (!(precpred(_ctx, 5))) throw new FailedPredicateException(this, "precpred(_ctx, 5)");
						setState(696);
						match(T__10);
						setState(697);
						spec(6);
						}
						break;
					case 2:
						{
						_localctx = new TypeSharingSpecContext(new SpecContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_spec);
						setState(698);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(699);
						match(T__56);
						setState(700);
						match(T__37);
						setState(701);
						longid();
						setState(702);
						match(T__27);
						setState(705); 
						_errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								setState(703);
								match(T__27);
								setState(704);
								longid();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							setState(707); 
							_errHandler.sync(this);
							_alt = getInterpreter().adaptivePredict(_input,92,_ctx);
						} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
						}
						break;
					case 3:
						{
						_localctx = new StructureSharingSpecContext(new SpecContext(_parentctx, _parentState));
						pushNewRecursionContext(_localctx, _startState, RULE_spec);
						setState(709);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(710);
						match(T__56);
						setState(711);
						longid();
						setState(712);
						match(T__27);
						setState(715); 
						_errHandler.sync(this);
						_alt = 1;
						do {
							switch (_alt) {
							case 1:
								{
								{
								setState(713);
								match(T__27);
								setState(714);
								longid();
								}
								}
								break;
							default:
								throw new NoViableAltException(this);
							}
							setState(717); 
							_errHandler.sync(this);
							_alt = getInterpreter().adaptivePredict(_input,93,_ctx);
						} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
						}
						break;
					}
					} 
				}
				setState(723);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,95,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class ValdescContext extends ParserRuleContext {
		public ValdescContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_valdesc; }
	 
		public ValdescContext() { }
		public void copyFrom(ValdescContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ValDescContext extends ValdescContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public ValdescContext valdesc() {
			return getRuleContext(ValdescContext.class,0);
		}
		public ValDescContext(ValdescContext ctx) { copyFrom(ctx); }
	}

	public final ValdescContext valdesc() throws RecognitionException {
		ValdescContext _localctx = new ValdescContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_valdesc);
		try {
			_localctx = new ValDescContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(724);
			match(ID);
			setState(725);
			match(T__14);
			setState(726);
			typ(0);
			setState(729);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,96,_ctx) ) {
			case 1:
				{
				setState(727);
				match(T__48);
				setState(728);
				valdesc();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class TypdescContext extends ParserRuleContext {
		public TypdescContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_typdesc; }
	 
		public TypdescContext() { }
		public void copyFrom(TypdescContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class AbsTypeSpecContext extends TypdescContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public List<TerminalNode> VAR() { return getTokens(MLParser.VAR); }
		public TerminalNode VAR(int i) {
			return getToken(MLParser.VAR, i);
		}
		public TypdescContext typdesc() {
			return getRuleContext(TypdescContext.class,0);
		}
		public AbsTypeSpecContext(TypdescContext ctx) { copyFrom(ctx); }
	}

	public final TypdescContext typdesc() throws RecognitionException {
		TypdescContext _localctx = new TypdescContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_typdesc);
		int _la;
		try {
			_localctx = new AbsTypeSpecContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(741);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,99,_ctx) ) {
			case 1:
				{
				setState(732);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==VAR) {
					{
					setState(731);
					match(VAR);
					}
				}

				}
				break;
			case 2:
				{
				setState(734);
				match(VAR);
				setState(737); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(735);
					match(T__5);
					setState(736);
					match(VAR);
					}
					}
					setState(739); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__5 );
				}
				break;
			}
			setState(743);
			match(ID);
			setState(746);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,100,_ctx) ) {
			case 1:
				{
				setState(744);
				match(T__48);
				setState(745);
				typdesc();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class DatdescContext extends ParserRuleContext {
		public DatdescContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_datdesc; }
	 
		public DatdescContext() { }
		public void copyFrom(DatdescContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class DatDescContext extends DatdescContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public CondescContext condesc() {
			return getRuleContext(CondescContext.class,0);
		}
		public List<TerminalNode> VAR() { return getTokens(MLParser.VAR); }
		public TerminalNode VAR(int i) {
			return getToken(MLParser.VAR, i);
		}
		public DatdescContext datdesc() {
			return getRuleContext(DatdescContext.class,0);
		}
		public DatDescContext(DatdescContext ctx) { copyFrom(ctx); }
	}

	public final DatdescContext datdesc() throws RecognitionException {
		DatdescContext _localctx = new DatdescContext(_ctx, getState());
		enterRule(_localctx, 48, RULE_datdesc);
		int _la;
		try {
			_localctx = new DatDescContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(758);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,103,_ctx) ) {
			case 1:
				{
				setState(749);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==VAR) {
					{
					setState(748);
					match(VAR);
					}
				}

				}
				break;
			case 2:
				{
				setState(751);
				match(VAR);
				setState(754); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(752);
					match(T__5);
					setState(753);
					match(VAR);
					}
					}
					setState(756); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==T__5 );
				}
				break;
			}
			setState(760);
			match(ID);
			setState(761);
			match(T__27);
			setState(762);
			condesc();
			setState(765);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
			case 1:
				{
				setState(763);
				match(T__48);
				setState(764);
				datdesc();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class CondescContext extends ParserRuleContext {
		public CondescContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_condesc; }
	 
		public CondescContext() { }
		public void copyFrom(CondescContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CondDescContext extends CondescContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public CondescContext condesc() {
			return getRuleContext(CondescContext.class,0);
		}
		public CondDescContext(CondescContext ctx) { copyFrom(ctx); }
	}

	public final CondescContext condesc() throws RecognitionException {
		CondescContext _localctx = new CondescContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_condesc);
		try {
			_localctx = new CondDescContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(767);
			match(ID);
			setState(770);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,105,_ctx) ) {
			case 1:
				{
				setState(768);
				match(T__25);
				setState(769);
				typ(0);
				}
				break;
			}
			setState(774);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
			case 1:
				{
				setState(772);
				match(T__29);
				setState(773);
				condesc();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExndescContext extends ParserRuleContext {
		public ExndescContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exndesc; }
	 
		public ExndescContext() { }
		public void copyFrom(ExndescContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class ExnDescContext extends ExndescContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public TypContext typ() {
			return getRuleContext(TypContext.class,0);
		}
		public ExndescContext exndesc() {
			return getRuleContext(ExndescContext.class,0);
		}
		public ExnDescContext(ExndescContext ctx) { copyFrom(ctx); }
	}

	public final ExndescContext exndesc() throws RecognitionException {
		ExndescContext _localctx = new ExndescContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_exndesc);
		try {
			_localctx = new ExnDescContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(776);
			match(ID);
			setState(779);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,107,_ctx) ) {
			case 1:
				{
				setState(777);
				match(T__25);
				setState(778);
				typ(0);
				}
				break;
			}
			setState(783);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,108,_ctx) ) {
			case 1:
				{
				setState(781);
				match(T__48);
				setState(782);
				exndesc();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class StrdescContext extends ParserRuleContext {
		public StrdescContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_strdesc; }
	 
		public StrdescContext() { }
		public void copyFrom(StrdescContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class StrDescContext extends StrdescContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public SigContext sig() {
			return getRuleContext(SigContext.class,0);
		}
		public StrdescContext strdesc() {
			return getRuleContext(StrdescContext.class,0);
		}
		public StrDescContext(StrdescContext ctx) { copyFrom(ctx); }
	}

	public final StrdescContext strdesc() throws RecognitionException {
		StrdescContext _localctx = new StrdescContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_strdesc);
		try {
			_localctx = new StrDescContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(785);
			match(ID);
			setState(786);
			match(T__14);
			setState(787);
			sig(0);
			setState(790);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,109,_ctx) ) {
			case 1:
				{
				setState(788);
				match(T__48);
				setState(789);
				strdesc();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ProgContext extends ParserRuleContext {
		public ProgContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_prog; }
	 
		public ProgContext() { }
		public void copyFrom(ProgContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class FunctorDecProgContext extends ProgContext {
		public FctbindContext fctbind() {
			return getRuleContext(FctbindContext.class,0);
		}
		public TerminalNode EOF() { return getToken(MLParser.EOF, 0); }
		public FunctorDecProgContext(ProgContext ctx) { copyFrom(ctx); }
	}
	public static class EmpProgContext extends ProgContext {
		public TerminalNode EOF() { return getToken(MLParser.EOF, 0); }
		public EmpProgContext(ProgContext ctx) { copyFrom(ctx); }
	}
	public static class SeqProgContext extends ProgContext {
		public List<ProgContext> prog() {
			return getRuleContexts(ProgContext.class);
		}
		public ProgContext prog(int i) {
			return getRuleContext(ProgContext.class,i);
		}
		public TerminalNode EOF() { return getToken(MLParser.EOF, 0); }
		public SeqProgContext(ProgContext ctx) { copyFrom(ctx); }
	}
	public static class CoreDecProgContext extends ProgContext {
		public DecContext dec() {
			return getRuleContext(DecContext.class,0);
		}
		public TerminalNode EOF() { return getToken(MLParser.EOF, 0); }
		public CoreDecProgContext(ProgContext ctx) { copyFrom(ctx); }
	}
	public static class SignatureDecProgContext extends ProgContext {
		public SigbindContext sigbind() {
			return getRuleContext(SigbindContext.class,0);
		}
		public TerminalNode EOF() { return getToken(MLParser.EOF, 0); }
		public SignatureDecProgContext(ProgContext ctx) { copyFrom(ctx); }
	}
	public static class EmpHeadSeqProgContext extends ProgContext {
		public ProgContext prog() {
			return getRuleContext(ProgContext.class,0);
		}
		public TerminalNode EOF() { return getToken(MLParser.EOF, 0); }
		public EmpHeadSeqProgContext(ProgContext ctx) { copyFrom(ctx); }
	}

	public final ProgContext prog() throws RecognitionException {
		return prog(0);
	}

	private ProgContext prog(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ProgContext _localctx = new ProgContext(_ctx, _parentState);
		ProgContext _prevctx = _localctx;
		int _startState = 56;
		enterRecursionRule(_localctx, 56, RULE_prog, _p);
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(809);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,110,_ctx) ) {
			case 1:
				{
				_localctx = new CoreDecProgContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;

				setState(793);
				dec(0);
				setState(794);
				match(EOF);
				}
				break;
			case 2:
				{
				_localctx = new FunctorDecProgContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(796);
				match(T__57);
				setState(797);
				fctbind();
				setState(798);
				match(EOF);
				}
				break;
			case 3:
				{
				_localctx = new SignatureDecProgContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(800);
				match(T__58);
				setState(801);
				sigbind();
				setState(802);
				match(EOF);
				}
				break;
			case 4:
				{
				_localctx = new EmpProgContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(804);
				match(EOF);
				}
				break;
			case 5:
				{
				_localctx = new EmpHeadSeqProgContext(_localctx);
				_ctx = _localctx;
				_prevctx = _localctx;
				setState(805);
				match(T__10);
				setState(806);
				prog(0);
				setState(807);
				match(EOF);
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(818);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,111,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					{
					_localctx = new SeqProgContext(new ProgContext(_parentctx, _parentState));
					pushNewRecursionContext(_localctx, _startState, RULE_prog);
					setState(811);
					if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
					setState(812);
					match(T__10);
					setState(813);
					prog(0);
					setState(814);
					match(EOF);
					}
					} 
				}
				setState(820);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,111,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class FctbindContext extends ParserRuleContext {
		public FctbindContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_fctbind; }
	 
		public FctbindContext() { }
		public void copyFrom(FctbindContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class OpenedFctBindSmplContext extends FctbindContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public SpecContext spec() {
			return getRuleContext(SpecContext.class,0);
		}
		public StrContext str() {
			return getRuleContext(StrContext.class,0);
		}
		public SigContext sig() {
			return getRuleContext(SigContext.class,0);
		}
		public FctbindContext fctbind() {
			return getRuleContext(FctbindContext.class,0);
		}
		public OpenedFctBindSmplContext(FctbindContext ctx) { copyFrom(ctx); }
	}
	public static class PlainFctBindSmplContext extends FctbindContext {
		public List<TerminalNode> ID() { return getTokens(MLParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MLParser.ID, i);
		}
		public List<SigContext> sig() {
			return getRuleContexts(SigContext.class);
		}
		public SigContext sig(int i) {
			return getRuleContext(SigContext.class,i);
		}
		public StrContext str() {
			return getRuleContext(StrContext.class,0);
		}
		public FctbindContext fctbind() {
			return getRuleContext(FctbindContext.class,0);
		}
		public PlainFctBindSmplContext(FctbindContext ctx) { copyFrom(ctx); }
	}
	public static class OpenedFctBindCompContext extends FctbindContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public SpecContext spec() {
			return getRuleContext(SpecContext.class,0);
		}
		public StrContext str() {
			return getRuleContext(StrContext.class,0);
		}
		public SigContext sig() {
			return getRuleContext(SigContext.class,0);
		}
		public FctbindContext fctbind() {
			return getRuleContext(FctbindContext.class,0);
		}
		public OpenedFctBindCompContext(FctbindContext ctx) { copyFrom(ctx); }
	}
	public static class PlainFctBindCompContext extends FctbindContext {
		public List<TerminalNode> ID() { return getTokens(MLParser.ID); }
		public TerminalNode ID(int i) {
			return getToken(MLParser.ID, i);
		}
		public List<SigContext> sig() {
			return getRuleContexts(SigContext.class);
		}
		public SigContext sig(int i) {
			return getRuleContext(SigContext.class,i);
		}
		public StrContext str() {
			return getRuleContext(StrContext.class,0);
		}
		public FctbindContext fctbind() {
			return getRuleContext(FctbindContext.class,0);
		}
		public PlainFctBindCompContext(FctbindContext ctx) { copyFrom(ctx); }
	}

	public final FctbindContext fctbind() throws RecognitionException {
		FctbindContext _localctx = new FctbindContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_fctbind);
		int _la;
		try {
			setState(883);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,121,_ctx) ) {
			case 1:
				_localctx = new PlainFctBindCompContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(821);
				match(ID);
				setState(822);
				match(T__3);
				setState(823);
				match(ID);
				setState(824);
				match(T__14);
				setState(825);
				sig(0);
				setState(826);
				match(T__4);
				setState(829);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__51) {
					{
					setState(827);
					match(T__51);
					setState(828);
					sig(0);
					}
				}

				setState(831);
				match(T__27);
				setState(832);
				str(0);
				setState(835);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__48) {
					{
					setState(833);
					match(T__48);
					setState(834);
					fctbind();
					}
				}

				}
				break;
			case 2:
				_localctx = new PlainFctBindSmplContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(837);
				match(ID);
				setState(838);
				match(T__3);
				setState(839);
				match(ID);
				setState(840);
				match(T__14);
				setState(841);
				sig(0);
				setState(842);
				match(T__4);
				setState(845);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__14) {
					{
					setState(843);
					match(T__14);
					setState(844);
					sig(0);
					}
				}

				setState(847);
				match(T__27);
				setState(848);
				str(0);
				setState(851);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__48) {
					{
					setState(849);
					match(T__48);
					setState(850);
					fctbind();
					}
				}

				}
				break;
			case 3:
				_localctx = new OpenedFctBindCompContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(853);
				match(ID);
				setState(854);
				match(T__3);
				setState(855);
				spec(0);
				setState(856);
				match(T__4);
				setState(861);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << T__51) | (1L << T__52) | (1L << ID))) != 0)) {
					{
					setState(858);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (_la==T__51) {
						{
						setState(857);
						match(T__51);
						}
					}

					setState(860);
					sig(0);
					}
				}

				setState(863);
				match(T__27);
				setState(864);
				str(0);
				setState(867);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__48) {
					{
					setState(865);
					match(T__48);
					setState(866);
					fctbind();
					}
				}

				}
				break;
			case 4:
				_localctx = new OpenedFctBindSmplContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(869);
				match(ID);
				setState(870);
				match(T__3);
				setState(871);
				spec(0);
				setState(872);
				match(T__4);
				setState(875);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__14) {
					{
					setState(873);
					match(T__14);
					setState(874);
					sig(0);
					}
				}

				setState(877);
				match(T__27);
				setState(878);
				str(0);
				setState(881);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==T__48) {
					{
					setState(879);
					match(T__48);
					setState(880);
					fctbind();
					}
				}

				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SigbindContext extends ParserRuleContext {
		public SigbindContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sigbind; }
	 
		public SigbindContext() { }
		public void copyFrom(SigbindContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class SigBindContext extends SigbindContext {
		public TerminalNode ID() { return getToken(MLParser.ID, 0); }
		public SigContext sig() {
			return getRuleContext(SigContext.class,0);
		}
		public SigbindContext sigbind() {
			return getRuleContext(SigbindContext.class,0);
		}
		public SigBindContext(SigbindContext ctx) { copyFrom(ctx); }
	}

	public final SigbindContext sigbind() throws RecognitionException {
		SigbindContext _localctx = new SigbindContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_sigbind);
		int _la;
		try {
			_localctx = new SigBindContext(_localctx);
			enterOuterAlt(_localctx, 1);
			{
			setState(885);
			match(ID);
			setState(886);
			match(T__27);
			setState(887);
			sig(0);
			setState(890);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==T__48) {
				{
				setState(888);
				match(T__48);
				setState(889);
				sigbind();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 1:
			return exp_sempred((ExpContext)_localctx, predIndex);
		case 5:
			return pat_sempred((PatContext)_localctx, predIndex);
		case 7:
			return typ_sempred((TypContext)_localctx, predIndex);
		case 9:
			return dec_sempred((DecContext)_localctx, predIndex);
		case 17:
			return str_sempred((StrContext)_localctx, predIndex);
		case 19:
			return sig_sempred((SigContext)_localctx, predIndex);
		case 21:
			return spec_sempred((SpecContext)_localctx, predIndex);
		case 28:
			return prog_sempred((ProgContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean exp_sempred(ExpContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 11);
		case 1:
			return precpred(_ctx, 10);
		case 2:
			return precpred(_ctx, 6);
		case 3:
			return precpred(_ctx, 5);
		case 4:
			return precpred(_ctx, 9);
		case 5:
			return precpred(_ctx, 7);
		}
		return true;
	}
	private boolean pat_sempred(PatContext _localctx, int predIndex) {
		switch (predIndex) {
		case 6:
			return precpred(_ctx, 8);
		case 7:
			return precpred(_ctx, 2);
		}
		return true;
	}
	private boolean typ_sempred(TypContext _localctx, int predIndex) {
		switch (predIndex) {
		case 8:
			return precpred(_ctx, 2);
		case 9:
			return precpred(_ctx, 6);
		case 10:
			return precpred(_ctx, 5);
		case 11:
			return precpred(_ctx, 3);
		}
		return true;
	}
	private boolean dec_sempred(DecContext _localctx, int predIndex) {
		switch (predIndex) {
		case 12:
			return precpred(_ctx, 6);
		}
		return true;
	}
	private boolean str_sempred(StrContext _localctx, int predIndex) {
		switch (predIndex) {
		case 13:
			return precpred(_ctx, 5);
		case 14:
			return precpred(_ctx, 4);
		}
		return true;
	}
	private boolean sig_sempred(SigContext _localctx, int predIndex) {
		switch (predIndex) {
		case 15:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean spec_sempred(SpecContext _localctx, int predIndex) {
		switch (predIndex) {
		case 16:
			return precpred(_ctx, 5);
		case 17:
			return precpred(_ctx, 2);
		case 18:
			return precpred(_ctx, 1);
		}
		return true;
	}
	private boolean prog_sempred(ProgContext _localctx, int predIndex) {
		switch (predIndex) {
		case 19:
			return precpred(_ctx, 1);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3E\u037f\4\2\t\2\4"+
		"\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13\t"+
		"\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \3\2"+
		"\3\2\3\2\6\2D\n\2\r\2\16\2E\3\3\3\3\5\3J\n\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\7\3W\n\3\f\3\16\3Z\13\3\3\3\3\3\3\3\3\3\5\3`\n\3\3"+
		"\3\3\3\3\3\3\3\3\3\7\3g\n\3\f\3\16\3j\13\3\5\3l\n\3\3\3\3\3\3\3\3\3\3"+
		"\3\6\3s\n\3\r\3\16\3t\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\7\3\177\n\3\f\3"+
		"\16\3\u0082\13\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\5\3\u009b\n\3\3\3\3\3\3\3\3\3\3"+
		"\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\3\7\3\u00ae\n\3\f\3\16"+
		"\3\u00b1\13\3\3\4\3\4\3\4\3\4\3\4\5\4\u00b8\n\4\3\5\3\5\3\5\3\5\3\5\5"+
		"\5\u00bf\n\5\3\6\3\6\3\7\3\7\3\7\3\7\5\7\u00c7\n\7\3\7\3\7\5\7\u00cb\n"+
		"\7\3\7\3\7\5\7\u00cf\n\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\6\7\u00d9\n\7"+
		"\r\7\16\7\u00da\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\3\7\7\7\u00e9"+
		"\n\7\f\7\16\7\u00ec\13\7\3\7\3\7\3\7\5\7\u00f1\n\7\3\7\3\7\3\7\5\7\u00f6"+
		"\n\7\3\7\3\7\5\7\u00fa\n\7\3\7\3\7\3\7\3\7\3\7\3\7\7\7\u0102\n\7\f\7\16"+
		"\7\u0105\13\7\3\b\3\b\3\b\3\b\3\b\3\b\5\b\u010d\n\b\3\b\3\b\3\b\5\b\u0112"+
		"\n\b\3\b\3\b\5\b\u0116\n\b\3\b\3\b\5\b\u011a\n\b\5\b\u011c\n\b\3\t\3\t"+
		"\3\t\3\t\3\t\3\t\3\t\3\t\3\t\5\t\u0127\n\t\3\t\5\t\u012a\n\t\3\t\3\t\3"+
		"\t\3\t\3\t\3\t\3\t\3\t\6\t\u0134\n\t\r\t\16\t\u0135\3\t\3\t\3\t\3\t\3"+
		"\t\6\t\u013d\n\t\r\t\16\t\u013e\7\t\u0141\n\t\f\t\16\t\u0144\13\t\3\n"+
		"\3\n\3\n\3\n\3\n\5\n\u014b\n\n\3\13\3\13\3\13\5\13\u0150\n\13\3\13\3\13"+
		"\3\13\6\13\u0155\n\13\r\13\16\13\u0156\5\13\u0159\n\13\3\13\3\13\3\13"+
		"\5\13\u015e\n\13\3\13\3\13\3\13\6\13\u0163\n\13\r\13\16\13\u0164\5\13"+
		"\u0167\n\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u0170\n\13\3\13\3"+
		"\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\5\13\u017b\n\13\3\13\3\13\3\13"+
		"\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13\3\13"+
		"\3\13\3\13\6\13\u0190\n\13\r\13\16\13\u0191\3\13\3\13\6\13\u0196\n\13"+
		"\r\13\16\13\u0197\3\13\3\13\5\13\u019c\n\13\3\13\6\13\u019f\n\13\r\13"+
		"\16\13\u01a0\3\13\3\13\5\13\u01a5\n\13\3\13\6\13\u01a8\n\13\r\13\16\13"+
		"\u01a9\5\13\u01ac\n\13\3\13\3\13\3\13\7\13\u01b1\n\13\f\13\16\13\u01b4"+
		"\13\13\3\f\3\f\3\f\3\f\3\f\5\f\u01bb\n\f\3\f\3\f\5\f\u01bf\n\f\3\r\3\r"+
		"\3\r\5\r\u01c4\n\r\3\16\5\16\u01c7\n\16\3\16\6\16\u01ca\n\16\r\16\16\16"+
		"\u01cb\3\16\5\16\u01cf\n\16\3\16\3\16\3\16\3\16\5\16\u01d5\n\16\3\16\3"+
		"\16\3\16\3\16\3\16\5\16\u01dc\n\16\3\16\3\16\3\16\3\16\5\16\u01e2\n\16"+
		"\3\16\3\16\3\16\3\16\3\16\3\16\6\16\u01ea\n\16\r\16\16\16\u01eb\3\16\3"+
		"\16\5\16\u01f0\n\16\3\16\3\16\3\16\3\16\5\16\u01f6\n\16\5\16\u01f8\n\16"+
		"\3\17\5\17\u01fb\n\17\3\17\3\17\3\17\6\17\u0200\n\17\r\17\16\17\u0201"+
		"\5\17\u0204\n\17\3\17\3\17\3\17\3\17\3\17\5\17\u020b\n\17\3\20\5\20\u020e"+
		"\n\20\3\20\3\20\3\20\6\20\u0213\n\20\r\20\16\20\u0214\5\20\u0217\n\20"+
		"\3\20\3\20\3\20\3\20\3\20\5\20\u021e\n\20\3\21\3\21\3\21\5\21\u0223\n"+
		"\21\3\21\3\21\5\21\u0227\n\21\3\22\3\22\3\22\3\22\3\22\3\22\5\22\u022f"+
		"\n\22\3\22\3\22\3\22\3\22\3\22\5\22\u0236\n\22\5\22\u0238\n\22\3\23\3"+
		"\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3"+
		"\23\3\23\3\23\3\23\3\23\3\23\3\23\5\23\u0250\n\23\3\23\3\23\3\23\3\23"+
		"\3\23\3\23\7\23\u0258\n\23\f\23\16\23\u025b\13\23\3\24\3\24\3\24\5\24"+
		"\u0260\n\24\3\24\3\24\3\24\3\24\5\24\u0266\n\24\3\24\3\24\3\24\5\24\u026b"+
		"\n\24\3\24\3\24\3\24\3\24\5\24\u0271\n\24\5\24\u0273\n\24\3\25\3\25\3"+
		"\25\3\25\3\25\3\25\5\25\u027b\n\25\3\25\3\25\3\25\3\25\7\25\u0281\n\25"+
		"\f\25\16\25\u0284\13\25\3\26\5\26\u0287\n\26\3\26\3\26\3\26\6\26\u028c"+
		"\n\26\r\26\16\26\u028d\5\26\u0290\n\26\3\26\3\26\3\26\3\26\3\26\3\26\3"+
		"\26\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3"+
		"\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\3\27\6"+
		"\27\u02b4\n\27\r\27\16\27\u02b5\5\27\u02b8\n\27\3\27\3\27\3\27\3\27\3"+
		"\27\3\27\3\27\3\27\3\27\3\27\6\27\u02c4\n\27\r\27\16\27\u02c5\3\27\3\27"+
		"\3\27\3\27\3\27\3\27\6\27\u02ce\n\27\r\27\16\27\u02cf\7\27\u02d2\n\27"+
		"\f\27\16\27\u02d5\13\27\3\30\3\30\3\30\3\30\3\30\5\30\u02dc\n\30\3\31"+
		"\5\31\u02df\n\31\3\31\3\31\3\31\6\31\u02e4\n\31\r\31\16\31\u02e5\5\31"+
		"\u02e8\n\31\3\31\3\31\3\31\5\31\u02ed\n\31\3\32\5\32\u02f0\n\32\3\32\3"+
		"\32\3\32\6\32\u02f5\n\32\r\32\16\32\u02f6\5\32\u02f9\n\32\3\32\3\32\3"+
		"\32\3\32\3\32\5\32\u0300\n\32\3\33\3\33\3\33\5\33\u0305\n\33\3\33\3\33"+
		"\5\33\u0309\n\33\3\34\3\34\3\34\5\34\u030e\n\34\3\34\3\34\5\34\u0312\n"+
		"\34\3\35\3\35\3\35\3\35\3\35\5\35\u0319\n\35\3\36\3\36\3\36\3\36\3\36"+
		"\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\5\36\u032c"+
		"\n\36\3\36\3\36\3\36\3\36\3\36\7\36\u0333\n\36\f\36\16\36\u0336\13\36"+
		"\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\5\37\u0340\n\37\3\37\3\37\3\37"+
		"\3\37\5\37\u0346\n\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\5\37\u0350"+
		"\n\37\3\37\3\37\3\37\3\37\5\37\u0356\n\37\3\37\3\37\3\37\3\37\3\37\5\37"+
		"\u035d\n\37\3\37\5\37\u0360\n\37\3\37\3\37\3\37\3\37\5\37\u0366\n\37\3"+
		"\37\3\37\3\37\3\37\3\37\3\37\5\37\u036e\n\37\3\37\3\37\3\37\3\37\5\37"+
		"\u0374\n\37\5\37\u0376\n\37\3 \3 \3 \3 \3 \5 \u037d\n \3 \2\n\4\f\20\24"+
		"$(,:!\2\4\6\b\n\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>"+
		"\2\3\3\2@A\2\u0419\2@\3\2\2\2\4\u009a\3\2\2\2\6\u00b2\3\2\2\2\b\u00b9"+
		"\3\2\2\2\n\u00c0\3\2\2\2\f\u00f9\3\2\2\2\16\u011b\3\2\2\2\20\u0129\3\2"+
		"\2\2\22\u0145\3\2\2\2\24\u01ab\3\2\2\2\26\u01be\3\2\2\2\30\u01c0\3\2\2"+
		"\2\32\u01f7\3\2\2\2\34\u0203\3\2\2\2\36\u0216\3\2\2\2 \u021f\3\2\2\2\""+
		"\u0237\3\2\2\2$\u024f\3\2\2\2&\u0272\3\2\2\2(\u027a\3\2\2\2*\u028f\3\2"+
		"\2\2,\u02b7\3\2\2\2.\u02d6\3\2\2\2\60\u02e7\3\2\2\2\62\u02f8\3\2\2\2\64"+
		"\u0301\3\2\2\2\66\u030a\3\2\2\28\u0313\3\2\2\2:\u032b\3\2\2\2<\u0375\3"+
		"\2\2\2>\u0377\3\2\2\2@C\7@\2\2AB\7\3\2\2BD\7@\2\2CA\3\2\2\2DE\3\2\2\2"+
		"EC\3\2\2\2EF\3\2\2\2F\3\3\2\2\2GI\b\3\1\2HJ\7\4\2\2IH\3\2\2\2IJ\3\2\2"+
		"\2JK\3\2\2\2K\u009b\5\2\2\2L\u009b\7@\2\2M\u009b\7A\2\2NO\7\5\2\2O\u009b"+
		"\5\n\6\2PQ\7\6\2\2Q\u009b\7\7\2\2RS\7\6\2\2SX\5\4\3\2TU\7\b\2\2UW\5\4"+
		"\3\2VT\3\2\2\2WZ\3\2\2\2XV\3\2\2\2XY\3\2\2\2Y[\3\2\2\2ZX\3\2\2\2[\\\7"+
		"\7\2\2\\\u009b\3\2\2\2]_\7\t\2\2^`\5\6\4\2_^\3\2\2\2_`\3\2\2\2`a\3\2\2"+
		"\2a\u009b\7\n\2\2bk\7\13\2\2ch\5\4\3\2de\7\b\2\2eg\5\4\3\2fd\3\2\2\2g"+
		"j\3\2\2\2hf\3\2\2\2hi\3\2\2\2il\3\2\2\2jh\3\2\2\2kc\3\2\2\2kl\3\2\2\2"+
		"lm\3\2\2\2m\u009b\7\f\2\2no\7\6\2\2or\5\4\3\2pq\7\r\2\2qs\5\4\3\2rp\3"+
		"\2\2\2st\3\2\2\2tr\3\2\2\2tu\3\2\2\2uv\3\2\2\2vw\7\7\2\2w\u009b\3\2\2"+
		"\2xy\7\16\2\2yz\5\24\13\2z{\7\17\2\2{\u0080\5\4\3\2|}\7\r\2\2}\177\5\4"+
		"\3\2~|\3\2\2\2\177\u0082\3\2\2\2\u0080~\3\2\2\2\u0080\u0081\3\2\2\2\u0081"+
		"\u0083\3\2\2\2\u0082\u0080\3\2\2\2\u0083\u0084\7\20\2\2\u0084\u009b\3"+
		"\2\2\2\u0085\u0086\7\22\2\2\u0086\u009b\5\4\3\n\u0087\u0088\7\26\2\2\u0088"+
		"\u0089\5\4\3\2\u0089\u008a\7\27\2\2\u008a\u008b\5\4\3\2\u008b\u008c\7"+
		"\30\2\2\u008c\u008d\5\4\3\6\u008d\u009b\3\2\2\2\u008e\u008f\7\31\2\2\u008f"+
		"\u0090\5\4\3\2\u0090\u0091\7\32\2\2\u0091\u0092\5\4\3\5\u0092\u009b\3"+
		"\2\2\2\u0093\u0094\7\33\2\2\u0094\u0095\5\4\3\2\u0095\u0096\7\34\2\2\u0096"+
		"\u0097\5\b\5\2\u0097\u009b\3\2\2\2\u0098\u0099\7\35\2\2\u0099\u009b\5"+
		"\b\5\2\u009aG\3\2\2\2\u009aL\3\2\2\2\u009aM\3\2\2\2\u009aN\3\2\2\2\u009a"+
		"P\3\2\2\2\u009aR\3\2\2\2\u009a]\3\2\2\2\u009ab\3\2\2\2\u009an\3\2\2\2"+
		"\u009ax\3\2\2\2\u009a\u0085\3\2\2\2\u009a\u0087\3\2\2\2\u009a\u008e\3"+
		"\2\2\2\u009a\u0093\3\2\2\2\u009a\u0098\3\2\2\2\u009b\u00af\3\2\2\2\u009c"+
		"\u009d\f\r\2\2\u009d\u009e\7@\2\2\u009e\u00ae\5\4\3\16\u009f\u00a0\f\f"+
		"\2\2\u00a0\u00ae\5\4\3\r\u00a1\u00a2\f\b\2\2\u00a2\u00a3\7\24\2\2\u00a3"+
		"\u00ae\5\4\3\t\u00a4\u00a5\f\7\2\2\u00a5\u00a6\7\25\2\2\u00a6\u00ae\5"+
		"\4\3\b\u00a7\u00a8\f\13\2\2\u00a8\u00a9\7\21\2\2\u00a9\u00ae\5\20\t\2"+
		"\u00aa\u00ab\f\t\2\2\u00ab\u00ac\7\23\2\2\u00ac\u00ae\5\b\5\2\u00ad\u009c"+
		"\3\2\2\2\u00ad\u009f\3\2\2\2\u00ad\u00a1\3\2\2\2\u00ad\u00a4\3\2\2\2\u00ad"+
		"\u00a7\3\2\2\2\u00ad\u00aa\3\2\2\2\u00ae\u00b1\3\2\2\2\u00af\u00ad\3\2"+
		"\2\2\u00af\u00b0\3\2\2\2\u00b0\5\3\2\2\2\u00b1\u00af\3\2\2\2\u00b2\u00b3"+
		"\5\n\6\2\u00b3\u00b4\7\36\2\2\u00b4\u00b7\5\4\3\2\u00b5\u00b6\7\b\2\2"+
		"\u00b6\u00b8\5\6\4\2\u00b7\u00b5\3\2\2\2\u00b7\u00b8\3\2\2\2\u00b8\7\3"+
		"\2\2\2\u00b9\u00ba\5\f\7\2\u00ba\u00bb\7\37\2\2\u00bb\u00be\5\4\3\2\u00bc"+
		"\u00bd\7 \2\2\u00bd\u00bf\5\b\5\2\u00be\u00bc\3\2\2\2\u00be\u00bf\3\2"+
		"\2\2\u00bf\t\3\2\2\2\u00c0\u00c1\t\2\2\2\u00c1\13\3\2\2\2\u00c2\u00c3"+
		"\b\7\1\2\u00c3\u00fa\7A\2\2\u00c4\u00fa\7!\2\2\u00c5\u00c7\7\4\2\2\u00c6"+
		"\u00c5\3\2\2\2\u00c6\u00c7\3\2\2\2\u00c7\u00c8\3\2\2\2\u00c8\u00fa\7@"+
		"\2\2\u00c9\u00cb\7\4\2\2\u00ca\u00c9\3\2\2\2\u00ca\u00cb\3\2\2\2\u00cb"+
		"\u00cc\3\2\2\2\u00cc\u00ce\5\2\2\2\u00cd\u00cf\5\f\7\2\u00ce\u00cd\3\2"+
		"\2\2\u00ce\u00cf\3\2\2\2\u00cf\u00fa\3\2\2\2\u00d0\u00d1\7\6\2\2\u00d1"+
		"\u00d2\5\f\7\2\u00d2\u00d3\7\7\2\2\u00d3\u00fa\3\2\2\2\u00d4\u00d5\7\6"+
		"\2\2\u00d5\u00d8\5\f\7\2\u00d6\u00d7\7\b\2\2\u00d7\u00d9\5\f\7\2\u00d8"+
		"\u00d6\3\2\2\2\u00d9\u00da\3\2\2\2\u00da\u00d8\3\2\2\2\u00da\u00db\3\2"+
		"\2\2\u00db\u00dc\3\2\2\2\u00dc\u00dd\7\7\2\2\u00dd\u00fa\3\2\2\2\u00de"+
		"\u00df\7\t\2\2\u00df\u00e0\5\16\b\2\u00e0\u00e1\7\n\2\2\u00e1\u00fa\3"+
		"\2\2\2\u00e2\u00e3\7\13\2\2\u00e3\u00fa\7\f\2\2\u00e4\u00e5\7\13\2\2\u00e5"+
		"\u00ea\5\f\7\2\u00e6\u00e7\7\b\2\2\u00e7\u00e9\5\f\7\2\u00e8\u00e6\3\2"+
		"\2\2\u00e9\u00ec\3\2\2\2\u00ea\u00e8\3\2\2\2\u00ea\u00eb\3\2\2\2\u00eb"+
		"\u00ed\3\2\2\2\u00ec\u00ea\3\2\2\2\u00ed\u00ee\7\f\2\2\u00ee\u00fa\3\2"+
		"\2\2\u00ef\u00f1\7\4\2\2\u00f0\u00ef\3\2\2\2\u00f0\u00f1\3\2\2\2\u00f1"+
		"\u00f2\3\2\2\2\u00f2\u00f5\7@\2\2\u00f3\u00f4\7\21\2\2\u00f4\u00f6\5\20"+
		"\t\2\u00f5\u00f3\3\2\2\2\u00f5\u00f6\3\2\2\2\u00f6\u00f7\3\2\2\2\u00f7"+
		"\u00f8\7\"\2\2\u00f8\u00fa\5\f\7\3\u00f9\u00c2\3\2\2\2\u00f9\u00c4\3\2"+
		"\2\2\u00f9\u00c6\3\2\2\2\u00f9\u00ca\3\2\2\2\u00f9\u00d0\3\2\2\2\u00f9"+
		"\u00d4\3\2\2\2\u00f9\u00de\3\2\2\2\u00f9\u00e2\3\2\2\2\u00f9\u00e4\3\2"+
		"\2\2\u00f9\u00f0\3\2\2\2\u00fa\u0103\3\2\2\2\u00fb\u00fc\f\n\2\2\u00fc"+
		"\u00fd\7@\2\2\u00fd\u0102\5\f\7\13\u00fe\u00ff\f\4\2\2\u00ff\u0100\7\21"+
		"\2\2\u0100\u0102\5\20\t\2\u0101\u00fb\3\2\2\2\u0101\u00fe\3\2\2\2\u0102"+
		"\u0105\3\2\2\2\u0103\u0101\3\2\2\2\u0103\u0104\3\2\2\2\u0104\r\3\2\2\2"+
		"\u0105\u0103\3\2\2\2\u0106\u011c\7#\2\2\u0107\u0108\5\n\6\2\u0108\u0109"+
		"\7\36\2\2\u0109\u010c\5\f\7\2\u010a\u010b\7\b\2\2\u010b\u010d\5\16\b\2"+
		"\u010c\u010a\3\2\2\2\u010c\u010d\3\2\2\2\u010d\u011c\3\2\2\2\u010e\u0111"+
		"\7@\2\2\u010f\u0110\7\21\2\2\u0110\u0112\5\20\t\2\u0111\u010f\3\2\2\2"+
		"\u0111\u0112\3\2\2\2\u0112\u0115\3\2\2\2\u0113\u0114\7\"\2\2\u0114\u0116"+
		"\5\f\7\2\u0115\u0113\3\2\2\2\u0115\u0116\3\2\2\2\u0116\u0119\3\2\2\2\u0117"+
		"\u0118\7\b\2\2\u0118\u011a\5\16\b\2\u0119\u0117\3\2\2\2\u0119\u011a\3"+
		"\2\2\2\u011a\u011c\3\2\2\2\u011b\u0106\3\2\2\2\u011b\u0107\3\2\2\2\u011b"+
		"\u010e\3\2\2\2\u011c\17\3\2\2\2\u011d\u011e\b\t\1\2\u011e\u012a\7B\2\2"+
		"\u011f\u012a\5\2\2\2\u0120\u0121\7\6\2\2\u0121\u0122\5\20\t\2\u0122\u0123"+
		"\7\7\2\2\u0123\u012a\3\2\2\2\u0124\u0126\7\t\2\2\u0125\u0127\5\22\n\2"+
		"\u0126\u0125\3\2\2\2\u0126\u0127\3\2\2\2\u0127\u0128\3\2\2\2\u0128\u012a"+
		"\7\n\2\2\u0129\u011d\3\2\2\2\u0129\u011f\3\2\2\2\u0129\u0120\3\2\2\2\u0129"+
		"\u0124\3\2\2\2\u012a\u0142\3\2\2\2\u012b\u012c\f\4\2\2\u012c\u012d\7%"+
		"\2\2\u012d\u0141\5\20\t\5\u012e\u012f\f\b\2\2\u012f\u0141\5\2\2\2\u0130"+
		"\u0133\f\7\2\2\u0131\u0132\7\b\2\2\u0132\u0134\5\20\t\2\u0133\u0131\3"+
		"\2\2\2\u0134\u0135\3\2\2\2\u0135\u0133\3\2\2\2\u0135\u0136\3\2\2\2\u0136"+
		"\u0137\3\2\2\2\u0137\u0138\5\2\2\2\u0138\u0141\3\2\2\2\u0139\u013c\f\5"+
		"\2\2\u013a\u013b\7$\2\2\u013b\u013d\5\20\t\2\u013c\u013a\3\2\2\2\u013d"+
		"\u013e\3\2\2\2\u013e\u013c\3\2\2\2\u013e\u013f\3\2\2\2\u013f\u0141\3\2"+
		"\2\2\u0140\u012b\3\2\2\2\u0140\u012e\3\2\2\2\u0140\u0130\3\2\2\2\u0140"+
		"\u0139\3\2\2\2\u0141\u0144\3\2\2\2\u0142\u0140\3\2\2\2\u0142\u0143\3\2"+
		"\2\2\u0143\21\3\2\2\2\u0144\u0142\3\2\2\2\u0145\u0146\5\n\6\2\u0146\u0147"+
		"\7\21\2\2\u0147\u014a\5\20\t\2\u0148\u0149\7\b\2\2\u0149\u014b\5\22\n"+
		"\2\u014a\u0148\3\2\2\2\u014a\u014b\3\2\2\2\u014b\23\3\2\2\2\u014c\u014d"+
		"\b\13\1\2\u014d\u0158\7&\2\2\u014e\u0150\7B\2\2\u014f\u014e\3\2\2\2\u014f"+
		"\u0150\3\2\2\2\u0150\u0159\3\2\2\2\u0151\u0154\7B\2\2\u0152\u0153\7\b"+
		"\2\2\u0153\u0155\7B\2\2\u0154\u0152\3\2\2\2\u0155\u0156\3\2\2\2\u0156"+
		"\u0154\3\2\2\2\u0156\u0157\3\2\2\2\u0157\u0159\3\2\2\2\u0158\u014f\3\2"+
		"\2\2\u0158\u0151\3\2\2\2\u0159\u015a\3\2\2\2\u015a\u01ac\5\26\f\2\u015b"+
		"\u0166\7\'\2\2\u015c\u015e\7B\2\2\u015d\u015c\3\2\2\2\u015d\u015e\3\2"+
		"\2\2\u015e\u0167\3\2\2\2\u015f\u0162\7B\2\2\u0160\u0161\7\b\2\2\u0161"+
		"\u0163\7B\2\2\u0162\u0160\3\2\2\2\u0163\u0164\3\2\2\2\u0164\u0162\3\2"+
		"\2\2\u0164\u0165\3\2\2\2\u0165\u0167\3\2\2\2\u0166\u015d\3\2\2\2\u0166"+
		"\u015f\3\2\2\2\u0167\u0168\3\2\2\2\u0168\u01ac\5\30\r\2\u0169\u016a\7"+
		"(\2\2\u016a\u01ac\5\34\17\2\u016b\u016c\7)\2\2\u016c\u016f\5\36\20\2\u016d"+
		"\u016e\7*\2\2\u016e\u0170\5\34\17\2\u016f\u016d\3\2\2\2\u016f\u0170\3"+
		"\2\2\2\u0170\u01ac\3\2\2\2\u0171\u0172\7)\2\2\u0172\u0173\7@\2\2\u0173"+
		"\u0174\7\36\2\2\u0174\u0175\7)\2\2\u0175\u01ac\5\2\2\2\u0176\u0177\7+"+
		"\2\2\u0177\u017a\5\36\20\2\u0178\u0179\7*\2\2\u0179\u017b\5\34\17\2\u017a"+
		"\u0178\3\2\2\2\u017a\u017b\3\2\2\2\u017b\u017c\3\2\2\2\u017c\u017d\7,"+
		"\2\2\u017d\u017e\5\24\13\2\u017e\u017f\7\20\2\2\u017f\u01ac\3\2\2\2\u0180"+
		"\u0181\7-\2\2\u0181\u01ac\5\"\22\2\u0182\u0183\7.\2\2\u0183\u01ac\5&\24"+
		"\2\u0184\u01ac\3\2\2\2\u0185\u0186\7\r\2\2\u0186\u01ac\5\24\13\t\u0187"+
		"\u0188\7/\2\2\u0188\u0189\5\24\13\2\u0189\u018a\7\17\2\2\u018a\u018b\5"+
		"\24\13\2\u018b\u018c\7\20\2\2\u018c\u01ac\3\2\2\2\u018d\u018f\7\60\2\2"+
		"\u018e\u0190\5\2\2\2\u018f\u018e\3\2\2\2\u0190\u0191\3\2\2\2\u0191\u018f"+
		"\3\2\2\2\u0191\u0192\3\2\2\2\u0192\u01ac\3\2\2\2\u0193\u0195\7\61\2\2"+
		"\u0194\u0196\7@\2\2\u0195\u0194\3\2\2\2\u0196\u0197\3\2\2\2\u0197\u0195"+
		"\3\2\2\2\u0197\u0198\3\2\2\2\u0198\u01ac\3\2\2\2\u0199\u019b\7\62\2\2"+
		"\u019a\u019c\7D\2\2\u019b\u019a\3\2\2\2\u019b\u019c\3\2\2\2\u019c\u019e"+
		"\3\2\2\2\u019d\u019f\7@\2\2\u019e\u019d\3\2\2\2\u019f\u01a0\3\2\2\2\u01a0"+
		"\u019e\3\2\2\2\u01a0\u01a1\3\2\2\2\u01a1\u01ac\3\2\2\2\u01a2\u01a4\7\62"+
		"\2\2\u01a3\u01a5\7D\2\2\u01a4\u01a3\3\2\2\2\u01a4\u01a5\3\2\2\2\u01a5"+
		"\u01a7\3\2\2\2\u01a6\u01a8\7@\2\2\u01a7\u01a6\3\2\2\2\u01a8\u01a9\3\2"+
		"\2\2\u01a9\u01a7\3\2\2\2\u01a9\u01aa\3\2\2\2\u01aa\u01ac\3\2\2\2\u01ab"+
		"\u014c\3\2\2\2\u01ab\u015b\3\2\2\2\u01ab\u0169\3\2\2\2\u01ab\u016b\3\2"+
		"\2\2\u01ab\u0171\3\2\2\2\u01ab\u0176\3\2\2\2\u01ab\u0180\3\2\2\2\u01ab"+
		"\u0182\3\2\2\2\u01ab\u0184\3\2\2\2\u01ab\u0185\3\2\2\2\u01ab\u0187\3\2"+
		"\2\2\u01ab\u018d\3\2\2\2\u01ab\u0193\3\2\2\2\u01ab\u0199\3\2\2\2\u01ab"+
		"\u01a2\3\2\2\2\u01ac\u01b2\3\2\2\2\u01ad\u01ae\f\b\2\2\u01ae\u01af\7\r"+
		"\2\2\u01af\u01b1\5\24\13\t\u01b0\u01ad\3\2\2\2\u01b1\u01b4\3\2\2\2\u01b2"+
		"\u01b0\3\2\2\2\u01b2\u01b3\3\2\2\2\u01b3\25\3\2\2\2\u01b4\u01b2\3\2\2"+
		"\2\u01b5\u01b6\5\f\7\2\u01b6\u01b7\7\36\2\2\u01b7\u01ba\5\4\3\2\u01b8"+
		"\u01b9\7\63\2\2\u01b9\u01bb\5\26\f\2\u01ba\u01b8\3\2\2\2\u01ba\u01bb\3"+
		"\2\2\2\u01bb\u01bf\3\2\2\2\u01bc\u01bd\7\64\2\2\u01bd\u01bf\5\26\f\2\u01be"+
		"\u01b5\3\2\2\2\u01be\u01bc\3\2\2\2\u01bf\27\3\2\2\2\u01c0\u01c3\5\32\16"+
		"\2\u01c1\u01c2\7\63\2\2\u01c2\u01c4\5\30\r\2\u01c3\u01c1\3\2\2\2\u01c3"+
		"\u01c4\3\2\2\2\u01c4\31\3\2\2\2\u01c5\u01c7\7\4\2\2\u01c6\u01c5\3\2\2"+
		"\2\u01c6\u01c7\3\2\2\2\u01c7\u01c9\3\2\2\2\u01c8\u01ca\5\f\7\2\u01c9\u01c8"+
		"\3\2\2\2\u01ca\u01cb\3\2\2\2\u01cb\u01c9\3\2\2\2\u01cb\u01cc\3\2\2\2\u01cc"+
		"\u01ce\3\2\2\2\u01cd\u01cf\5\20\t\2\u01ce\u01cd\3\2\2\2\u01ce\u01cf\3"+
		"\2\2\2\u01cf\u01d0\3\2\2\2\u01d0\u01d1\7\36\2\2\u01d1\u01d4\5\4\3\2\u01d2"+
		"\u01d3\7 \2\2\u01d3\u01d5\5\32\16\2\u01d4\u01d2\3\2\2\2\u01d4\u01d5\3"+
		"\2\2\2\u01d5\u01f8\3\2\2\2\u01d6\u01d7\5\f\7\2\u01d7\u01d8\7@\2\2\u01d8"+
		"\u01db\5\f\7\2\u01d9\u01da\7\21\2\2\u01da\u01dc\5\20\t\2\u01db\u01d9\3"+
		"\2\2\2\u01db\u01dc\3\2\2\2\u01dc\u01dd\3\2\2\2\u01dd\u01de\7\36\2\2\u01de"+
		"\u01e1\5\4\3\2\u01df\u01e0\7 \2\2\u01e0\u01e2\5\32\16\2\u01e1\u01df\3"+
		"\2\2\2\u01e1\u01e2\3\2\2\2\u01e2\u01f8\3\2\2\2\u01e3\u01e4\7\6\2\2\u01e4"+
		"\u01e5\5\f\7\2\u01e5\u01e6\7@\2\2\u01e6\u01e7\5\f\7\2\u01e7\u01e9\7\7"+
		"\2\2\u01e8\u01ea\5\f\7\2\u01e9\u01e8\3\2\2\2\u01ea\u01eb\3\2\2\2\u01eb"+
		"\u01e9\3\2\2\2\u01eb\u01ec\3\2\2\2\u01ec\u01ef\3\2\2\2\u01ed\u01ee\7\21"+
		"\2\2\u01ee\u01f0\5\20\t\2\u01ef\u01ed\3\2\2\2\u01ef\u01f0\3\2\2\2\u01f0"+
		"\u01f1\3\2\2\2\u01f1\u01f2\7\36\2\2\u01f2\u01f5\5\4\3\2\u01f3\u01f4\7"+
		" \2\2\u01f4\u01f6\5\32\16\2\u01f5\u01f3\3\2\2\2\u01f5\u01f6\3\2\2\2\u01f6"+
		"\u01f8\3\2\2\2\u01f7\u01c6\3\2\2\2\u01f7\u01d6\3\2\2\2\u01f7\u01e3\3\2"+
		"\2\2\u01f8\33\3\2\2\2\u01f9\u01fb\7B\2\2\u01fa\u01f9\3\2\2\2\u01fa\u01fb"+
		"\3\2\2\2\u01fb\u0204\3\2\2\2\u01fc\u01ff\7B\2\2\u01fd\u01fe\7\b\2\2\u01fe"+
		"\u0200\7B\2\2\u01ff\u01fd\3\2\2\2\u0200\u0201\3\2\2\2\u0201\u01ff\3\2"+
		"\2\2\u0201\u0202\3\2\2\2\u0202\u0204\3\2\2\2\u0203\u01fa\3\2\2\2\u0203"+
		"\u01fc\3\2\2\2\u0204\u0205\3\2\2\2\u0205\u0206\7@\2\2\u0206\u0207\7\36"+
		"\2\2\u0207\u020a\5\20\t\2\u0208\u0209\7\63\2\2\u0209\u020b\5\34\17\2\u020a"+
		"\u0208\3\2\2\2\u020a\u020b\3\2\2\2\u020b\35\3\2\2\2\u020c\u020e\7B\2\2"+
		"\u020d\u020c\3\2\2\2\u020d\u020e\3\2\2\2\u020e\u0217\3\2\2\2\u020f\u0212"+
		"\7B\2\2\u0210\u0211\7\b\2\2\u0211\u0213\7B\2\2\u0212\u0210\3\2\2\2\u0213"+
		"\u0214\3\2\2\2\u0214\u0212\3\2\2\2\u0214\u0215\3\2\2\2\u0215\u0217\3\2"+
		"\2\2\u0216\u020d\3\2\2\2\u0216\u020f\3\2\2\2\u0217\u0218\3\2\2\2\u0218"+
		"\u0219\7@\2\2\u0219\u021a\7\36\2\2\u021a\u021d\5 \21\2\u021b\u021c\7\63"+
		"\2\2\u021c\u021e\5\36\20\2\u021d\u021b\3\2\2\2\u021d\u021e\3\2\2\2\u021e"+
		"\37\3\2\2\2\u021f\u0222\7@\2\2\u0220\u0221\7\34\2\2\u0221\u0223\5\20\t"+
		"\2\u0222\u0220\3\2\2\2\u0222\u0223\3\2\2\2\u0223\u0226\3\2\2\2\u0224\u0225"+
		"\7 \2\2\u0225\u0227\5 \21\2\u0226\u0224\3\2\2\2\u0226\u0227\3\2\2\2\u0227"+
		"!\3\2\2\2\u0228\u0229\7@\2\2\u0229\u022a\7\34\2\2\u022a\u022b\5\20\t\2"+
		"\u022b\u022e\3\2\2\2\u022c\u022d\7 \2\2\u022d\u022f\5\"\22\2\u022e\u022c"+
		"\3\2\2\2\u022e\u022f\3\2\2\2\u022f\u0238\3\2\2\2\u0230\u0231\7@\2\2\u0231"+
		"\u0232\7\36\2\2\u0232\u0235\5\2\2\2\u0233\u0234\7\63\2\2\u0234\u0236\5"+
		"\"\22\2\u0235\u0233\3\2\2\2\u0235\u0236\3\2\2\2\u0236\u0238\3\2\2\2\u0237"+
		"\u0228\3\2\2\2\u0237\u0230\3\2\2\2\u0238#\3\2\2\2\u0239\u023a\b\23\1\2"+
		"\u023a\u0250\5\2\2\2\u023b\u023c\7\65\2\2\u023c\u023d\5\24\13\2\u023d"+
		"\u023e\7\20\2\2\u023e\u0250\3\2\2\2\u023f\u0240\7@\2\2\u0240\u0241\7\6"+
		"\2\2\u0241\u0242\5$\23\2\u0242\u0243\7\7\2\2\u0243\u0250\3\2\2\2\u0244"+
		"\u0245\7@\2\2\u0245\u0246\7\6\2\2\u0246\u0247\5\24\13\2\u0247\u0248\7"+
		"\7\2\2\u0248\u0250\3\2\2\2\u0249\u024a\7\16\2\2\u024a\u024b\5\24\13\2"+
		"\u024b\u024c\7\17\2\2\u024c\u024d\5$\23\2\u024d\u024e\7\20\2\2\u024e\u0250"+
		"\3\2\2\2\u024f\u0239\3\2\2\2\u024f\u023b\3\2\2\2\u024f\u023f\3\2\2\2\u024f"+
		"\u0244\3\2\2\2\u024f\u0249\3\2\2\2\u0250\u0259\3\2\2\2\u0251\u0252\f\7"+
		"\2\2\u0252\u0253\7\21\2\2\u0253\u0258\5(\25\2\u0254\u0255\f\6\2\2\u0255"+
		"\u0256\7\66\2\2\u0256\u0258\5(\25\2\u0257\u0251\3\2\2\2\u0257\u0254\3"+
		"\2\2\2\u0258\u025b\3\2\2\2\u0259\u0257\3\2\2\2\u0259\u025a\3\2\2\2\u025a"+
		"%\3\2\2\2\u025b\u0259\3\2\2\2\u025c\u025f\7@\2\2\u025d\u025e\7\66\2\2"+
		"\u025e\u0260\5(\25\2\u025f\u025d\3\2\2\2\u025f\u0260\3\2\2\2\u0260\u0261"+
		"\3\2\2\2\u0261\u0262\7\36\2\2\u0262\u0265\5$\23\2\u0263\u0264\7\63\2\2"+
		"\u0264\u0266\5&\24\2\u0265\u0263\3\2\2\2\u0265\u0266\3\2\2\2\u0266\u0273"+
		"\3\2\2\2\u0267\u026a\7@\2\2\u0268\u0269\7\21\2\2\u0269\u026b\5(\25\2\u026a"+
		"\u0268\3\2\2\2\u026a\u026b\3\2\2\2\u026b\u026c\3\2\2\2\u026c\u026d\7\36"+
		"\2\2\u026d\u0270\5$\23\2\u026e\u026f\7\63\2\2\u026f\u0271\5&\24\2\u0270"+
		"\u026e\3\2\2\2\u0270\u0271\3\2\2\2\u0271\u0273\3\2\2\2\u0272\u025c\3\2"+
		"\2\2\u0272\u0267\3\2\2\2\u0273\'\3\2\2\2\u0274\u0275\b\25\1\2\u0275\u027b"+
		"\7@\2\2\u0276\u0277\7\67\2\2\u0277\u0278\5,\27\2\u0278\u0279\7\20\2\2"+
		"\u0279\u027b\3\2\2\2\u027a\u0274\3\2\2\2\u027a\u0276\3\2\2\2\u027b\u0282"+
		"\3\2\2\2\u027c\u027d\f\3\2\2\u027d\u027e\78\2\2\u027e\u027f\7(\2\2\u027f"+
		"\u0281\5*\26\2\u0280\u027c\3\2\2\2\u0281\u0284\3\2\2\2\u0282\u0280\3\2"+
		"\2\2\u0282\u0283\3\2\2\2\u0283)\3\2\2\2\u0284\u0282\3\2\2\2\u0285\u0287"+
		"\7B\2\2\u0286\u0285\3\2\2\2\u0286\u0287\3\2\2\2\u0287\u0290\3\2\2\2\u0288"+
		"\u028b\7B\2\2\u0289\u028a\7\b\2\2\u028a\u028c\7B\2\2\u028b\u0289\3\2\2"+
		"\2\u028c\u028d\3\2\2\2\u028d\u028b\3\2\2\2\u028d\u028e\3\2\2\2\u028e\u0290"+
		"\3\2\2\2\u028f\u0286\3\2\2\2\u028f\u0288\3\2\2\2\u0290\u0291\3\2\2\2\u0291"+
		"\u0292\5\2\2\2\u0292\u0293\7\36\2\2\u0293\u0294\5\20\t\2\u0294\u0295\7"+
		"\63\2\2\u0295\u0296\7(\2\2\u0296\u0297\5*\26\2\u0297+\3\2\2\2\u0298\u0299"+
		"\b\27\1\2\u0299\u029a\7&\2\2\u029a\u02b8\5.\30\2\u029b\u029c\7(\2\2\u029c"+
		"\u02b8\5\60\31\2\u029d\u029e\79\2\2\u029e\u02b8\5\60\31\2\u029f\u02a0"+
		"\7(\2\2\u02a0\u02b8\5\34\17\2\u02a1\u02a2\7)\2\2\u02a2\u02b8\5\62\32\2"+
		"\u02a3\u02a4\7)\2\2\u02a4\u02a5\7@\2\2\u02a5\u02a6\7\36\2\2\u02a6\u02a7"+
		"\7)\2\2\u02a7\u02b8\5\2\2\2\u02a8\u02a9\7-\2\2\u02a9\u02b8\5\66\34\2\u02aa"+
		"\u02ab\7.\2\2\u02ab\u02b8\58\35\2\u02ac\u02b8\3\2\2\2\u02ad\u02ae\7\r"+
		"\2\2\u02ae\u02b8\5,\27\b\u02af\u02b0\7:\2\2\u02b0\u02b8\5(\25\2\u02b1"+
		"\u02b3\7:\2\2\u02b2\u02b4\7@\2\2\u02b3\u02b2\3\2\2\2\u02b4\u02b5\3\2\2"+
		"\2\u02b5\u02b3\3\2\2\2\u02b5\u02b6\3\2\2\2\u02b6\u02b8\3\2\2\2\u02b7\u0298"+
		"\3\2\2\2\u02b7\u029b\3\2\2\2\u02b7\u029d\3\2\2\2\u02b7\u029f\3\2\2\2\u02b7"+
		"\u02a1\3\2\2\2\u02b7\u02a3\3\2\2\2\u02b7\u02a8\3\2\2\2\u02b7\u02aa\3\2"+
		"\2\2\u02b7\u02ac\3\2\2\2\u02b7\u02ad\3\2\2\2\u02b7\u02af\3\2\2\2\u02b7"+
		"\u02b1\3\2\2\2\u02b8\u02d3\3\2\2\2\u02b9\u02ba\f\7\2\2\u02ba\u02bb\7\r"+
		"\2\2\u02bb\u02d2\5,\27\b\u02bc\u02bd\f\4\2\2\u02bd\u02be\7;\2\2\u02be"+
		"\u02bf\7(\2\2\u02bf\u02c0\5\2\2\2\u02c0\u02c3\7\36\2\2\u02c1\u02c2\7\36"+
		"\2\2\u02c2\u02c4\5\2\2\2\u02c3\u02c1\3\2\2\2\u02c4\u02c5\3\2\2\2\u02c5"+
		"\u02c3\3\2\2\2\u02c5\u02c6\3\2\2\2\u02c6\u02d2\3\2\2\2\u02c7\u02c8\f\3"+
		"\2\2\u02c8\u02c9\7;\2\2\u02c9\u02ca\5\2\2\2\u02ca\u02cd\7\36\2\2\u02cb"+
		"\u02cc\7\36\2\2\u02cc\u02ce\5\2\2\2\u02cd\u02cb\3\2\2\2\u02ce\u02cf\3"+
		"\2\2\2\u02cf\u02cd\3\2\2\2\u02cf\u02d0\3\2\2\2\u02d0\u02d2\3\2\2\2\u02d1"+
		"\u02b9\3\2\2\2\u02d1\u02bc\3\2\2\2\u02d1\u02c7\3\2\2\2\u02d2\u02d5\3\2"+
		"\2\2\u02d3\u02d1\3\2\2\2\u02d3\u02d4\3\2\2\2\u02d4-\3\2\2\2\u02d5\u02d3"+
		"\3\2\2\2\u02d6\u02d7\7@\2\2\u02d7\u02d8\7\21\2\2\u02d8\u02db\5\20\t\2"+
		"\u02d9\u02da\7\63\2\2\u02da\u02dc\5.\30\2\u02db\u02d9\3\2\2\2\u02db\u02dc"+
		"\3\2\2\2\u02dc/\3\2\2\2\u02dd\u02df\7B\2\2\u02de\u02dd\3\2\2\2\u02de\u02df"+
		"\3\2\2\2\u02df\u02e8\3\2\2\2\u02e0\u02e3\7B\2\2\u02e1\u02e2\7\b\2\2\u02e2"+
		"\u02e4\7B\2\2\u02e3\u02e1\3\2\2\2\u02e4\u02e5\3\2\2\2\u02e5\u02e3\3\2"+
		"\2\2\u02e5\u02e6\3\2\2\2\u02e6\u02e8\3\2\2\2\u02e7\u02de\3\2\2\2\u02e7"+
		"\u02e0\3\2\2\2\u02e8\u02e9\3\2\2\2\u02e9\u02ec\7@\2\2\u02ea\u02eb\7\63"+
		"\2\2\u02eb\u02ed\5\60\31\2\u02ec\u02ea\3\2\2\2\u02ec\u02ed\3\2\2\2\u02ed"+
		"\61\3\2\2\2\u02ee\u02f0\7B\2\2\u02ef\u02ee\3\2\2\2\u02ef\u02f0\3\2\2\2"+
		"\u02f0\u02f9\3\2\2\2\u02f1\u02f4\7B\2\2\u02f2\u02f3\7\b\2\2\u02f3\u02f5"+
		"\7B\2\2\u02f4\u02f2\3\2\2\2\u02f5\u02f6\3\2\2\2\u02f6\u02f4\3\2\2\2\u02f6"+
		"\u02f7\3\2\2\2\u02f7\u02f9\3\2\2\2\u02f8\u02ef\3\2\2\2\u02f8\u02f1\3\2"+
		"\2\2\u02f9\u02fa\3\2\2\2\u02fa\u02fb\7@\2\2\u02fb\u02fc\7\36\2\2\u02fc"+
		"\u02ff\5\64\33\2\u02fd\u02fe\7\63\2\2\u02fe\u0300\5\62\32\2\u02ff\u02fd"+
		"\3\2\2\2\u02ff\u0300\3\2\2\2\u0300\63\3\2\2\2\u0301\u0304\7@\2\2\u0302"+
		"\u0303\7\34\2\2\u0303\u0305\5\20\t\2\u0304\u0302\3\2\2\2\u0304\u0305\3"+
		"\2\2\2\u0305\u0308\3\2\2\2\u0306\u0307\7 \2\2\u0307\u0309\5\64\33\2\u0308"+
		"\u0306\3\2\2\2\u0308\u0309\3\2\2\2\u0309\65\3\2\2\2\u030a\u030d\7@\2\2"+
		"\u030b\u030c\7\34\2\2\u030c\u030e\5\20\t\2\u030d\u030b\3\2\2\2\u030d\u030e"+
		"\3\2\2\2\u030e\u0311\3\2\2\2\u030f\u0310\7\63\2\2\u0310\u0312\5\66\34"+
		"\2\u0311\u030f\3\2\2\2\u0311\u0312\3\2\2\2\u0312\67\3\2\2\2\u0313\u0314"+
		"\7@\2\2\u0314\u0315\7\21\2\2\u0315\u0318\5(\25\2\u0316\u0317\7\63\2\2"+
		"\u0317\u0319\58\35\2\u0318\u0316\3\2\2\2\u0318\u0319\3\2\2\2\u03199\3"+
		"\2\2\2\u031a\u031b\b\36\1\2\u031b\u031c\5\24\13\2\u031c\u031d\7\2\2\3"+
		"\u031d\u032c\3\2\2\2\u031e\u031f\7<\2\2\u031f\u0320\5<\37\2\u0320\u0321"+
		"\7\2\2\3\u0321\u032c\3\2\2\2\u0322\u0323\7=\2\2\u0323\u0324\5> \2\u0324"+
		"\u0325\7\2\2\3\u0325\u032c\3\2\2\2\u0326\u032c\7\2\2\3\u0327\u0328\7\r"+
		"\2\2\u0328\u0329\5:\36\2\u0329\u032a\7\2\2\3\u032a\u032c\3\2\2\2\u032b"+
		"\u031a\3\2\2\2\u032b\u031e\3\2\2\2\u032b\u0322\3\2\2\2\u032b\u0326\3\2"+
		"\2\2\u032b\u0327\3\2\2\2\u032c\u0334\3\2\2\2\u032d\u032e\f\3\2\2\u032e"+
		"\u032f\7\r\2\2\u032f\u0330\5:\36\2\u0330\u0331\7\2\2\3\u0331\u0333\3\2"+
		"\2\2\u0332\u032d\3\2\2\2\u0333\u0336\3\2\2\2\u0334\u0332\3\2\2\2\u0334"+
		"\u0335\3\2\2\2\u0335;\3\2\2\2\u0336\u0334\3\2\2\2\u0337\u0338\7@\2\2\u0338"+
		"\u0339\7\6\2\2\u0339\u033a\7@\2\2\u033a\u033b\7\21\2\2\u033b\u033c\5("+
		"\25\2\u033c\u033f\7\7\2\2\u033d\u033e\7\66\2\2\u033e\u0340\5(\25\2\u033f"+
		"\u033d\3\2\2\2\u033f\u0340\3\2\2\2\u0340\u0341\3\2\2\2\u0341\u0342\7\36"+
		"\2\2\u0342\u0345\5$\23\2\u0343\u0344\7\63\2\2\u0344\u0346\5<\37\2\u0345"+
		"\u0343\3\2\2\2\u0345\u0346\3\2\2\2\u0346\u0376\3\2\2\2\u0347\u0348\7@"+
		"\2\2\u0348\u0349\7\6\2\2\u0349\u034a\7@\2\2\u034a\u034b\7\21\2\2\u034b"+
		"\u034c\5(\25\2\u034c\u034f\7\7\2\2\u034d\u034e\7\21\2\2\u034e\u0350\5"+
		"(\25\2\u034f\u034d\3\2\2\2\u034f\u0350\3\2\2\2\u0350\u0351\3\2\2\2\u0351"+
		"\u0352\7\36\2\2\u0352\u0355\5$\23\2\u0353\u0354\7\63\2\2\u0354\u0356\5"+
		"<\37\2\u0355\u0353\3\2\2\2\u0355\u0356\3\2\2\2\u0356\u0376\3\2\2\2\u0357"+
		"\u0358\7@\2\2\u0358\u0359\7\6\2\2\u0359\u035a\5,\27\2\u035a\u035f\7\7"+
		"\2\2\u035b\u035d\7\66\2\2\u035c\u035b\3\2\2\2\u035c\u035d\3\2\2\2\u035d"+
		"\u035e\3\2\2\2\u035e\u0360\5(\25\2\u035f\u035c\3\2\2\2\u035f\u0360\3\2"+
		"\2\2\u0360\u0361\3\2\2\2\u0361\u0362\7\36\2\2\u0362\u0365\5$\23\2\u0363"+
		"\u0364\7\63\2\2\u0364\u0366\5<\37\2\u0365\u0363\3\2\2\2\u0365\u0366\3"+
		"\2\2\2\u0366\u0376\3\2\2\2\u0367\u0368\7@\2\2\u0368\u0369\7\6\2\2\u0369"+
		"\u036a\5,\27\2\u036a\u036d\7\7\2\2\u036b\u036c\7\21\2\2\u036c\u036e\5"+
		"(\25\2\u036d\u036b\3\2\2\2\u036d\u036e\3\2\2\2\u036e\u036f\3\2\2\2\u036f"+
		"\u0370\7\36\2\2\u0370\u0373\5$\23\2\u0371\u0372\7\63\2\2\u0372\u0374\5"+
		"<\37\2\u0373\u0371\3\2\2\2\u0373\u0374\3\2\2\2\u0374\u0376\3\2\2\2\u0375"+
		"\u0337\3\2\2\2\u0375\u0347\3\2\2\2\u0375\u0357\3\2\2\2\u0375\u0367\3\2"+
		"\2\2\u0376=\3\2\2\2\u0377\u0378\7@\2\2\u0378\u0379\7\36\2\2\u0379\u037c"+
		"\5(\25\2\u037a\u037b\7\63\2\2\u037b\u037d\5> \2\u037c\u037a\3\2\2\2\u037c"+
		"\u037d\3\2\2\2\u037d?\3\2\2\2}EIX_hkt\u0080\u009a\u00ad\u00af\u00b7\u00be"+
		"\u00c6\u00ca\u00ce\u00da\u00ea\u00f0\u00f5\u00f9\u0101\u0103\u010c\u0111"+
		"\u0115\u0119\u011b\u0126\u0129\u0135\u013e\u0140\u0142\u014a\u014f\u0156"+
		"\u0158\u015d\u0164\u0166\u016f\u017a\u0191\u0197\u019b\u01a0\u01a4\u01a9"+
		"\u01ab\u01b2\u01ba\u01be\u01c3\u01c6\u01cb\u01ce\u01d4\u01db\u01e1\u01eb"+
		"\u01ef\u01f5\u01f7\u01fa\u0201\u0203\u020a\u020d\u0214\u0216\u021d\u0222"+
		"\u0226\u022e\u0235\u0237\u024f\u0257\u0259\u025f\u0265\u026a\u0270\u0272"+
		"\u027a\u0282\u0286\u028d\u028f\u02b5\u02b7\u02c5\u02cf\u02d1\u02d3\u02db"+
		"\u02de\u02e5\u02e7\u02ec\u02ef\u02f6\u02f8\u02ff\u0304\u0308\u030d\u0311"+
		"\u0318\u032b\u0334\u033f\u0345\u034f\u0355\u035c\u035f\u0365\u036d\u0373"+
		"\u0375\u037c";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}