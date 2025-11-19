import Image from "next/image";
import type { Event } from "@/lib/api";

type EventDetailHeroProps = {
  event: Event;
};

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString("fr-CH", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

export default function EventDetailHero({ event }: EventDetailHeroProps) {
  return (
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
  );
}

