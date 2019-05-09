import { TextDocument, Position, Range } from 'vscode-languageserver';
import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { MLLexer } from "../../antlr4/MLLexer";
import { MLParser } from "../../antlr4/MLParser";
import { MLVisitor } from "../../antlr4/MLVisitor";
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

class GrammaVisitor extends AbstractParseTreeVisitor<string> implements MLVisitor<string> {
	defaultResult() {
		return '';
	}

	visitIdentifier
}

function getProgParseTree (ctx: string): MLParser{
	let inputStream = new ANTLRInputStream(ctx);
	let lexer = new MLLexer(inputStream);
	let tokenStream = new CommonTokenStream(lexer);
	let parser = new MLParser(tokenStream);

	// Parse the input, where `compilationUnit` is whatever entry point you defined
	return parser;
}

export function getIdentifierAt(text: TextDocument, pos: Position): Range {
	
	return ;
}