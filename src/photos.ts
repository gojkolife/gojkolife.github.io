// All photos and their stories live here. To add a photo:
// 1. put the JPEG in originals/   2. run `npm run photos`   3. add an entry below.
export interface Photo {
  id: string;
  title: string;
  place: string;
  /** optional, leave out if unsure */
  year?: string;
  story: string;
  alt: string;
  /** width / height of the prepared image */
  ratio: number;
}

export const photos: Photo[] = [
  {
    id: 'north',
    title: 'Into the cold',
    place: 'Alaska',
    story: 'One of the most dangerous roads in Alaska. Ice on the asphalt, nobody else in sight, and a mountain waiting at the end of it.',
    alt: 'A white off-road vehicle drives an icy highway towards a snow-covered mountain in Alaska.',
    ratio: 2000 / 1333
  },
  {
    id: 'lagoon',
    title: 'One set of footprints',
    place: 'Rangiroa, French Polynesia',
    story: 'An empty island in Rangiroa. From above, the lagoon turns every shade of blue, and there is only one set of footprints in the sand.',
    alt: 'Aerial view of palm trees, a white sand beach and a turquoise lagoon with one person walking along the shore.',
    ratio: 2000 / 1125
  },
  {
    id: 'haystack',
    title: 'Sea mist',
    place: 'Cannon Beach, Oregon',
    story: 'A stop on a road trip through America. Sea mist softened everything, and the light did the rest.',
    alt: 'Three people talking on a dark sand beach in front of Haystack Rock, softened by sea mist.',
    ratio: 1590 / 1333
  }
];

export const src = (id: string, width: 1000 | 2000) => `./photos/${id}-${width}.webp`;
export const srcSet = (id: string) => `${src(id, 1000)} 1000w, ${src(id, 2000)} 2000w`;
