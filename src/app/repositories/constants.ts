export const baseURL = 'https://api.themoviedb.org/3';
export const headers = {
  accept: 'application/json',
  Authorization: `Bearer ${process.env.MDB_TOKEN}`
}