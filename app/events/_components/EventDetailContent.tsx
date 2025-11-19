import Image from "next/image";
import type { Event } from "@/lib/api";

type EventDetailContentProps = {
  event: Event;
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-CH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default function EventDetailContent({ event }: EventDetailContentProps) {
  return (
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
  );
}

