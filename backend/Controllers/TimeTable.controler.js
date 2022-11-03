import TimeTableModel from "../Models/TimeTable.model.js";

export const TimeTableAPI = ()=>{
  
  // create create time table

  const createTimetable = async (req, res, next) =>{
    const table = new TimeTableModel(req.body);
    try {
        const savedTable = await table.save();
        res.status(200).json(savedTable)
    }
    catch(err) {
        next(err);
    }
  }

  //get time tables

  const getTables = async (req, res, next) => {
    try {
      const tables = await TimeTableModel.find()
      res.status(200).json(tables)
    } catch (err) {
      next(err)
    }
  }

  
  return {

    add: createTimetable,

    get: getTables,
  }


}

