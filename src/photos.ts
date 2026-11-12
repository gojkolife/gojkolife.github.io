// All photos and their stories live here. To add a photo:
// 1. put the JPEG in originals/   2. run `npm run photos`   3. add an entry below.
export interface Photo {
  id: string;
  title: string;
  place: string;
  year: string;
  story: string;
  alt: string;
  /** width / height of the prepared image */
  ratio: number;
}

export const photos: Photo[] = [
  {
    id: 'north',
    title: 'The road north',
    place: 'Dalton Highway, Alaska',
    year: '2025',
    story: 'Minus twenty, empty road, and a mountain that made us stop the car.',
    alt: 'A white off-road vehicle drives an icy highway towards a snow-covered mountain in Alaska.',
    ratio: 2000 / 1333
  },
  {
    id: 'lagoon',
    title: 'One set of footprints',
    place: 'French Polynesia',
    year: '2025',
    story: 'From above, the lagoon turns every shade of blue. Down there, just one person and the tide.',
    alt: 'Aerial view of palm trees, a white sand beach and a turquoise lagoon with one person walking along the shore.',
    ratio: 2000 / 1125
  },
  {
    id: 'haystack',
    title: 'Morning haze',
    place: 'Cannon Beach, Oregon',
    year: '2025',
    story: 'Sea mist softened everything. Three friends, one rock, and the light doing the rest.',
    alt: 'Three people talking on a dark sand beach in front of Haystack Rock, softened by sea mist.',
    ratio: 1590 / 1333
  }
];

export const src = (id: string, width: 1000 | 2000) => `./photos/${id}-${width}.webp`;
export const srcSet = (id: string) => `${src(id, 1000)} 1000w, ${src(id, 2000)} 2000w`;
