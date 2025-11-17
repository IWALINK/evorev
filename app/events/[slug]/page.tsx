import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fetchEventBySlug, fetchEvents } from "@/lib/api";

type PageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const events = await fetchEvents();
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const event = await fetchEventBySlug(params.slug);

  if (!event) {
    return {
      title: "Événement introuvable | Évorev",
      description:
        "L'événement que vous cherchez n'existe pas ou n'est plus disponible.",
    };
  }

  return {
    title: `${event.title} | Événements Évorev`,
    description: event.description,
    openGraph: {
      title: event.title,
      description: event.description,
      type: "article",
      url: `https://evorev.ch/events/${event.slug}`,
      ...(event.image && {
        images: [
          {
            url: event.image,
            width: 1200,
            height: 630,
            alt: event.title,
          },
        ],
      }),
    },
  };
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-CH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default async function EventDetailPage({ params }: PageProps) {
  const event = await fetchEventBySlug(params.slug);

  if (!event) {
    notFound();
  }

  const allEvents = await fetchEvents();
  const relatedEvents = allEvents
    .filter((item) => item.slug !== event.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <article>
        <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Image Background */}
          <div className="absolute inset-0 w-full h-full">
            {event.image ? (
              <Image
                src={event.image}
                alt={event.title}
                fill
                sizes="100vw"
                className="absolute inset-0 w-full h-full object-cover"
                priority
              />
            ) : (
              <div className="absolute inset-0 w-full h-full bg-slate-900" />
            )}
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-slate-900" />
          </div>

          <div className="container-custom w-full relative z-10">
            <div className="flex flex-col items-center text-center">
              <div className="space-y-6 md:space-y-8 max-w-4xl">
                <h1 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.15] md:leading-[1.1] tracking-tight text-white">
                  {event.title}
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
                  <span>{formatDate(event.event_date)}</span>
                  {event.location && <span>• {event.location}</span>}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="prose prose-lg max-w-none">
            <div className="text-gray-700 leading-relaxed whitespace-pre-line">
              {event.description}
            </div>
          </div>

          {event.image && (
            <div className="mt-16">
              <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <div className="mt-16 rounded-3xl border border-gray-100 bg-gradient-to-br from-white to-slate-50 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-secondary">
              Informations pratiques
            </h3>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  Date
                </p>
                <p className="mt-1 text-lg text-gray-900">
                  {formatDate(event.event_date)}
                </p>
              </div>
              {event.location && (
                <div>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    Lieu
                  </p>
                  <p className="mt-1 text-lg text-gray-900">{event.location}</p>
                </div>
              )}
            </div>
          </div>
        </section>

          {/* Autres événements */}
          {relatedEvents.length > 0 && (
            <section className="bg-slate-50 py-16 md:py-20">
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="mb-12 flex items-center justify-between">
                  <div>
                    <h3 className="mt-3 font-heading text-3xl text-secondary">
                      Autres événements
                    </h3>
                  </div>
                  <Link
                    href="/events"
                    className="hidden rounded-full border border-gray-200 px-4 py-2 text-sm font-semibold text-secondary transition hover:border-secondary hover:text-secondary/80 md:inline-flex"
                  >
                    Voir tous les événements
                  </Link>
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  {relatedEvents.map((related) => {
                    return (
                      <article
                        key={related.id}
                        className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-gray-100"
                      >
                        {related.image && (
                          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-100 mb-4">
                            <Image
                              src={related.image}
                              alt={related.title}
                              fill
                              sizes="(max-width: 768px) 100vw, 33vw"
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="mb-2 text-sm font-semibold text-primary">
                          {formatDate(related.event_date)}
                        </div>
                        <h4 className="text-lg font-semibold text-secondary">
                          {related.title}
                        </h4>
                        <p className="mt-2 text-sm text-gray-600 line-clamp-3">
                          {related.description}
                        </p>
                        <Link
                          href={`/events/${related.slug}`}
                          className="mt-4 inline-flex items-center text-sm font-semibold text-primary"
                        >
                          Voir les détails →
                        </Link>
                      </article>
                    );
                  })}
                </div>

                <Link
                  href="/events"
                  className="mt-10 inline-flex w-full justify-center rounded-full border border-gray-200 px-4 py-3 text-sm font-semibold text-secondary transition hover:border-secondary hover:text-secondary/80 md:hidden"
                >
                  Voir tous les événements
                </Link>
              </div>
            </section>
          )}
        </article>

      <Footer />
    </main>
  );
}

