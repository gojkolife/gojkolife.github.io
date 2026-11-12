// All photos and their stories live here. To add a photo:
// 1. put the JPEG in originals/   2. run `npm run photos`   3. add an entry below (id = file name).
// The order below is the order of the "Selected work" gallery.
import sizes from './photo-sizes.json';

export type Category = 'Places' | 'People' | 'Animals' | 'Stays';

export interface Photo {
  id: string;
  category: Category;
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

/** Portrait for the About section (not part of the gallery) */
export const aboutPhoto = {
  id: 'about-alaska',
  alt: 'Gojko leaning on a white off-road vehicle with its headlights on, holding a camera, as snow falls on an Alaskan road.'
};

const list: Omit<Photo, 'ratio'>[] = [
  {
    id: 'north',
    category: 'Places',
    title: 'Into the cold',
    place: 'Dalton Highway, Alaska',
    story: 'One of the most dangerous roads in Alaska. Ice on the asphalt, nobody else in sight, and a mountain waiting at the end of it.',
    alt: 'A white off-road vehicle drives an icy highway towards a snow-covered mountain in Alaska.'
  },
  {
    id: 'fushimi-inari',
    category: 'Places',
    title: 'A thousand gates',
    place: 'Fushimi Inari-taisha, Kyoto',
    story: '',
    alt: 'A path winding through a tunnel of bright orange torii gates with black Japanese inscriptions.'
  },
  {
    id: 'lagoon',
    category: 'Places',
    title: 'One set of footprints',
    place: 'Rangiroa, French Polynesia',
    story: 'An empty island in Rangiroa. From above, the lagoon turns every shade of blue, and there is only one set of footprints in the sand.',
    alt: 'Aerial view of palm trees, a white sand beach and a turquoise lagoon with one person walking along the shore.'
  },
  {
    id: 'lombok-weaver',
    category: 'People',
    title: 'The hat maker',
    place: 'Lombok, Indonesia',
    story: '',
    alt: 'An older man in a straw hat and red sweater sits on a wooden bench, weaving a new hat from dried leaves, green hills behind him.'
  },
  {
    id: 'havana',
    category: 'Places',
    title: 'Golden hour traffic',
    place: 'Cuba',
    story: '',
    alt: 'A classic blue American car and a moped on a city street in Cuba, backlit by low golden sunlight.'
  },
  {
    id: 'cuba-step',
    category: 'People',
    title: 'Afternoon on the step',
    place: 'Cuba',
    story: '',
    alt: 'Black and white portrait of an older man with a white moustache sitting on a step against a two-tone wall, looking into the camera.'
  },
  {
    id: 'cheetah-gaze',
    category: 'Animals',
    title: 'Eye contact',
    place: OKAPUKA,
    story: 'Safari at Okapuka. The others rested in the shade, and this one decided to look straight back.',
    alt: 'A cheetah in dappled shade looking straight into the camera, with other cheetahs resting behind it.'
  },
  {
    id: 'deadvlei',
    category: 'Places',
    title: 'What stays',
    place: 'Deadvlei, Namibia',
    story: 'Trees that died centuries ago, still standing between red dunes and a deep blue sky. The colours do the talking.',
    alt: 'A dead camel thorn tree on a white clay pan in front of a red sand dune under a deep blue sky.'
  },
  {
    id: 'langur',
    category: 'Animals',
    title: 'Reflections',
    place: 'Near Jaipur, India',
    story: '',
    alt: 'Close-up portrait of a grey langur monkey with a black face, wild eyebrows and amber eyes.'
  },
  {
    id: 'cuba-thumbs',
    category: 'People',
    title: 'Two thumbs up',
    place: 'Cuba',
    story: '',
    alt: 'Black and white portrait of a man in a bucket hat and patterned shirt giving two thumbs up with a serious face.'
  },
  {
    id: 'alaska-cabin',
    category: 'Places',
    title: 'Somewhere quiet',
    place: 'Alaska',
    story: '',
    alt: 'A red cabin on the shore of a frozen lake, dark spruce forest around it and snow-covered mountains in the clouds behind.'
  },
  {
    id: 'macaque',
    category: 'Animals',
    title: 'Unimpressed',
    place: '',
    story: '',
    alt: 'A long-tailed macaque sitting on white sand in front of dark rocks, glancing sideways with amber eyes.'
  },
  {
    id: 'haystack',
    category: 'Places',
    title: 'Sea mist',
    place: 'Cannon Beach, Oregon',
    story: 'A stop on a road trip through America. Sea mist softened everything, and the light did the rest.',
    alt: 'Three people talking on a dark sand beach in front of Haystack Rock, softened by sea mist.'
  },
  {
    id: 'cuba-chess',
    category: 'People',
    title: 'Your move',
    place: 'Cuba',
    story: '',
    alt: 'Black and white photo of a man on a stone bench reaching for a chess piece on a small board beside him.'
  },
  {
    id: 'rhino',
    category: 'Animals',
    title: 'Heavyweight',
    place: OKAPUKA,
    story: '',
    alt: 'Close-up of a white rhino with a long horn, head lowered in front of dark thorn bushes.'
  },
  {
    id: 'rockies-cabin',
    category: 'Places',
    title: 'Fireweed season',
    place: 'Canadian Rockies',
    story: '',
    alt: 'A small cabin among spruce trees behind a meadow of pink fireweed, with a glacier and waterfall between mountains beyond.'
  },
  {
    id: 'crocodile',
    category: 'Animals',
    title: 'Patience',
    place: OKAPUKA,
    story: 'Half asleep in the sun, one eye still open. The closer you look, the more there is to see.',
    alt: 'Close-up of a crocodile resting in brown water, one golden eye half open, teeth showing.'
  },
  {
    id: 'tiger',
    category: 'Animals',
    title: 'The yawn',
    place: 'Ranthambore, India',
    story: '',
    alt: 'A tiger lying on green grass with its mouth wide open, showing its fangs.'
  },
  {
    id: 'alp-cow',
    category: 'Animals',
    title: 'The locals',
    place: 'Switzerland',
    story: '',
    alt: 'A black and white cow with a bell standing on an alpine meadow, with snow-capped Swiss Alps behind.'
  },
  {
    id: 'beach-bali',
    category: 'Places',
    title: 'Through the leaves',
    place: 'Kelingking Beach, Nusa Penida',
    year: '2023',
    story: '',
    alt: 'A turquoise bay and a sandy beach under green cliffs on Nusa Penida, seen from above through tropical leaves.'
  },
  {
    id: 'zebras',
    category: 'Animals',
    title: 'Two of a kind',
    place: OKAPUKA,
    story: '',
    alt: 'Two zebras in tall golden grass, one in profile and one looking over its back.'
  },
  {
    id: 'deadvlei-dance',
    category: 'Places',
    title: 'Dancing in Deadvlei',
    place: 'Deadvlei, Namibia',
    story: '',
    alt: 'A person in a striped shirt dancing on the white clay pan of Deadvlei, with a dead tree and a red dune behind.'
  },
  {
    id: 'ibiza-1',
    category: 'Stays',
    title: 'The view from inside',
    place: 'Ibiza',
    story: '',
    alt: 'View through open dark doors onto a shaded terrace with a wooden daybed, a coffee cup on a low table and pine-covered hills beyond.'
  },
  {
    id: 'ibiza-2',
    category: 'Stays',
    title: 'Morning coffee',
    place: 'Ibiza',
    story: '',
    alt: 'A tattooed man sitting on a terrace daybed with a coffee cup, looking out over forested hills under a reed roof.'
  },
  {
    id: 'ibiza-3',
    category: 'Stays',
    title: 'Slow afternoon',
    place: 'Ibiza',
    story: '',
    alt: 'A wooden daybed with grey cushions and a low table holding an open book and a cup, in warm sunlight in front of dry grass and trees.'
  },
  {
    id: 'ibiza-4',
    category: 'Stays',
    title: 'Two pairs of sandals',
    place: 'Ibiza',
    story: '',
    alt: 'A wooden armchair on a stone terrace in low sunlight, two pairs of sandals beside it and green hills in the distance.'
  },
  {
    id: 'ibiza-5',
    category: 'Stays',
    title: 'White walls',
    place: 'Ibiza',
    story: '',
    alt: 'A whitewashed wall, a dark wooden door with a towel and hat on hooks, a potted cactus and a wooden chair on a stone terrace.'
  },
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
