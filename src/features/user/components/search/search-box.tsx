"use client"
import { Input } from "@/components/ui/input";
import { ChevronDown, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
function SearchBox() {

  return (
    <div className="md:w-1/2 w-full mx-8 flex items-center ">
      {/* text-input */}
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

      {/* dropdown : filtering */}
      <div className="ms-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-white md:py-8  rounded-full hover:bg-slate-300 h-12 text-black border-primary border text-base  focus:ring-2 focus:ring-dodger-blue-50   w-30 pe-3">All <ChevronDown className={"size-4"} /> </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuItem>Option 1</DropdownMenuItem>
            <DropdownMenuItem>Option 2</DropdownMenuItem>
            <DropdownMenuItem>Option 3</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Clear</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}

export default SearchBox;
