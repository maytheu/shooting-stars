import { RequestHandler } from "express";

import Controller from ".";

class HomeController extends Controller {
  postMainCategory: RequestHandler = async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  };

  postCategory: RequestHandler = async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  };

  postAnnouncement: RequestHandler = async (req, res, next) => {
    try {
    } catch (error) {
      next(error);
    }
  };

  postShop: RequestHandler = async (req, res, next) => {
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
