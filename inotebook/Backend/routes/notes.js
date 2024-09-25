const express = require('express');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middleware/fetchUser');
const Notes = require('../models/Notes');

const router = express.Router();

// ROUTE 1: Get All the Notes using : GET "/api/notes/fetchallnotes". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Notes.find({ user: req.user.id });
        res.json(notes);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
    }
});

// ROUTE 2: Add a New Note using : POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a Valid Title').isLength({ min: 3 }),
    body('description', 'Description Must be At least 5 Characters!').isLength({ min: 5 }),
], async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Create and save the new note
        const note = new Notes({
            title,
            description,
            tag,
            user: req.user.id
        });
        const savedNote = await note.save();

        res.json(savedNote);
    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
    }
});


// ROUTE 3: Update an Existing Note using :- PUT "/api/notes/updatenote/:id". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    try {
        const { title, description, tag } = req.body;

        // Create a newNote Object
        const newNote = {};
        if (title) newNote.title = title;
        if (description) newNote.description = description;
        if (tag) newNote.tag = tag;

        // Check for validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        // Find the Note to be Updated & update it
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }

        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
        res.json({ note });

    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
    }
});


// ROUTE 4: Delete an Existing Note using: DELETE "/api/notes/deleteenote/:id". Login required
router.delete('/deletenote/:id', fetchuser, async (req, res) => {
    try {
        
        // Find the Note to be delete & delete it
        let note = await Notes.findById(req.params.id);
        if (!note) {
            return res.status(404).send("Note not found");
        }

        // Allow Deletion only if user owns this Note
        if (note.user.toString() !== req.user.id) {
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndDelete(req.params.id);
        res.json({ "Success": "Note Has Been Deleted !!", note });

    } catch (error) {
        console.error(error.message);
        return res.status(500).send("Internal Server Error");
    }
});


module.exports = router;
