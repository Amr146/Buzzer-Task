import db from '../db';

export type Category = {
  id: number;
  name: string;
};

export const getCategories = (): Promise<Category[]> => {
  return new Promise((resolve, reject) => {
    db.query('SELECT * FROM category', (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result as Category[]);
    });
  });
};

export const getCategoryById = (id: number): Promise<Category> => {
  return new Promise((resolve, reject) => {
    db.query(
      'SELECT * FROM category WHERE id = ?',
      [id],
      (err, result: any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result[0] as Category);
      },
    );
  });
};

export const createCategory = (category: Category): Promise<Category> => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO category SET ?', [category], (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ...category });
    });
  });
};

export const updateCategory = (
  id: number,
  category: Category,
): Promise<Category> => {
  return new Promise((resolve, reject) => {
    db.query(
      'UPDATE category SET ? WHERE id = ?',
      [category, id],
      (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({ ...category });
      },
    );
  });
};

export const deleteCategory = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM category WHERE id = ?', [id], (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};
