import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
  //simulate delay
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error('Failed to fetch meals!!!')
  //run for inserting, all for accessing all
  //get for single row from db
  return db.prepare('SELECT * FROM meals').all();
}

export  function getMeal(slug) {
  
  return db.prepare('SELECT * FROM meals WHERE slug= ?').get(slug);
}
