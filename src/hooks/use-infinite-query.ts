import { fetcher } from '@/utils'
import { useCallback } from 'react'
import useSWRInfinite from 'swr/infinite'

const LIMIT: number = 15

const getKey = (pageIndex: any, previousPageData: any) => {
  // reached the end
  if (previousPageData && !previousPageData.next) return null

  // first page, we don't have `previousPageData`
  if (pageIndex === 0)
    return `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${LIMIT}`

  // add the cursor to the API endpoint
  return previousPageData.next
}

const useInfiniteQuery = () => {
  const { data, error, size, setSize } = useSWRInfinite(getKey, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  })

  const pokemons = data ? [].concat(...data) : []
  const isLoadingInitialData = !data && !error
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === 'undefined')
  const isEmpty = data?.[0]?.length === 0
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < LIMIT)

  const next = useCallback(() => setSize((size) => size + 1), [])

  return {
    data: pokemons,
    isLoadingMore,
    isReachingEnd,
    next,
  }
}

export default useInfiniteQuery
