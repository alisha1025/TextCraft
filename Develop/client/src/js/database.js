import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('jate')) {
        db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      }
    },
  });

export const putDb = async (content) => {
  const db = await openDB('jate', 1);
  await db.put('jate', { id: 1, content });
};

export const getDb = async () => {
  const db = await openDB('jate', 1);
  const result = await db.get('jate', 1);
  return result ? result.content : '';
};

initdb();
