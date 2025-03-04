import db from '../db';

// Define the model

export interface Product {
  id: number;
  name: string;
  description: string;
  onSale: boolean;
  salePercentage: number;
  price: number;
  rating?: number;
  salePrice?: number;
  supplier: number;
  image?: string;
  supplierName: string;
  supplierRating?: number;
  supplierType: string;
  supplierAddress: string;
  supplierImage: string;
  categoryId: number;
}
export const getProducts = (): Promise<Product[]> => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT p.*, p.category AS categoryId, s.name AS supplierName, s.rating AS supplierRating, 
              s.type AS supplierType, s.address AS supplierAddress, s.image AS supplierImage,
              s.id AS supplierId
       FROM product p
       JOIN supplier s ON p.supplier = s.id`,
      (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result as Product[]);
      },
    );
  });
};

export const getProductById = (id: number): Promise<Product> => {
  return new Promise((resolve, reject) => {
    db.query(
      `SELECT p.*, p.category AS categoryId, s.name AS supplierName, s.rating AS supplierRating,
              s.type AS supplierType, s.address AS supplierAddress, s.image AS supplierImage,
              s.id AS supplierId
       FROM product p
       JOIN supplier s ON p.supplier = s.id
       WHERE p.id = ?`,
      [id],
      (err, result: any) => {
        if (err) {
          reject(err);
          return;
        }
        resolve(result[0] as Product);
      },
    );
  });
};

export const createProduct = (product: Product): Promise<Product> => {
  return new Promise((resolve, reject) => {
    const { categoryId, ...rest } = product;
    const productData = { ...rest, category: categoryId };
    db.query('INSERT INTO product SET ?', [productData], (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({ ...product });
    });
  });
};

export const updateProduct = (
  id: number,
  product: Product,
): Promise<Product> => {
  return new Promise((resolve, reject) => {
    const { categoryId, ...rest } = product;
    const productData = { ...rest, category: categoryId };
    db.query(
      'UPDATE product SET ? WHERE id = ?',
      [productData, id],
      (err, result) => {
        if (err) {
          reject(err);
          return;
        }
        resolve({ ...product });
      },
    );
  });
};

export const deleteProduct = (id: number): Promise<void> => {
  return new Promise((resolve, reject) => {
    db.query('DELETE FROM product WHERE id = ?', [id], (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve();
    });
  });
};
