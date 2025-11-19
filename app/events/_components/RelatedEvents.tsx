import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/lib/api";

type RelatedEventsProps = {
  events: Event[];
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-CH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default function RelatedEvents({ events }: RelatedEventsProps) {
  if (events.length === 0) {
    return null;
  }

  return (
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
          {events.map((related) => (
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
          ))}
        </div>

        <Link
          href="/events"
          className="mt-10 inline-flex w-full justify-center rounded-full border border-gray-200 px-4 py-3 text-sm font-semibold text-secondary transition hover:border-secondary hover:text-secondary/80 md:hidden"
        >
          Voir tous les événements
        </Link>
      </div>
    </section>
  );
}

