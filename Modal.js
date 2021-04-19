const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Name is required for a meeting.'],
    unique: true,
    trim: true,
  },
  people: {
    type: Number,
    required: [true, 'Number of People is required for a meeting.'],
  },

  meetingDate: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  startTime: {
    type: String,
  },
  endTime: {
    type: String,
  },
});

const Meeting = mongoose.model('Meeting', meetingSchema);

module.exports = Meeting;
