export function randomItem(items) {
  const item = items[Math.floor(Math.random() * items.length)]

  return item
}
