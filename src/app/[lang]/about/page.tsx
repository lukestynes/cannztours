import CustomLink from "@/components/CustomLink";
import ReviewStack from "@/components/ReviewStack";
import { type Locale } from "@/i18n.config";
import { getAboutPage } from "@/lib/contentful";
import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About CanNZ Tours | Personalised Guided Tours",
  description:
    "Learn about CanNZ Tours, our mission, and our experienced guides. Discover why we're the best choice for guided tours in New Zealand's South Island.",
};

export default async function AboutUsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const pageData = await getAboutPage(lang);
  const blurb = pageData?.blurb.split("\n\n");

  const tourCards = [
    {
      title: pageData?.personalisedServiceTitle,
      imageSrc: "/icons/personalised.svg",
      description: pageData?.personalisedServiceBlurb,
    },
    {
      title: pageData?.flexibleItinerariesTitle,
      imageSrc: "/icons/route.svg",
      description: pageData?.flexibleItinerariesDescription,
    },
    {
      title: pageData?.localExpertiseTitle,
      imageSrc: "/icons/map.svg",
      description: pageData?.localExpertiseDescription,
    },
    {
      title: pageData?.outstandingReputationTitle,
      imageSrc: "/icons/honour.svg",
      description: pageData?.outstandingReputationDescription,
    },
  ];

  return (
    <div style={{ marginTop: "80px" }} key={1}>
      <div className="flex justify-center bg-secondary text-white">
        <div className="max-w-7xl justify-center px-10 py-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="order-2 my-auto flex flex-col items-center">
              <h1 className="w-full pb-10 text-center text-5xl font-medium md:text-left">
                {pageData?.title}
              </h1>
              {blurb?.map((paragraph: string, index: number) => (
                <p key={index} className="text-lg">
                  {paragraph}
                  <br />
                  <br />
                </p>
              ))}
            </div>
            <div className="order-1 flex justify-center">
              <Image
                className="mb-3 rounded-none shadow-xl"
                src="/images/about/hero.png"
                alt="Sunset photo.png"
                width="1000"
                height="900"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center px-10 py-10">
        <div className="max-w-7xl">
          <div className="gap-20 md:grid md:grid-cols-2">
            <div className="flex items-center pb-10">
              <div className="">
                <h3 className="pb-5 text-3xl font-medium">
                  {pageData?.myMission}
                </h3>
                <p className="text-lg">{pageData?.missionDescription}</p>
              </div>
            </div>
            <div className="justify-right">
              <Image
                className="shadow-xl"
                src="/images/about/framed.png"
                alt="Craig Rome in Christchurch City"
                width="550"
                height="400"
                priority
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center bg-neutral-100 px-10 py-5">
        <div className="max-w-7xl">
          <h2 className="my-10 text-center text-4xl font-medium">
            {pageData?.whyBookWithUs}
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
            {tourCards.map((card, index) => (
              <div
                key={index}
                className="card min-w-60 max-w-72 rounded-none bg-white text-center shadow-md md:w-1/5"
              >
                <figure className="h-40 py-0">
                  <Image
                    src={card.imageSrc}
                    width="75"
                    height="75"
                    alt="Icons"
                  />
                </figure>
                <div className="card-body align-text-top">
                  <p className="card-title justify-center">{card.title}</p>
                  <p>{card.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <CustomLink
              lang={lang}
              href="/tours"
              className="btn btn-primary mr-2 rounded-none text-white"
            >
              {pageData?.viewOurToursButton}
            </CustomLink>
          </div>
        </div>
      </div>
      <div className="hidden w-full justify-center px-20 pb-20 lg:block">
        <div>
          <h2 className="mb-20 mt-10 text-center text-4xl font-medium">
            {pageData?.testimonials}
          </h2>
          <ReviewStack lang={lang} />
          <div className="mt-10 flex justify-center">
            <CustomLink
              lang={lang}
              href="/client-reviews"
              className="btn btn-outline btn-primary mr-2 rounded-none text-white"
            >
              {pageData?.viewMoreReviewsButton}
            </CustomLink>
          </div>
        </div>
      </div>
    </div>
  );
}
