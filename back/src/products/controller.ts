import * as model from './model';
import e, { Request, Response, NextFunction } from 'express';

// Define the controller

export const getProducts = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  model
    .getProducts()
    .then((products) => {
      return response.send(products);
    })
    .catch((error) => {
      next(error); // Pass the error to Express error handling middleware
    });
};

export const getProductById = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  model
    .getProductById(Number(request.params.id))
    .then((product) => {
      return response.send(product);
    })
    .catch((error) => {
      next(error); // Pass the error to Express error handling middleware
    });
};

export const createProduct = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  model
    .createProduct(request.body)
    .then((product) => {
      return response.send(product);
    })
    .catch((error) => {
      next(error); // Pass the error to Express error handling middleware
    });
};

export const updateProduct = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  model
    .updateProduct(Number(request.params.id), request.body)
    .then((product) => {
      return response.send(product);
    })
    .catch((error) => {
      next(error); // Pass the error to Express error handling middleware
    });
};

export const deleteProduct = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  model
    .deleteProduct(Number(request.params.id))
    .then(() => {
      return response.send('Product deleted');
    })
    .catch((error) => {
      next(error); // Pass the error to Express error handling middleware
    });
};
