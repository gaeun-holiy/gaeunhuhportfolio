const koreanText =
  "기록하는 행위의 모든 매체를 다룬다. 장르도, 대상도 미리 정하지 않는다. 다만 우리 주변에 늘 존재하지만 미처 알아채지 못한 것들을 이야기한다.";

const englishText =
  "Working across every medium of recording. No fixed genre, no fixed subject. Speaking of what is always present around us, yet goes unnoticed.";

export function RedMarquee() {
  return (
    <div className="fixed bottom-0 left-0 z-40 h-[28px] w-full overflow-hidden bg-[#F50537] text-white opacity-100">
      <div className="marquee-track flex w-max whitespace-nowrap py-[5px]">
        {Array.from({ length: 6 }).map((_, index) => (
          <span key={index} className="mr-12">
            <span className="marquee-kr">{koreanText}</span>
            <span className="font-en"> / {englishText}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
