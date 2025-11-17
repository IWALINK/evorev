import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fetchEvents } from "@/lib/api";

export const metadata: Metadata = {
  title: "Événements | Évorev",
  description:
    "Découvrez les prochains événements organisés par Évorev et rejoignez notre communauté.",
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-CH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default async function EventsPage() {
  const events = await fetchEvents();
  const featuredEvent = events[0];

  return (
    <main className="min-h-screen bg-white">
      <Header />

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

      <section
        id="events"
        className="bg-slate-50 py-16 md:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-12 flex flex-col gap-3 text-center">
            <h2 className="font-heading text-3xl text-secondary md:text-4xl">
              Prochains événements
            </h2>
            <p className="text-base text-gray-600 md:text-lg">
              Rejoignez-nous pour découvrir nos projets, rencontrer les porteurs
              et échanger avec la communauté Évorev.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {events.length > 0 ? (
              events.map((event) => {
                return (
                  <article
                    key={event.id}
                    className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative">
                      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
                        {event.image ? (
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                            priority={event.slug === featuredEvent?.slug}
                          />
                        ) : (
                          <div className="absolute inset-0 bg-gray-200" />
                        )}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col p-6 pt-4">
                      <div className="mb-2 text-sm font-semibold text-primary">
                        {formatDate(event.event_date)}
                        {event.location && ` • ${event.location}`}
                      </div>
                      <h3 className="text-2xl font-semibold text-secondary">
                        <Link href={`/events/${event.slug}`}>
                          {event.title}
                        </Link>
                      </h3>
                      <p className="mt-3 text-sm text-gray-600 line-clamp-3">
                        {event.description}
                      </p>

                      <Link
                        href={`/events/${event.slug}`}
                        className="mt-6 inline-flex items-center justify-center rounded-lg border-2 border-primary px-4 py-2 font-heading text-sm font-semibold uppercase tracking-wide text-primary transition hover:bg-primary hover:text-slate-900"
                      >
                        Voir les détails →
                      </Link>
                    </div>
                  </article>
                );
              })
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">
                  Aucun événement disponible pour le moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

