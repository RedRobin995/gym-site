"use client";

import dynamic from "next/dynamic";

const Faq = dynamic(() => import("@/components/Faq").then((m) => m.Faq), {
  ssr: false,
});

const Contact = dynamic(
  () => import("@/components/Contact").then((m) => m.Contact),
  { ssr: false },
);

export function HomeFaqContact() {
  return (
    <>
      <Faq />
      <Contact />
    </>
  );
}
