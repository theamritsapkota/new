import { Review } from '../types';

export const reviews: Review[] = [
  {
    id: '1',
    userId: '1',
    userName: 'Sarah Johnson',
    userAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    destinationId: '1',
    rating: 5,
    comment: 'Absolutely incredible experience! The trek was challenging but so rewarding. The views of Everest were breathtaking and our guide was fantastic.',
    date: '2024-10-15',
  },
  {
    id: '2',
    userId: '2',
    userName: 'Michael Chen',
    userAvatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    destinationId: '1',
    rating: 4,
    comment: 'Great trek but requires good physical preparation. The accommodation was basic but adequate. Amazing mountain scenery throughout.',
    date: '2024-09-28',
  },
  {
    id: '3',
    userId: '3',
    userName: 'Emma Thompson',
    userAvatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    destinationId: '2',
    rating: 5,
    comment: 'The Annapurna Circuit exceeded all expectations. The diversity of landscapes and cultures was amazing. Thorong La Pass was the highlight!',
    date: '2024-10-20',
  },
  {
    id: '4',
    userId: '4',
    userName: 'David Rodriguez',
    userAvatar: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2',
    destinationId: '3',
    rating: 4,
    comment: 'Kathmandu Valley is a cultural treasure. So many temples and historical sites. The architecture in Bhaktapur is stunning.',
    date: '2024-10-10',
  },
];