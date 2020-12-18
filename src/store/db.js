import Dexie from "dexie";

const db = new Dexie("hygge");

export const TABLE_NAMES = {
  categories: "categories",
  images: "images",
};

db.version(1).stores({
  [TABLE_NAMES.categories]: "id, category, name, color",
  [TABLE_NAMES.images]: "id, image, attribution, category",
});

export default db;
