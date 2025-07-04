import { Input } from "@/components/ui/input";

import { Search } from "lucide-react";

function SearchBox() {

  return (
    <div className="md:w-1/2 w-full mx-8">
      <h1 className="font-bold text-primary mb-4 text-lg md:text-3xl  lg:text-4xl text-center">
        Support the Community
      </h1>
      <div className="relative w-full">
        <Input
        className="rounded-full pl-12 pr-4 md:py-8 h-12 shadow-md bg-white border border-primary text-base focus:ring-2 focus:ring-dodger-blue-50"
        type="text"
        placeholder="Search for events"
      />
      <Search
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-500"
        size={20}
      />
      </div>
    </div>
  );
}

export default SearchBox;
