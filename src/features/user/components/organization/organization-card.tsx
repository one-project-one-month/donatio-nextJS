import { Image } from "lucide-react"
import { Organization } from "../../../../types/Organization"


type OrganizationCardProps = {
  data: Organization
}

function OrganizationCard({ data }: OrganizationCardProps) {
  return (
    <div className="bg-white text-center cursor-default transition-all flex flex-col relative group">
            <div style={{borderColor: "#eeeeee"}} className="w-full border h-[240px] flex justify-center items-center shadow-sm rounded-2xl overflow-hidden">
                {data?.attachments[0] ? (
                    <img className="w-full h-full object-cover" src={data.attachments[0]} alt={data.name} />
                ) : (<Image className="w-16 h-16 text-gray-400" />)}
            </div>
            <div className="text-start pl-3 text-lg font-semibold  my-3 transition-all duration-300">{data?.name}</div>
    </div>
  )
}

export default OrganizationCard