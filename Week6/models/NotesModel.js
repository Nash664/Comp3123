// models/NotesModel.js
const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema(
  {
    noteTitle: {
      type: String,
      required: true,
      trim: true,
    },
    noteDescription: {
      type: String,
      required: true,
      trim: true,
    },
    priority: {
      type: String,
      enum: ['HIGH', 'MEDIUM', 'LOW'],
      default: 'LOW',
    },
    dateAdded: { type: Date, default: Date.now },
    dateUpdated: { type: Date, default: Date.now },
  },
  {
    timestamps: true,
  }
);
noteSchema.pre('save', function (next) {
  this.dateUpdated = Date.now();
  next();
});

noteSchema.pre(['findOneAndUpdate', 'findByIdAndUpdate'], function (next) {
  this.set({ dateUpdated: Date.now() });
  next();
});

module.exports = mongoose.model('Note', noteSchema);
