export type Project = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string[] | null;
  video_url: string[] | null;
  status: "draft" | "active" | "completed";
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type Event = {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string | null;
  event_date: string;
  location: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
};

export type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
  errors?: string;
};

const API_BASE_URL = "https://back.evorevresearch.ch/api";

export async function fetchProjects(): Promise<Project[]> {
  try {
    console.log(`[API] Fetching projects from ${API_BASE_URL}/projects`);
    
    const response = await fetch(`${API_BASE_URL}/projects`, {
      cache: "no-store",
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log(`[API] Response status for projects: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[API] Failed to fetch projects:`, response.status, errorText);
      throw new Error(`Failed to fetch projects: ${response.status}`);
    }

    const result: ApiResponse<Project[]> = await response.json();

    if (!result.success) {
      console.error(`[API] API returned success=false for projects:`, result.errors);
      throw new Error(result.errors || "Failed to fetch projects");
    }

    console.log(`[API] Successfully fetched ${result.data.length} projects`);
    return result.data;
  } catch (error) {
    console.error("[API] Error fetching projects:", error);
    return [];
  }
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    console.log(`[API] Fetching project by slug: ${slug} from ${API_BASE_URL}/projects/${slug}`);
    
    const response = await fetch(`${API_BASE_URL}/projects/${slug}`, {
      cache: "no-store",
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log(`[API] Response status for project ${slug}: ${response.status}`);

    if (!response.ok) {
      if (response.status === 404) {
        console.log(`[API] Project ${slug} not found (404)`);
        return null;
      }
      const errorText = await response.text();
      console.error(`[API] Failed to fetch project ${slug}:`, response.status, errorText);
      throw new Error(`Failed to fetch project: ${response.status}`);
    }

    const result: ApiResponse<Project> = await response.json();

    if (!result.success) {
      console.error(`[API] API returned success=false for project ${slug}:`, result.errors);
      return null;
    }

    console.log(`[API] Successfully fetched project ${slug}`);
    return result.data;
  } catch (error) {
    console.error(`[API] Error fetching project ${slug}:`, error);
    return null;
  }
}

export async function fetchEvents(): Promise<Event[]> {
  try {
    console.log(`[API] Fetching events from ${API_BASE_URL}/events`);
    
    const response = await fetch(`${API_BASE_URL}/events`, {
      cache: "no-store",
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log(`[API] Response status for events: ${response.status}`);

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[API] Failed to fetch events:`, response.status, errorText);
      throw new Error(`Failed to fetch events: ${response.status}`);
    }

    const result: ApiResponse<Event[]> = await response.json();

    if (!result.success) {
      console.error(`[API] API returned success=false for events:`, result.errors);
      throw new Error(result.errors || "Failed to fetch events");
    }

    console.log(`[API] Successfully fetched ${result.data.length} events`);
    return result.data;
  } catch (error) {
    console.error("[API] Error fetching events:", error);
    return [];
  }
}

export async function fetchEventBySlug(slug: string): Promise<Event | null> {
  try {
    console.log(`[API] Fetching event by slug: ${slug} from ${API_BASE_URL}/events/${slug}`);
    
    const response = await fetch(`${API_BASE_URL}/events/${slug}`, {
      cache: "no-store",
      headers: {
        'Accept': 'application/json',
      },
    });

    console.log(`[API] Response status for event ${slug}: ${response.status}`);

    if (!response.ok) {
      if (response.status === 404) {
        console.log(`[API] Event ${slug} not found (404)`);
        return null;
      }
      const errorText = await response.text();
      console.error(`[API] Failed to fetch event ${slug}:`, response.status, errorText);
      throw new Error(`Failed to fetch event: ${response.status}`);
    }

    const result: ApiResponse<Event> = await response.json();

    if (!result.success) {
      console.error(`[API] API returned success=false for event ${slug}:`, result.errors);
      return null;
    }

    console.log(`[API] Successfully fetched event ${slug}`);
    return result.data;
  } catch (error) {
    console.error(`[API] Error fetching event ${slug}:`, error);
    return null;
  }
}

