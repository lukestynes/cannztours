import { type Locale } from "@/i18n.config";
import { getCancellationPolicyPage } from "@/lib/contentful";

export default async function CancellationPolicyPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const pageData = await getCancellationPolicyPage(lang);
  const sections = pageData?.policy
    .split("###")
    .filter((section) => section.trim() !== "");

  return (
    <div style={{ marginTop: "80px" }} className="">
      <div className="mx-auto max-w-6xl py-10">
        <h1 className="mb-4 text-4xl font-medium">Cancellation Policy</h1>
        <div>
          {sections?.map((section, index) => {
            // Split each section into the title and the paragraph
            const [title, ...paragraph] = section.trim().split("\n");
            return (
              <div key={index}>
                <h2 className="text-xl font-medium">{title?.trim()}</h2>
                <p className="pb-3">{paragraph.join(" ").trim()}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
