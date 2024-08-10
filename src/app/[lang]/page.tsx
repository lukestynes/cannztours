import ReviewStack from "@/components/ReviewStack";
import Image from "next/image";
import { type Metadata } from "next";
import { type Locale } from "@/i18n.config";
import { getHomePage } from "@/lib/contentful";
import React from "react";
import CustomLink from "@/components/CustomLink";

export const metadata: Metadata = {
  title:
    "CanNZ Tours | Personalised Guided Tours in New Zealand's South Island",
  description:
    "Explore the beauty of New Zealand's South Island with CanNZ Tours. Offering personalised tours in both English and Japanese, I cater to your desires with experiences from vibrant city life to breathtaking natural wonders. Book your unforgettable journey today!",
};

export default async function HomePage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const homePageData = await getHomePage(lang);

  const tourCards = [
    {
      title: homePageData?.fullDayToursCardTitle,
      imageSrc: "/images/home/full-day.jpg",
      description: homePageData?.fullDayToursDescription,
      link: "/tours/#full-day",
    },
    {
      title: homePageData?.halfDayToursCardTitle,
      imageSrc: "/images/home/half-day.jpg",
      description: homePageData?.halfDayToursCardDescription,
      link: "/tours/#half-day",
    },
    {
      title: homePageData?.customToursCardTitle,
      imageSrc: "/images/tours/custom-tour.png",
      description: homePageData?.customToursCardDescription,
      link: "/tours/#custom",
    },
  ];

  const confidenceCards = [
    {
      title: homePageData?.experienceCardTitle,
      description: homePageData?.experienceCardDescription,
      image: "/icons/honour.svg",
    },
    {
      title: homePageData?.bilingualCardTitle,
      description: homePageData?.bilingualCardDescription,
      image: "/icons/dual-language.svg",
    },
    {
      title: homePageData?.localKnowledgeCard,
      description: homePageData?.localKnowledgeDescription,
      image: "/icons/route.svg",
    },
    {
      title: homePageData?.customToursCardTitle,
      description: homePageData?.customToursCardDescription,
      image: "/icons/custom.svg",
    },
  ];

  return (
    <main>
      {/* Hero Section min-h-[calc(100vh-80px)]*/}
      <div className="hero flex min-h-screen flex-row items-center justify-center px-7 md:px-20 md:py-10">
        <div className="hero">
          <div className="max-w-7xl grid-rows-2">
            <div className="py-5 md:columns-2 md:gap-10">
              <div className="pt-5">
                <h1 className="mt-3 text-4xl font-medium md:text-6xl">
                  {homePageData?.title.split("<br />").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index <
                        homePageData?.title.split("<br />").length - 1 && (
                        <br />
                      )}
                    </React.Fragment>
                  ))}
                </h1>
              </div>
              <div className="pt-8">
                <p className="pb-5 pt-3 text-lg md:pb-0 md:text-xl">
                  {homePageData?.subheading}
                </p>
                <div className="hidden justify-center pt-5 md:flex md:justify-start">
                  <CustomLink
                    lang={lang}
                    href="/contact"
                    className="btn btn-primary mr-2 rounded-none text-white"
                  >
                    {homePageData?.bookATourButton}
                  </CustomLink>
                  <CustomLink
                    lang={lang}
                    href="/about"
                    type="button"
                    className="btn-dark btn btn-outline rounded-none"
                  >
                    {homePageData?.learnMoreButton}
                  </CustomLink>
                </div>
              </div>
            </div>
            <div className="md:pt-0">
              <Image
                className="rounded-none"
                src="/images/home/hero.png"
                alt="New Zealand mountain range"
                width="1400"
                height="800"
                priority
              />
              <div className="flex justify-center pt-5 md:hidden">
                <CustomLink
                  lang={lang}
                  href="/contact"
                  className="btn btn-primary mr-2 rounded-none text-white"
                >
                  {homePageData?.bookATourButton}
                </CustomLink>
                <CustomLink
                  lang={lang}
                  href="/about"
                  type="button"
                  className="btn-dark btn btn-outline rounded-none"
                >
                  {homePageData?.learnMoreButton}
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Your Personal Tour Guide */}
      <div className="hero bg-neutral px-7 py-10 text-white">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            className="shadow-lg"
            src="/images/home/craig-mt-cook.png"
            alt="Craig Rome"
            width="500"
            height="500"
          />
          <div className="pt-10">
            <h1 className="text-4xl font-medium  md:text-5xl">
              {homePageData?.subHeroTitle}
            </h1>
            <div className="">
              <p className="py-6 pb-0">{homePageData?.subHeroDescription}</p>
            </div>
            <div className="flex justify-center pt-10 md:justify-center">
              <CustomLink
                lang={lang}
                href="/about"
                className="btn  btn-outline rounded-none text-white"
              >
                {homePageData?.learnMoreButton}
              </CustomLink>
            </div>
          </div>
        </div>
      </div>
      {/* Triple Tour Card */}
      <div className="px-7 py-10">
        <h3 className="mb-10 text-center text-4xl font-medium  md:text-5xl">
          {homePageData?.toursTitle}
        </h3>
        <div className="flex flex-wrap justify-center gap-12 md:flex-row">
          {tourCards.map((card) => (
            <div
              key={card.title}
              className="hover-card card w-96 rounded-none bg-white text-center shadow-md"
            >
              <CustomLink lang={lang} href={card.link}>
                <figure>
                  <Image
                    className="rounded-none"
                    src={card.imageSrc}
                    width="450"
                    height="300"
                    alt="Tour photo"
                  />
                </figure>
                <div className="card-body">
                  <p className="link-hover card-title justify-center">
                    {card.title}
                  </p>
                  <p>{card.description}</p>
                </div>
              </CustomLink>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <CustomLink
            lang={lang}
            href="/tours"
            className="btn btn-primary rounded-none text-white"
          >
            View Tours
          </CustomLink>
        </div>
      </div>
      {/* Why Choose Us Cards */}
      <div className="py-10">
        <h3 className="mb-10 text-center text-4xl font-medium md:text-5xl">
          {homePageData?.whyChooseMeTitle}
        </h3>
        <div className="flex flex-wrap justify-center gap-10 py-10">
          {confidenceCards.slice(0, 2).map((card) => (
            <div
              className="card mx-5 w-96 bg-neutral-100 text-center shadow"
              key={card.title}
            >
              <figure className="card-body">
                <Image
                  src={card.image}
                  width="100"
                  height="100"
                  alt="Tour photo"
                />
              </figure>
              <div className="card-body">
                <p className="card-title justify-center pt-1 text-2xl">
                  {card.title}
                </p>
                <p className="pt-3">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-10">
          {confidenceCards.slice(2, 4).map((card) => (
            <div
              className="card mx-5 w-96 bg-neutral-50 text-center shadow"
              key={card.title}
            >
              <figure className="card-body">
                <Image
                  src={card.image}
                  width="100"
                  height="100"
                  alt="Tour photo"
                />
              </figure>
              <div className="card-body">
                <p className="card-title justify-center pt-1 text-2xl">
                  {card.title}
                </p>
                <p className="pt-3">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden py-10 xl:block">
        <h2 className="mb-20 text-center text-5xl font-medium">
          {homePageData?.testimonialTitle}
        </h2>
        <ReviewStack lang={lang} />
        <div className="flex justify-center">
          <CustomLink
            lang={lang}
            href="/client-reviews"
            className="justify-left btn btn-primary mt-2 rounded-none text-white"
          >
            {homePageData?.testimonialButton}
          </CustomLink>
        </div>
      </div>
    </main>
  );
}
