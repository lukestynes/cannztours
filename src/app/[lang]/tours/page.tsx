import CustomLink from "@/components/CustomLink";
import TourCards from "@/components/TourCards";
import { type Locale } from "@/i18n.config";
import { getTourCards, getTourOrdering, getTourPage } from "@/lib/contentful";
import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title:
    "Personalised Guided Tours in New Zealand's South Island | CanNZ Tours",
  description:
    "Discover a variety of guided tours across New Zealand's South Island with CanNZ Tours. Experience the best attractions and hidden gems. Custom tours are available on request.",
};

export default async function ToursPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const tourCards = await getTourCards(lang);
  const tourOrder = await getTourOrdering();
  const tourPageData = await getTourPage(lang);

  if (!tourCards || !tourOrder) {
    return notFound();
  }

  return (
    <div className="min-h-screen">
      <div className="flex justify-center bg-secondary px-10 py-10 text-white md:min-h-0">
        <div
          className="grid max-w-7xl gap-10 py-5 md:grid-cols-2"
          style={{ marginTop: "80px" }}
        >
          <div className="my-auto flex flex-col">
            <h1 className="w-full text-left text-5xl font-medium md:pb-10">
              {tourPageData?.title}
            </h1>
            <div className="hidden md:block">
              <p className="text-lg">{tourPageData?.blurb}</p>
              <div className="mt-5">
                <CustomLink
                  lang={lang}
                  href="/contact?enquiryType=Book a Tour#BOOK"
                  className="btn mr-2 rounded-none bg-white text-black"
                >
                  {tourPageData?.bookTourButton}
                </CustomLink>
              </div>
            </div>
          </div>
          <div className="">
            <Image
              className="shadow-xl"
              src={tourPageData?.heroImage.url || ""}
              alt="Sunset photo"
              width="1000"
              height="600"
              priority
            />
            <div className="block pt-10 md:hidden">
              <p className="text-lg">{tourPageData?.blurb}</p>
              <div className="mt-10 flex justify-center">
                <CustomLink
                  lang={lang}
                  href="/contact?enquiryType=Book a Tour#BOOK"
                  className="btn mr-2 rounded-none bg-white text-black"
                >
                  {tourPageData?.bookTourButton}
                </CustomLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="custom" className="flex justify-center  px-10 py-10">
        <div className="max-w-7xl rounded-xl bg-neutral-100 p-5">
          <h2 className="mb-5  text-center text-4xl font-medium">
            {tourPageData?.customTours}
          </h2>
          <p className="text-lg">{tourPageData?.customToursDescription}</p>
          <div className="mt-5 flex justify-center">
            <CustomLink
              lang={lang}
              href="/contact?enquiryType=Book a Custom Tour#BOOK"
              className="btn btn-primary mr-2 rounded-none text-white"
            >
              {tourPageData?.bookACustomTourButton}
            </CustomLink>
          </div>
        </div>
      </div>
      <div id="full-day" className="pt-10">
        <h2 className="text-center text-4xl font-medium">
          {tourPageData?.tourOptions}
        </h2>
        <TourCards lang={lang} tourCards={tourCards} tourOrder={tourOrder} />
      </div>
    </div>
  );
}
