export const loadAssets = (path) => {
  return new URL(path,
    import.meta.url).href
}