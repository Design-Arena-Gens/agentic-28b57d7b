const featureCards = [
  {
    title: "Whisper Projection",
    description:
      "Feather-light diffusion engineered with aerospace perfumery to glide through the air without overwhelming the senses.",
  },
  {
    title: "12-Hour Sillage",
    description:
      "Micro-encapsulated accords cling to fabric and skin for an enduring trail that gently resurfaces across the day.",
  },
  {
    title: "Tailored Rituals",
    description:
      "Concierge-led layering guides crafted for climates, occasions, and the presence you want to leave behind.",
  },
];

const scentNotes = [
  {
    tier: "Lift",
    palette: ["Ethereal Bergamot", "Iced Pear Blossom", "Silver Sage Mist"],
  },
  {
    tier: "Cruise",
    palette: ["Jasmine Absolute", "Orris Veil", "White Cedar Canopy"],
  },
  {
    tier: "Descent",
    palette: ["Salted Suede", "Cashmere Amber", "Midnight Vetiver"],
  },
];

const collections = [
  {
    name: "Stratos Mirage",
    detail: "A glacial floral spun with luminous resins—crafted for skyline evenings.",
    tag: "Limited",
  },
  {
    name: "Altitude No. 7",
    detail: "The signature AeroSuite blend; a weightless oud with amber-drift technology.",
    tag: "Flagship",
  },
  {
    name: "Cabin Lumina",
    detail: "Solar musk and apricot haze designed to linger softly on designer knits.",
    tag: "New",
  },
];

const testimonials = [
  {
    name: "Harper V.",
    role: "Creative Director, Atelier IV",
    quote:
      "The only house whose fragrances feel choreographed. AeroSuite perfumes move with you.",
  },
  {
    name: "Louis D.",
    role: "VP Luxury Partnerships",
    quote:
      "Clients ask for the signature by name—the wear is refined, the experience unforgettable.",
  },
];

const journalEntries = [
  {
    title: "Behind the Notes: Engineering Sillage",
    excerpt:
      "How our perfumers borrow from aerodynamics to suspend scent molecules in motion.",
  },
  {
    title: "Styling the Scent Ritual",
    excerpt: "Pairing textiles, time of day, and fragrance to sculpt your signature aura.",
  },
];

