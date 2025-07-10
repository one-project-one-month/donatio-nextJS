import EventListing from '@/features/user/components/event/event-listing'
import EventListingHeader from '@/features/user/components/event/event-listing-header'
import React from 'react'

function page() {
  return (
    <div className="max-w-7xl md:mx-auto px-5 md:px-12 py-5">
        <EventListingHeader />
        <EventListing />
    </div>
  )
}

export default page