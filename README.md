## Notes
```bash
$ npx create-next-app digital-garden --use-npm
$ touch tsconfig.json
$ npm install --save-dev typescript @types/react @types/node
$ npm run dev
```

# Personal Commit Style Guide
(New feature)
```
📝⭐ New Blog Post / Page!
💕⭐⭐ Major feature
💕⭐ Minor Feature
🌷⭐ Stylistic change (css)

❗❗(api-breaking / change-behavior)
 - Rename public functions
 - Change parameters of class constructors, methods functions
 - Change return type of existing functions
 - Change functionality of existing function
 - Remove existing properties of objects
```

(No functionality change)
```
🎨⭐⭐ (Major Refactor)
🎨⭐ (Minor Refactor)
- No functionality change
- Remove unused code
- Rename private variables, private functions and methods
- Move functions to own module
- Rearrange relative positions of functions or blocks of code within the same file
- Extract method move some code from a large function to a helper function
- Reduce cognitive complexity of blocks of codes
- Reimplement the same thing, but function is now is more readable (not necessarily faster)
- Remove duplication, be DRY

💅🏼 (style/formatting)
- Improve formatting (run prettier, Add line spaces)
- Adding comments for readability

🏇 (Optimize)
- Remove redundancy or unnecessary calculations
- Apply modifications that improve speed of the app
```
(No production code change)

```

🧹 (chore)
  - Update package manager configs
📚 (doc)
  - Update documentation
✅ (test)
  - Tests, refactored tests
🐞🐛 (fix)
  - Fix something that is not working as expected
```
