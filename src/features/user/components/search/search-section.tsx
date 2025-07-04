
import Image from 'next/image';
// import SearchBox from './search-box';

import searchSectionBackground from '@/assets/image/search_section_background.png';


function SearchSection() {


    return (
        <section
            className="md:h-[20rem] lg:h-[24rem] h-[15rem]  flex justify-center items-center w-full relative border border-neutral-200 md:rounded-2xl bg-dodget-blue-25  my-12"
        >
            <Image
                src={searchSectionBackground}
                alt="Search section background"
                layout='fill'
                objectFit='contain'
                objectPosition='center bottom'
            />
            {/* topics */}
            <h1 className="font-bold text-primary mb-4 text-lg md:text-3xl  lg:text-4xl text-center">
                Support the Community
            </h1>
            {/* <SearchBox /> */}
        </section>
    )
}

export default SearchSection;