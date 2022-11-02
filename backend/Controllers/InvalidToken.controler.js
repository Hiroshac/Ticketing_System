import InvalidTokenModel from '../Models/InvalidToken.model.js';

//create invalid tokens
export const createInvalids = async (req, res, next) =>{
  const token = new InvalidTokenModel(req.body);
  try {
      const savedToken = await token.save();
      res.status(200).json(savedToken)
  }
  catch(err) {
      next(err);
  }
}

//get invalid tokens
export const getInvalids = async (req, res, next) => {
    try {
      const tokens = await InvalidTokenModel.find()
      res.status(200).json(tokens)
    } catch (err) {
      next(err)
    }
  }

 