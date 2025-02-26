export const baseURL = 'https://api.themoviedb.org/3';
export const baseBgURL = 'https://image.tmdb.org/t/p/w1920_and_h600_multi_faces';
export const basePosterURL = 'https://image.tmdb.org/t/p/w220_and_h330_face';
export const baseEpsImageURL = 'https://media.themoviedb.org/t/p/w227_and_h127_bestv2';

export const getFullBgUrl = (path: string) => path ? `${baseBgURL}${path}` : '';
export const getFullPosterUrl = (path: string) => path ? `${basePosterURL}${path}` : '';
export const getFullEpsImageUrl = (path: string) => path ? `${baseEpsImageURL}${path}` : '';
export const fetchOptions = {
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MDB_TOKEN}`
  },
  next: { revalidate: 3600 }
}