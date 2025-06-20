// Simple test to verify the browser bundle works
// Run this with: node test-browser-bundle.js

const fs = require('fs');
const { JSDOM } = require('jsdom');

// Read the bundle file
const bundleContent = fs.readFileSync('./dist/forge-expr-evaluator.bundle.js', 'utf8');

// Create a JSDOM environment
const dom = new JSDOM(`<!DOCTYPE html><html><body></body></html>`, {
  runScripts: "dangerously",
  resources: "usable"
});

const window = dom.window;
global.window = window;
global.document = window.document;

try {
  // Execute the bundle in the JSDOM environment
  window.eval(bundleContent);
  
  // Check if ForgeExprEvaluator is available
  if (typeof window.ForgeExprEvaluator !== 'undefined') {
    console.log('✅ Bundle loaded successfully!');
    console.log('✅ ForgeExprEvaluator is available in global scope');
    
    // Test basic instantiation
    const ForgeExprEvaluatorUtil = window.ForgeExprEvaluator.ForgeExprEvaluatorUtil;
    if (typeof ForgeExprEvaluatorUtil === 'function') {
      console.log('✅ ForgeExprEvaluatorUtil constructor is available');
      console.log('🎉 Browser bundle test PASSED!');
    } else {
      console.log('❌ ForgeExprEvaluatorUtil is not a function');
    }
  } else {
    console.log('❌ ForgeExprEvaluator not found in global scope');
  }
} catch (error) {
  console.log('❌ Error loading bundle:', error.message);
}
