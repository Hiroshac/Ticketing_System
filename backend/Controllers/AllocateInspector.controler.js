import AllocateInspectorModel from "../Models/AllocateInspector.model.js";

export const AllocateAPI = () =>{

  //create allocate inspector
  const AllocateInspector = async (req, res, next) => {
    const token = new AllocateInspectorModel(req.body)
    try {
      const savedInspector = await token.save()
      res.status(200).json(savedInspector)
    } catch (err) {
      next(err)
    }
  }

  //get allocated inspectors
  const getAllocatedInspectors = async (req, res, next) => {
    try {
      const inspectors = await AllocateInspectorModel.find()
      res.status(200).json(inspectors)
    } catch (err) {
      next(err)
    }
  }

  return {

    add: AllocateInspector,

    get: getAllocatedInspectors,
  }

}
