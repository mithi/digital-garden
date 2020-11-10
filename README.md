# 🌱 Mithi's Digital Garden 🌷

> This is a place where I drop notes about things on my mind. The entries here are mostly
> incomplete thoughts; they probably won't useful for anyone else but me. Sorry you've stumbled
> upon this, but there is really nothing really to see here.

## Notes

```bash
$ npx create-next-app digital-garden --use-npm
$ touch tsconfig.json
$ npm install --save-dev typescript @types/react @types/node
$ npm run dev
```

I might need this later.

```
"@types/webpack-env": "^1.15.3",
```

## Personal Commit Style Guide

(New feature)

```
📝⭐ New Blog Post / Page!, or update text content of page
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
- Rename private variables, private functions and methods
- Move functions to own module
- Rearrange relative positions of functions or blocks of code within the same file
- Extract method move some code from a large function to a helper function
- Reduce cognitive complexity of blocks of codes
- Reimplement the same thing, but function is now is more readable (not necessarily faster)
- Remove duplication, be DRY

🔥 Remove unused code

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

## References

Layout inspirations

-   https://joelhooks.com/
-   https://overreacted.io/
-   https://nextjs-mdx-blog-kit.com/

Walkthroughs

-   https://github.com/joelhooks/next-typescript-tailwind-mdx-starter
-   https://medium.com/young-developer/react-markdown-code-and-syntax-highlighting-632d2f9b4ada
-   https://github.com/vercel/next.js/tree/master/packages/next-mdx
-   https://magrippis.com/blog/2020/how-to-setup-MDX-in-Nextjs
-   https://mdxjs.com/advanced/typescript
-   https://github.com/Jashnm/mdx-blog-nextjs
-   https://dev.to/jashnm/making-mdx-blog-with-next-js-part-1-1c0j
-   https://github.com/lorenseanstewart/nextjs-mdx-blog-kit
