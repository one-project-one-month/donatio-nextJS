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


type OrganizationListingHeaderProps = {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function OrganizationListingHeader({ searchValue, onSearchChange }: OrganizationListingHeaderProps) {
  return (
    <div className="pb-8 ">
      <div className="my-6 text-center flex space-y-3 justify-between items-center">
        <h2 className="text-4xl font-extrabold text-primary">Organizations</h2>
          <OrganizationSearchBox value={searchValue} onChange={onSearchChange} />
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
