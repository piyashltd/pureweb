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
  {
    "id": "bholebaba-paar-karega-s02-e175",
    "showId": "bholebaba-paar-karega",
    "season": 2,
    "episodeNumber": 175,
    "title": "Bholebaba Paar Karega S02",
    "thumbnail": "https://image.mux.com/rxv3Q200p8HOoPO01uRLRFNBvg00ATwff101i02wsZHoXpcg/thumbnail.jpg",
    "date": "12 Nov 2026",
    "duration": "23min",
    "videoUrl": "https://stream.mux.com/rxv3Q200p8HOoPO01uRLRFNBvg00ATwff101i02wsZHoXpcg.m3u8"
  },
  {
    "id": "compass-s01-e198",
    "showId": "compass",
    "season": 1,
    "episodeNumber": 198,
    "title": "Compass S01",
    "thumbnail": "https://image.mux.com/l5ZffsqGW2iH8KeZ5SWYon004k8aBdOn46xlOPiDuURQ/thumbnail.jpg",
    "date": "12 Nov 2026",
    "duration": "20min",
    "videoUrl": "https://stream.mux.com/l5ZffsqGW2iH8KeZ5SWYon004k8aBdOn46xlOPiDuURQ.m3u8"
  },
  {
    id: "chiroshokha-s01-e405",
    showId: "chiroshokha",
    season: 1,
    episodeNumber: 405,
    title: "Chiroshokha S01",
    thumbnail: "https://image.mux.com/72xmdMz5uyTG54LJGUf3aSa8ZKfX7cjpjSiThJxYaj00/thumbnail.jpg",
    date: "Mar 10, 2026",
    duration: "20min",
    videoUrl: "https://stream.mux.com/72xmdMz5uyTG54LJGUf3aSa8ZKfX7cjpjSiThJxYaj00.m3u8"
  },
  {
    id: "grihoprobesh-s01-e451",
    showId: "grihoprobesh",
    season: 1,
    episodeNumber: 451,
    title: "Grihoprobesh S01",
    thumbnail: "https://image.mux.com/As8z2bQH8nxTBwoKE02pBgElkenFbHwckJtJLXOyL022A/thumbnail.jpg",
    date: "Mar 10, 2026",
    duration: "20min",
    videoUrl: "https://stream.mux.com/As8z2bQH8nxTBwoKE02pBgElkenFbHwckJtJLXOyL022A.m3u8"
  },
  {
    id: "kurulus-osman-s01-e01",
    showId: "kurulus-osman",
    season: 1,
    episodeNumber: 1,
    title: "Kurulus Osman S01",
    thumbnail: "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E01.jpg",
    date: "Dec 1, 2020",
    duration: "40min",
    videoUrl: "https://stream.mux.com/ps02zMrbyQ702j4wM3DwvkJKkIb5F7w02dCC7zBjdjEUCs.m3u8"
  }
  // আপনি চাইলে বাকি এপিসোডগুলো একইভাবে নিচে যোগ করতে পারেন...
];
