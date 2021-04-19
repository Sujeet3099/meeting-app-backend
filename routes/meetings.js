const express = require('express');
const router = express.Router();

const meetingController = require('./meetingController');

/* GET users listing. */
// router.get('/', function (req, res, next) {
//   res.send('respond with a resource');
// });

router
  .route('/')
  .get(meetingController.getMeeting)
  .post(meetingController.createMeeting)
  .delete(meetingController.deleteMeeting);

module.exports = router;
