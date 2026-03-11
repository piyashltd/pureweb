// File: src/data/dummyData.js

// ------------------- CHANNELS -------------------
export const channels = [
  { id: 'toffee-turkish', name: 'Toffee', logo: 'https://ik.imagekit.io/ottstream/toffee-logo.png', color: 'bg-purple-600' },
  { id: 'bongo', name: 'Bongo', logo: 'https://ik.imagekit.io/ottstream/bongo.png', color: 'bg-orange-500' },
  { id: 'chorki', name: 'Chorki', logo: 'https://ik.imagekit.io/ottstream/chorki.png', color: 'bg-indigo-600' },
  { id: 'hoichoi', name: 'Hoichoi', logo: 'https://ik.imagekit.io/ottstream/hoichoi.png', color: 'bg-yellow-600' },
  { id: 'binge', name: 'Binge', logo: 'https://ik.imagekit.io/ottstream/binge.png', color: 'bg-yellow-600' },
  { id: 'sonyliv', name: 'SonyLiv', logo: 'https://ik.imagekit.io/ottstream/sonyliv.png', color: 'bg-yellow-600' },
];

// ------------------- HERO SLIDER -------------------
export const sliders = [
  { 
    id: 1, 
    title: "Chiroshokha", 
    image: "https://image.mux.com/72xmdMz5uyTG54LJGUf3aSa8ZKfX7cjpjSiThJxYaj00/thumbnail.jpg", 
    showId: 'chiroshokha' 
  },
  { 
    id: 2, 
    title: "Kurulus Osman S1", 
    image: "https://ik.imagekit.io/ottstream/Ks-S4-Poster.jpg", 
    showId: 'kurulus-osman' 
  },
  { 
    id: 3, 
    title: "Grihoprobesh", 
    image: "https://image.mux.com/As8z2bQH8nxTBwoKE02pBgElkenFbHwckJtJLXOyL022A/thumbnail.jpg", 
    showId: 'grihoprobesh' 
  }
];

// ------------------- SHOWS / SERIALS -------------------
export const shows = [
  {
    id: 'chiroshokha',
    channelId: 'sonyliv',
    title: 'Chiroshokha',
    poster: 'https://image.mux.com/72xmdMz5uyTG54LJGUf3aSa8ZKfX7cjpjSiThJxYaj00/thumbnail.jpg',
    description: 'একটি রোমান্টিক ড্রামা সিরিজ।',
    isFree: true
  },
  {
    id: 'grihoprobesh',
    channelId: 'chorki',
    title: 'Grihoprobesh',
    poster: 'https://image.mux.com/As8z2bQH8nxTBwoKE02pBgElkenFbHwckJtJLXOyL022A/thumbnail.jpg',
    description: 'পারিবারিক গল্পের একটি সিরিয়াল।',
    isFree: true
  },
  {
    id: 'milon-hobe-kotodine',
    channelId: 'bongo',
    title: 'Milon Hobe Kotodine',
    poster: 'https://image.mux.com/MxFUIWEOATjHh7erwytT02cFVhVJ9AZwL3Qslo7WRnaI/thumbnail.jpg',
    description: 'হারিয়ে যাওয়া সম্পর্কের গল্প।',
    isFree: true
  },
  {
    id: 'sudhu-tomari-jonyo',
    channelId: 'hoichoi',
    title: 'Sudhu Tomari Jonyo',
    poster: 'https://image.mux.com/Qp7HMbw7uIo4C6joPfYaQN702O7fCXPfdRjmUXAmyVjk/thumbnail.jpg',
    description: 'নতুন প্রজন্মের ভালোবাসার কাহিনী।',
    isFree: true
  },
  {
    id: 'kurulus-osman',
    channelId: 'toffee-turkish',
    title: 'Kurulus Osman',
    poster: 'https://m.media-amazon.com/images/M/MV5BNmJhY2RmYzQtYWFkNi00YzU4LTk2NzEtMzM1OGRhM2MyYzc1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    description: 'The series focuses on the life of Osman Bey.',
    isFree: false
  }
];

// ------------------- EPISODES -------------------
export const episodes = [
  
];
