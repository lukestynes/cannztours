"use client";
import CustomLink from "@/components/CustomLink";
import { type Locale } from "@/i18n.config";
import { useParams } from "next/navigation";

const englishData = {
  error: "Error | 404",
  oops: "Oops! That page can't be found!",
  button: "Return Home",
};

const japaneseData = {
  error: "エラー | 404",
  oops: "おっと！そのページは見つかりません。",
  button: "ホームに戻る",
};

export default function NotFoundPage() {
  const { lang }: { lang: Locale } = useParams();
  const pageData = lang === "en-US" ? englishData : japaneseData;

  return (
    <div style={{ marginTop: "80px" }} className="">
      <div className="mx-auto max-w-6xl py-10 text-center">
        <h1 className="mb-4 text-4xl font-medium">{pageData.error}</h1>
        <h2 className="mb-4 text-3xl font-medium">{pageData.oops}</h2>
        <CustomLink
          lang={lang}
          href="/"
          type="button"
          className="btn btn-primary rounded-none text-white"
        >
          {pageData.button}
        </CustomLink>
        <div></div>
      </div>
    </div>
  );
}
