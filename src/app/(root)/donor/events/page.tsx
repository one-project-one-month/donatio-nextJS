'use client'

import EventListing from '@/features/user/components/event/event-listing'
import EventListingHeader from '@/features/user/components/event/event-listing-header'
import EventListingSkeleton from '@/features/user/components/event/event-listing-skeleton'
import { useGetEvents } from '@/features/user/hooks/donor-event-queries'
import usePagination from '@/hooks/use-pagination'
import { showToast } from '@/lib/toast'
import React, { useEffect } from 'react'

function page() {

  const { page } = usePagination();
  const { data: events, isLoading, isError } = useGetEvents(page, 6);

  useEffect(() => {

    if(isError) {
      showToast.error("Error getting events");
    }

  },[isError]);


  return (
    <div className="max-w-7xl md:mx-auto md:px-5 py-5">
        <EventListingHeader />
        { isLoading ? <EventListingSkeleton /> : <EventListing data={events} page={page} />}
    </div>
  )
}

export default page