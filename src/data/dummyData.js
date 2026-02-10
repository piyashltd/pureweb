// File: src/data/dummyData.js

// ------------------- CHANNELS -------------------
export const channels = [
  { 
    id: 'zee', 
    name: 'Zee Bangla', 
    logo: 'https://ik.imagekit.io/ottstream/zee-bangla1.jpg', 
    color: 'bg-red-600' 
  },
  { 
    id: 'star', 
    name: 'Star Jalsha', 
    logo: 'https://ik.imagekit.io/ottstream/star-jalsha2.jpg', 
    color: 'bg-orange-500' 
  },
  { 
    id: 'colors', 
    name: 'Colors Bangla', 
    logo: 'https://ik.imagekit.io/ottstream/colors-bangla.png', 
    color: 'bg-indigo-600' 
  },
  { 
    id: 'sun', 
    name: 'Sun Bangla', 
    logo: 'https://sund-images.sunnxt.com/194388/200x200_SunBangla_194388_9c4b5c51-1554-4507-83a8-7b54f31a8967.png', 
    color: 'bg-yellow-600' 
  },
  { 
    id: 'toffee', 
    name: 'Toffee / Turkish', 
    logo: 'https://ik.imagekit.io/ottstream/Ks-S4-Poster.jpg', 
    color: 'bg-purple-600' 
  },
];


// ------------------- HERO SLIDER -------------------
export const sliders = [
  { 
    id: 1, 
    title: "Amader Dadamoni", 
    image: "https://t3.ftcdn.net/jpg/06/15/80/36/360_F_615803658_S53m6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x.jpg", 
    showId: 's1' 
  },
  { 
    id: 2, 
    title: "Naagin S07 (Hindi)", 
    image: "https://img.freepik.com/free-photo/mysterious-woman-forest_23-2150795893.jpg", 
    showId: 's2' 
  },
  { 
    id: 10, 
    title: "Kurulus Osman S4", 
    image: "https://ik.imagekit.io/ottstream/Ks-S4-Poster.jpg", 
    showId: 'ks4' 
  },
  { 
    id: 4, 
    title: "Mithai", 
    image: "https://img.freepik.com/free-photo/wide-banner-indian_23-2149539227.jpg", 
    showId: 's5' 
  }
];


