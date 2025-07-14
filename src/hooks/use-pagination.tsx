'use client'

import { useSearchParams, useRouter } from "next/navigation"

function usePagination() {

  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get('page') || 1);

  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', newPage.toString()); 
    router.push(`?${params.toString()}`);
  }


  return { page, setPage }
}

export default usePagination