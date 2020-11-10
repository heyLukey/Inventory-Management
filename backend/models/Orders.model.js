const mongoose = require("mongoose");

// Order Schema
const orderSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    min: 1,
    max: 24,
  },
  description: {
    type: String,
    required: true,
    trim: true,
    min: 1,
    max: 280,
  },
  todo: {
    polishing: { type: Boolean, default: false, required: true },
    sizing: { type: Boolean, default: false, required: true },
    lazer: { type: Boolean, default: false, required: true },
    engraving: { type: Boolean, default: false, required: true },
    plating: { type: Boolean, default: false, required: true },
    rhodium: { type: Boolean, default: false, required: true },
    cleaning: { type: Boolean, default: false, required: true },
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    max: 264,
  },
  deadline: {
    type: Date,
    required: true,
    // set to ISO to allow same day
    min: new Date().toISOString(),
  },
  date: {
    type: Date,
    default: Date.now,
  },
  recycled: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("Orders", orderSchema);
