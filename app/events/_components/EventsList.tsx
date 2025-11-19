import type { Event } from "@/lib/api";
import EventCard from "./EventCard";

type EventsListProps = {
  events: Event[];
  featuredEventSlug?: string;
};

export default function EventsList({ events, featuredEventSlug }: EventsListProps) {
  return (
    <section id="events" className="bg-slate-50 py-16 md:py-20 lg:py-24">
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
            events.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                isPriority={event.slug === featuredEventSlug}
              />
            ))
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
  );
}

