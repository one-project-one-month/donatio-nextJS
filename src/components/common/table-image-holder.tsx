import { ImageDown } from "lucide-react";
import Image from "next/image";




type TableImageHolderProps = {
    data: {
    id: string;
    file: string;
  }[] | null
}

function TableImageHolder({ data }: TableImageHolderProps) {
  return (
    <div className="relative">
        {
          data && data.length !== 0 ? <img src={data[0].file} alt={data[0].file} className="w-28 h-20 object-cover" /> : 
          (
            <>
            <ImageDown className="text-gray-300" />
            <p className="text-gray-300">No Images</p>
            </>
          )
          
        } 
        { data && data.length > 1 && (
          <span className="absolute top-0 left-0 bg-gray-500/40 z-10 text-white w-28 h-20 flex items-center justify-center text-sm">
            +{data.length - 1}
          </span>
        )}
    </div>
  )
}

export default TableImageHolder