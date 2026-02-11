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
  },

  {
    "id": "kurulus-osman-s01-e11",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 11,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/SX2SXPdd/KS-S01-E11.png",
    "date": "Dec 11, 2020",
    "duration": "43min",
    "videoUrl": "https://stream.mux.com/6UGbstcY02qX9exFg3Uzgbtwxvrm2pVpLblhdZ701yo4A.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e12",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 12,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/zTXf5S2n/KS-S01-E12.png",
    "date": "Dec 12, 2020",
    "duration": "44min",
    "videoUrl": "https://stream.mux.com/2EZu2gt14pJ3GjuVkJvZ92dfGX02oh2rPaydot7a01E6g.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e13",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 13,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/LXjcBTNb/KS-S01-E13.png",
    "date": "Dec 13, 2020",
    "duration": "42min",
    "videoUrl": "https://stream.mux.com/NAU5oDsr5VSgSnvfrWoXXVVavvIGIo4D01yESua3Z4g00.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e14",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 14,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/7tvfCBc5/KS-S01-E14.png",
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
    "thumbnail": "https://i.ibb.co.com/27tn95d3/KS-S01-E15.png",
    "date": "Dec 15, 2020",
    "duration": "45min",
    "videoUrl": "https://stream.mux.com/cbeFx86Ihu8LlGKMOU2A1oyQS76uoP6odpXaB8dN1wo.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e16",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 16,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/k27tjP76/KS-S01-E16.png",
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
    "thumbnail": "https://i.ibb.co.com/S4693K8Z/KS-S01-E17.png",
    "date": "Dec 17, 2020",
    "duration": "43min",
    "videoUrl": "https://stream.mux.com/5mFXLuzM2NkXTHn3m5DCSRp9oWJI8EH5ZhXypoap2fM.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e18",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 18,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/CpkpCcC5/KS-S01-E18.png",
    "date": "Dec 18, 2020",
    "duration": "44min",
    "videoUrl": "https://stream.mux.com/mi2vGcUNckiEUjKAEop4MZ42h01e6bZwDbTzsKb91DVU.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e19",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 19,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/LDrWQ0HK/KS-S01-E19.png",
    "date": "Dec 19, 2020",
    "duration": "42min",
    "videoUrl": "https://stream.mux.com/cueS8QX9z9YyWdpMd9bJkSWDdz006yWRilClv02bXQKXA.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e20",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 20,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/WWjSDSLw/KS-S01-E20.png",
    "date": "Dec 20, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/Beu7ydKVvuPX86ipbAR441nJzlKMsZSxfR495SyWgkU.m3u8"
  },

  {
    "id": "kurulus-osman-s01-e21",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 21,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/q3xTxMrX/KS-S01-E21.png",
    "date": "Dec 21, 2020",
    "duration": "45min",
    "videoUrl": "https://stream.mux.com/Lj4FMQEULUKYODiIwLW22UFyq9b3FleqKwdG2mU4Dw4.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e22",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 22,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/21tss66Z/KS-S01-E22.png",
    "date": "Dec 22, 2020",
    "duration": "41min",
    "videoUrl": "https://stream.mux.com/62lbuNX57pO7LZpQxVuYhXqtzvxQ26cp1g4TWYyo901c.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e23",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 23,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/nNmbxczF/KS-S01-E23.png",
    "date": "Dec 23, 2020",
    "duration": "43min",
    "videoUrl": "https://stream.mux.com/S8IFs00UfnPYtyljef00Ki94KXLP9QEYG23nS2Gx3I100s.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e24",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 24,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/nMNLQ9Dz/KS-S01-E24.png",
    "date": "Dec 24, 2020",
    "duration": "44min",
    "videoUrl": "https://stream.mux.com/1bKljZeW02Op6FKynGqdzJ6L9Iv300WbltTvDhx012Aw00E.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e25",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 25,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/rRjtfv7t/KS-S01-E25.png",
    "date": "Dec 25, 2020",
    "duration": "42min",
    "videoUrl": "https://stream.mux.com/00CN64MOkw9tcf2x02CfHnuXmeT01zUScJ68jeo5MsjdWY.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e26",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 26,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/7hNY1yx/KS-S01-E26.png",
    "date": "Dec 26, 2020",
    "duration": "40min",
    "videoUrl": "https://stream.mux.com/9PW02HO4wadE1ZrD2CvfauQCygR0102rVHAtFBrgn9E02tM.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e27",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 27,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/JRLsKj4d/KS-S01-E27.png",
    "date": "Dec 27, 2020",
    "duration": "45min",
    "videoUrl": "https://stream.mux.com/p83aQhLe4thKVsOk4ZOj00wstvnlQ6qzM3jKu6cgHn4M.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e28",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 28,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/JwJjs8Tc/KS-S01-E28.png",
    "date": "Dec 28, 2020",
    "duration": "41min",
    "videoUrl": "https://stream.mux.com/BXmCYIoF1L01xVM01LiRo01JJ5uz2f00EMRUVHf8UuZnizc.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e29",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 29,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/HLqY9XQ6/KS-S01-E29.png",
    "date": "Dec 29, 2020",
    "duration": "43min",
    "videoUrl": "https://stream.mux.com/gaEwdU81AKDpD6bjqbVE3wPIxEQhOcLu5blkfM1n73c.m3u8"
  },
  {
    "id": "kurulus-osman-s01-e30",
    "showId": "kurulus-osman",
    "season": 1,
    "episodeNumber": 30,
    "title": "Kurulus Osman S01",
    "thumbnail": "https://i.ibb.co.com/dJ0XyNpf/KS-S01-E30.png",
    "date": "Dec 30, 2020",
    "duration": "44min",
    "videoUrl": "https://stream.mux.com/zRnP3yYWwBCa1mlB5n6rOv01JLw8ME35J6mv9ty2GUIk.m3u8"
  }

];
