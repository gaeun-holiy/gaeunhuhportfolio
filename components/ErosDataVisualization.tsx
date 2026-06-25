"use client";

import { useMemo, useState } from "react";
import { erosBundles, type ErosBundle } from "@/data/erosBundles";

const scoreFields: Array<{
  key: keyof Pick<
    ErosBundle,
    | "prompt_fidelity"
    | "character_continuity"
    | "location_continuity"
    | "naturalness"
    | "temporal_consistency"
    | "aesthetic_score"
  >;
  label: string;
}> = [
  { key: "prompt_fidelity", label: "Prompt Fidelity" },
  { key: "character_continuity", label: "Character Continuity" },
  { key: "location_continuity", label: "Location Continuity" },
  { key: "naturalness", label: "Naturalness" },
  { key: "temporal_consistency", label: "Temporal Consistency" },
  { key: "aesthetic_score", label: "Aesthetic Score" }
];

const zones = [
  { bodyPart: "head", left: 24, top: 8, width: 8, height: 7 },
  { bodyPart: "face", left: 23, top: 14, width: 10, height: 8 },
  { bodyPart: "neck", left: 24, top: 21, width: 8, height: 5 },
  { bodyPart: "left_wing", left: 3, top: 22, width: 17, height: 38 },
  { bodyPart: "right_wing", left: 31, top: 22, width: 18, height: 38 },
  { bodyPart: "chest", left: 21.5, top: 25, width: 11, height: 12 },
  { bodyPart: "upper_torso", left: 20, top: 36, width: 14, height: 12 },
  { bodyPart: "mid_torso", left: 20, top: 48, width: 14, height: 12 },
  { bodyPart: "lower_torso", left: 20, top: 60, width: 14, height: 13 },
  { bodyPart: "waist", left: 20.5, top: 72, width: 13, height: 12 }
];

export function ErosDataVisualization() {
  const [activeBodyPart, setActiveBodyPart] = useState<string | null>(null);
  const activeBundle = useMemo(
    () => erosBundles.find((bundle) => bundle.body_part === activeBodyPart) ?? null,
    [activeBodyPart]
  );

  return (
    <section className="relative min-h-screen w-full px-[101px] pb-[80px] pt-[116px] text-[#141413]">
      <div className="grid grid-cols-[820px_750px] items-start gap-[130px]">
        <div className="relative min-h-[640px] overflow-visible">
          <div className="relative w-[820px] max-w-none">
          <img
            src="/images/eros_ascii.svg"
            alt="EROS ASCII figure"
            className="block h-auto w-full select-none"
            draggable={false}
          />

          {zones.map((zone) => (
            <button
              key={zone.bodyPart}
              type="button"
              aria-label={zone.bodyPart.replace("_", " ")}
              className="absolute cursor-crosshair border-0 bg-transparent"
              style={{
                left: `${zone.left}%`,
                top: `${zone.top}%`,
                width: `${zone.width}%`,
                height: `${zone.height}%`
              }}
              onMouseEnter={() => setActiveBodyPart(zone.bodyPart)}
              onFocus={() => setActiveBodyPart(zone.bodyPart)}
              onMouseLeave={() => setActiveBodyPart(null)}
              onBlur={() => setActiveBodyPart(null)}
            />
          ))}
          </div>
        </div>

        <aside className="relative pt-[212px]">
          <span
            className={`pointer-events-none absolute left-[-100px] top-[236px] h-px w-[74px] origin-left bg-[#141413]/45 transition-[opacity,transform] duration-1000 ease-in-out ${
              activeBundle ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          />

          <div
            className={`grid grid-cols-[330px_360px] gap-[60px] transition-all duration-1000 ease-in-out ${
              activeBundle
                ? "translate-x-0 translate-y-0 opacity-100"
                : "translate-x-[-18px] translate-y-[8px] opacity-0"
            }`}
          >
            {activeBundle && (
              <>
                <div>
                  <p className="font-en text-[18px] font-bold leading-[16.8px] tracking-[1.2px]">
                    {activeBundle.bundle_id} — {activeBundle.scene_label}
                  </p>
                  <p
                    className="runtime mt-[12px] max-h-[510px] overflow-hidden text-[16px] leading-[20px] tracking-[0.08em]"
                    style={{
                      hyphens: "auto",
                      textAlign: "justify",
                      textJustify: "inter-word",
                      wordSpacing: "0.02em"
                    }}
                  >
                    {activeBundle.prompt_text}
                  </p>
                </div>

                <div className="pt-[4px]">
                  {scoreFields.map((field) => {
                    const value = activeBundle[field.key];

                    return (
                      <div key={field.key} className="mb-[32px] grid grid-cols-[190px_170px] items-center gap-[28px]">
                        <p className="runtime text-[16px] tracking-[0.08em]">{field.label}</p>
                        <div className="h-[8px] w-[170px] rounded-full bg-[#D8D6D0]">
                          <div
                            className="h-full rounded-full bg-[#141413] transition-[width] duration-700 ease-in-out"
                            style={{ width: `${value}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </>
            )}
          </div>

          {!activeBundle && (
            <p className="font-en absolute left-0 top-[212px] text-[14px] tracking-[0] text-[#141413]/45 transition-opacity duration-700 ease-in-out">
              Move the cursor over EROS.
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}
