export interface LocationSuggestion {
  id: string;
  label: string;
}

export const searchLocationSuggestions = async (query: string): Promise<LocationSuggestion[]> => {
  if (query.trim().length < 3) return [];

  const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&addressdetails=1&limit=5&q=${encodeURIComponent(query)}`;
  const res = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!res.ok) return [];

  const data = (await res.json()) as Array<{ place_id: number; display_name: string }>;
  return data.map((item) => ({
    id: String(item.place_id),
    label: item.display_name,
  }));
};
