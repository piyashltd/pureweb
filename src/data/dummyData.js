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
  

];
