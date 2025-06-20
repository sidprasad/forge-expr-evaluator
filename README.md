# forge-expr-evaluator

A TypeScript evaluator for Forge expressions that works in both Node.js and browser environments.

_Note_: the evaluator makes use of a forge parser built using Antlr; this is largely taken from
the [parser developed by Siddhartha Prasad](https://github.com/sidprasad/forge-antlr/)
with some minor modifications to the grammar.

## Installation

```bash
npm install forge-expr-evaluator
```

## Usage

### Node.js

```typescript
import { ForgeExprEvaluatorUtil } from 'forge-expr-evaluator';

const evaluator = new ForgeExprEvaluatorUtil(datum, sourceCode);
const result = evaluator.evaluateExpression('some expression');
```

### Browser (Script tag)

```html
<script src="./dist/forge-expr-evaluator.bundle.js"></script>
<script>
  const evaluator = new ForgeExprEvaluator.ForgeExprEvaluatorUtil(datum, sourceCode);
  const result = evaluator.evaluateExpression('some expression');
</script>
```

### Browser (ES Module with bundler)

If you're using a modern bundler like Webpack, Rollup, or Vite, you can import directly:

```javascript
import { ForgeExprEvaluatorUtil } from 'forge-expr-evaluator';

const evaluator = new ForgeExprEvaluatorUtil(datum, sourceCode);
const result = evaluator.evaluateExpression('some expression');
```

## Demo

Open `example.html` in your browser to see a working demo with tic-tac-toe game data from the test examples.

## Building

### Build both Node.js and Browser versions

```bash
npm run build
```

This creates:
- `dist/` - Node.js CommonJS build (for npm package)
- `dist/forge-expr-evaluator.bundle.js` - Browser UMD bundle

### Build for Node.js only

```bash
npm run build:node
```

### Build for Browser only

```bash
npm run build:browser
```

## Browser Compatibility

The library now supports modern browsers with:
- ES2021+ features
- Webpack UMD bundle for universal compatibility
- No Node.js dependencies in browser builds
- Automatic fallbacks for Node.js-specific modules

The bundle size is approximately 625KB (uncompressed), 170KB (gzipped).

## Example with Real Data

The `example.html` demonstrates usage with actual Forge data from the test suite:

```javascript
// Initialize with tic-tac-toe game data
const evaluator = new ForgeExprEvaluator.ForgeExprEvaluatorUtil(tttDatum, sourceCode);

// Evaluate expressions
const allAtoms = evaluator.evaluateExpression('univ');
const boards = evaluator.evaluateExpression('Board');
const players = evaluator.evaluateExpression('Player');
const initialState = evaluator.evaluateExpression('Game.initialState');
```

## Development

- Uses TypeScript for both Node.js and browser builds
- Webpack for browser bundling with automatic Node.js polyfill handling
- Jest for testing with jsdom environment for browser compatibility testing
