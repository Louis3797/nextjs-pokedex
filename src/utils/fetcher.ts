const fetcher = async (url: string) =>
  await fetch(url, { cache: 'force-cache' }).then((response) => response.json())

export default fetcher
