import InvalidTokenModel from '../Models/InvalidToken.model.js';

// create stream

export const createInvalids = async (req, res, next) => {
  const token = new InvalidTokenModel(req.body)
  try {
    const savedToken = await token.save()
    res.status(200).json(savedToken)
  } catch (err) {
    next(err)
  }
}

// export const createInvalids = async (req, res, next) => {
//   try {
//     const token = new InvalidTokenModel({
//       inspectorid: req.body.inspectorid,
//       date: req.body.date,
//       count: req.body.count,
//       grade: req.body.grade,
//       route: req.file.route,
//       reason:req.body.reason
//     })
//     await token.save()
//     res.status(200).json('Success.....')
//   } catch (err) {
//     next(err)
//   }
// }

//get Streams

export const getInvalids = async (req, res, next) => {
    try {
      const tokens = await InvalidTokenModel.find()
      res.status(200).json(tokens)
    } catch (err) {
      next(err)
    }
  }