const express = require('express')
const router = express.Router()

const {fetchAllNotes, PostNewNote, updateNote, deleteNote, fetchANote} = require ('../Controller/noteController')

//Creating End Points

// 1. GET Method
router.get('/', fetchAllNotes)

// 2. POST Method

router.post('/', PostNewNote)
    

// 3. PUT Method
router.put('/:id', updateNote)

// 4. DELETE Method
router.delete('/:id', deleteNote)

// 5. Fetch a Single Note
router.get('/:id', fetchANote)


module.exports = router