import { Separator } from "@/components/ui/separator";
import OrganizationSearchBox from "./organization-search-box";

type OrganizationListingHeaderProps = {
  searchValue: string;
  onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function OrganizationListingHeader({
  searchValue,
  onSearchChange,
}: OrganizationListingHeaderProps) {
  return (
    <div className="pb-8">
      <div className="my-6 flex flex-col md:flex-row md:justify-between md:items-center gap-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-primary text-left">
          Organizations
        </h2>
        <OrganizationSearchBox value={searchValue} onChange={onSearchChange} />
      </div>

      <p className="text-sm md:text-lg mt-2 text-neutral-400 max-w-2xl mb-3">
        Browse and manage the list of organizations available on the platform.
        Here you can view details, search, and connect with organizations for
        donations and collaborations.
      </p>
      <Separator />
    </div>
  );
}

export default OrganizationListingHeader;
