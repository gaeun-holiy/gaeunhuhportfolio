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
  { bodyPart: "head", left: 42, top: 3, width: 16, height: 7 },
  { bodyPart: "face", left: 39, top: 9, width: 22, height: 8 },
  { bodyPart: "neck", left: 42, top: 17, width: 16, height: 6 },
  { bodyPart: "left_wing", left: 3, top: 14, width: 32, height: 49 },
  { bodyPart: "right_wing", left: 63, top: 12, width: 34, height: 50 },
  { bodyPart: "chest", left: 39, top: 23, width: 22, height: 12 },
  { bodyPart: "upper_torso", left: 37, top: 35, width: 26, height: 13 },
  { bodyPart: "mid_torso", left: 38, top: 48, width: 24, height: 13 },
  { bodyPart: "lower_torso", left: 39, top: 61, width: 22, height: 14 },
  { bodyPart: "waist", left: 40, top: 75, width: 20, height: 13 }
];

function Thumb({ src, label }: { src: string; label: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="mb-[16.8px] flex aspect-video w-full items-center justify-center bg-[#D8D6D0] font-en text-[14px]">
        {label}
      </div>
    );
  }

  return (
    <img
      src={encodeURI(src)}
      alt=""
      className="mb-[16.8px] block aspect-video w-full bg-[#D8D6D0] object-cover"
      onError={() => setFailed(true)}
    />
  );
}

export function ErosDataVisualization() {
  const [activeBodyPart, setActiveBodyPart] = useState<string | null>(null);
  const activeBundle = useMemo(
    () => erosBundles.find((bundle) => bundle.body_part === activeBodyPart) ?? null,
    [activeBodyPart]
  );
  const activeZone = zones.find((zone) => zone.bodyPart === activeBodyPart);

  return (
    <section className="relative mx-auto min-h-screen w-full max-w-[1800px] px-[80px] pb-[80px] pt-[116px] text-[#141413]">
      <div className="font-en absolute left-[80px] bottom-[72px] z-10 text-[12px] leading-[16.8px] tracking-[0]">
        <p>Name — EROS</p>
        <p>Sex — Male</p>
        <p>Age — Immortal</p>
        <p>Affiliation — Olympian Gods</p>
        <p>Domain — Love, Desire, Attraction</p>
        <p>Origin — Greek Mythology</p>
      </div>

      <div className="grid grid-cols-[58%_42%] items-start gap-[34px]">
        <div className="relative min-h-[760px]">
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
              className="absolute cursor-crosshair border border-transparent bg-[#F40F3B]/0 transition-colors duration-700 ease-in-out hover:border-[#F40F3B]/40 hover:bg-[#F40F3B]/10"
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

        <aside className="relative pt-[150px]">
          {activeZone && (
            <span
              className="pointer-events-none absolute left-[-142px] top-[320px] h-px w-[132px] origin-left bg-[#141413]/45 transition-all duration-700 ease-in-out"
              style={{
                transform: `translateY(${activeZone.top - 44}px)`
              }}
            />
          )}

          <div
            className={`grid grid-cols-[48%_52%] gap-[44px] transition-all duration-700 ease-in-out ${
              activeBundle
                ? "translate-y-0 opacity-100"
                : "translate-y-[12px] opacity-0"
            }`}
          >
            {activeBundle && (
              <>
                <div>
                  <Thumb src={activeBundle.thumbnail} label={activeBundle.bundle_id} />
                  <p className="font-en text-[14px] font-bold tracking-[0]">
                    {activeBundle.bundle_id} — {activeBundle.scene_label}
                  </p>
                  <p className="font-en mt-[6px] max-h-[510px] overflow-hidden text-[13px] leading-[16.8px] tracking-[0]">
                    {activeBundle.prompt_text}
                  </p>
                </div>

                <div className="pt-[2px]">
                  {scoreFields.map((field) => {
                    const value = activeBundle[field.key];

                    return (
                      <div key={field.key} className="mb-[25px] grid grid-cols-[156px_1fr] items-center gap-[18px]">
                        <p className="runtime text-[14px] tracking-[0]">{field.label}</p>
                        <div className="h-[7px] rounded-full bg-[#141413]/5">
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
            <p className="font-en absolute left-0 top-[150px] text-[14px] tracking-[0] text-[#141413]/45 transition-opacity duration-700 ease-in-out">
              Move the cursor over EROS.
            </p>
          )}
        </aside>
      </div>
    </section>
  );
}
