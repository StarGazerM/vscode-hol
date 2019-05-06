// Generated from /home/stargazermiao/workspace/ts/lsp-sample/antlr4/ML.g4 by ANTLR 4.7.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class MLLexer extends Lexer {
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
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE"
	};

	public static final String[] ruleNames = {
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8", 
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16", 
		"T__17", "T__18", "T__19", "T__20", "T__21", "T__22", "T__23", "T__24", 
		"T__25", "T__26", "T__27", "T__28", "T__29", "T__30", "T__31", "T__32", 
		"T__33", "T__34", "T__35", "T__36", "T__37", "T__38", "T__39", "T__40", 
		"T__41", "T__42", "T__43", "T__44", "T__45", "T__46", "T__47", "T__48", 
		"T__49", "T__50", "T__51", "T__52", "T__53", "T__54", "T__55", "T__56", 
		"T__57", "T__58", "COMMENT", "RESERVED_WORD", "ID", "ALPHANUMERIC", "SYMBOLIC", 
		"CON", "INT", "WORD", "FLOAT", "CHAR", "STRING", "DECIMAL", "HEXADECIMAL", 
		"NUM", "HEX", "ASCII", "VAR", "UNCONSTRAINED", "EQUALITY", "LETTER", "DIGIT", 
		"WS"
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


	public MLLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "ML.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2E\u030f\b\1\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\3\2\3\2\3\3"+
		"\3\3\3\3\3\4\3\4\3\5\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13"+
		"\3\13\3\f\3\f\3\r\3\r\3\r\3\r\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\20"+
		"\3\20\3\21\3\21\3\21\3\21\3\21\3\21\3\22\3\22\3\22\3\22\3\22\3\22\3\22"+
		"\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\23\3\24\3\24\3\24\3\24\3\24\3\24"+
		"\3\24\3\25\3\25\3\25\3\26\3\26\3\26\3\26\3\26\3\27\3\27\3\27\3\27\3\27"+
		"\3\30\3\30\3\30\3\30\3\30\3\30\3\31\3\31\3\31\3\32\3\32\3\32\3\32\3\32"+
		"\3\33\3\33\3\33\3\34\3\34\3\34\3\35\3\35\3\36\3\36\3\36\3\37\3\37\3 \3"+
		" \3!\3!\3!\3\"\3\"\3\"\3\"\3#\3#\3$\3$\3$\3%\3%\3%\3%\3&\3&\3&\3&\3\'"+
		"\3\'\3\'\3\'\3\'\3(\3(\3(\3(\3(\3(\3(\3(\3(\3)\3)\3)\3)\3)\3)\3)\3)\3"+
		")\3*\3*\3*\3*\3*\3*\3*\3*\3+\3+\3+\3+\3+\3,\3,\3,\3,\3,\3,\3,\3,\3,\3"+
		",\3-\3-\3-\3-\3-\3-\3-\3-\3-\3-\3.\3.\3.\3.\3.\3.\3/\3/\3/\3/\3/\3\60"+
		"\3\60\3\60\3\60\3\60\3\60\3\60\3\61\3\61\3\61\3\61\3\61\3\61\3\62\3\62"+
		"\3\62\3\62\3\63\3\63\3\63\3\63\3\64\3\64\3\64\3\64\3\64\3\64\3\64\3\65"+
		"\3\65\3\65\3\66\3\66\3\66\3\66\3\67\3\67\3\67\3\67\3\67\3\67\38\38\38"+
		"\38\38\38\38\39\39\39\39\39\39\39\39\3:\3:\3:\3:\3:\3:\3:\3:\3;\3;\3;"+
		"\3;\3;\3;\3;\3;\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3=\3=\3=\3=\7=\u01bd\n="+
		"\f=\16=\u01c0\13=\3=\3=\3=\3=\3=\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3"+
		">\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3"+
		">\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3"+
		">\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3"+
		">\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3"+
		">\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3"+
		">\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3"+
		">\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3"+
		">\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3>\3"+
		">\5>\u028c\n>\3?\3?\5?\u0290\n?\3@\3@\3@\3@\7@\u0296\n@\f@\16@\u0299\13"+
		"@\3A\6A\u029c\nA\rA\16A\u029d\3B\3B\3B\3B\3B\5B\u02a5\nB\3C\5C\u02a8\n"+
		"C\3C\3C\5C\u02ac\nC\3D\3D\5D\u02b0\nD\3E\5E\u02b3\nE\3E\3E\3E\3E\3E\5"+
		"E\u02ba\nE\3E\5E\u02bd\nE\3F\3F\3F\3F\3F\3F\3G\3G\3G\7G\u02c8\nG\fG\16"+
		"G\u02cb\13G\3G\3G\3H\5H\u02d0\nH\3H\3H\3H\3H\3H\3I\5I\u02d8\nI\3I\3I\3"+
		"I\3I\3I\3I\3J\6J\u02e1\nJ\rJ\16J\u02e2\3K\3K\6K\u02e7\nK\rK\16K\u02e8"+
		"\3L\3L\3M\3M\5M\u02ef\nM\3N\3N\3N\3N\7N\u02f5\nN\fN\16N\u02f8\13N\3O\3"+
		"O\3O\3O\3O\3O\7O\u0300\nO\fO\16O\u0303\13O\3P\3P\3Q\3Q\3R\6R\u030a\nR"+
		"\rR\16R\u030b\3R\3R\3\u01be\2S\3\3\5\4\7\5\t\6\13\7\r\b\17\t\21\n\23\13"+
		"\25\f\27\r\31\16\33\17\35\20\37\21!\22#\23%\24\'\25)\26+\27-\30/\31\61"+
		"\32\63\33\65\34\67\359\36;\37= ?!A\"C#E$G%I&K\'M(O)Q*S+U,W-Y.[/]\60_\61"+
		"a\62c\63e\64g\65i\66k\67m8o9q:s;u<w=y>{?}@\177\2\u0081\2\u0083A\u0085"+
		"\2\u0087\2\u0089\2\u008b\2\u008d\2\u008f\2\u0091\2\u0093\2\u0095\2\u0097"+
		"\2\u0099B\u009b\2\u009d\2\u009fC\u00a1D\u00a3E\3\2\n\4\2))aa\16\2##%("+
		",-//\61\61<<>B^^``bb~~\u0080\u0080\3\2$$\4\2CHch\5\2BHR\u0135\u0137\u0178"+
		"\4\2C\\c|\3\2\62;\5\2\13\f\17\17\"\"\2\u0347\2\3\3\2\2\2\2\5\3\2\2\2\2"+
		"\7\3\2\2\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2"+
		"\2\2\2\23\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2"+
		"\2\35\3\2\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2%\3\2\2\2\2\'\3\2\2"+
		"\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2"+
		"\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3\2\2\2\2;\3\2\2\2\2=\3\2\2\2\2?\3\2\2"+
		"\2\2A\3\2\2\2\2C\3\2\2\2\2E\3\2\2\2\2G\3\2\2\2\2I\3\2\2\2\2K\3\2\2\2\2"+
		"M\3\2\2\2\2O\3\2\2\2\2Q\3\2\2\2\2S\3\2\2\2\2U\3\2\2\2\2W\3\2\2\2\2Y\3"+
		"\2\2\2\2[\3\2\2\2\2]\3\2\2\2\2_\3\2\2\2\2a\3\2\2\2\2c\3\2\2\2\2e\3\2\2"+
		"\2\2g\3\2\2\2\2i\3\2\2\2\2k\3\2\2\2\2m\3\2\2\2\2o\3\2\2\2\2q\3\2\2\2\2"+
		"s\3\2\2\2\2u\3\2\2\2\2w\3\2\2\2\2y\3\2\2\2\2{\3\2\2\2\2}\3\2\2\2\2\u0083"+
		"\3\2\2\2\2\u0099\3\2\2\2\2\u009f\3\2\2\2\2\u00a1\3\2\2\2\2\u00a3\3\2\2"+
		"\2\3\u00a5\3\2\2\2\5\u00a7\3\2\2\2\7\u00aa\3\2\2\2\t\u00ac\3\2\2\2\13"+
		"\u00ae\3\2\2\2\r\u00b0\3\2\2\2\17\u00b2\3\2\2\2\21\u00b4\3\2\2\2\23\u00b6"+
		"\3\2\2\2\25\u00b8\3\2\2\2\27\u00ba\3\2\2\2\31\u00bc\3\2\2\2\33\u00c0\3"+
		"\2\2\2\35\u00c3\3\2\2\2\37\u00c7\3\2\2\2!\u00c9\3\2\2\2#\u00cf\3\2\2\2"+
		"%\u00d6\3\2\2\2\'\u00de\3\2\2\2)\u00e5\3\2\2\2+\u00e8\3\2\2\2-\u00ed\3"+
		"\2\2\2/\u00f2\3\2\2\2\61\u00f8\3\2\2\2\63\u00fb\3\2\2\2\65\u0100\3\2\2"+
		"\2\67\u0103\3\2\2\29\u0106\3\2\2\2;\u0108\3\2\2\2=\u010b\3\2\2\2?\u010d"+
		"\3\2\2\2A\u010f\3\2\2\2C\u0112\3\2\2\2E\u0116\3\2\2\2G\u0118\3\2\2\2I"+
		"\u011b\3\2\2\2K\u011f\3\2\2\2M\u0123\3\2\2\2O\u0128\3\2\2\2Q\u0131\3\2"+
		"\2\2S\u013a\3\2\2\2U\u0142\3\2\2\2W\u0147\3\2\2\2Y\u0151\3\2\2\2[\u015b"+
		"\3\2\2\2]\u0161\3\2\2\2_\u0166\3\2\2\2a\u016d\3\2\2\2c\u0173\3\2\2\2e"+
		"\u0177\3\2\2\2g\u017b\3\2\2\2i\u0182\3\2\2\2k\u0185\3\2\2\2m\u0189\3\2"+
		"\2\2o\u018f\3\2\2\2q\u0196\3\2\2\2s\u019e\3\2\2\2u\u01a6\3\2\2\2w\u01ae"+
		"\3\2\2\2y\u01b8\3\2\2\2{\u028b\3\2\2\2}\u028f\3\2\2\2\177\u0291\3\2\2"+
		"\2\u0081\u029b\3\2\2\2\u0083\u02a4\3\2\2\2\u0085\u02a7\3\2\2\2\u0087\u02af"+
		"\3\2\2\2\u0089\u02b2\3\2\2\2\u008b\u02be\3\2\2\2\u008d\u02c4\3\2\2\2\u008f"+
		"\u02cf\3\2\2\2\u0091\u02d7\3\2\2\2\u0093\u02e0\3\2\2\2\u0095\u02e6\3\2"+
		"\2\2\u0097\u02ea\3\2\2\2\u0099\u02ee\3\2\2\2\u009b\u02f0\3\2\2\2\u009d"+
		"\u02f9\3\2\2\2\u009f\u0304\3\2\2\2\u00a1\u0306\3\2\2\2\u00a3\u0309\3\2"+
		"\2\2\u00a5\u00a6\7\60\2\2\u00a6\4\3\2\2\2\u00a7\u00a8\7q\2\2\u00a8\u00a9"+
		"\7r\2\2\u00a9\6\3\2\2\2\u00aa\u00ab\7%\2\2\u00ab\b\3\2\2\2\u00ac\u00ad"+
		"\7*\2\2\u00ad\n\3\2\2\2\u00ae\u00af\7+\2\2\u00af\f\3\2\2\2\u00b0\u00b1"+
		"\7.\2\2\u00b1\16\3\2\2\2\u00b2\u00b3\7}\2\2\u00b3\20\3\2\2\2\u00b4\u00b5"+
		"\7\177\2\2\u00b5\22\3\2\2\2\u00b6\u00b7\7]\2\2\u00b7\24\3\2\2\2\u00b8"+
		"\u00b9\7_\2\2\u00b9\26\3\2\2\2\u00ba\u00bb\7=\2\2\u00bb\30\3\2\2\2\u00bc"+
		"\u00bd\7n\2\2\u00bd\u00be\7g\2\2\u00be\u00bf\7v\2\2\u00bf\32\3\2\2\2\u00c0"+
		"\u00c1\7k\2\2\u00c1\u00c2\7p\2\2\u00c2\34\3\2\2\2\u00c3\u00c4\7g\2\2\u00c4"+
		"\u00c5\7p\2\2\u00c5\u00c6\7f\2\2\u00c6\36\3\2\2\2\u00c7\u00c8\7<\2\2\u00c8"+
		" \3\2\2\2\u00c9\u00ca\7t\2\2\u00ca\u00cb\7c\2\2\u00cb\u00cc\7k\2\2\u00cc"+
		"\u00cd\7u\2\2\u00cd\u00ce\7g\2\2\u00ce\"\3\2\2\2\u00cf\u00d0\7j\2\2\u00d0"+
		"\u00d1\7c\2\2\u00d1\u00d2\7p\2\2\u00d2\u00d3\7f\2\2\u00d3\u00d4\7n\2\2"+
		"\u00d4\u00d5\7g\2\2\u00d5$\3\2\2\2\u00d6\u00d7\7c\2\2\u00d7\u00d8\7p\2"+
		"\2\u00d8\u00d9\7f\2\2\u00d9\u00da\7c\2\2\u00da\u00db\7n\2\2\u00db\u00dc"+
		"\7u\2\2\u00dc\u00dd\7q\2\2\u00dd&\3\2\2\2\u00de\u00df\7q\2\2\u00df\u00e0"+
		"\7t\2\2\u00e0\u00e1\7g\2\2\u00e1\u00e2\7n\2\2\u00e2\u00e3\7u\2\2\u00e3"+
		"\u00e4\7g\2\2\u00e4(\3\2\2\2\u00e5\u00e6\7k\2\2\u00e6\u00e7\7h\2\2\u00e7"+
		"*\3\2\2\2\u00e8\u00e9\7v\2\2\u00e9\u00ea\7j\2\2\u00ea\u00eb\7g\2\2\u00eb"+
		"\u00ec\7p\2\2\u00ec,\3\2\2\2\u00ed\u00ee\7g\2\2\u00ee\u00ef\7n\2\2\u00ef"+
		"\u00f0\7u\2\2\u00f0\u00f1\7g\2\2\u00f1.\3\2\2\2\u00f2\u00f3\7y\2\2\u00f3"+
		"\u00f4\7j\2\2\u00f4\u00f5\7k\2\2\u00f5\u00f6\7n\2\2\u00f6\u00f7\7g\2\2"+
		"\u00f7\60\3\2\2\2\u00f8\u00f9\7f\2\2\u00f9\u00fa\7q\2\2\u00fa\62\3\2\2"+
		"\2\u00fb\u00fc\7e\2\2\u00fc\u00fd\7c\2\2\u00fd\u00fe\7u\2\2\u00fe\u00ff"+
		"\7g\2\2\u00ff\64\3\2\2\2\u0100\u0101\7q\2\2\u0101\u0102\7h\2\2\u0102\66"+
		"\3\2\2\2\u0103\u0104\7h\2\2\u0104\u0105\7p\2\2\u01058\3\2\2\2\u0106\u0107"+
		"\7?\2\2\u0107:\3\2\2\2\u0108\u0109\7?\2\2\u0109\u010a\7@\2\2\u010a<\3"+
		"\2\2\2\u010b\u010c\7~\2\2\u010c>\3\2\2\2\u010d\u010e\7a\2\2\u010e@\3\2"+
		"\2\2\u010f\u0110\7c\2\2\u0110\u0111\7u\2\2\u0111B\3\2\2\2\u0112\u0113"+
		"\7\60\2\2\u0113\u0114\7\60\2\2\u0114\u0115\7\60\2\2\u0115D\3\2\2\2\u0116"+
		"\u0117\7,\2\2\u0117F\3\2\2\2\u0118\u0119\7/\2\2\u0119\u011a\7@\2\2\u011a"+
		"H\3\2\2\2\u011b\u011c\7x\2\2\u011c\u011d\7c\2\2\u011d\u011e\7n\2\2\u011e"+
		"J\3\2\2\2\u011f\u0120\7h\2\2\u0120\u0121\7w\2\2\u0121\u0122\7p\2\2\u0122"+
		"L\3\2\2\2\u0123\u0124\7v\2\2\u0124\u0125\7{\2\2\u0125\u0126\7r\2\2\u0126"+
		"\u0127\7g\2\2\u0127N\3\2\2\2\u0128\u0129\7f\2\2\u0129\u012a\7c\2\2\u012a"+
		"\u012b\7v\2\2\u012b\u012c\7c\2\2\u012c\u012d\7v\2\2\u012d\u012e\7{\2\2"+
		"\u012e\u012f\7r\2\2\u012f\u0130\7g\2\2\u0130P\3\2\2\2\u0131\u0132\7y\2"+
		"\2\u0132\u0133\7k\2\2\u0133\u0134\7v\2\2\u0134\u0135\7j\2\2\u0135\u0136"+
		"\7v\2\2\u0136\u0137\7{\2\2\u0137\u0138\7r\2\2\u0138\u0139\7g\2\2\u0139"+
		"R\3\2\2\2\u013a\u013b\7c\2\2\u013b\u013c\7d\2\2\u013c\u013d\7u\2\2\u013d"+
		"\u013e\7v\2\2\u013e\u013f\7{\2\2\u013f\u0140\7r\2\2\u0140\u0141\7g\2\2"+
		"\u0141T\3\2\2\2\u0142\u0143\7y\2\2\u0143\u0144\7k\2\2\u0144\u0145\7v\2"+
		"\2\u0145\u0146\7j\2\2\u0146V\3\2\2\2\u0147\u0148\7g\2\2\u0148\u0149\7"+
		"z\2\2\u0149\u014a\7e\2\2\u014a\u014b\7g\2\2\u014b\u014c\7r\2\2\u014c\u014d"+
		"\7v\2\2\u014d\u014e\7k\2\2\u014e\u014f\7q\2\2\u014f\u0150\7p\2\2\u0150"+
		"X\3\2\2\2\u0151\u0152\7u\2\2\u0152\u0153\7v\2\2\u0153\u0154\7t\2\2\u0154"+
		"\u0155\7w\2\2\u0155\u0156\7e\2\2\u0156\u0157\7v\2\2\u0157\u0158\7w\2\2"+
		"\u0158\u0159\7t\2\2\u0159\u015a\7g\2\2\u015aZ\3\2\2\2\u015b\u015c\7n\2"+
		"\2\u015c\u015d\7q\2\2\u015d\u015e\7e\2\2\u015e\u015f\7c\2\2\u015f\u0160"+
		"\7n\2\2\u0160\\\3\2\2\2\u0161\u0162\7q\2\2\u0162\u0163\7r\2\2\u0163\u0164"+
		"\7g\2\2\u0164\u0165\7p\2\2\u0165^\3\2\2\2\u0166\u0167\7p\2\2\u0167\u0168"+
		"\7q\2\2\u0168\u0169\7p\2\2\u0169\u016a\7h\2\2\u016a\u016b\7k\2\2\u016b"+
		"\u016c\7z\2\2\u016c`\3\2\2\2\u016d\u016e\7k\2\2\u016e\u016f\7p\2\2\u016f"+
		"\u0170\7h\2\2\u0170\u0171\7k\2\2\u0171\u0172\7z\2\2\u0172b\3\2\2\2\u0173"+
		"\u0174\7c\2\2\u0174\u0175\7p\2\2\u0175\u0176\7f\2\2\u0176d\3\2\2\2\u0177"+
		"\u0178\7t\2\2\u0178\u0179\7g\2\2\u0179\u017a\7e\2\2\u017af\3\2\2\2\u017b"+
		"\u017c\7u\2\2\u017c\u017d\7v\2\2\u017d\u017e\7t\2\2\u017e\u017f\7w\2\2"+
		"\u017f\u0180\7e\2\2\u0180\u0181\7v\2\2\u0181h\3\2\2\2\u0182\u0183\7<\2"+
		"\2\u0183\u0184\7@\2\2\u0184j\3\2\2\2\u0185\u0186\7u\2\2\u0186\u0187\7"+
		"k\2\2\u0187\u0188\7i\2\2\u0188l\3\2\2\2\u0189\u018a\7y\2\2\u018a\u018b"+
		"\7j\2\2\u018b\u018c\7g\2\2\u018c\u018d\7t\2\2\u018d\u018e\7g\2\2\u018e"+
		"n\3\2\2\2\u018f\u0190\7g\2\2\u0190\u0191\7s\2\2\u0191\u0192\7v\2\2\u0192"+
		"\u0193\7{\2\2\u0193\u0194\7r\2\2\u0194\u0195\7g\2\2\u0195p\3\2\2\2\u0196"+
		"\u0197\7k\2\2\u0197\u0198\7p\2\2\u0198\u0199\7e\2\2\u0199\u019a\7n\2\2"+
		"\u019a\u019b\7w\2\2\u019b\u019c\7f\2\2\u019c\u019d\7g\2\2\u019dr\3\2\2"+
		"\2\u019e\u019f\7u\2\2\u019f\u01a0\7j\2\2\u01a0\u01a1\7c\2\2\u01a1\u01a2"+
		"\7t\2\2\u01a2\u01a3\7k\2\2\u01a3\u01a4\7p\2\2\u01a4\u01a5\7i\2\2\u01a5"+
		"t\3\2\2\2\u01a6\u01a7\7h\2\2\u01a7\u01a8\7w\2\2\u01a8\u01a9\7p\2\2\u01a9"+
		"\u01aa\7e\2\2\u01aa\u01ab\7v\2\2\u01ab\u01ac\7q\2\2\u01ac\u01ad\7t\2\2"+
		"\u01adv\3\2\2\2\u01ae\u01af\7u\2\2\u01af\u01b0\7k\2\2\u01b0\u01b1\7i\2"+
		"\2\u01b1\u01b2\7p\2\2\u01b2\u01b3\7c\2\2\u01b3\u01b4\7v\2\2\u01b4\u01b5"+
		"\7w\2\2\u01b5\u01b6\7t\2\2\u01b6\u01b7\7g\2\2\u01b7x\3\2\2\2\u01b8\u01b9"+
		"\7*\2\2\u01b9\u01ba\7,\2\2\u01ba\u01be\3\2\2\2\u01bb\u01bd\13\2\2\2\u01bc"+
		"\u01bb\3\2\2\2\u01bd\u01c0\3\2\2\2\u01be\u01bf\3\2\2\2\u01be\u01bc\3\2"+
		"\2\2\u01bf\u01c1\3\2\2\2\u01c0\u01be\3\2\2\2\u01c1\u01c2\7,\2\2\u01c2"+
		"\u01c3\7+\2\2\u01c3\u01c4\3\2\2\2\u01c4\u01c5\b=\2\2\u01c5z\3\2\2\2\u01c6"+
		"\u01c7\7c\2\2\u01c7\u01c8\7d\2\2\u01c8\u01c9\7u\2\2\u01c9\u01ca\7v\2\2"+
		"\u01ca\u01cb\7{\2\2\u01cb\u01cc\7r\2\2\u01cc\u028c\7g\2\2\u01cd\u01ce"+
		"\7c\2\2\u01ce\u01cf\7p\2\2\u01cf\u028c\7f\2\2\u01d0\u01d1\7c\2\2\u01d1"+
		"\u01d2\7p\2\2\u01d2\u01d3\7f\2\2\u01d3\u01d4\7c\2\2\u01d4\u01d5\7n\2\2"+
		"\u01d5\u01d6\7u\2\2\u01d6\u028c\7q\2\2\u01d7\u01d8\7c\2\2\u01d8\u028c"+
		"\7u\2\2\u01d9\u01da\7e\2\2\u01da\u01db\7c\2\2\u01db\u01dc\7u\2\2\u01dc"+
		"\u028c\7g\2\2\u01dd\u01de\7f\2\2\u01de\u028c\7q\2\2\u01df\u01e0\7f\2\2"+
		"\u01e0\u01e1\7c\2\2\u01e1\u01e2\7v\2\2\u01e2\u01e3\7c\2\2\u01e3\u01e4"+
		"\7{\2\2\u01e4\u01e5\7r\2\2\u01e5\u028c\7g\2\2\u01e6\u01e7\7g\2\2\u01e7"+
		"\u01e8\7n\2\2\u01e8\u01e9\7u\2\2\u01e9\u028c\7g\2\2\u01ea\u01eb\7g\2\2"+
		"\u01eb\u01ec\7p\2\2\u01ec\u028c\7f\2\2\u01ed\u01ee\7g\2\2\u01ee\u01ef"+
		"\7s\2\2\u01ef\u01f0\7v\2\2\u01f0\u01f1\7{\2\2\u01f1\u01f2\7r\2\2\u01f2"+
		"\u028c\7g\2\2\u01f3\u01f4\7g\2\2\u01f4\u01f5\7z\2\2\u01f5\u01f6\7e\2\2"+
		"\u01f6\u01f7\7g\2\2\u01f7\u01f8\7r\2\2\u01f8\u01f9\7v\2\2\u01f9\u01fa"+
		"\7k\2\2\u01fa\u01fb\7q\2\2\u01fb\u028c\7p\2\2\u01fc\u01fd\7h\2\2\u01fd"+
		"\u028c\7p\2\2\u01fe\u01ff\7h\2\2\u01ff\u0200\7w\2\2\u0200\u028c\7p\2\2"+
		"\u0201\u0202\7h\2\2\u0202\u0203\7w\2\2\u0203\u0204\7p\2\2\u0204\u0205"+
		"\7e\2\2\u0205\u0206\7v\2\2\u0206\u0207\7q\2\2\u0207\u028c\7t\2\2\u0208"+
		"\u0209\7j\2\2\u0209\u020a\7c\2\2\u020a\u020b\7p\2\2\u020b\u020c\7f\2\2"+
		"\u020c\u020d\7n\2\2\u020d\u028c\7g\2\2\u020e\u020f\7k\2\2\u020f\u028c"+
		"\7h\2\2\u0210\u0211\7k\2\2\u0211\u028c\7p\2\2\u0212\u0213\7k\2\2\u0213"+
		"\u0214\7p\2\2\u0214\u0215\7e\2\2\u0215\u0216\7n\2\2\u0216\u0217\7w\2\2"+
		"\u0217\u0218\7f\2\2\u0218\u028c\7g\2\2\u0219\u021a\7k\2\2\u021a\u021b"+
		"\7p\2\2\u021b\u021c\7h\2\2\u021c\u021d\7k\2\2\u021d\u028c\7z\2\2\u021e"+
		"\u021f\7k\2\2\u021f\u0220\7p\2\2\u0220\u0221\7h\2\2\u0221\u0222\7k\2\2"+
		"\u0222\u0223\7z\2\2\u0223\u028c\7t\2\2\u0224\u0225\7n\2\2\u0225\u0226"+
		"\7g\2\2\u0226\u028c\7v\2\2\u0227\u0228\7n\2\2\u0228\u0229\7q\2\2\u0229"+
		"\u022a\7e\2\2\u022a\u022b\7c\2\2\u022b\u028c\7n\2\2\u022c\u022d\7p\2\2"+
		"\u022d\u022e\7q\2\2\u022e\u022f\7p\2\2\u022f\u0230\7h\2\2\u0230\u0231"+
		"\7k\2\2\u0231\u028c\7z\2\2\u0232\u0233\7q\2\2\u0233\u028c\7h\2\2\u0234"+
		"\u0235\7q\2\2\u0235\u028c\7r\2\2\u0236\u0237\7q\2\2\u0237\u0238\7r\2\2"+
		"\u0238\u0239\7g\2\2\u0239\u028c\7p\2\2\u023a\u023b\7q\2\2\u023b\u023c"+
		"\7t\2\2\u023c\u023d\7g\2\2\u023d\u023e\7n\2\2\u023e\u023f\7u\2\2\u023f"+
		"\u028c\7g\2\2\u0240\u0241\7t\2\2\u0241\u0242\7c\2\2\u0242\u0243\7k\2\2"+
		"\u0243\u0244\7u\2\2\u0244\u028c\7g\2\2\u0245\u0246\7t\2\2\u0246\u0247"+
		"\7g\2\2\u0247\u028c\7e\2\2\u0248\u0249\7u\2\2\u0249\u024a\7j\2\2\u024a"+
		"\u024b\7c\2\2\u024b\u024c\7t\2\2\u024c\u024d\7k\2\2\u024d\u024e\7p\2\2"+
		"\u024e\u028c\7i\2\2\u024f\u0250\7u\2\2\u0250\u0251\7k\2\2\u0251\u028c"+
		"\7i\2\2\u0252\u0253\7u\2\2\u0253\u0254\7k\2\2\u0254\u0255\7i\2\2\u0255"+
		"\u0256\7p\2\2\u0256\u0257\7c\2\2\u0257\u0258\7v\2\2\u0258\u0259\7w\2\2"+
		"\u0259\u025a\7t\2\2\u025a\u028c\7g\2\2\u025b\u025c\7u\2\2\u025c\u025d"+
		"\7v\2\2\u025d\u025e\7t\2\2\u025e\u025f\7w\2\2\u025f\u0260\7e\2\2\u0260"+
		"\u028c\7v\2\2\u0261\u0262\7u\2\2\u0262\u0263\7v\2\2\u0263\u0264\7t\2\2"+
		"\u0264\u0265\7w\2\2\u0265\u0266\7e\2\2\u0266\u0267\7v\2\2\u0267\u0268"+
		"\7w\2\2\u0268\u0269\7t\2\2\u0269\u028c\7g\2\2\u026a\u026b\7v\2\2\u026b"+
		"\u026c\7j\2\2\u026c\u026d\7g\2\2\u026d\u028c\7p\2\2\u026e\u026f\7v\2\2"+
		"\u026f\u0270\7{\2\2\u0270\u0271\7r\2\2\u0271\u028c\7g\2\2\u0272\u0273"+
		"\7x\2\2\u0273\u0274\7c\2\2\u0274\u028c\7n\2\2\u0275\u0276\7y\2\2\u0276"+
		"\u0277\7j\2\2\u0277\u0278\7g\2\2\u0278\u0279\7t\2\2\u0279\u028c\7g\2\2"+
		"\u027a\u027b\7y\2\2\u027b\u027c\7k\2\2\u027c\u027d\7v\2\2\u027d\u028c"+
		"\7j\2\2\u027e\u027f\7y\2\2\u027f\u0280\7k\2\2\u0280\u0281\7v\2\2\u0281"+
		"\u0282\7j\2\2\u0282\u0283\7v\2\2\u0283\u0284\7{\2\2\u0284\u0285\7r\2\2"+
		"\u0285\u028c\7g\2\2\u0286\u0287\7y\2\2\u0287\u0288\7j\2\2\u0288\u0289"+
		"\7k\2\2\u0289\u028a\7n\2\2\u028a\u028c\7g\2\2\u028b\u01c6\3\2\2\2\u028b"+
		"\u01cd\3\2\2\2\u028b\u01d0\3\2\2\2\u028b\u01d7\3\2\2\2\u028b\u01d9\3\2"+
		"\2\2\u028b\u01dd\3\2\2\2\u028b\u01df\3\2\2\2\u028b\u01e6\3\2\2\2\u028b"+
		"\u01ea\3\2\2\2\u028b\u01ed\3\2\2\2\u028b\u01f3\3\2\2\2\u028b\u01fc\3\2"+
		"\2\2\u028b\u01fe\3\2\2\2\u028b\u0201\3\2\2\2\u028b\u0208\3\2\2\2\u028b"+
		"\u020e\3\2\2\2\u028b\u0210\3\2\2\2\u028b\u0212\3\2\2\2\u028b\u0219\3\2"+
		"\2\2\u028b\u021e\3\2\2\2\u028b\u0224\3\2\2\2\u028b\u0227\3\2\2\2\u028b"+
		"\u022c\3\2\2\2\u028b\u0232\3\2\2\2\u028b\u0234\3\2\2\2\u028b\u0236\3\2"+
		"\2\2\u028b\u023a\3\2\2\2\u028b\u0240\3\2\2\2\u028b\u0245\3\2\2\2\u028b"+
		"\u0248\3\2\2\2\u028b\u024f\3\2\2\2\u028b\u0252\3\2\2\2\u028b\u025b\3\2"+
		"\2\2\u028b\u0261\3\2\2\2\u028b\u026a\3\2\2\2\u028b\u026e\3\2\2\2\u028b"+
		"\u0272\3\2\2\2\u028b\u0275\3\2\2\2\u028b\u027a\3\2\2\2\u028b\u027e\3\2"+
		"\2\2\u028b\u0286\3\2\2\2\u028c|\3\2\2\2\u028d\u0290\5\177@\2\u028e\u0290"+
		"\5\u0081A\2\u028f\u028d\3\2\2\2\u028f\u028e\3\2\2\2\u0290~\3\2\2\2\u0291"+
		"\u0297\5\u009fP\2\u0292\u0296\5\u009fP\2\u0293\u0296\5\u00a1Q\2\u0294"+
		"\u0296\t\2\2\2\u0295\u0292\3\2\2\2\u0295\u0293\3\2\2\2\u0295\u0294\3\2"+
		"\2\2\u0296\u0299\3\2\2\2\u0297\u0295\3\2\2\2\u0297\u0298\3\2\2\2\u0298"+
		"\u0080\3\2\2\2\u0299\u0297\3\2\2\2\u029a\u029c\t\3\2\2\u029b\u029a\3\2"+
		"\2\2\u029c\u029d\3\2\2\2\u029d\u029b\3\2\2\2\u029d\u029e\3\2\2\2\u029e"+
		"\u0082\3\2\2\2\u029f\u02a5\5\u0085C\2\u02a0\u02a5\5\u0087D\2\u02a1\u02a5"+
		"\5\u0089E\2\u02a2\u02a5\5\u008bF\2\u02a3\u02a5\5\u008dG\2\u02a4\u029f"+
		"\3\2\2\2\u02a4\u02a0\3\2\2\2\u02a4\u02a1\3\2\2\2\u02a4\u02a2\3\2\2\2\u02a4"+
		"\u02a3\3\2\2\2\u02a5\u0084\3\2\2\2\u02a6\u02a8\7/\2\2\u02a7\u02a6\3\2"+
		"\2\2\u02a7\u02a8\3\2\2\2\u02a8\u02ab\3\2\2\2\u02a9\u02ac\5\u0093J\2\u02aa"+
		"\u02ac\5\u0095K\2\u02ab\u02a9\3\2\2\2\u02ab\u02aa\3\2\2\2\u02ac\u0086"+
		"\3\2\2\2\u02ad\u02b0\5\u008fH\2\u02ae\u02b0\5\u0091I\2\u02af\u02ad\3\2"+
		"\2\2\u02af\u02ae\3\2\2\2\u02b0\u0088\3\2\2\2\u02b1\u02b3\7/\2\2\u02b2"+
		"\u02b1\3\2\2\2\u02b2\u02b3\3\2\2\2\u02b3\u02b4\3\2\2\2\u02b4\u02b5\5\u0093"+
		"J\2\u02b5\u02b6\7\60\2\2\u02b6\u02bc\5\u0093J\2\u02b7\u02b9\7g\2\2\u02b8"+
		"\u02ba\7/\2\2\u02b9\u02b8\3\2\2\2\u02b9\u02ba\3\2\2\2\u02ba\u02bb\3\2"+
		"\2\2\u02bb\u02bd\5\u0093J\2\u02bc\u02b7\3\2\2\2\u02bc\u02bd\3\2\2\2\u02bd"+
		"\u008a\3\2\2\2\u02be\u02bf\7%\2\2\u02bf\u02c0\7$\2\2\u02c0\u02c1\3\2\2"+
		"\2\u02c1\u02c2\5\u0097L\2\u02c2\u02c3\7$\2\2\u02c3\u008c\3\2\2\2\u02c4"+
		"\u02c9\7$\2\2\u02c5\u02c8\n\4\2\2\u02c6\u02c8\7$\2\2\u02c7\u02c5\3\2\2"+
		"\2\u02c7\u02c6\3\2\2\2\u02c8\u02cb\3\2\2\2\u02c9\u02c7\3\2\2\2\u02c9\u02ca"+
		"\3\2\2\2\u02ca\u02cc\3\2\2\2\u02cb\u02c9\3\2\2\2\u02cc\u02cd\7$\2\2\u02cd"+
		"\u008e\3\2\2\2\u02ce\u02d0\7/\2\2\u02cf\u02ce\3\2\2\2\u02cf\u02d0\3\2"+
		"\2\2\u02d0\u02d1\3\2\2\2\u02d1\u02d2\7\62\2\2\u02d2\u02d3\7y\2\2\u02d3"+
		"\u02d4\3\2\2\2\u02d4\u02d5\5\u0093J\2\u02d5\u0090\3\2\2\2\u02d6\u02d8"+
		"\7/\2\2\u02d7\u02d6\3\2\2\2\u02d7\u02d8\3\2\2\2\u02d8\u02d9\3\2\2\2\u02d9"+
		"\u02da\7\62\2\2\u02da\u02db\7y\2\2\u02db\u02dc\7z\2\2\u02dc\u02dd\3\2"+
		"\2\2\u02dd\u02de\5\u0095K\2\u02de\u0092\3\2\2\2\u02df\u02e1\5\u00a1Q\2"+
		"\u02e0\u02df\3\2\2\2\u02e1\u02e2\3\2\2\2\u02e2\u02e0\3\2\2\2\u02e2\u02e3"+
		"\3\2\2\2\u02e3\u0094\3\2\2\2\u02e4\u02e7\5\u00a1Q\2\u02e5\u02e7\t\5\2"+
		"\2\u02e6\u02e4\3\2\2\2\u02e6\u02e5\3\2\2\2\u02e7\u02e8\3\2\2\2\u02e8\u02e6"+
		"\3\2\2\2\u02e8\u02e9\3\2\2\2\u02e9\u0096\3\2\2\2\u02ea\u02eb\t\6\2\2\u02eb"+
		"\u0098\3\2\2\2\u02ec\u02ef\5\u009bN\2\u02ed\u02ef\5\u009dO\2\u02ee\u02ec"+
		"\3\2\2\2\u02ee\u02ed\3\2\2\2\u02ef\u009a\3\2\2\2\u02f0\u02f6\7)\2\2\u02f1"+
		"\u02f5\5\u009fP\2\u02f2\u02f5\5\u00a1Q\2\u02f3\u02f5\t\2\2\2\u02f4\u02f1"+
		"\3\2\2\2\u02f4\u02f2\3\2\2\2\u02f4\u02f3\3\2\2\2\u02f5\u02f8\3\2\2\2\u02f6"+
		"\u02f4\3\2\2\2\u02f6\u02f7\3\2\2\2\u02f7\u009c\3\2\2\2\u02f8\u02f6\3\2"+
		"\2\2\u02f9\u02fa\7)\2\2\u02fa\u02fb\7)\2\2\u02fb\u0301\3\2\2\2\u02fc\u0300"+
		"\5\u009fP\2\u02fd\u0300\5\u00a1Q\2\u02fe\u0300\t\2\2\2\u02ff\u02fc\3\2"+
		"\2\2\u02ff\u02fd\3\2\2\2\u02ff\u02fe\3\2\2\2\u0300\u0303\3\2\2\2\u0301"+
		"\u02ff\3\2\2\2\u0301\u0302\3\2\2\2\u0302\u009e\3\2\2\2\u0303\u0301\3\2"+
		"\2\2\u0304\u0305\t\7\2\2\u0305\u00a0\3\2\2\2\u0306\u0307\t\b\2\2\u0307"+
		"\u00a2\3\2\2\2\u0308\u030a\t\t\2\2\u0309\u0308\3\2\2\2\u030a\u030b\3\2"+
		"\2\2\u030b\u0309\3\2\2\2\u030b\u030c\3\2\2\2\u030c\u030d\3\2\2\2\u030d"+
		"\u030e\bR\2\2\u030e\u00a4\3\2\2\2\35\2\u01be\u028b\u028f\u0295\u0297\u029d"+
		"\u02a4\u02a7\u02ab\u02af\u02b2\u02b9\u02bc\u02c7\u02c9\u02cf\u02d7\u02e2"+
		"\u02e6\u02e8\u02ee\u02f4\u02f6\u02ff\u0301\u030b\3\b\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}