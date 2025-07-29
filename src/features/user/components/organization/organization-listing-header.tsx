import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import OrganizationSearchBox from "./organization-search-box";

function OrganizationListingHeader() {
  return (
    <div className="pb-8 ">
      <div className="my-6 text-center flex space-y-3 justify-between items-center">
        <h2 className="text-4xl font-extrabold text-primary">Organizations</h2>
        <div className="my-3 flex space-x-2 items-center justify-center w-1/2">
          <OrganizationSearchBox />
          <Select>
            <SelectTrigger className="w-[180px] py-5 border-primary">
              <SelectValue placeholder="Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="non-profit">Non Profit</SelectItem>
                <SelectItem value="ngo">NGO</SelectItem>
                <SelectItem value="charity">Charity</SelectItem>
                <SelectItem value="foundation">Foundation</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      <p className="mt-2 text-neutral-400 max-w-3xl mb-3">
        Browse and manage the list of organizations available on the platform.
        Here you can view details, search, and connect with organizations for
        donations and collaborations.
      </p>
      <Separator />
    </div>
  );
}

export default OrganizationListingHeader;
