const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000/api";

export async function getCmsData(resource: string, params: Record<string, string | number> = {}) {
  try {
    const queryParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined) queryParams.append(key, String(value));
    });
    
    const queryString = queryParams.toString();
    const url = `${API_URL}/public/${resource}${queryString ? `?${queryString}` : ""}`;

    const res = await fetch(url, {
      cache: 'no-store'
    });
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.error(`Failed to fetch ${resource}:`, error);
    return [];
  }
}

export async function getSettings(group: string = "site") {
  try {
    const res = await fetch(`${API_URL}/public/settings/${group}`, {
       cache: 'no-store'
    });
    const data = await res.json();
    return data.data || null;
  } catch (error) {
    console.error(`Failed to fetch settings ${group}:`, error);
    return null;
  }
}

export async function submitContactForm(data: any) {
    return fetch(`${API_URL}/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
    });
}

export async function incrementPodcastPlays(id: string) {
    try {
        await fetch(`${API_URL}/public/podcasts/${id}/play`, {
            method: "POST",
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error(`Failed to increment plays for podcast ${id}:`, error);
    }
}
