import CustomLink from "@/components/CustomLink";
import { type Locale } from "@/i18n.config";
import { getClientReviewPage } from "@/lib/contentful";
import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Customer Reviews | CanNZ Tours",
  description:
    "Read customer reviews and testimonials about their experiences with CanNZ Tours. See why we're the top choice for guided tours in New Zealand.",
};

export default async function ReviewsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const pageData = await getClientReviewPage(lang);

  if (!pageData) {
    return notFound();
  }

  const parseReviews = (reviewString: string) => {
    const reviews = reviewString.split("\n\n").map((section) => {
      const [nameLine, designationLine, ...descriptionLines] =
        section.split("\n");
      return {
        name: nameLine?.replace(/^# /, ""),
        designation: designationLine?.replace(/^## /, ""),
        description: descriptionLines.join(" "),
      };
    });
    return reviews;
  };

  const otherReviews = parseReviews(pageData.otherReviews);
  const headlineReview = parseReviews(pageData.headlineReview);

  return (
    <div style={{ marginTop: "80px" }} className="min-h-[calc(100vh-80px)]">
      <div className="flex justify-center bg-secondary px-10 py-10 text-white">
        <div className="grid max-w-7xl gap-10 md:grid-cols-2">
          <div className="my-auto flex flex-col">
            <Image
              className="card-title my-5"
              src="/icons/stars-white.svg"
              width="116"
              height="31"
              alt="rating stars"
            />
            <h1 className="w-full text-left text-5xl font-medium md:pb-10">
              {pageData?.title}
            </h1>
            <div className="hidden md:block">
              <p className="text-left text-lg">{pageData.blurb}</p>
              <div className="pt-5">
                <CustomLink
                  lang={lang}
                  href="/tours"
                  className="btn mt-3 rounded-none bg-white text-black"
                >
                  {pageData.viewOurToursButton}
                </CustomLink>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              className="shadow-xl"
              src="/images/reviews/hero.png"
              alt="Sunset photo"
              width="1000"
              height="600"
            />

            <div className="block pt-10 md:hidden">
              <p className="text-left text-lg">{pageData.blurb}</p>
              <div className="flex justify-center pt-5">
                <CustomLink
                  lang={lang}
                  href="/tours"
                  className="btn mt-3 rounded-none bg-white text-black"
                >
                  {pageData.viewOurToursButton}
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="custom" className="flex justify-center  px-10 py-10">
        <div className="max-w-4xl rounded-xl bg-neutral-100 p-5">
          <Image
            className="card-title pb-5"
            src="/icons/stars.svg"
            width="116"
            height="31"
            alt="rating stars"
          />
          <p>{headlineReview[0]?.description}</p>
          <p className="pt-5 text-xl font-bold">{headlineReview[0]?.name}</p>
          <p className="font-bold">{headlineReview[0]?.designation}</p>
          <div className="mt-5 flex justify-center">
            <CustomLink
              lang={lang}
              href="/contact#BOOK"
              className="btn btn-primary mr-2 rounded-none text-white"
            >
              {pageData.bookNowButton}
            </CustomLink>
          </div>
        </div>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 p-10">
        <h2 className="text-medium col-span-2 text-4xl">
          {pageData.moreReviewsTitle}
        </h2>
        {otherReviews.map((review, index) => (
          <div key={index} className="col-span-2 md:col-span-1">
            <div>
              <div className="flex flex-col rounded-lg bg-white p-5 shadow-lg">
                <Image
                  className="card-title my-5"
                  src="/icons/stars.svg"
                  width="116"
                  height="31"
                  alt="rating stars"
                />
                <p className="mt-2 text-gray-700">{review.description}</p>
                <p className="mt-4 text-xl font-semibold">{review.name}</p>
                <p className="text-md italic">{review.designation}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
