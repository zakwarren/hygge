import Dexie from "dexie";

const db = new Dexie("hygge");

db.version(1).stores({
  images: `++id, image, attribution, category`,
});

export default db;
