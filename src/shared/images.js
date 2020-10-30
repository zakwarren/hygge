import { CATEGORIES, RANDOM, ALL } from "./categories";

import blanket1 from "../assets/images/sincerely-media-9nhxEa3PK30-unsplash.jpg";
import book1 from "../assets/images/annie-spratt-OQj0chxpZOI-unsplash.jpg";
import book2 from "../assets/images/clay-banks-z_DkoUqgx6M-unsplash.jpg";
import cabin1 from "../assets/images/jyrki-sorjonen-WnWwzDxvA2M-unsplash.jpg";
import cabin2 from "../assets/images/olivier-guillard-FKJgBUDoVC0-unsplash.jpg";
import fire1 from "../assets/images/stephane-juban-DI8Bf6K1134-unsplash.jpg";
import rain1 from "../assets/images/aditya-vyas-PzhmEp_aDU4-unsplash.jpg";
import rain2 from "../assets/images/john-noonan-E-9CFTftQh4-unsplash.jpg";
import snow1 from "../assets/images/emily-toycen-jd_YFWRkOqQ-unsplash.jpg";

const random_amount = 4;

const IMAGE_MAPPING = [
  {
    id: 1,
    image: blanket1,
    attribution: "Photo by Sincerely Media on Unsplash",
    category: CATEGORIES.warmth.name,
  },
  {
    id: 2,
    image: book1,
    attribution: "Photo by Annie Spratt on Unsplash",
    category: CATEGORIES.warmth.name,
  },
  {
    id: 3,
    image: book2,
    attribution: "Photo by Clay Banks on Unsplash",
    category: CATEGORIES.surreal.name,
  },
  {
    id: 4,
    image: cabin1,
    attribution: "Photo by Jyrki Sorjonen on Unsplash",
    category: CATEGORIES.seasons.name,
  },
  {
    id: 5,
    image: cabin2,
    attribution: "Photo by Olivier Guillard on Unsplash",
    category: CATEGORIES.SEASONS,
  },
  {
    id: 6,
    image: fire1,
    attribution: "Photo by Stéphane Juban on Unsplash",
    category: CATEGORIES.warmth.name,
  },
  {
    id: 7,
    image: rain1,
    attribution: "Photo by Aditya Vyas on Unsplash",
    category: CATEGORIES.seasons.name,
  },
  {
    id: 8,
    image: rain2,
    attribution: "Photo by John Noonan on Unsplash",
    category: CATEGORIES.seasons.name,
  },
  {
    id: 9,
    image: snow1,
    attribution: "Photo by Emily Toycen on Unsplash",
    category: CATEGORIES.seasons.name,
  },
];

export const getImages = (category) => {
  let filtered;

  if (category === RANDOM) {
    const shuffled = IMAGE_MAPPING.sort(() => 0.5 - Math.random());
    filtered = shuffled.slice(0, random_amount);
  } else if (category && category !== ALL.name) {
    filtered = IMAGE_MAPPING.filter((map) => map.category === category);
  } else {
    filtered = IMAGE_MAPPING;
  }

  const images = filtered.map((map) => {
    return { ...map, display: true, isExpanded: false };
  });
  return images;
};
