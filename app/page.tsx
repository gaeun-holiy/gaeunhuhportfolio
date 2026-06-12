import { RedMarquee } from "@/components/RedMarquee";
import { ScrollMenu } from "@/components/ScrollMenu";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-[180vh] bg-[#EDEBE6] text-[#141413]">
      <section className="relative z-10 home-forest-spacer">
        <Link href="/" className="top-en absolute left-[23px] top-[17px] block w-[210px] text-[#141413]">
          <p className="font-bold">Gaeun Huh</p>
          <p>Seoul, South Korea</p>
        </Link>

        <p className="top-en absolute left-[653px] top-[17px] w-[286px]">
          Working across every medium of recording. No fixed genre, no fixed subject. Speaking
          of what is always present around us, yet goes unnoticed.
        </p>

        <p className="top-kr absolute left-[980px] top-[17px] w-[314px]">
          기록하는 행위의 모든 매체를 다룬다. 장르도, 대상도 미리 정하지 않는다.
          다만 우리 주변에 늘 존재하지만 미처 알아채지 못한 것들을 이야기한다.
        </p>
      </section>

      <img
        src="/images/transparent_forest1.png"
        alt=""
        className="home-forest fixed left-0 z-0 block h-auto w-full"
      />

      <div className="h-screen" />
      <ScrollMenu />
      <RedMarquee />
    </main>
  );
}
