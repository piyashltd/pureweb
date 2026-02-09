// File: src/data/dummyData.js

export const channels = [
  { id: 'zee', name: 'Zee Bangla', logo: 'data:image/jpeg;base64,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', color: 'bg-red-600' },
  { id: 'star', name: 'Star Jalsha', logo: 'https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/4937/1424937-a-5279bcd44654', color: 'bg-orange-500' },
  { id: 'colors', name: 'Colors Bangla', logo: 'https://img10.hotstar.com/image/upload/f_auto,q_90/sources/r1/cms/prod/6059/1738210846059-a', color: 'bg-indigo-600' },
  { id: 'sun', name: 'Sun Bangla', logo: 'https://sund-images.sunnxt.com/194388/200x200_SunBangla_194388_9c4b5c51-1554-4507-83a8-7b54f31a8967.png', color: 'bg-yellow-600' },
];

export const sliders = [
  { id: 1, title: "Amader Dadamoni", image: "https://t3.ftcdn.net/jpg/06/15/80/36/360_F_615803658_S53m6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x.jpg", showId: 's1' },
  { id: 2, title: "Naagin S07 (Hindi)", image: "https://img.freepik.com/free-photo/mysterious-woman-forest_23-2150795893.jpg", showId: 's2' },
  { id: 3, title: "Parineeta", image: "https://img.freepik.com/free-photo/indian-couple-wedding-attire_23-2150935821.jpg", showId: 's3' },
  // নতুন স্লাইডার যোগ করতে চাইলে এখানে কমা দিয়ে অবজেক্ট দিন
  { id: 4, title: "Mithai", image: "https://img.freepik.com/free-photo/wide-banner-indian_23-2149539227.jpg", showId: 's5' }
];

export const shows = [
  {
    id: 's1',
    channelId: 'zee',
    title: 'Jowar Bhanta',
    poster: 'https://img.freepik.com/free-photo/portrait-young-woman-traditional-sari_23-2149539227.jpg',
    description: 'A tale of two sisters separated by destiny.',
    badge: { text: "Watch Free", color: "#e50914" }, 
    isFree: false
  },
  {
    id: 's2',
    channelId: 'colors',
    title: 'Naagin S07 (Hindi)',
    poster: 'https://img.freepik.com/free-photo/fantasy-woman-portrait-forest_23-2150795908.jpg',
    description: 'The shapeshifting serpent returns for revenge.',
    badge: { text: "Premium", color: "#1e3a8a" }, 
    isFree: true
  },
  {
    id: 's3',
    channelId: 'star',
    title: 'Parineeta',
    poster: 'https://img.freepik.com/free-photo/indian-wedding-couple-posing_23-2150935835.jpg',
    description: 'A love story that defies societal norms.',
    badge: null, 
    isFree: false
  },
  {
    id: 's4',
    channelId: 'sun',
    title: 'Besh Korechi Prem Korechi',
    poster: 'https://img.freepik.com/free-photo/young-students-campus_23-2148522338.jpg',
    description: 'High school romance and drama.',
    badge: { text: "Free", color: "#16a34a" }, 
    isFree: true
  },
  // -------- নতুন শো এখান থেকে শুরু (খেয়াল করুন সব একই ব্র্যাকেটের ভেতরে) --------
  {
    id: 's5', 
    channelId: 'zee', 
    title: 'Mithai',
    poster: 'https://img.freepik.com/free-photo/sari-woman-portrait_23-2149539227.jpg',
    description: 'A sweet tale of a confectioner.',
    badge: { 
        text: "Watch Free", 
        color: "#00bfa5",    
        textColor: "#000000" 
    },
    isFree: true
  },
  {
    id: 's6',
    channelId: 'star',
    title: 'Horogouri Pice Hotel',
    poster: 'https://img.freepik.com/free-photo/indian-couple_23-2150935821.jpg',
    description: 'Managing a family hotel business.',
    badge: { 
        text: "Premium", 
        color: "#e50914",    
        textColor: "#ffffff" 
    },
    isFree: false
  },
  {
    id: 's7',
    channelId: 'sun',
    title: 'Phaguner Mohona',
    poster: 'https://img.freepik.com/free-photo/traditional-look_23-2149539250.jpg',
    description: 'A romantic drama series.',
    badge: null,
    isFree: false
  }
]; // shows অ্যারে এখানে শেষ হয়েছে

export const episodes = [
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
  // -------- নতুন এপিসোড এখান থেকে শুরু --------
  {
    id: 'e101', 
    showId: 's5', // Mithai (s5) এর এপিসোড
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
]; // episodes অ্যারে এখানে শেষ হয়েছে
