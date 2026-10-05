import Image from "next/image";
import Twin from "./components/Twin";
import Stack from "./components/Stack";
import { EMAIL, GITHUB, job, principles, projects } from "./data";

const nav = [
  ["Work", "#work"],
  ["How I work", "#principles"],
  ["Work history", "#experience"],
  ["Stack", "#stack"],
  ["Contact", "#contact"],
];

const ext = { target: "_blank", rel: "noopener noreferrer" } as const;

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-ink/90 backdrop-blur">
        <nav aria-label="Main" className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <a href="#top" className="font-mono text-sm font-semibold text-accent">ciphez</a>
          <ul className="hidden gap-6 text-sm text-mute sm:flex">
            {nav.map(([t, h]) => (
              <li key={h}><a href={h} className="hover:text-white">{t}</a></li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top">
        <section className="sec grid items-center gap-10 md:grid-cols-[1fr_auto]" aria-labelledby="hero-title">
          <div>
            <p className="label">Lagos, Nigeria · 5 years</p>
            <h1 id="hero-title" className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">Nwadiaro Miracle Chukwuma</h1>
            <p className="mt-2 text-xl text-mint">AI/ML Engineer</p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">
              I build AI systems that act on real data: agents, RAG over business documents, voice agents and computer vision models, with checks in code wherever a prompt is not enough.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Twin />
              <a href={GITHUB} {...ext} className="rounded-md border border-line px-4 py-2 text-sm hover:border-mute">GitHub</a>
              <a href={`mailto:${EMAIL}`} className="rounded-md border border-line px-4 py-2 text-sm hover:border-mute">Email</a>
            </div>
          </div>
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/me.jpg`}
            alt="Portrait of Nwadiaro Miracle Chukwuma"
            width={400}
            height={400}
            priority
            sizes="(max-width: 768px) 200px, 280px"
            className="h-[200px] w-[200px] rounded-2xl border border-line object-cover md:h-[280px] md:w-[280px]"
          />
        </section>

        <section id="work" className="sec border-t border-line" aria-labelledby="work-title">
          <p className="label">Selected work</p>
          <h2 id="work-title" className="mt-3 text-3xl font-bold">AI systems I built</h2>
          <ol className="mt-10 space-y-6">
            {projects.map((p, i) => (
              <li key={p.name}>
                <article className="rounded-xl border border-line bg-panel p-5 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-2xl font-semibold">
                      <span className="mr-3 font-mono text-base text-mute">0{i + 1}</span>
                      {p.name}
                    </h3>
                    <div className="flex gap-4 text-sm">
                      {p.live && <a href={p.live} {...ext} className="text-mint hover:underline">Live<span className="sr-only"> site for {p.name}</span></a>}
                      {p.repo && <a href={p.repo} {...ext} className="text-mint hover:underline">Repo<span className="sr-only"> for {p.name}</span></a>}
                    </div>
                  </div>
                  <p className="mt-3 text-lg leading-relaxed">{p.what}</p>
                  <p className="mt-4 border-l-2 border-accent pl-4 text-accent">{p.decision}</p>
                  <div className="mt-4 space-y-3 leading-relaxed text-mute">
                    {p.hard.map((h) => <p key={h.slice(0, 24)}>{h}</p>)}
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={`${p.name} stack`}>
                    {p.stack.map((s) => (
                      <li key={s} className="rounded border border-line px-2 py-0.5 font-mono text-xs text-mute">{s}</li>
                    ))}
                  </ul>
                </article>
              </li>
            ))}
          </ol>
        </section>

        <section id="principles" className="sec border-t border-line" aria-labelledby="pr-title">
          <p className="label">How I work</p>
          <h2 id="pr-title" className="mt-3 text-3xl font-bold">Positions I hold</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {principles.map((t) => (
              <li key={t} className="rounded-xl border border-line p-6 text-lg leading-snug">{t}</li>
            ))}
          </ul>
        </section>

        <section id="experience" className="sec border-t border-line" aria-labelledby="ex-title">
          <p className="label">Experience</p>
          <h2 id="ex-title" className="mt-3 text-3xl font-bold">Where I work</h2>
          <article className="mt-8 rounded-xl border border-line bg-panel p-5 sm:p-8">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-xl font-semibold">{job.org}</h3>
              <span className="font-mono text-xs text-accent">{job.period}</span>
            </div>
            <p className="mt-1 text-mute">{job.role}</p>
            <ul className="mt-5 space-y-3 leading-relaxed">
              {job.points.map((t) => (
                <li key={t} className="flex gap-3"><span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />{t}</li>
              ))}
            </ul>
          </article>
        </section>

        <section id="stack" className="sec border-t border-line" aria-labelledby="st-title">
          <p className="label">Stack</p>
          <h2 id="st-title" className="mt-3 text-3xl font-bold">Tools I use</h2>
          <Stack />
        </section>

        <section id="contact" className="sec border-t border-line" aria-labelledby="ct-title">
          <p className="label">Contact</p>
          <h2 id="ct-title" className="mt-3 text-3xl font-bold">Have a system that needs to be right?</h2>
          <p className="mt-4 max-w-xl text-mute">Email is the fastest way to reach me. You can also ask my digital twin about my work first.</p>
          <a href={`mailto:${EMAIL}`} className="mt-6 inline-block break-all text-xl text-accent hover:underline">{EMAIL}</a>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-mute">
            <a href={GITHUB} {...ext} className="hover:text-white">GitHub</a>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-mute">© {new Date().getFullYear()} Nwadiaro Miracle Chukwuma</footer>
      <Twin variant="fab" />
    </>
  );
}
