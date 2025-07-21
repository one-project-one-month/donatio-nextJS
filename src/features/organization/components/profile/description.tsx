import { OrganizationProfile } from "@/types/Organization";

interface DescriptionProps {
  data: Pick<OrganizationProfile, "description">;
}

const Description = ({ data }: DescriptionProps) => {
  const descriptionParagraphs = data.description
    ?.split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);

  return (
    <section aria-labelledby="description-heading" className="space-y-6">
      <h2 id="description-heading" className="text-2xl font-semibold">
        Description
      </h2>
      <div className="text-muted-foreground space-y-4 text-xl">
        {descriptionParagraphs}
      </div>
    </section>
  );
};

export default Description;
