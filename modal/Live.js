/* eslint-disable camelcase */
const mongoose = require('mongoose');

const liveSchema = new mongoose.Schema({
  userid: {
    type: String,
  },
  value: {
    type: Number,
  },
  startdate: {
      type: String
  },
  enddate: {
    type: String
  },
  systemdate: {
    type: Date,
    default:new Date()
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model('userlivestep', liveSchema);
