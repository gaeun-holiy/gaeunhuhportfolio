"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "About", href: "/about/" },
  { label: "CV", href: "/cv/" },
  { label: "Films", href: "/films/" },
  { label: "Art works", href: "/art-works/" },
  { label: "Archive", href: "/archive/" }
];

const contacts = [
  {
    label: "email",
    value: "huh3744@gmail.com",
    valueClassName: "font-en text-[14px] leading-[16.8px]",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-[14px] w-[14px]">
        <path
          d="M3.25 5.25h13.5v9.5H3.25z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path d="m3.8 5.9 6.2 5 6.2-5" fill="none" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    )
  },
  {
    label: "phone",
    value: "82+ 10-8230-3744",
    valueClassName: "contact-number",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-[14px] w-[14px]">
        <path
          d="M6.1 3.4 8 7.15 6.7 8.45c1 2.05 2.8 3.85 4.85 4.85L12.85 12l3.75 1.9-.95 2.35c-.2.45-.65.75-1.15.7C8.25 16.45 3.55 11.75 3.05 5.5c-.05-.5.25-.95.7-1.15z"
          fill="none"
          stroke="currentColor"
          strokeLinejoin="round"
          strokeWidth="1.2"
        />
      </svg>
    )
  },
  {
    label: "instagram",
    value: "@051009l7",
    valueClassName: "contact-number",
    icon: (
      <svg aria-hidden="true" viewBox="0 0 20 20" className="h-[14px] w-[14px]">
        <rect x="4" y="4" width="12" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="10" cy="10" r="2.7" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="13.7" cy="6.3" r="0.75" fill="currentColor" />
      </svg>
    )
  }
];

export function ScrollMenu() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    function handleScroll() {
      const nextOpacity = Math.max(0.04, 1 - window.scrollY / 360);
      setOpacity(nextOpacity);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed left-1/2 top-[calc(100vh-28px-42.11vw+92px)] z-30 w-[396px] -translate-x-1/2 transition-opacity duration-150"
      style={{ opacity }}
    >
      <input id="contact-toggle" type="checkbox" className="peer sr-only" />

      <nav
        aria-label="Main menu"
        className="max-h-[300px] overflow-hidden bg-[#F50537] px-[18px] py-[14px] text-white opacity-100 transition-[max-height,padding,opacity] duration-300 ease-out peer-checked:max-h-0 peer-checked:py-0 peer-checked:opacity-0"
      >
        {menuItems.map((item, index) => (
          <Link
            key={item.href}
            href={item.href}
            className={`font-en flex h-[40px] items-center justify-between px-[13px] text-[18px] leading-[16.8px] ${
              index === 0 ? "" : "border-t border-white/45"
            }`}
          >
            <span>{item.label}</span>
            <span>&gt;</span>
          </Link>
        ))}
      </nav>

      <label
        htmlFor="contact-toggle"
        role="button"
        tabIndex={0}
        className="font-en block h-[38px] w-full cursor-pointer bg-[#F6F6F6] pt-[10px] text-center text-[18px] leading-[16.8px] text-[#121212] opacity-100 transition-[height,opacity,padding] duration-300 peer-checked:h-0 peer-checked:overflow-hidden peer-checked:pt-0 peer-checked:opacity-0"
      >
        Contact
      </label>

      <section
        aria-label="Contact information"
        className="max-h-0 scale-[0.98] overflow-hidden bg-[#F6F6F6] text-[#121212] opacity-0 transition-[max-height,opacity,transform] duration-300 ease-out peer-checked:max-h-[330px] peer-checked:scale-100 peer-checked:opacity-100"
      >
        <div className="px-[26px] py-[25px]">
          <h2 className="font-en mb-[30px] text-center text-[18px] leading-[16.8px]">Contact</h2>

          <div className="border-t border-[#F40F3B]/35">
            {contacts.map((contact) => (
              <div
                key={contact.label}
                className="flex h-[53px] items-center border-b border-[#F40F3B]/35 text-[#121212]"
              >
                <span className="mr-[14px] flex w-[16px] justify-center text-[#121212]">{contact.icon}</span>
                <span className="font-en mr-[12px] w-[82px] text-[14px] leading-[16.8px]">{contact.label}</span>
                <span className={contact.valueClassName}>{contact.value}</span>
              </div>
            ))}
          </div>

          <label
            htmlFor="contact-toggle"
            role="button"
            tabIndex={0}
            className="font-en mt-[22px] block h-[38px] w-full cursor-pointer bg-[#F40F3B] pt-[10px] text-center text-[18px] leading-[16.8px] text-white"
          >
            Close
          </label>
        </div>
      </section>
    </div>
  );
}
