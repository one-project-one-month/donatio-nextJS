'use client'

import { useSearchParams } from "next/navigation"

function usePagination() {

  const searchParams = useSearchParams();

  const page = Number(searchParams.get('page') || 1);


  return { page }
}

export default usePagination