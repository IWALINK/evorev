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
    const response = await fetch(`${API_BASE_URL}/projects`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    const result: ApiResponse<Project[]> = await response.json();

    if (!result.success) {
      throw new Error(result.errors || "Failed to fetch projects");
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    return [];
  }
}

export async function fetchProjectBySlug(slug: string): Promise<Project | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/projects/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch project");
    }

    const result: ApiResponse<Project> = await response.json();

    if (!result.success) {
      return null;
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching project:", error);
    return null;
  }
}

export async function fetchEvents(): Promise<Event[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/events`, {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch events");
    }

    const result: ApiResponse<Event[]> = await response.json();

    if (!result.success) {
      throw new Error(result.errors || "Failed to fetch events");
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
}

export async function fetchEventBySlug(slug: string): Promise<Event | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/events/${slug}`, {
      cache: "no-store",
    });

    if (!response.ok) {
      if (response.status === 404) {
        return null;
      }
      throw new Error("Failed to fetch event");
    }

    const result: ApiResponse<Event> = await response.json();

    if (!result.success) {
      return null;
    }

    return result.data;
  } catch (error) {
    console.error("Error fetching event:", error);
    return null;
  }
}

