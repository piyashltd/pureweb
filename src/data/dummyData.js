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
  // --- Kurulus Osman Episodes ---,

  {
    "id": "kurulus-osman-s01-e01",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 1,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E01.jpg",
    "date": "Dec 1, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/ps02zMrbyQ702j4wM3DwvkJKkIb5F7w02dCC7zBjdjEUCs.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e02",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 2,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E02.jpg",
    "date": "Dec 2, 2020",
    "duration": "39min",
    "videoUrl": "https://stream.mux.com/Kv02SRxY464dhFYN200qOfHwrrh9zwfTEDXpVnfhMjYUI.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e03",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 3,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E03.jpg",
    "date": "Dec 3, 2020",
    "duration": "41min",
    "videoUrl": "https://stream.mux.com/PzertQau7QvY1hbCbU9XMK4ZZPjJAL7iHGmzF024ozEU.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e04",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 4,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E04.jpg",
    "date": "Dec 4, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/Lrv3BM6G9Qx1pxRszW00VHihhLG00x6t5s01EG4YJ02Cvco.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e05",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 5,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E05.jpg",
    "date": "Dec 5, 2020",
    "duration": "39min",
    "videoUrl": "https://stream.mux.com/3ov8WBdgZpjSfMM597buco00xJD9O009Z2HTcYf4q8LOo.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e06",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 6,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E06.jpg",
    "date": "Dec 6, 2020",
    "duration": "41min",
    "videoUrl": "https://stream.mux.com/rD017zEQ91k8Mt828cD02j00d4BQ548bFlu9dtVdQhcSLc.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e07",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 7,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E07.jpg",
    "date": "Dec 7, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/yEgQWNiA00eZlimSlilm3kTWOyfy401olPiTYyMVBaVoE.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e08",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 8,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E08.jpg",
    "date": "Dec 8, 2020",
    "duration": "39min",
    "videoUrl": "https://stream.mux.com/jpAbpIQzGQxUoKEMbSp4FYayVY01NKjgSn5CrWJ89uU00.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e09",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 9,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E09.jpg",
    "date": "Dec 9, 2020",
    "duration": "41min",
    "videoUrl": "https://stream.mux.com/RHLt8uT63GJkRAuX1cmas26ur3MTjw01jRSJLINV00Vk8.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e10",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 10,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E10.jpg",
    "date": "Dec 10, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/0202O501BuwMS68eeaxtVToqXdfU00Q3Rtt1VutHkclEG6g.m3u8"
  },

  {
    "id": "kurulus-osman-s01-e11",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 11,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E11.png",
    "date": "Dec 11, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/6UGbstcY02qX9exFg3Uzgbtwxvrm2pVpLblhdZ701yo4A.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e12",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 12,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E12.png",
    "date": "Dec 12, 2020",
    "duration": "39min",
    "videoUrl": "https://stream.mux.com/2EZu2gt14pJ3GjuVkJvZ92dfGX02oh2rPaydot7a01E6g.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e13",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 13,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E13.png",
    "date": "Dec 13, 2020",
    "duration": "41min",
    "videoUrl": "https://stream.mux.com/NAU5oDsr5VSgSnvfrWoXXVVavvIGIo4D01yESua3Z4g00.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e14",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 14,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E14.png",
    "date": "Dec 14, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/O4rUZSUK7u6bHOgT4GFvOnA4zGctJy1Mh6UHj0248woM.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e15",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 15,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E15.png",
    "date": "Dec 15, 2020",
    "duration": "39min",
    "videoUrl": "https://stream.mux.com/cbeFx86Ihu8LlGKMOU2A1oyQS76uoP6odpXaB8dN1wo.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e16",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 16,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E16.png",
    "date": "Dec 16, 2020",
    "duration": "41min",
    "videoUrl": "https://stream.mux.com/ZSm1MaaCz1GWLhdoYBHI0202LfCFKjKvblzBDm4tVUJ9o.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e17",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 17,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E17.png",
    "date": "Dec 17, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/5mFXLuzM2NkXTHn3m5DCSRp9oWJI8EH5ZhXypoap2fM.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e18",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 18,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E18.png",
    "date": "Dec 18, 2020",
    "duration": "39min",
    "videoUrl": "https://stream.mux.com/mi2vGcUNckiEUjKAEop4MZ42h01e6bZwDbTzsKb91DVU.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e19",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 19,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E19.png",
    "date": "Dec 19, 2020",
    "duration": "41min",
    "videoUrl": "https://stream.mux.com/cueS8QX9z9YyWdpMd9bJkSWDdz006yWRilClv02bXQKXA.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e20",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 20,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://ik.imagekit.io/ottstream/tr:f-webp/KS%20S01E20.png",
    "date": "Dec 20, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/Beu7ydKVvuPX86ipbAR441nJzlKMsZSxfR495SyWgkU.m3u8"
  }

];
