import Image from "next/image";
import Link from "next/link";
import type { Event } from "@/lib/api";

type EventCardProps = {
  event: Event;
  isPriority?: boolean;
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-CH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default function EventCard({ event, isPriority = false }: EventCardProps) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative">
        <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
          {event.image ? (
            <Image
              src={event.image}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
              priority={isPriority}
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
}