export default function Home() {
  return (
    <div className="relative isolate overflow-hidden bg-[#08070a] pb-24 text-stone-100">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-15%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(246,215,167,0.25),rgba(12,10,18,0))] blur-3xl" />
        <div className="absolute bottom-[-20%] right-[-10%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,rgba(160,175,255,0.18),rgba(12,10,18,0))] blur-3xl" />
        <div className="absolute left-[-20%] top-1/3 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle_at_center,rgba(255,167,167,0.12),rgba(12,10,18,0))] blur-3xl" />
      </div>

      <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-10 sm:py-12">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-700/60 bg-white/5 text-lg font-semibold uppercase tracking-[0.2em]">
            A
          </span>
          <div>
            <p className="text-xs uppercase tracking-[0.5em] text-stone-400">
              AeroSuite
            </p>
            <p className="text-sm text-stone-300">
              Maison de Parfum Contemporain
            </p>
          </div>
        </div>
        <nav className="flex flex-1 flex-wrap items-center justify-end gap-6 text-sm text-stone-300">
          <a className="transition-colors hover:text-stone-50" href="#collections">
            Collections
          </a>
          <a className="transition-colors hover:text-stone-50" href="#notes">
            Fragrance Notes
          </a>
          <a className="transition-colors hover:text-stone-50" href="#experience">
            Experience
          </a>
          <a className="transition-colors hover:text-stone-50" href="#journal">
            Journal
          </a>
          <button className="rounded-full border border-stone-600/60 bg-white/5 px-5 py-2 text-sm font-medium tracking-wide text-stone-100 transition hover:border-stone-400 hover:bg-white/10">
            Reserve a Consultation
          </button>
        </nav>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-28 px-6">
        <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-[linear-gradient(145deg,rgba(20,18,27,0.95),rgba(10,9,15,0.8))] px-8 py-16 shadow-[0_40px_120px_-40px_rgba(0,0,0,0.8)] sm:px-12 sm:py-20 md:px-16">
          <div className="absolute inset-x-0 top-[-40%] h-[320px] bg-[radial-gradient(circle_at_top,rgba(242,213,167,0.35),rgba(12,10,18,0))] blur-3xl" />
          <div className="relative flex flex-col gap-16 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl space-y-6">
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.4em] text-stone-300">
                Premiere Collection
              </p>
              <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl md:text-6xl">
                Perfume that ascends with your every movement.
              </h1>
              <p className="text-lg text-stone-300 md:text-xl">
                AeroSuite composes fragrances inspired by flight—airborne layers,
                architectural accords, and textures that float across skin like silk in motion.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="rounded-full bg-[#f2d5a7] px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#1b1214] transition hover:bg-[#f6e2c2]">
                  Explore Collection
                </button>
                <button className="rounded-full border border-stone-600/80 px-8 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-stone-100 transition hover:border-stone-300 hover:bg-white/10">
                  Request Atelier Sample
                </button>
              </div>
            </div>
            <div className="relative ml-auto flex max-w-md flex-col items-start gap-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="flex items-center justify-between w-full">
                <h2 className="text-sm uppercase tracking-[0.4em] text-stone-400">
                  Flight Metrics
                </h2>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-stone-200">
                  AeroLab
                </span>
              </div>
              <dl className="grid w-full grid-cols-2 gap-6 text-stone-200">
                <div>
                  <dt className="text-xs uppercase tracking-[0.35em] text-stone-400">
                    Longevity
                  </dt>
                  <dd className="mt-2 text-3xl font-light text-white">12h</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.35em] text-stone-400">
                    Diffusion
                  </dt>
                  <dd className="mt-2 text-3xl font-light text-white">Weightless</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.35em] text-stone-400">
                    Mood
                  </dt>
                  <dd className="mt-2 text-3xl font-light text-white">Luminous</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.35em] text-stone-400">
                    Craft
                  </dt>
                  <dd className="mt-2 text-3xl font-light text-white">Artisanal</dd>
                </div>
              </dl>
              <p className="text-sm text-stone-400">
                Each release is hand-finished in limited micro-batches to preserve potency and clarity.
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-10" id="experience">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.5em] text-stone-400">
              The AeroSuite Experience
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Sculpted for presence, engineered for movement.
            </h2>
            <p className="max-w-2xl text-stone-300">
              Our perfumers collaborate with aeronautical engineers to choreograph scent journeys that rise, cruise, and land with poetic precision.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {featureCards.map((feature) => (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 transition hover:border-white/15 hover:bg-white/[0.04]"
              >
                <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(242,213,167,0.18),rgba(8,7,10,0))]" />
                </div>
                <div className="relative space-y-4">
                  <span className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-stone-300">
                    AeroSuite
                  </span>
                  <h3 className="text-xl font-semibold text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-stone-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]" id="collections">
          <div className="space-y-8 rounded-3xl border border-white/5 bg-white/[0.02] p-10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.5em] text-stone-400">
                  Signature Collection
                </p>
                <h2 className="mt-3 text-3xl font-light text-white">
                  Altitude No. 7 Extrait
                </h2>
              </div>
              <span className="rounded-full bg-[#f2d5a7]/20 px-4 py-2 text-xs uppercase tracking-[0.4em] text-[#f2d5a7]">
                Bestseller
              </span>
            </div>
            <p className="max-w-2xl text-stone-300">
              A luminous oud wrapped in toasted tonka, white cashmere, and an amber drift accord that hovers above skin for hours. Designed for twilight rendezvous and architected spaces.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-stone-400">
                  Ritual
                </p>
                <p className="mt-2 text-sm text-stone-200">
                  Glide onto pulse points, mist into silk scarves, finish with a single cloud above.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-stone-400">
                  Pairing
                </p>
                <p className="mt-2 text-sm text-stone-200">
                  Tailored suiting, monochrome palettes, architectural jewelry.
                </p>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/[0.03] p-5">
                <p className="text-xs uppercase tracking-[0.35em] text-stone-400">
                  Edition
                </p>
                <p className="mt-2 text-sm text-stone-200">
                  800 flacons worldwide, etched by hand in Paris.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-white/[0.08] px-6 py-3 text-xs uppercase tracking-[0.3em] text-stone-100 transition hover:bg-white/[0.12]">
                View Olfactory Brief
              </button>
              <button className="rounded-full border border-transparent bg-[#f2d5a7] px-6 py-3 text-xs uppercase tracking-[0.3em] text-[#1b1214] transition hover:bg-[#f6e2c2]">
                Add to Private Waitlist
              </button>
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/5 bg-white/[0.01] p-8">
            <p className="text-xs uppercase tracking-[0.5em] text-stone-400">
              Upcoming Releases
            </p>
            <div className="space-y-4">
              {collections.map((collection) => (
                <div
                  key={collection.name}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-5"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-white">
                      {collection.name}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.3em] text-stone-400">
                      {collection.tag}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-stone-300">{collection.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="space-y-10" id="notes">
          <div className="flex flex-col gap-4">
            <p className="text-xs uppercase tracking-[0.5em] text-stone-400">Fragrance Architecture</p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              The AeroSuite olfactory pyramid.
            </h2>
            <p className="max-w-2xl text-stone-300">
              Built with lift, cruise, and descent accords that unfurl as the air around you changes.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {scentNotes.map((note) => (
              <div
                key={note.tier}
                className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#f2d5a7] via-transparent to-[#a0afff]" />
                <h3 className="text-sm uppercase tracking-[0.4em] text-stone-400">
                  {note.tier}
                </h3>
                <ul className="mt-6 space-y-3 text-stone-200">
                  {note.palette.map((item) => (
                    <li key={item} className="text-base">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 md:grid-cols-[1.2fr_0.8fr]" id="journal">
          <div className="space-y-8 rounded-3xl border border-white/5 bg-white/[0.02] p-10">
            <p className="text-xs uppercase tracking-[0.5em] text-stone-400">
              Voices of Presence
            </p>
            <h2 className="text-3xl font-light text-white sm:text-4xl">
              Trusted by curators of luxury and taste.
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="rounded-2xl border border-white/5 bg-white/[0.03] p-6"
                >
                  <p className="text-sm text-stone-200">
                    “{testimonial.quote}”
                  </p>
                  <div className="mt-4 border-t border-white/5 pt-4 text-xs uppercase tracking-[0.3em] text-stone-400">
                    {testimonial.name} · {testimonial.role}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/5 bg-white/[0.01] p-8">
            <p className="text-xs uppercase tracking-[0.5em] text-stone-400">The AeroSuite Journal</p>
            <div className="space-y-4">
              {journalEntries.map((entry) => (
                <article
                  key={entry.title}
                  className="group rounded-2xl border border-white/5 bg-white/[0.03] p-5 transition hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <h3 className="text-lg font-medium text-white group-hover:text-[#f2d5a7]">
                    {entry.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-300">{entry.excerpt}</p>
                  <span className="mt-4 inline-flex text-xs uppercase tracking-[0.35em] text-stone-400 group-hover:text-[#f2d5a7]">
                    Read Story
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] px-10 py-16 text-center" id="contact">
          <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(242,213,167,0.25),rgba(8,7,10,0))] blur-3xl" />
          <div className="relative mx-auto max-w-3xl space-y-6">
            <p className="text-xs uppercase tracking-[0.5em] text-stone-400">
              Private Membership
            </p>
            <h2 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Board AeroSuite Privé for bespoke scent direction.
            </h2>
            <p className="text-stone-300">
              Join our invitation roster to access atelier previews, bespoke layering sessions, and first-right reservations on limited flacons.
            </p>
            <form className="mx-auto flex max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Your email for boarding pass"
                className="w-full rounded-full border border-white/10 bg-white/[0.08] px-6 py-3 text-sm text-white placeholder:text-stone-500 focus:border-[#f2d5a7] focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                className="rounded-full bg-[#f2d5a7] px-8 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#1b1214] transition hover:bg-[#f6e2c2]"
              >
                Join Waitlist
              </button>
            </form>
            <p className="text-xs uppercase tracking-[0.35em] text-stone-500">
              Paris · Dubai · Singapore · São Paulo
            </p>
          </div>
        </section>
      </main>

      <footer className="mx-auto mt-24 flex max-w-6xl flex-col gap-6 border-t border-white/5 px-6 pt-10 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:pt-12">
        <div>
          <p className="text-xs uppercase tracking-[0.5em] text-stone-400">
            AeroSuite
          </p>
          <p className="text-stone-500">
            © {new Date().getFullYear()} AeroSuite Atelier. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6">
          <a className="transition hover:text-stone-300" href="#">
            Atelier Membership
          </a>
          <a className="transition hover:text-stone-300" href="#">
            Press
          </a>
          <a className="transition hover:text-stone-300" href="#">
            Legal
          </a>
        </div>
      </footer>
    </div>
  );
}
