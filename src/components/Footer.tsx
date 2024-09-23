// import Link from "next/link";
import { type Locale } from "@/i18n.config";
import Image from "next/image";
import Link from "next/link";
import CustomLink from "./CustomLink";

const footerEnglish = {
  aboutTitle: "About Us",
  about: "About",
  contact: "Contact",
  faqs: "FAQs",
  servicesTitle: "Services",
  tours: "Tours",
  homestay: "Homestay",
  reviews: "Reviews",
  bookNow: "Book Now",
  customerSupportTitle: "Customer Support",
  paymentOptions: "Payment Options",
  cancellationPolicy: "Cancellation Policy",
  refundPolicy: "Refund Policy",
  tos: "Terms of Service",
  privacyPolicy: "Privacy Policy",
  connectTitle: "Connect With Us",
  myBit: "Website design and development by ",
};

const footerJapanese = {
  aboutTitle: "私たちについて",
  about: "会社概要",
  contact: "お問い合わせ",
  faqs: "よくある質問",
  servicesTitle: "サービス",
  tours: "ツアー",
  homestay: "ホームステイ",
  reviews: "レビュー",
  bookNow: "今すぐ予約",
  customerSupportTitle: "カスタマーサポート",
  paymentOptions: "支払い方法",
  cancellationPolicy: "キャンセルポリシー",
  refundPolicy: "返金ポリシー",
  tos: "利用規約",
  privacyPolicy: "プライバシーポリシー",
  connectTitle: "私たちとつながる",
  myBit: "ウェブサイトのデザインと開発：",
};

export default function Footer({ lang }: { lang: Locale }) {
  const pageData = lang === "en-US" ? footerEnglish : footerJapanese;

  return (
    <footer className="bg-neutral py-10 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="border-b border-t border-white py-10">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="mb-4 text-lg font-semibold">
                {pageData.aboutTitle}
              </p>
              <ul>
                <li>
                  <CustomLink lang={lang} href="/about" className="link-hover">
                    {pageData.about}
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    lang={lang}
                    href="/contact"
                    className="link-hover"
                  >
                    {pageData.contact}
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    lang={lang}
                    href="/contact#FAQs"
                    className="link-hover"
                  >
                    {pageData.faqs}
                  </CustomLink>
                </li>
                <li>
                  <CustomLink lang={lang} href="/cancellation-policy">
                    {pageData.cancellationPolicy}
                  </CustomLink>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-4 text-lg font-semibold">
                {pageData.servicesTitle}
              </p>
              <ul>
                <li>
                  <CustomLink lang={lang} href="/tours" className="link-hover">
                    {pageData.tours}
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    lang={lang}
                    href="/homestay"
                    className="link-hover"
                  >
                    {pageData.homestay}
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    lang={lang}
                    href="/client-reviews"
                    className="link-hover"
                  >
                    {pageData.reviews}
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    lang={lang}
                    href="/contact#BOOK"
                    className="link-hover"
                  >
                    {pageData.bookNow}
                  </CustomLink>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="mb-4 text-lg font-semibold">
                {pageData.connectTitle}
              </p>
              <ul>
                <li>
                  <Link
                    href="https://www.tripadvisor.co.nz/Attraction_Review-g255118-d1600394-Reviews-CanNZ_Tours-Christchurch_Canterbury_Region_South_Island.html"
                    target="_blank"
                    rel="noopened noreferer"
                    className="link-hover flex"
                  >
                    <Image
                      src="/icons/tripadvisor.svg"
                      className="mr-2"
                      alt=""
                      width="20"
                      height="20"
                    />
                    TripAdvisor
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.facebook.com/CanNZTours/"
                    target="_blank"
                    rel="noopened noreferer"
                    className="link-hover flex"
                  >
                    <Image
                      src="/icons/facebook.svg"
                      className="mr-2"
                      alt=""
                      width="20"
                      height="20"
                    />
                    Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/cannz_tours/n"
                    target="_blank"
                    rel="noopened noreferer"
                    className="link-hover flex"
                  >
                    <Image
                      src="/icons/instagram.svg"
                      className="mr-2"
                      alt=""
                      width="20"
                      height="20"
                    />
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://maps.app.goo.gl/cjFdsjiWR7xu9N9C9"
                    target="_blank"
                    rel="noopened noreferer"
                    className="link-hover flex"
                  >
                    <Image
                      src="/icons/google.svg"
                      className="mr-2"
                      alt=""
                      width="20"
                      height="20"
                    />
                    Google
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 flex items-center justify-between">
          <div>
            <Image src="/images/logo.svg" alt="logo" width="150" height="150" />
          </div>
          <div className="text-right">
            <p>&copy; CanNZ Tours {new Date().getFullYear()}</p>
            <p>
              {pageData.myBit}
              <Link
                className="link-hover"
                href="https://www.sloatelier.com/"
                target="_blank"
              >
                Slo Atelier
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
