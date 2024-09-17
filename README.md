# msw-memory-leak

This repo reproduces the memory leak bug introduced in `msw@2.4.4`.

This branch uses `vitest` and it doesn't leak memory.

## Test

1. run `npm install`
2. run `npm test -- --logHeapUsage`

You will see something like:

```
 ✓ test/e2e/a.spec.ts (2) 19 MB heap used
 ✓ test/e2e/b.spec.ts (2) 19 MB heap used
 ✓ test/e2e/c.spec.ts (2) 19 MB heap used
 ✓ test/e2e/d.spec.ts (2) 19 MB heap used
 ✓ test/e2e/e.spec.ts (2) 19 MB heap used
 ✓ test/e2e/f.spec.ts (2) 19 MB heap used
 ✓ test/e2e/g.spec.ts (2) 19 MB heap used
 ✓ test/e2e/h.spec.ts (2) 19 MB heap used
 ✓ test/e2e/i.spec.ts (2) 19 MB heap used
 ✓ test/e2e/j.spec.ts (2) 19 MB heap used
 ✓ test/e2e/k.spec.ts (2) 19 MB heap used
 ✓ test/e2e/l.spec.ts (2) 19 MB heap used
```
