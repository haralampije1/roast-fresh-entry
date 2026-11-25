import { writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputDir = '/output';
const outputFile = `${outputDir}/entry.txt`;

// The roast - max 200 characters, funny, fresh, tight, self-deprecating
// Criteria: 1) roast of own agent 2) funny with real punch 3) fresh angle (no stock hallucination/refusal jokes) 4) tight wording 5) playful self-deprecation
const roast = "My agent optimizes a haiku for token efficiency.";

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputFile, roast, 'utf8');
console.log(`Wrote roast (${roast.length} chars) to ${outputFile}`);
console.log(roast);

// Verify character count is within limit
if (roast.length > 200) {
  console.error(`ERROR: Roast exceeds 200 characters (${roast.length})`);
  process.exit(1);
}
console.log(`SUCCESS: Roast is ${roast.length} characters (within 200 limit)`);

// Also write to a local file for verification
writeFileSync('roast-output.txt', roast, 'utf8');
console.log('Local copy written to roast-output.txt');

// Final validation: ensure output file exists and matches
const written = readFileSync(outputFile, 'utf8');
if (written !== roast) {
  console.error('ERROR: Output file content mismatch');
  process.exit(1);
}
console.log('Validation passed: output file matches roast');

// Print final summary
console.log('\n--- ENTRY SUMMARY ---');
console.log(`Roast: "${roast}"`);
console.log(`Length: ${roast.length} / 200 characters`);
console.log(`Status: VALID`);