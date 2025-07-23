'use client';

import { useSearchParams, useRouter } from 'next/navigation';

function usePagination(key: string = 'page') {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get(key) || 1);

  const setPage = (newPage: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, newPage.toString());
    router.push(`?${params.toString()}`);
  };

  return { page, setPage };
}

export default usePagination;
