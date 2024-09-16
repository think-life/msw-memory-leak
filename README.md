# msw-memory-leak

This repo reproduces the memory leak bug introduced in `msw@2.4.4`.

## Positive Test

1. run `npm install`
2. run `node --expose-gc --no-compilation-cache ./node_modules/.bin/jest --silent  --runInBand --detectOpenHandles --logHeapUsage`

You will see something like:

```
 PASS  test/e2e/i.spec.ts (201 MB heap size)
 PASS  test/e2e/a.spec.ts (214 MB heap size)
 PASS  test/e2e/h.spec.ts (224 MB heap size)
 PASS  test/e2e/d.spec.ts (233 MB heap size)
 PASS  test/e2e/k.spec.ts (243 MB heap size)
 PASS  test/e2e/f.spec.ts (253 MB heap size)
 PASS  test/e2e/l.spec.ts (262 MB heap size)
 PASS  test/e2e/c.spec.ts (272 MB heap size)
 PASS  test/e2e/j.spec.ts (282 MB heap size)
 PASS  test/e2e/e.spec.ts (291 MB heap size)
 PASS  test/e2e/b.spec.ts (301 MB heap size)
 PASS  test/e2e/g.spec.ts (310 MB heap size)
```

Notice the heap size keeps increasing.

## Negative Test

1. Edit the `package.json` file, and change the `msw` version number to `2.4.3`.
2. Run `npm install`
3. Run `npm test`

You will see something like this:

```
 PASS  test/e2e/i.spec.ts (205 MB heap size)
 PASS  test/e2e/h.spec.ts (218 MB heap size)
 PASS  test/e2e/d.spec.ts (218 MB heap size)
 PASS  test/e2e/f.spec.ts (218 MB heap size)
 PASS  test/e2e/k.spec.ts (219 MB heap size)
 PASS  test/e2e/j.spec.ts (219 MB heap size)
 PASS  test/e2e/e.spec.ts (219 MB heap size)
 PASS  test/e2e/l.spec.ts (219 MB heap size)
 PASS  test/e2e/c.spec.ts (220 MB heap size)
 PASS  test/e2e/a.spec.ts (220 MB heap size)
 PASS  test/e2e/g.spec.ts (220 MB heap size)
 PASS  test/e2e/b.spec.ts (220 MB heap size)
```

Although it is still increasing in size, the magnitude is much smaller.