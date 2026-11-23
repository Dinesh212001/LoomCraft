import { api } from '@/lib/api';
import type { HomeData } from '@/types/product';

// SERVICE (frontend) = backend API call-ku oru function. Page/component inga irundhu dhaan call pannum.
// GET /api/home
export const getHome = () => api<HomeData>('/home');
