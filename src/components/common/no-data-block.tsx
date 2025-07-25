import { Calendar } from 'lucide-react'


type NodataBlockProps = {
    value: string;
}

function NodataBlock({ value }: NodataBlockProps) {
  return (
    <div className="h-dvh flex justify-center items-center animate-fade-in bg-neutral-50 dark:bg-neutral-900">
          <div className=" flex text-neutral-500 flex-col items-center justify-center">
            <Calendar size={40} />
            <p className="text-lg">No {value} found</p>
          </div>
        </div>
  )
}

export default NodataBlock