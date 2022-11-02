import RouteModel from "../Models/Route.model.js";

//create route

export const createRoute = async (req, res, next) =>{
  const table = new RouteModel(req.body);
  try {
      const savedTable = await table.save();
      res.status(200).json(savedTable)
  }
  catch(err) {
      next(err);
  }
}

//get routes

export const getRoutes = async (req, res, next) => {
    try {
      const tables = await RouteModel.find()
      res.status(200).json(tables)
    } catch (err) {
      next(err)
    }
  }