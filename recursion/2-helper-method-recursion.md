# Helper Method Recursion

## Pattern:

```
function outer(input) {
  var outerScopedVariable = []

  function helper(helperInput) {
    // modify the outerScopedVariable
    helper(helperInput--)
  }

  helper(input)

  return outerScopedVariable
}
```

- 2 functions: the outer function `outer` and then inside the recursive function `helper`, we would call `outer` and pass something in
- is useful when we need to compile an array or list of data

### Examples:

- see `./collectOddValues.js` or snippet
