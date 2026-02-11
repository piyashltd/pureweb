// File: src/data/dummyData.js

// ------------------- CHANNELS -------------------
export const channels = [
  { 
    id: 'zee-bangla', // Changed from 'zee'
    name: 'Zee Bangla', 
    logo: 'https://ik.imagekit.io/ottstream/zee-bangla1.png', 
    color: 'bg-red-600' 
  },
  { 
    id: 'star-jalsha', // Changed from 'star'
    name: 'Star Jalsha', 
    logo: 'https://ik.imagekit.io/ottstream/star-jalsha.png', 
    color: 'bg-orange-500' 
  },
  { 
    id: 'colors-bangla', // Changed from 'colors'
    name: 'Colors Bangla', 
    logo: 'https://ik.imagekit.io/ottstream/colors-bangla.png', 
    color: 'bg-indigo-600' 
  },
  { 
    id: 'sun-bangla', // Changed from 'sun'
    name: 'Sun Bangla', 
    logo: 'https://sund-images.sunnxt.com/194388/200x200_SunBangla_194388_9c4b5c51-1554-4507-83a8-7b54f31a8967.png', 
    color: 'bg-yellow-600' 
  },
  { 
    id: 'toffee-turkish', // Changed from 'toffee'
    name: 'Toffee', 
    logo: 'https://ik.imagekit.io/ottstream/toffee-logo.png', 
    color: 'bg-purple-600' 
  },
];


// ------------------- HERO SLIDER -------------------
export const sliders = [
  { 
    id: 1, 
    title: "Amader Dadamoni", // Note: This links to 'Jowar Bhanta' based on previous data
    image: "https://t3.ftcdn.net/jpg/06/15/80/36/360_F_615803658_S53m6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x.jpg", 
    showId: 'jowar-bhanta' 
  },
  { 
    id: 2, 
    title: "Naagin S07 (Hindi)", 
    image: "https://img.freepik.com/free-photo/mysterious-woman-forest_23-2150795893.jpg", 
    showId: 'naagin-s07' 
  },
  { 
    id: 3, 
    title: "Kurulus Osman", 
    image: "https://ik.imagekit.io/ottstream/Ks-S4-Poster.jpg", 
    showId: 'kurulus-osman' 
  },
  { 
    id: 4, 
    title: "Mithai", 
    image: "https://img.freepik.com/free-photo/wide-banner-indian_23-2149539227.jpg", 
    showId: 'mithai' 
  }
];


// ------------------- SHOWS / SERIALS -------------------
export const shows = [
  // 1. Zee Bangla Show
   //<>
  
  // 2. Colors Bangla Show
  // 3. Toffee / Turkish Show
  {
    id: 'kurulus-osman', // Changed from 'ks4'
    channelId: 'toffee-turkish',
    title: 'Kurulus Osman',
    poster: 'https://ik.imagekit.io/ottstream/Ks-S4-Poster.jpg',
    description: 'The epic struggle of Osman Bey against enemies.',
    badge: null,
    detailsBadge: { text: "Watch Free", color: "#fbbf24", textColor: "#000000" }, 
    isFree: false
  }
];


// ------------------- EPISODES -------------------
export const episodes = [
  // --- Kurulus Osman Episodes ---
  {
    "id": "kurulus-osman-s01-e01",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 1,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/Fbwc8P5J/KS-S1-E1.webp",
    "date": "Dec 1, 2020",
    "duration": "42min",
    "videoUrl": "https://stream.mux.com/ps02zMrbyQ702j4wM3DwvkJKkIb5F7w02dCC7zBjdjEUCs.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e02",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 2,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/zVCZnr73/KS-S1-E2.webp",
    "date": "Dec 2, 2020",
    "duration": "45min",
    "videoUrl": "https://stream.mux.com/Kv02SRxY464dhFYN200qOfHwrrh9zwfTEDXpVnfhMjYUI.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e03",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 3,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/TD2W1kQV/KS-S1-E3.webp",
    "date": "Dec 3, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/PzertQau7QvY1hbCbU9XMK4ZZPjJAL7iHGmzF024ozEU.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e04",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 4,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/v6NHnRRf/KS-S1-E4.webp",
    "date": "Dec 4, 2020",
    "duration": "43min",
    "videoUrl": "https://stream.mux.com/Lrv3BM6G9Qx1pxRszW00VHihhLG00x6t5s01EG4YJ02Cvco.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e05",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 5,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/4w8yk4PS/KS-S1-E5.webp",
    "date": "Dec 5, 2020",
    "duration": "41min",
    "videoUrl": "https://stream.mux.com/3ov8WBdgZpjSfMM597buco00xJD9O009Z2HTcYf4q8LOo.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e06",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 6,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/SDpxwvPg/KS-S1-E6.webp",
    "date": "Dec 6, 2020",
    "duration": "44min",
    "videoUrl": "https://stream.mux.com/rD017zEQ91k8Mt828cD02j00d4BQ548bFlu9dtVdQhcSLc.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e07",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 7,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/dswjsdDy/KS-S1-E7.webp",
    "date": "Dec 7, 2020",
    "duration": "42min",
    "videoUrl": "https://stream.mux.com/yEgQWNiA00eZlimSlilm3kTWOyfy401olPiTYyMVBaVoE.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e08",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 8,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/rGHxNrrx/KS-S1-E8.webp",
    "date": "Dec 8, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/jpAbpIQzGQxUoKEMbSp4FYayVY01NKjgSn5CrWJ89uU00.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e09",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 9,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/7dWh8tk5/KS-S1-E9.webp",
    "date": "Dec 9, 2020",
    "duration": "45min",
    "videoUrl": "https://stream.mux.com/RHLt8uT63GJkRAuX1cmas26ur3MTjw01jRSJLINV00Vk8.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e10",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 10,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/CKNF4qcH/KS-S1-E10.webp",
    "date": "Dec 10, 2020",
    "duration": "41min",
    "videoUrl": "https://stream.mux.com/0202O501BuwMS68eeaxtVToqXdfU00Q3Rtt1VutHkclEG6g.m3u8"
  }

];
