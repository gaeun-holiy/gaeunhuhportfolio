import { PageHeader } from "@/components/PageHeader";
import { RedMarquee } from "@/components/RedMarquee";

export const metadata = {
  title: "About | Gaeun Huh"
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#EDEBE6] px-[23px] pb-[80px] text-[#141413]">
      <PageHeader title="About" />

      <section className="relative h-screen">
        <div className="font-en absolute left-0 top-[242px] w-[392px]">
          <p>Gaeun Huh</p>
          <br />
          <p>Born in Korea in 2002, somehow managed to grow up just fine.</p>
          <br />
          <p>
            After passing the high school equivalency exam, I spent my teenage years being
            homeschooled. If my professors kindly allow me to graduate from the Department of
            Interaction Design at the Korea National University of Arts, I plan to continue
            growing up somehow after that as well. This paragraph will probably gain a few more
            lines once graduation happens. For now, I still have no idea what job title will
            eventually follow my name.
          </p>
          <br />
          <p>
            I am deeply interested in discovering things that often go unnoticed or remain
            outside our awareness. This curiosity has naturally led me toward documentary-based
            practices, where observation and documentation become ways of understanding the world.
          </p>
        </div>

        <div className="font-kr absolute left-[511px] top-[242px] w-[434px] text-left">
          <p>허가은</p>
          <br />
          <p>
            2002년 한국에서 태어났다. 고등학교는 검정고시를 치른 뒤 홈스쿨링으로 보냈고,
            현재 한국예술종합학교 인터랙션디자인과에 재학 중이다. 만약 무사히 졸업하게
            된다면, 그 이후의 이야기는 이 문단에 이어서 적을 예정이다. 아직은 어떤 직업인이
            될지 결정하지 못했다.
          </p>
          <br />
          <p>
            나는 사람들이 쉽게 지나치는 것, 혹은 아직 이름 붙지 않은 현상들을 발견하는 데
            관심이 많다. 이러한 관심은 자연스럽게 관찰과 기록을 기반으로 한 다큐멘터리
            작업으로 이어졌으며, 최근에는 이미지와 인터랙션을 통해 보이지 않는 관계와 감각을
            탐구하고 있다.
          </p>
        </div>

        <img
          src="/images/cvphoto.png"
          alt="Gaeun Huh"
          className="absolute left-[1139px] top-[242px] h-[243px] w-[200px] object-cover"
        />
      </section>

      <RedMarquee />
    </main>
  );
}
