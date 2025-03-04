import * as model from './model';

import { Request, Response, NextFunction } from 'express';

// Define the controller

export const getCategories = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  model
    .getCategories()
    .then((categories) => {
      return response.send(categories);
    })
    .catch((error) => {
      next(error); // Pass the error to Express error handling middleware
    });
};

export const getCategoryById = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  model
    .getCategoryById(Number(request.params.id))
    .then((category) => {
      return response.send(category);
    })
    .catch((error) => {
      next(error); // Pass the error to Express error handling middleware
    });
};

export const createCategory = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  model
    .createCategory(request.body)
    .then((category) => {
      return response.send(category);
    })
    .catch((error) => {
      next(error); // Pass the error to Express error handling middleware
    });
};

export const updateCategory = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  model
    .updateCategory(Number(request.params.id), request.body)
    .then((category) => {
      return response.send(category);
    })
    .catch((error) => {
      next(error); // Pass the error to Express error handling middleware
    });
};

export const deleteCategory = (
  request: Request,
  response: Response,
  next: NextFunction,
): void => {
  model
    .deleteCategory(Number(request.params.id))
    .then(() => {
      return response.send('Category deleted');
    })
    .catch((error) => {
      next(error); // Pass the error to Express error handling middleware
    });
};
