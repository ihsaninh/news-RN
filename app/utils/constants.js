export const NewsPaging = (page) =>
  `https://newsapi.org/v2/everything?q=corona+covid&apiKey=6566df4437f94a3bb6e92809f06f46e8&language=id&sortBy=publishedAt&pageSize=8&page=${page}`;
export const SearchNews = (query) =>
  `https://newsapi.org/v2/everything?q=${query}&apiKey=6566df4437f94a3bb6e92809f06f46e8&language=id&sortBy=publishedAt`;
export const categoryList = [
  {
    name: 'Covid-19',
    isActive: true,
  },
  {
    name: 'Tanya Jawab',
    isActive: false,
  },
  {
    name: 'Terbaru',
    isActive: false,
  },
  {
    name: 'Populer',
    isActive: false,
  },
  {
    name: 'Event',
    isActive: false,
  },
  {
    name: 'Topik',
    isActive: false,
  },
];
