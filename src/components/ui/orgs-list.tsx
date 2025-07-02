/* eslint-disable @next/next/no-img-element */
"use client"

export interface OrgnizationData {
    id: number,
    title: string,
    img: string
}

// sample data to test
const orglist = [
    {
        id: 1,
        img: "https://i.pinimg.com/736x/e1/26/ce/e126ceee45bb34d5a60a8833fb3052e4.jpg",
        title: "ThitSa Foundation"
    },
    {
        id: 2,
        img: "https://i.pinimg.com/736x/91/d1/fc/91d1fc6e01972f0ad10636b9d1e1bb39.jpg",
        title: "Trust Aid"
    },
    {
        id: 3,
        img: "https://i.pinimg.com/736x/76/e4/7b/76e47b7dbd61838e700a32da1f2ccf64.jpg",
        title: "Help Flow"
    },
    {
        id: 4,
        img: "https://i.pinimg.com/736x/fb/cb/77/fbcb771f9ec162a245c5ab5fdb8227eb.jpg",
        title: "Myanmar Give"
    },
    {
        id: 5,
        img: "https://i.pinimg.com/736x/7c/89/31/7c8931048941bf7a4422de7592daf98c.jpg",
        title: "Give Link"
    }
    , {
        id: 6,
        img: "https://i.pinimg.com/736x/1e/db/2c/1edb2cdcc1eb8caa19dfa9ecf41cd85b.jpg",
        title: "Orgnization"
    }, {
        id: 7,
        img: "https://i.pinimg.com/736x/7c/89/31/7c8931048941bf7a4422de7592daf98c.jpg",
        title: "Connect Aid"
    }, {
        id: 8,
        img: "https://i.pinimg.com/736x/1e/db/2c/1edb2cdcc1eb8caa19dfa9ecf41cd85b.jpg",
        title: "DanaConnect"
    },
    {
        id: 9,
        img: "https://i.pinimg.com/736x/7c/89/31/7c8931048941bf7a4422de7592daf98c.jpg",
        title: "Kind Chain"
    }
]

export default function OrgnizationLists() {
    return (<div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 flex justify-center p-3 md:p-0 grid-cols-1 my-3 flex justify-between gap-12 ">
            {orglist.map((org) => (
                <OrgCard key={org.id} data={org} />
            ))}
        </div>
    </div>)
}

// org cards
const OrgCard = ({ data }: { data: OrgnizationData }) => {
    return (
        <div className="bg-white text-center flex flex-col ">
            <div className="w-full flex justify-center items-center rounded border hover:rounded-lg transition-all duration-300 hover:my-2 overflow-hidden">
                <img src={data?.img} className="w-full max-w-[400px] max-h-[200px] " alt="fig" />
            </div>
            <div className="text-slate-300 hover:text-black  my-3 transition-all duration-300">{data?.title}</div>
        </div>
    )
}