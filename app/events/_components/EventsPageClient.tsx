"use client";

import { useEffect, useState } from "react";
import type { Event } from "@/lib/api";
import EventsHero from "./EventsHero";
import EventsList from "./EventsList";

export default function EventsPageClient() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log("🚀 [EventsPageClient] Début du chargement des événements...");
    
    async function loadEvents() {
      try {
        setLoading(true);
        console.log("📡 [EventsPageClient] Appel API vers /api/events");
        
        const response = await fetch("https://back.evorevresearch.ch/api/events", {
          cache: "no-store",
        });

        console.log("📥 [EventsPageClient] Réponse reçue, status:", response.status);

        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }

        const result = await response.json();
        console.log("✅ [EventsPageClient] Données parsées:", result);

        if (result.success && result.data) {
          setEvents(result.data);
          console.log(`✨ [EventsPageClient] ${result.data.length} événements chargés avec succès`);
        } else {
          throw new Error(result.errors || "Erreur lors du chargement");
        }
      } catch (err) {
        console.error("❌ [EventsPageClient] Erreur:", err);
        setError(err instanceof Error ? err.message : "Erreur inconnue");
      } finally {
        setLoading(false);
        console.log("🏁 [EventsPageClient] Chargement terminé");
      }
    }

    loadEvents();
  }, []);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Chargement des événements...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-red-50 p-8 text-center">
          <p className="text-red-600">Erreur: {error}</p>
        </div>
      </div>
    );
  }

  const featuredEvent = events[0];

  return (
    <>
      <EventsHero featuredEvent={featuredEvent} />
      <EventsList events={events} featuredEventSlug={featuredEvent?.slug} />
    </>
  );
}

