const Meeting = require('../Modal');

exports.createMeeting = async (req, res, next) => {
  try {
    const newMeeting = await Meeting.create(req.body);
    console.log(req.body);
    res.status(201).json({
      status: 'success',
      data: { meeting: newMeeting },
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      error: error,
    });
  }
};

exports.getMeeting = async (req, res, next) => {
  try {
    const { name, from, to } = req.query;
    // console.log(name, from, to);
    var meetings;
    if (name === '') {
      if (from && to) {
        meetings = await Meeting.find({
          meetingDate: { $lte: new Date(`${to}`), $gte: new Date(`${from}`) },
        });
      } else if (from) {
        meetings = await Meeting.find({
          meetingDate: { $gte: new Date(`${from}`) },
        });
      } else if (to) {
        meetings = await Meeting.find({
          meetingDate: { $lte: new Date(`${to}`) },
        });
      } else {
        meetings = await Meeting.find();
      }
    } else {
      if (from && to) {
        meetings = await Meeting.find({
          name: { $regex: new RegExp('^' + name, 'i') },
          meetingDate: { $lte: new Date(`${to}`), $gte: new Date(`${from}`) },
        });
      } else if (from) {
        meetings = await Meeting.find({
          name: { $regex: new RegExp('^' + name, 'i') },

          meetingDate: { $gte: new Date(`${from}`) },
        });
      } else if (to) {
        meetings = await Meeting.find({
          name: { $regex: new RegExp('^' + name, 'i') },
          meetingDate: { $lte: new Date(`${to}`) },
        });
      } else {
        meetings = await Meeting.find({
          name: { $regex: new RegExp('^' + name, 'i') },
        });
      }
    }
    res.status(200).json({
      status: 'success',
      result: meetings.length,
      data: { meetings },
    });
  } catch (error) {
    res.status(404).json({
      status: 'failed',
      error: error,
    });
  }
};

exports.deleteMeeting = async (req, res, next) => {
  try {
    console.log(req.query.id);
    const meeting = await Meeting.findByIdAndDelete(req.query.id);
    console.log(meeting);
    res.status(200).json({
      status: 'success',
      result: meeting,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      error: error,
    });
  }
};
