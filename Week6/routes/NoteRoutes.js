
const express = require('express');
const Note = require('../models/NotesModel'); 
const noteRoutes = express.Router();

noteRoutes.post('/notes', async (req, res) => {
  try {
    const { noteTitle, noteDescription, priority, dateAdded, dateUpdated } = req.body;

    if (!noteTitle || !noteDescription) {
      return res.status(400).json({ message: 'Note title and description are required.' });
    }

    const savedNote = await Note.create({
      noteTitle,
      noteDescription,
      priority,
      dateAdded,
      dateUpdated,
    });

    res.status(201).json(savedNote);
  } catch (err) {
    console.error('Error creating note:', err);
    res.status(500).json({ message: 'Error creating note', error: err.message });
  }
});

noteRoutes.get('/notes', async (_req, res) => {
  try {

    const notes = await Note.find().sort({ dateAdded: -1 });
    res.status(200).json(notes);
  } catch (err) {
    console.error('Error retrieving notes:', err);
    res.status(500).json({ message: 'Error retrieving notes', error: err.message });
  }
});

noteRoutes.get('/notes/:noteId', async (req, res) => {
  try {
    const note = await Note.findById(req.params.noteId);
    if (!note) {
      return res.status(404).json({ message: `Note not found with id ${req.params.noteId}` });
    }
    res.status(200).json(note);
  } catch (err) {
    console.error('Error retrieving note:', err);
    res.status(500).json({ message: 'Error retrieving note', error: err.message });
  }
});

noteRoutes.put('/notes/:noteId', async (req, res) => {
  try {
    const { noteTitle, noteDescription, priority, dateAdded } = req.body;

    if (!noteTitle || !noteDescription) {
      return res.status(400).json({ message: 'Note title and description cannot be empty.' });
    }

    const updatedNote = await Note.findByIdAndUpdate(
      req.params.noteId,
      {
        noteTitle,
        noteDescription,
        priority,
        ...(dateAdded ? { dateAdded } : {}),
      },
      { new: true, runValidators: true }
    );

    if (!updatedNote) {
      return res.status(404).json({ message: `Note not found with id ${req.params.noteId}` });
    }

    res.status(200).json(updatedNote);
  } catch (err) {
    console.error('Error updating note:', err);
    res.status(500).json({ message: 'Error updating note', error: err.message });
  }
});

noteRoutes.delete('/notes/:noteId', async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.noteId);

    if (!deletedNote) {
      return res.status(404).json({ message: `Note not found with id ${req.params.noteId}` });
    }

    res.status(200).json({ message: 'Note deleted successfully.' });
  } catch (err) {
    console.error('Error deleting note:', err);
    res.status(500).json({ message: 'Error deleting note', error: err.message });
  }
});

module.exports = noteRoutes;
