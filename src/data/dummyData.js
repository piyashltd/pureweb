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
  {
    id: 'jowar-bhanta', // Changed from 's1'
    channelId: 'zee-bangla',
    title: 'Jowar Bhanta',
    poster: 'https://img.freepik.com/free-photo/portrait-young-woman-traditional-sari_23-2149539227.jpg',
    description: 'A tale of two sisters separated by destiny.',
    badge: { text: "Watch Free", color: "#e50914", textColor: "#ffffff" }, 
    detailsBadge: null, 
    isFree: false
  },
  
  // 2. Colors Bangla Show
  {
    id: 'naagin-s07', // Changed from 's2'
    channelId: 'colors-bangla',
    title: 'Naagin S07 (Hindi)',
    poster: 'https://img.freepik.com/free-photo/fantasy-woman-portrait-forest_23-2150795908.jpg',
    description: 'The shapeshifting serpent returns for revenge.',
    badge: { text: "Premium", color: "#1e3a8a", textColor: "#ffffff" }, 
    detailsBadge: { text: "Premium HD", color: "#1e3a8a", textColor: "#ffffff" },
    isFree: true
  },

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
  },

  // 4. Star Jalsha Show
  {
    id: 'parineeta', // Changed from 's3'
    channelId: 'star-jalsha',
    title: 'Parineeta',
    poster: 'https://img.freepik.com/free-photo/indian-wedding-couple-posing_23-2150935835.jpg',
    description: 'A love story that defies societal norms.',
    badge: null, 
    detailsBadge: null,
    isFree: false
  },

  // 5. Sun Bangla Show
  {
    id: 'besh-korechi-prem-korechi', // Changed from 's4'
    channelId: 'sun-bangla',
    title: 'Besh Korechi Prem Korechi',
    poster: 'https://img.freepik.com/free-photo/young-students-campus_23-2148522338.jpg',
    description: 'High school romance and drama.',
    badge: { text: "Free", color: "#16a34a", textColor: "#ffffff" }, 
    detailsBadge: { text: "Free to Watch", color: "#16a34a", textColor: "#ffffff" },
    isFree: true
  },

  // 6. Another Zee Bangla Show
  {
    id: 'mithai', // Changed from 's5'
    channelId: 'zee-bangla', 
    title: 'Mithai',
    poster: 'https://img.freepik.com/free-photo/sari-woman-portrait_23-2149539227.jpg',
    description: 'A sweet tale of a confectioner.',
    badge: { text: "New", color: "#fbbf24", textColor: "#000000" },
    detailsBadge: null,
    isFree: true
  },

  // 7. Another Star Jalsha Show
  {
    id: 'horogouri-pice-hotel', // Changed from 's6'
    channelId: 'star-jalsha',
    title: 'Horogouri Pice Hotel',
    poster: 'https://img.freepik.com/free-photo/indian-couple_23-2150935821.jpg',
    description: 'Managing a family hotel business.',
    badge: { text: "Premium", color: "#e50914", textColor: "#ffffff" },
    detailsBadge: { text: "Premium", color: "#e50914", textColor: "#ffffff" },
    isFree: false
  },

  // 8. Another Sun Bangla Show
  {
    id: 'phaguner-mohona', // Changed from 's7'
    channelId: 'sun-bangla',
    title: 'Phaguner Mohona',
    poster: 'https://img.freepik.com/free-photo/traditional-look_23-2149539250.jpg',
    description: 'A romantic drama series.',
    badge: null,
    detailsBadge: null,
    isFree: false
  }
];


// ------------------- EPISODES -------------------
export const episodes = [
  // --- Kurulus Osman Episodes ---
