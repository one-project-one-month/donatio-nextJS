import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'


type ActivitySearchBoxProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};


function ActivitySearchBox({ value, onChange}: ActivitySearchBoxProps) {
  return (
    <div className='w-full md:w-1/3'>
        <div className="relative w-full">
        <Input
        className="rounded-lg pl-12 pr-4 py-5 shadow-md bg-white border border-primary text-base focus:ring-2 focus:ring-dodger-blue-50"
        type="text"
        placeholder="Search for activities"
        value={value}
        onChange={onChange}
      />
      <Search
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500"
        size={20}
      />
      </div>
    </div>
  )
}

export default ActivitySearchBox