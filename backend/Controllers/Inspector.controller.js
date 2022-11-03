import InspectorModel from "../Models/Inspector.model.js"


export const InspectorAPI = ()=>{

  //create inspectors
  const createInspector = async (req, res, next) => {
    const token = new InspectorModel(req.body)
    try {
      const savedInspector = await token.save()
      res.status(200).json(savedInspector)
    } catch (err) {
      next(err)
    }
  }

  //get all inspectors
  const getAllInspectors = async (req, res, next) => {
    try {
      const inspectors = await InspectorModel.find()
      res.status(200).json(inspectors)
    } catch (err) {
      next(err)
    }
  }

  
  return {

    add: createInspector,

    get: getAllInspectors,
  }


}
