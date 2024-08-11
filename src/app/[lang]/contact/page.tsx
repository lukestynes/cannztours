import ContactForm from "@/components/ContactForm";
import { type Locale } from "@/i18n.config";
import { getContactPage, getTourOrdering } from "@/lib/contentful";
import { type Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export const metadata: Metadata = {
  title: "Contact CanNZ Tours | Book Your Guided Tour Today",
  description:
    "Get in touch with CanNZ Tours to book your personalized guided tour in New Zealand's South Island. Contact us for inquiries and reservations.",
};

export default async function ContactUsPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const data = await getContactPage(lang);
  const tourOrdering = await getTourOrdering();

  if (!data || !tourOrdering) {
    return notFound();
  }

  const parseFAQs = (faqString: string) => {
    const faqSections = faqString.split("\n\n");
    const faqs = faqSections.map((section) => {
      const [title, ...descriptionParts] = section.split("\n");
      const description = descriptionParts.join(" ");
      return {
        title: title?.replace(/^# /, ""), // Remove the '# ' from the title
        description,
      };
    });
    return faqs;
  };

  const faqs = parseFAQs(data.faQs);

  return (
    <div style={{ marginTop: "80px" }} key={1} className="pb-10">
      <div className="flex justify-center bg-secondary text-white">
        <div className="max-w-7xl justify-center px-10 py-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="my-auto flex flex-col items-center">
              <h1 className="w-full pb-10 text-center text-5xl font-medium md:text-left">
                {data?.title}
              </h1>
              <p className="text-center text-lg md:text-left">{data?.blurb}</p>
            </div>
            <div className="pt-10 text-center md:pl-20 md:text-left">
              <div className="pb-5">
                <p className="inline-flex text-lg font-bold">
                  <Image
                    src="/icons/email.svg"
                    className="mr-3"
                    width={25}
                    height={25}
                    alt=""
                  />
                  {data?.emailLabel}
                </p>
                <a href={`mailto:${data?.emailAddress}`}>
                  <p className="underline">{data?.emailAddress}</p>
                </a>
              </div>
              <div className="pb-5">
                <p className="inline-flex text-lg font-bold">
                  <Image
                    src="/icons/phone.svg"
                    className="mr-3"
                    width={25}
                    height={25}
                    alt=""
                  />
                  {data?.phoneLabel}
                </p>
                <a href={`tel:${data?.phoneNumber}`}>
                  <p className="underline">{data?.phoneNumber}</p>
                </a>
              </div>
              <div>
                <p className="inline-flex text-lg font-bold">
                  <Image
                    src="/icons/location.svg"
                    className="mr-3"
                    width={25}
                    height={25}
                    alt=""
                  />
                  {data?.locationLabel}
                </p>
                <a href="https://maps.app.goo.gl/c2xbnDbJ18wWJeKL9">
                  <p className="underline">{data?.location}</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="BOOK" className="px-10 py-10">
        <ContactForm lang={lang} tourOrdering={tourOrdering} />
      </div>
      <div id="FAQs" className="mx-auto max-w-5xl py-20">
        <h2 className="pb-5 text-center text-4xl font-medium">
          {data?.faqsTitle}
        </h2>
        <p className="pb-5 text-center text-lg">{data?.faqsBlurb}</p>
        <div className="join join-vertical w-full rounded-none">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="collapse join-item collapse-arrow border-b border-t border-base-300"
            >
              <input
                type="radio"
                name="my-accordion-4"
                defaultChecked={index === 0}
              />
              <div className="collapse-title text-xl font-medium">
                {faq.title}
              </div>
              <div className="collapse-content">
                <p>{faq.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
