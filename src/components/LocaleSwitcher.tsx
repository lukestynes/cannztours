"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "@/i18n.config";
import Image from "next/image";

export default function LocaleSwitcher() {
  const pathName = usePathname();

  const showEnglishFlag = pathName.startsWith("/jp");

  const redirectedPathName = (locale: string) => {
    if (!pathName) return "/";

    const pathnameIsMissingLocale = i18n.locales.every(
      (locale) =>
        !pathName.startsWith(`/${locale}/`) && pathName !== `/${locale}`,
    );

    if (pathnameIsMissingLocale) {
      if (locale === i18n.defaultLocale) return pathName;
      return `/${locale}${pathName}`;
    } else {
      if (locale === i18n.defaultLocale) {
        const segments = pathName.split("/");
        const isHome = segments.length === 2;
        if (isHome) return "/";

        segments.splice(1, 1);
        return segments.join("/");
      }

      const segments = pathName.split("/");
      segments[1] = locale;
      return segments.join("/");
    }
  };

  return (
    <div>
      {showEnglishFlag && (
        <Link href={redirectedPathName("en")}>
          <Image
            src="/icons/english.svg"
            width={80}
            height={40}
            alt="English"
          />
        </Link>
      )}
      {!showEnglishFlag && (
        <Link href={redirectedPathName("jp")}>
          <Image src="/icons/japan.svg" width={80} height={40} alt="Japanese" />
        </Link>
      )}
    </div>
  );
}
