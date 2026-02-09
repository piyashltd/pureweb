// File: src/data/dummyData.js

export const channels = [
  { id: 'zee', name: 'Zee Bangla', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Zee_Bangla_logo.svg/1200px-Zee_Bangla_logo.svg.png', color: 'bg-red-600' },
  { id: 'star', name: 'Star Jalsha', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/25/Star_Jalsha_Logo.svg/1200px-Star_Jalsha_Logo.svg.png', color: 'bg-orange-500' },
  { id: 'colors', name: 'Colors Bangla', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e4/Colors_Bangla_logo.svg/1200px-Colors_Bangla_logo.svg.png', color: 'bg-indigo-600' },
  { id: 'sun', name: 'Sun Bangla', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/0/0e/Sun_Bangla_Logo.png/220px-Sun_Bangla_Logo.png', color: 'bg-yellow-600' },
];

export const sliders = [
  { id: 1, title: "Amader Dadamoni", image: "https://t3.ftcdn.net/jpg/06/15/80/36/360_F_615803658_S53m6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x6x.jpg", showId: 's1' },
  { id: 2, title: "Naagin S07 (Hindi)", image: "https://img.freepik.com/free-photo/mysterious-woman-forest_23-2150795893.jpg", showId: 's2' },
  { id: 3, title: "Parineeta", image: "https://img.freepik.com/free-photo/indian-couple-wedding-attire_23-2150935821.jpg", showId: 's3' }
];

export const shows = [
  {
    id: 's1',
    channelId: 'zee',
    title: 'Jowar Bhanta',
    poster: 'https://img.freepik.com/free-photo/portrait-young-woman-traditional-sari_23-2149539227.jpg',
    description: 'A tale of two sisters separated by destiny.',
    // Badge added with color code
    badge: { text: "Watch Free", color: "#e50914" }, // Red
    isFree: false
  },
  {
    id: 's2',
    channelId: 'colors',
    title: 'Naagin S07 (Hindi)',
    poster: 'https://img.freepik.com/free-photo/fantasy-woman-portrait-forest_23-2150795908.jpg',
    description: 'The shapeshifting serpent returns for revenge.',
    badge: { text: "Premium", color: "#1e3a8a" }, // Navy Blue
    isFree: true
  },
  {
    id: 's3',
    channelId: 'star',
    title: 'Parineeta',
    poster: 'https://img.freepik.com/free-photo/indian-wedding-couple-posing_23-2150935835.jpg',
    description: 'A love story that defies societal norms.',
    badge: null, // No Badge
    isFree: false
  },
  {
    id: 's4',
    channelId: 'sun',
    title: 'Besh Korechi Prem Korechi',
    poster: 'https://img.freepik.com/free-photo/young-students-campus_23-2148522338.jpg',
    description: 'High school romance and drama.',
    badge: { text: "Free", color: "#16a34a" }, // Green
    isFree: true
  }
];

export const episodes = [
  {
    id: 'e1',
    showId: 's2',
    season: 7,
    episodeNumber: 14,
    title: 'Naagin Returns Home', // Removed "Episode 14" from title
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
  }
];
// Shows Array তে যুক্ত করুন:

// উদাহরণ ১: "Watch Free" ব্যাজ (Teal কালার - কালো লেখা)
{
  id: 's5', // ইউনিক ID হতে হবে
  channelId: 'zee', // channels অ্যারের ID এর সাথে মিল থাকতে হবে
  title: 'Mithai',
  poster: 'https://img.freepik.com/free-photo/sari-woman-portrait_23-2149539227.jpg',
  description: 'A sweet tale of a confectioner.',
  badge: { 
      text: "Watch Free", 
      color: "#00bfa5",    // Teal Background
      textColor: "#000000" // Black Text
  },
  isFree: true
},

// উদাহরণ ২: "Premium" ব্যাজ (Red কালার - সাদা লেখা)
{
  id: 's6',
  channelId: 'star',
  title: 'Horogouri Pice Hotel',
  poster: 'https://img.freepik.com/free-photo/indian-couple_23-2150935821.jpg',
  description: 'Managing a family hotel business.',
  badge: { 
      text: "Premium", 
      color: "#e50914",    // Red Background
      textColor: "#ffffff" // White Text
  },
  isFree: false
},

// উদাহরণ ৩: কোনো ব্যাজ ছাড়া (No Badge)
{
  id: 's7',
  channelId: 'sun',
  title: 'Phaguner Mohona',
  poster: 'https://img.freepik.com/free-photo/traditional-look_23-2149539250.jpg',
  description: 'A romantic drama series.',
  badge: null, // ব্যাজ না চাইলে null দিন
  isFree: false
}
// Episodes Array তে যুক্ত করুন:

// উদাহরণ: Mithai সিরিয়ালের (id: 's5') এপিসোড
{
  id: 'e101', // ইউনিক এপিসোড ID
  showId: 's5', // এটি অবশ্যই শো-এর ID (s5) হতে হবে
  season: 1,
  episodeNumber: 1,
  title: 'Mithai First Meeting', // ছোট টাইটেল
  thumbnail: 'https://img.freepik.com/free-photo/sweets-making_23-2150935845.jpg',
  date: '10 Feb 2026',
  duration: '21m',
  videoUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' 
},
{
  id: 'e102',
  showId: 's5', // সেইম শো ID
  season: 1,
  episodeNumber: 2,
  title: 'The Challenge Begins',
  thumbnail: 'https://img.freepik.com/free-photo/family-drama_23-2150795925.jpg',
  date: '11 Feb 2026',
  duration: '20m',
  videoUrl: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8' 
}
