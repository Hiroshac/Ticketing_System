import PublicManagerModel from "../Models/PublicManager.model.js"

//create manager

export const createManager = async (req, res, next) => {
    const token = new PublicManagerModel(req.body)
    try {
      const savedInspector = await token.save()
      res.status(200).json(savedInspector)
    } catch (err) {
      next(err)
    }
  }

//get all managers
export const getAllManagers = async (req, res, next) => {
    try {
      const inspectors = await PublicManagerModel.find()
      res.status(200).json(inspectors)
    } catch (err) {
      next(err)
    }
  }