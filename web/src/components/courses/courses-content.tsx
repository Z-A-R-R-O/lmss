"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowUpRight,
  Clock3,
  Search,
  SlidersHorizontal,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { marketingPrograms, programCategories } from "@/lib/programs/catalog";

const allPrograms = "All programs";

export function CoursesContent() {
  const [activeGroup, setActiveGroup] = useState(allPrograms);
  const [query, setQuery] = useState("");

  const programs = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return marketingPrograms.filter((program) => {
      const matchesGroup =
        activeGroup === allPrograms ||
        program.programGroups.includes(activeGroup);
      const matchesQuery =
        !normalizedQuery ||
        [program.title, program.category, program.description, ...program.tools]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery);

      return matchesGroup && matchesQuery;
    });
  }, [activeGroup, query]);

  return (
    <main className="min-h-screen overflow-x-clip bg-[#05060d] pb-24 pt-28 text-white sm:pt-36">
      <section className="relative overflow-hidden px-4 pb-16 sm:px-8 lg:px-12 lg:pb-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(ellipse_at_18%_18%,rgba(203,107,255,.2),transparent_43%),radial-gradient(ellipse_at_82%_30%,rgba(56,109,255,.2),transparent_42%)]" />
        <div className="relative mx-auto max-w-[1360px]">
          <p className="text-[11px] font-semibold tracking-[.24em] text-fuchsia-300">
            SKILLOOPZ PROGRAMS
          </p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,.54fr)] lg:items-end">
            <div>
              <h1 className="max-w-5xl font-serif text-[clamp(3.35rem,7.5vw,7.6rem)] leading-[.84] tracking-[-.065em]">
                Learn the skills your next role demands.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65 sm:text-xl">
                Practical, mentor-led programs built around projects, feedback,
                and a clear path to the work you want.
              </p>
            </div>
            <div className="border-white/12 rounded-3xl border bg-white/[.045] p-5 shadow-[0_24px_80px_rgba(0,0,0,.2)] backdrop-blur-xl sm:p-6">
              <p className="text-[11px] font-semibold tracking-[.18em] text-white/45">
                THE SKILLOOPZ METHOD
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                {[
                  ["01", "Learn"],
                  ["02", "Build"],
                  ["03", "Launch"],
                ].map(([number, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-black/15 px-2 py-4"
                  >
                    <p className="text-lg font-semibold text-fuchsia-200">
                      {number}
                    </p>
                    <p className="mt-1 text-xs text-white/55">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1360px]">
          <div className="flex flex-col gap-5 border-y border-white/10 py-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex min-w-0 gap-2 overflow-x-auto pb-1 [scrollbar-width:none] lg:pb-0">
              {[allPrograms, ...programCategories].map((group) => {
                const isActive = group === activeGroup;
                return (
                  <button
                    className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-medium transition ${isActive ? "border-fuchsia-200/40 bg-fuchsia-400/15 text-white" : "border-white/10 bg-white/[.025] text-white/55 hover:border-white/25 hover:text-white"}`}
                    key={group}
                    onClick={() => setActiveGroup(group)}
                    type="button"
                  >
                    {group}
                  </button>
                );
              })}
            </div>
            <label className="border-white/12 flex h-12 w-full shrink-0 items-center gap-3 rounded-xl border bg-white/[.045] px-4 text-white/60 transition focus-within:border-white/30 lg:w-[19rem]">
              <Search className="h-4 w-4" />
              <input
                className="placeholder:text-white/38 min-w-0 flex-1 bg-transparent text-sm text-white outline-none"
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search programs"
                type="search"
                value={query}
              />
              {query && (
                <button
                  aria-label="Clear program search"
                  className="text-white/45 transition hover:text-white"
                  onClick={() => setQuery("")}
                  type="button"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </label>
          </div>

          <div className="flex items-center justify-between gap-4 py-7">
            <p className="text-sm text-white/55">
              <span className="font-semibold text-white">
                {programs.length}
              </span>{" "}
              {programs.length === 1 ? "program" : "programs"} to explore
            </p>
            <span className="hidden items-center gap-2 text-xs font-semibold tracking-[.16em] text-white/40 sm:flex">
              <SlidersHorizontal className="h-3.5 w-3.5" /> CURATED FOR CAREERS
            </span>
          </div>

          {programs.length ? (
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {programs.map((program, index) => (
                <Link
                  className="hover:border-white/28 group relative min-h-[29rem] overflow-hidden rounded-[1.65rem] border border-white/10 bg-[#090a13] shadow-[0_20px_60px_rgba(0,0,0,.15)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_75px_rgba(77,42,159,.25)]"
                  href={`/programs/${program.slug}`}
                  key={program.slug}
                >
                  <Image
                    alt={program.coverAlt}
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                    fill
                    priority={index < 3}
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    src={program.coverImage}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,13,.06)_8%,rgba(5,6,13,.34)_45%,#090a13_100%)]" />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${program.accent} opacity-[.14] mix-blend-screen`}
                  />
                  <div className="relative flex h-full min-h-[29rem] flex-col justify-end p-6 sm:p-7">
                    <div className="mb-auto flex items-start justify-between gap-3">
                      <span className="border-white/18 rounded-full border bg-black/20 px-3 py-1.5 text-[11px] font-semibold tracking-[.12em] text-white/85 backdrop-blur-md">
                        {program.category.toUpperCase()}
                      </span>
                      <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-black">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="text-[11px] font-semibold tracking-[.18em] text-fuchsia-100/85">
                      {program.eyebrow}
                    </p>
                    <h2 className="mt-3 max-w-md font-serif text-4xl leading-[.92] tracking-[-.045em] sm:text-[2.75rem]">
                      {program.title}
                    </h2>
                    <p className="text-white/68 mt-4 max-w-lg text-sm leading-6">
                      {program.description}
                    </p>
                    <div className="text-white/62 mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium">
                      <span className="inline-flex items-center gap-1.5">
                        <Clock3 className="h-3.5 w-3.5 text-violet-200" />{" "}
                        {program.duration}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <UsersRound className="h-3.5 w-3.5 text-violet-200" />{" "}
                        {program.deliveryMode}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid min-h-80 place-items-center rounded-[2rem] border border-dashed border-white/15 bg-white/[.025] px-6 text-center">
              <div>
                <Sparkles className="mx-auto h-6 w-6 text-fuchsia-300" />
                <h2 className="mt-5 font-serif text-3xl">
                  No matching program yet.
                </h2>
                <p className="mt-3 text-sm text-white/55">
                  Try a different keyword or explore all programs.
                </p>
                <button
                  className="border-white/18 mt-6 rounded-xl border px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10"
                  onClick={() => {
                    setActiveGroup(allPrograms);
                    setQuery("");
                  }}
                  type="button"
                >
                  Clear filters
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
