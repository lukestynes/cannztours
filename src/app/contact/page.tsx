import ContactForm from "@/components/ContactForm";
import { type Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Contact CanNZ Tours | Book Your Guided Tour Today",
  description:
    "Get in touch with CanNZ Tours to book your personalized guided tour in New Zealand's South Island. Contact us for inquiries and reservations.",
};

export default function ContactUsPage() {
  return (
    <div style={{ marginTop: "80px" }} key={1} className="pb-10">
      <div className="flex justify-center bg-secondary text-white">
        <div className="max-w-7xl justify-center px-10 py-10">
          <div className="grid gap-10 md:grid-cols-2">
            <div className="my-auto flex flex-col items-center">
              <h1 className="w-full pb-10 text-center text-5xl font-medium md:text-left">
                Get in Touch
              </h1>

              <p className="text-center text-lg md:text-left">
                If you have any questions or would like to book a tour, please
                don&apos;t hesitate to reach out. I am here to assist you.
              </p>
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
                  Email
                </p>
                <a href="mailto:info@cannztours.com">
                  <p className="underline">info@cannztours.com</p>
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
                  Phone
                </p>
                <a href="tel:+64211811570">
                  <p className="underline">+64 21 1811 570</p>
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
                  Location
                </p>
                <a href="https://maps.app.goo.gl/c2xbnDbJ18wWJeKL9">
                  <p className="underline">
                    60 Windermere Road, Papanui, Christchurch
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="BOOK" className="px-10 py-10">
        <ContactForm />
      </div>
      <div id="FAQs" className="mx-auto max-w-5xl py-20">
        <h2 className="pb-5 text-center text-4xl font-medium">
          Frequently Asked Questions
        </h2>
        <p className="pb-5 text-center text-lg">
          Some answers to common questions about our tours.
        </p>
        <div className="join join-vertical w-full rounded-none">
          <div className="collapse join-item collapse-arrow border-b border-t border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What types of tours do you offer?
            </div>
            <div className="collapse-content">
              <p>
                At CanNZ Tours, we offer a variety of tours to suit your
                interests and schedule. Our offerings include full-day tours,
                half-day tours, and multi-day adventures. You can explore the
                vibrant city life of Christchurch, marvel at the majestic
                Southern Alps, experience the beauty of Aoraki Mount Cook, go
                whale watching in Kaikoura, or enjoy a relaxing Waipara winery
                tour. We also provide custom tours tailored to your specific
                preferences and needs.
              </p>
            </div>
          </div>
          <div className="collapse join-item collapse-arrow border-b border-t border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Are the tours available in multiple languages?
            </div>
            <div className="collapse-content">
              <p>
                Yes, all our tours are available in both English and Japanese.
                With over 25 years of experience and fluency in both languages,
                we ensure a personalized and immersive experience for all our
                guests. Whether you prefer English or Japanese, you can enjoy
                the same high-quality service and in-depth knowledge of New
                Zealand&apos;s South Island.
              </p>
            </div>
          </div>
          <div className="collapse join-item collapse-arrow border-b border-t border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              How do I book a tour or make an inquiry?
            </div>
            <div className="collapse-content">
              <p>
                Booking a tour or making an inquiry is simple and convenient.
                You can contact us directly through our website&apos;s contact
                form, where you can specify the type of tour you are interested
                in, your preferred dates, and any special requests.
                Alternatively, you can email us or call us using the contact
                details provided on our website. We are here to assist you with
                any questions and to help you plan an unforgettable adventure in
                New Zealand&apos;s South Island.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
