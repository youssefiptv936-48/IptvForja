import { Organization } from "../schemas/organization/organization";

export const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    Organization,
   
  ],
};

export default function HomeSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(homeSchema).replace(/</g, "\\u003c"),
      }}
    />
  );
}