import { RequestHandler } from "express";

import Controller from ".";

class HomeController extends Controller {
  mainCategory: RequestHandler = async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  };

  category: RequestHandler = async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  };

  announcement: RequestHandler = async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  };

  shop: RequestHandler = async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  };

  home: RequestHandler = async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  };
}

export default new HomeController();
