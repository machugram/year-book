import clubhouseclone from '@/images/experiments/clubhouse-clone.png';
import brankLogo from '@/images/experiments/brank.png';

export interface PersonType {
  name: string;
  quote: string;
  image: any;
  linkedin: string;
}

export const persons: PersonType[] = [
  {
    name: 'Lorem Machu',
    quote: 'Nothing Ventured, Nothing Gained',
    image: "https://images.unsplash.com/photo-1507537509458-b8312d35a233?auto=format&fit=crop&q=60&w=900&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHN0dWRlbnR8ZW58MHx8MHx8fDA%3D",
    linkedin: 'https://linkedin.com',
  },
];