// ------------------- SHOWS / SERIALS -------------------
export const shows = [
  // 1. Zee Bangla Show
  {
    id: 's1',
    channelId: 'zee',
    title: 'Jowar Bhanta',
    poster: 'https://img.freepik.com/free-photo/portrait-young-woman-traditional-sari_23-2149539227.jpg',
    description: 'A tale of two sisters separated by destiny.',
    badge: { text: "Watch Free", color: "#e50914", textColor: "#ffffff" }, 
    detailsBadge: null, // ভেতরে ব্যাজ দেখাবে না
    isFree: false
  },
  
  // 2. Colors Bangla Show
  {
    id: 's2',
    channelId: 'colors',
    title: 'Naagin S07 (Hindi)',
    poster: 'https://img.freepik.com/free-photo/fantasy-woman-portrait-forest_23-2150795908.jpg',
    description: 'The shapeshifting serpent returns for revenge.',
    badge: { text: "Premium", color: "#1e3a8a", textColor: "#ffffff" }, 
    detailsBadge: { text: "Premium HD", color: "#1e3a8a", textColor: "#ffffff" }, // ভেতরেও দেখাবে
    isFree: true
  },

  // 3. Toffee / Turkish Show (Kurulus Osman)
  {
    id: 'kurulus-osman',
    channelId: 'kurulus-osman',
    title: 'Kurulus Osman',
    poster: 'https://ik.imagekit.io/ottstream/Ks-S4-Poster.jpg',
    description: 'The epic struggle of Osman Bey against enemies.',
    // Home Page Badge
    badge: null,
    // Inside Details Badge
    detailsBadge: { text: "Watch Free", color: "#fbbf24", textColor: "#000000" }, 
    isFree: false
  },

  // 4. Star Jalsha Show
  {
    id: 's3',
    channelId: 'star',
    title: 'Parineeta',
    poster: 'https://img.freepik.com/free-photo/indian-wedding-couple-posing_23-2150935835.jpg',
    description: 'A love story that defies societal norms.',
    badge: null, 
    detailsBadge: null,
    isFree: false
  },

  // 5. Sun Bangla Show
  {
    id: 's4',
    channelId: 'sun',
    title: 'Besh Korechi Prem Korechi',
    poster: 'https://img.freepik.com/free-photo/young-students-campus_23-2148522338.jpg',
    description: 'High school romance and drama.',
    badge: { text: "Free", color: "#16a34a", textColor: "#ffffff" }, 
    detailsBadge: { text: "Free to Watch", color: "#16a34a", textColor: "#ffffff" },
    isFree: true
  },

  // 6. Another Zee Bangla Show
  {
    id: 's5', 
    channelId: 'zee', 
    title: 'Mithai',
    poster: 'https://img.freepik.com/free-photo/sari-woman-portrait_23-2149539227.jpg',
    description: 'A sweet tale of a confectioner.',
    badge: { text: "New", color: "#fbbf24", textColor: "#000000" },
    detailsBadge: null,
    isFree: true
  },

  // 7. Another Star Jalsha Show
  {
    id: 's6',
    channelId: 'star',
    title: 'Horogouri Pice Hotel',
    poster: 'https://img.freepik.com/free-photo/indian-couple_23-2150935821.jpg',
    description: 'Managing a family hotel business.',
    badge: { text: "Premium", color: "#e50914", textColor: "#ffffff" },
    detailsBadge: { text: "Premium", color: "#e50914", textColor: "#ffffff" },
    isFree: false
  },

  // 8. Another Sun Bangla Show
  {
    id: 's7',
    channelId: 'sun',
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
  // Kurulus Osman (KS4) Episodes - Season 4
  {
    id: 'ks-s04e01.html',
    showId: 'kurulus-osman',
    season: 4,
    episodeNumber: 1,
    title: 'Rise of the Hidden Foe',
    thumbnail: 'https://ik.imagekit.io/ottstream/KS-S04-E01.webp?tr=w-1000,q-50',
    date: 'Feb 7, 2026',
    duration: '22m',
    videoUrl: 'https://stream.mux.com/uP9wqVLCyfOMLJ7DZl7ANqqUxkH5jVYdZo5SF1qz4zk.m3u8'
  },
  {
    id: 'ks-s01e01.html',
    showId: 'kurulus-osman',
    season: 1,
    episodeNumber: 1,
    title: 'Osman of the Hidden Foe',
    thumbnail: 'https://ik.imagekit.io/ottstream/KS-S04-E01.webp?tr=w-1000,q-50',
    date: 'Feb 7, 2026',
    duration: '22m',
    videoUrl: 'https://stream.mux.com/uP9wqVLCyfOMLJ7DZl7ANqqUxkH5jVYdZo5SF1qz4zk.m3u8'
  },
  {
    id: 'e11',
    showId: 'ks4',
    season: 4,
    episodeNumber: 2,
    title: 'The Great Betrayal',
    thumbnail: 'https://ik.imagekit.io/ottstream/KS-S04-E01.webp?tr=w-1000,q-50',
    date: 'Feb 8, 2026',
    duration: '45m',
    videoUrl: 'https://stream.mux.com/uP9wqVLCyfOMLJ7DZl7ANqqUxkH5jVYdZo5SF1qz4zk.m3u8'
  },

  // Naagin Episodes (S2) - Season 7
  {
    id: 'e1',
    showId: 's2',
    season: 7,
    episodeNumber: 14,
    title: 'Naagin Returns Home',
    thumbnail: 'https://img.freepik.com/free-photo/dark-forest-scene_23-2150795920.jpg',
    date: 'Feb 8, 2026',
    duration: '23m',
    videoUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' 
  },
  {
    id: 'e2',
    showId: 's2',
    season: 7,
    episodeNumber: 13,
    title: 'The Mystic Ritual',
    thumbnail: 'https://img.freepik.com/free-photo/mystic-ritual-scene_23-2150795925.jpg',
    date: 'Feb 7, 2026',
    duration: '22m',
    videoUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
  },

  // Parineeta Episodes (S3) - Season 1
  {
    id: 'e3',
    showId: 's3',
    season: 1,
    episodeNumber: 451,
    title: 'Wedding Bells',
    thumbnail: 'https://img.freepik.com/free-photo/indian-wedding-ceremony_23-2150935840.jpg',
    date: 'Feb 8, 2026',
    duration: '20m',
    videoUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
  },
  {
    id: 'e4',
    showId: 's3',
    season: 1,
    episodeNumber: 450,
    title: 'Dance Performance',
    thumbnail: 'https://img.freepik.com/free-photo/traditional-dance-performance_23-2150935845.jpg',
    date: 'Feb 7, 2026',
    duration: '21m',
    videoUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8'
  },

  // Mithai Episodes (S5) - Season 1
  {
    id: 'e101', 
    showId: 's5',
    season: 1,
    episodeNumber: 1,
    title: 'Mithai First Meeting', 
    thumbnail: 'https://img.freepik.com/free-photo/sweets-making_23-2150935845.jpg',
    date: '10 Feb 2026',
    duration: '21m',
    videoUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' 
  },
  {
    id: 'e102',
    showId: 's5', 
    season: 1,
    episodeNumber: 2,
    title: 'The Challenge Begins',
    thumbnail: 'https://img.freepik.com/free-photo/family-drama_23-2150795925.jpg',
    date: '11 Feb 2026',
    duration: '20m',
    videoUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' 
  }
];
