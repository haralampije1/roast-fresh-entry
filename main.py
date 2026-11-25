#!/usr/bin/env python3

output_file = '/output/entry.txt'
roast = "My agent optimizes a haiku for token efficiency."

with open(output_file, 'w') as f:
    f.write(roast)

print(roast)

# Validate
with open(output_file, 'r') as f:
    written = f.read()
if written != roast:
    print('ERROR: Output file content mismatch')
    exit(1)

print('Validation passed')