cd $(dirname $0)

npx tsr --tsConfig ./tsconfig.json ./src/types/assert.ts

echo Running runtime assertion
node run-assertion.js
