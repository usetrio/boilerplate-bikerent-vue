export default {
  "*.{vue,js,cjs,mjs,ts}": "npm run lint",
  "*.{vue,ts}": () => "npm run type-check"
}
