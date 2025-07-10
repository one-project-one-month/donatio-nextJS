

type OrganizationCardProps = {
  id: number;
  title: string;
  img: string;
}

function OrganizationCard({ data }: { data: OrganizationCardProps }) {
  return (
    <div className="bg-white text-center cursor-default transition-all flex flex-col relative group">
            <div style={{borderColor: "#eeeeee"}} className="w-full border h-[240px] flex justify-center items-center shadow-sm rounded-2xl overflow-hidden">
                <img src={data?.img} className="w-full max-w-[100px] max-h-[100px] object-contain" alt="fig" />
            </div>
            <div className="text-start pl-3 text-lg font-semibold  my-3 transition-all duration-300">{data?.title}</div>
    </div>
  )
}

export default OrganizationCard