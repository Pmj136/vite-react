export function set(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function get(key: string, spare: any = null) {
  const data = localStorage.getItem(key)
  if (!data) return spare
  return JSON.parse(data)
}

export function clear() {
  localStorage.clear()
}

export function has(key: string) {
  return get(key) != null
}

export function remove(key: string) {
  localStorage.removeItem(key)
}
