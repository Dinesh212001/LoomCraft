const BASE = process.env.NEXT_PUBLIC_API_URL;

// Ella API call um inga irunthu tha pogum (cookies include pannum).
// Backend reply: { success, message, data }   -> inga "data" mattum return pannrom.
export async function api<T = unknown>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${BASE}${path}`, {
    credentials: 'include',
    cache: 'no-store', // always fresh data
    headers: { 'Content-Type': 'application/json', ...(options.headers || {}) },
    ...options,
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body.message || 'Request failed');
  return body.data as T;
}
