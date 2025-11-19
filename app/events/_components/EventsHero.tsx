import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/lib/api";

type EventsHeroProps = {
  featuredEvent?: Event;
};

export default function EventsHero({ featuredEvent }: EventsHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 py-20 text-white">
      <div className="absolute inset-0 h-full w-full">
        {featuredEvent?.image ? (
          <Image
            src={featuredEvent.image}
            alt={featuredEvent.title}
            fill
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover"
            priority
          />
        ) : (
          <div className="absolute inset-0 h-full w-full bg-slate-900" />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-slate-900" />
      </div>
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <p className="mt-10 text-xs uppercase tracking-[0.4em] text-slate-300 md:mt-14 lg:mt-16">
          Événements
        </p>
        <h1 className="mt-6 font-heading text-4xl text-white tracking-tight md:text-5xl">
          Rejoignez nos événements
        </h1>
        <p className="mt-4 text-base text-slate-300 md:text-lg">
          Découvrez les prochains événements organisés par Évorev et
          rencontrez notre communauté.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="#events"
            className="rounded-full bg-primary px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition hover:opacity-90"
          >
            Découvrir les événements
          </Link>
          {featuredEvent && (
            <Link
              href={`/events/${featuredEvent.slug}`}
              className="rounded-full border border-white/30 px-6 py-3 font-heading text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white hover:bg-white/10"
            >
              Voir les détails
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

