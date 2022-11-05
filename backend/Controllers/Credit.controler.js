import CreditModel from "../Models/Credit.model.js";

export const creditAPI = () =>{

  //create allocate inspector
  const AddCredit = async (req, res, next) => {
    const credit = new CreditModel(req.body)
    try {
      const savedCredit = await credit.save()
      res.status(200).json(savedCredit)
    } catch (err) {
      next(err)
    }
  }

  //get allocated inspectors
  const getCredit = async (req, res, next) => {
    try {
      const credits = await CreditModel.find()
      res.status(200).json(credits)
    } catch (err) {
      next(err)
    }
  }

  return {

    add: AddCredit,

    get: getCredit,
  }

}
