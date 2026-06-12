import { cvSections } from "@/data/cv";
import { PageHeader } from "@/components/PageHeader";

export const metadata = {
  title: "CV | Gaeun Huh"
};

export default function CvPage() {
  return (
    <main className="min-h-screen bg-[#EDEBE6] px-[23px] pb-[80px] pt-[154px] text-[#141413]">
      <PageHeader title="CV" />

      <div className="mx-auto w-[1060px] divide-y divide-[#141413]/20">
        {cvSections.map((section) => (
          <section key={section.title} className="grid grid-cols-[190px_96px_1fr] gap-10 py-10">
            <h2 className="font-en">{section.title}</h2>
            <div className="col-span-2 space-y-7">
              {section.entries.map((entry) => (
                <div key={`${section.title}-${entry.year}-${entry.title}`} className="grid grid-cols-[96px_1fr] gap-6">
                  <p className="font-en">{entry.year}</p>
                  <div>
                    <p className="font-en">{entry.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
