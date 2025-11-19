"use client";

import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { fetchEvents, type Event } from "@/lib/api";
import { HeroSection, EventsSection, EventsList } from "./components";

export default function EventsPageClient() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isMountedRef = useRef(true);

  const loadEvents = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const fetchedEvents = await fetchEvents();
      
      if (isMountedRef.current) {
        setEvents(fetchedEvents);
      }
    } catch (err) {
      if (isMountedRef.current) {
        const errorMessage = err instanceof Error 
          ? err.message 
          : "Une erreur est survenue lors du chargement des événements";
        setError(errorMessage);
        console.error("Error loading events:", err);
      }
    } finally {
      if (isMountedRef.current) {
        setLoading(false);
      }
    }
  }, []);

  useEffect(() => {
    isMountedRef.current = true;
    loadEvents();

    return () => {
      isMountedRef.current = false;
    };
  }, [loadEvents]);

  const featuredEvent = useMemo(() => events[0], [events]);

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <HeroSection featuredEvent={featuredEvent} />

      <EventsSection>
        {loading ? (
          <div className="col-span-full text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
            <p className="mt-4 text-gray-500">Chargement des événements...</p>
          </div>
        ) : error ? (
          <div className="col-span-full text-center py-12">
            <p className="text-red-600 mb-4">{error}</p>
            <button
              onClick={loadEvents}
              className="rounded-lg bg-primary px-4 py-2 text-white hover:opacity-90 transition"
            >
              Réessayer
            </button>
          </div>
        ) : (
          <EventsList events={events} featuredEvent={featuredEvent} />
        )}
      </EventsSection>

      <Footer />
    </main>
  );
}

