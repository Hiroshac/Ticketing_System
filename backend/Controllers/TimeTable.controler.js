import TimeTableModel from "../Models/TimeTable.model.js";
// create stream

export const createTimetable = async (req, res, next) =>{
    const table = new TimeTableModel(req.body);
    try {
        const savedTable = await token.save();
        res.status(200).json(savedTable)
    }
    catch(err) {
        next(err);
    }
}

//get Streams

export const getTables = async (req, res, next) => {
    try {
      const tables = await TimeTableModel.find()
      res.status(200).json(tables)
    } catch (err) {
      next(err)
    }
  }