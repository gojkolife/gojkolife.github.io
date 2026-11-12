// All photos and their stories live here. To add a photo:
// 1. put the JPEG in originals/   2. run `npm run photos`   3. add an entry below (id = file name).
// The order below is the order of the "Selected work" gallery.
import sizes from './photo-sizes.json';

export interface Photo {
  id: string;
  title: string;
  /** leave empty ('') until known */
  place: string;
  /** optional, leave out if unsure */
  year?: string;
  /** one or two sentences, can be empty */
  story: string;
  /** describes the photo for people using screen readers */
  alt: string;
  /** width / height, filled in automatically from photo-sizes.json */
  ratio: number;
}

const OKAPUKA = 'Okapuka, Namibia';

const list: Omit<Photo, 'ratio'>[] = [
  {
    id: 'north',
    title: 'Into the cold',
    place: 'Dalton Highway, Alaska',
    story: 'One of the most dangerous roads in Alaska. Ice on the asphalt, nobody else in sight, and a mountain waiting at the end of it.',
    alt: 'A white off-road vehicle drives an icy highway towards a snow-covered mountain in Alaska.'
  },
  {
    id: 'lagoon',
    title: 'One set of footprints',
    place: 'Rangiroa, French Polynesia',
    story: 'An empty island in Rangiroa. From above, the lagoon turns every shade of blue, and there is only one set of footprints in the sand.',
    alt: 'Aerial view of palm trees, a white sand beach and a turquoise lagoon with one person walking along the shore.'
  },
  {
    id: 'cheetah-gaze',
    title: 'Eye contact',
    place: OKAPUKA,
    story: 'Safari at Okapuka. The others rested in the shade, and this one decided to look straight back.',
    alt: 'A cheetah in dappled shade looking straight into the camera, with other cheetahs resting behind it.'
  },
  {
    id: 'deadvlei',
    title: 'What stays',
    place: 'Deadvlei, Namibia',
    story: 'Trees that died centuries ago, still standing between red dunes and a deep blue sky. The colours do the talking.',
    alt: 'A dead camel thorn tree on a white clay pan in front of a red sand dune under a deep blue sky.'
  },
  {
    id: 'langur',
    title: 'Reflections',
    place: 'Near Jaipur, India',
    story: '',
    alt: 'Close-up portrait of a grey langur monkey with a black face, wild eyebrows and amber eyes.'
  },
  {
    id: 'haystack',
    title: 'Sea mist',
    place: 'Cannon Beach, Oregon',
    story: 'A stop on a road trip through America. Sea mist softened everything, and the light did the rest.',
    alt: 'Three people talking on a dark sand beach in front of Haystack Rock, softened by sea mist.'
  },
  {
    id: 'rhino',
    title: 'Heavyweight',
    place: OKAPUKA,
    story: '',
    alt: 'Close-up of a white rhino with a long horn, head lowered in front of dark thorn bushes.'
  },
  {
    id: 'crocodile',
    title: 'Patience',
    place: OKAPUKA,
    story: 'Half asleep in the sun, one eye still open. The closer you look, the more there is to see.',
    alt: 'Close-up of a crocodile resting in brown water, one golden eye half open, teeth showing.'
  },
  {
    id: 'tiger',
    title: 'The yawn',
    place: 'Ranthambore, India',
    story: '',
    alt: 'A tiger lying on green grass with its mouth wide open, showing its fangs.'
  },
  {
    id: 'cheetahs-walking',
    title: 'Moving on',
    place: OKAPUKA,
    story: '',
    alt: 'Two cheetahs walking away through golden grass.'
  },
  {
    id: 'beach-bali',
    title: 'Through the leaves',
    place: 'Kelingking Beach, Nusa Penida',
    year: '2023',
    story: '',
    alt: 'A turquoise bay and a sandy beach under green cliffs on Nusa Penida, seen from above through tropical leaves.'
  },
  {
    id: 'zebras',
    title: 'Two of a kind',
    place: OKAPUKA,
    story: '',
    alt: 'Two zebras in tall golden grass, one in profile and one looking over its back.'
  },
  {
    id: 'deadvlei-dance',
    title: 'Dancing in Deadvlei',
    place: 'Deadvlei, Namibia',
    story: '',
    alt: 'A person in a striped shirt dancing on the white clay pan of Deadvlei, with a dead tree and a red dune behind.'
  },
  {
    id: 'cheetah-shade',
    title: 'In the shade',
    place: OKAPUKA,
    story: '',
    alt: 'A cheetah sitting under a thorny tree in dry golden grass, looking towards the camera.'
  }
];

const size: Record<string, number[]> = sizes;
export const photos: Photo[] = list.map((p) => {
  if (!size[p.id]) throw new Error(`No prepared photo for "${p.id}". Run npm run photos.`);
  const [w, h] = size[p.id];
  return { ...p, ratio: w / h };
});

export const src = (id: string, width: 1000 | 2000) => `./photos/${id}-${width}.webp`;
export const srcSet = (id: string) => `${src(id, 1000)} 1000w, ${src(id, 2000)} 2000w`;

/** "Place, Year" with empty parts left out */
export const where = (p: Photo) => [p.place, p.year].filter(Boolean).join(', ');
