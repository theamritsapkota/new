import { Destination } from '../types';

export const destinations: Destination[] = [
  {
    id: '1',
    name: 'Mount Everest Base Camp',
    shortDescription: 'The ultimate trekking adventure to the base of the world\'s highest peak.',
    fullDescription: 'Embark on the journey of a lifetime with the Everest Base Camp trek. This iconic adventure takes you through the heart of the Khumbu region, home to the legendary Sherpa people. Experience breathtaking mountain vistas, ancient monasteries, and the unique culture of the Himalayas. The trek offers stunning views of Everest, Lhotse, Nuptse, and other towering peaks while providing an unforgettable insight into the life and traditions of mountain communities.',
    images: [
      'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1366957/pexels-photo-1366957.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.8,
    reviewCount: 245,
    bestSeason: ['Spring', 'Autumn'],
    location: {
      lat: 27.9881,
      lng: 86.9250,
      address: 'Khumbu Region, Solukhumbu District, Nepal'
    },
    type: 'Trekking',
    difficulty: 'Difficult',
    duration: '14-16 days',
    price: 1299
  },
  {
    id: '2',
    name: 'Annapurna Circuit',
    shortDescription: 'Classic trek through diverse landscapes and cultures around Annapurna massif.',
    fullDescription: 'The Annapurna Circuit is one of Nepal\'s most popular and rewarding treks, offering incredible diversity in landscapes, cultures, and experiences. Journey through lush subtropical forests, alpine meadows, and high mountain deserts while crossing the challenging Thorong La Pass at 5,416m. Experience the hospitality of various ethnic communities including Gurungs, Thakalis, and Manangis, each with their unique traditions and lifestyles.',
    images: [
      'https://images.pexels.com/photos/1578662/pexels-photo-1578662.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.7,
    reviewCount: 189,
    bestSeason: ['Spring', 'Autumn'],
    location: {
      lat: 28.5967,
      lng: 83.9956,
      address: 'Annapurna Region, Gandaki Province, Nepal'
    },
    type: 'Trekking',
    difficulty: 'Moderate',
    duration: '12-20 days',
    price: 899
  },
  {
    id: '3',
    name: 'Kathmandu Valley',
    shortDescription: 'UNESCO World Heritage sites showcasing Nepal\'s rich cultural heritage.',
    fullDescription: 'Discover the cultural heart of Nepal in the Kathmandu Valley, home to seven UNESCO World Heritage Sites. Explore ancient palaces, temples, and stupas that tell the story of Nepal\'s rich history spanning over 2,000 years. Visit Pashupatinath Temple, Boudhanath Stupa, Swayambhunath (Monkey Temple), and the medieval cities of Kathmandu, Bhaktapur, and Patan with their exquisite architecture and living traditions.',
    images: [
      'https://images.pexels.com/photos/1387174/pexels-photo-1387174.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/5187636/pexels-photo-5187636.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.5,
    reviewCount: 312,
    bestSeason: ['Spring', 'Autumn', 'Winter'],
    location: {
      lat: 27.7172,
      lng: 85.3240,
      address: 'Kathmandu Valley, Bagmati Province, Nepal'
    },
    type: 'Cultural',
    difficulty: 'Easy',
    duration: '3-5 days',
    price: 199
  },
  {
    id: '4',
    name: 'Pokhara',
    shortDescription: 'Serene lake city with stunning Himalayan views and adventure activities.',
    fullDescription: 'Pokhara, the gateway to the Annapurnas, is a tranquil lakeside city offering breathtaking views of the Himalayas reflected in the pristine waters of Phewa Lake. Known as the adventure capital of Nepal, Pokhara offers paragliding, white-water rafting, zip-lining, and ultralight flights. Explore caves, waterfalls, and enjoy the laid-back atmosphere while taking in panoramic views of Machhapuchhre (Fishtail Peak) and the Annapurna range.',
    images: [
      'https://images.pexels.com/photos/1387577/pexels-photo-1387577.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1366630/pexels-photo-1366630.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/2885320/pexels-photo-2885320.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.6,
    reviewCount: 278,
    bestSeason: ['Spring', 'Autumn', 'Winter'],
    location: {
      lat: 28.2096,
      lng: 83.9856,
      address: 'Pokhara, Gandaki Province, Nepal'
    },
    type: 'Adventure',
    difficulty: 'Easy',
    duration: '2-4 days',
    price: 149
  },
  {
    id: '5',
    name: 'Lumbini',
    shortDescription: 'Birthplace of Lord Buddha and UNESCO World Heritage Site.',
    fullDescription: 'Lumbini, the sacred birthplace of Siddhartha Gautama (Lord Buddha), is one of the world\'s most important pilgrimage sites. This UNESCO World Heritage Site features the exact spot where Buddha was born, marked by the Mayadevi Temple. Explore the sacred garden, ancient ruins, and monasteries built by different countries, each representing their unique Buddhist architectural styles and traditions.',
    images: [
      'https://images.pexels.com/photos/6207589/pexels-photo-6207589.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/7293745/pexels-photo-7293745.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/10542968/pexels-photo-10542968.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.4,
    reviewCount: 156,
    bestSeason: ['Spring', 'Autumn', 'Winter'],
    location: {
      lat: 27.4833,
      lng: 83.2500,
      address: 'Lumbini, Lumbini Province, Nepal'
    },
    type: 'Religious',
    difficulty: 'Easy',
    duration: '1-2 days',
    price: 99
  },
  {
    id: '6',
    name: 'Chitwan National Park',
    shortDescription: 'Wildlife safari in Nepal\'s first national park with diverse flora and fauna.',
    fullDescription: 'Chitwan National Park, Nepal\'s first national park and a UNESCO World Heritage Site, offers an incredible wildlife experience in the subtropical lowlands of the Terai. Home to over 700 species of wildlife including the one-horned rhinoceros, Bengal tigers, elephants, and over 540 bird species. Enjoy jungle safaris, canoe rides, elephant bathing, and cultural performances by the indigenous Tharu community.',
    images: [
      'https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/3573382/pexels-photo-3573382.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    rating: 4.3,
    reviewCount: 203,
    bestSeason: ['Autumn', 'Winter', 'Spring'],
    location: {
      lat: 27.5291,
      lng: 84.3542,
      address: 'Chitwan National Park, Nawalpur District, Nepal'
    },
    type: 'Adventure',
    difficulty: 'Easy',
    duration: '2-3 days',
    price: 299
  }
];