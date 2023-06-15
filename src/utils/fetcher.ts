export default async function fetcher(input: RequestInfo, config: RequestInit) {
  const response = await fetch(input, config)
  return await response.json()
}
