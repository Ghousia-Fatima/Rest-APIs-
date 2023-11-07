const Note = require('../Models/notesModels')

// 1. Get All Notes

const fetchAllNotes = async(req, res)=>{
     // 2. Use Mongoose command to store data into MongoDB
     const notes  = await Note.find({})

     // 3. respond back to user
    res.status(200).json({message:"fetch all Notes", notes:notes})
}

// 2. Post New Note 

const PostNewNote = async (req,res)=>{
    // 1. Receiving Data for storing into Database
    const note= { 
        title:  req.body.title,
        body: req.body.body 
    }
    // 2. Use Mongoose command to store data into MongoDB
    // model.create(Object)
    await Note.create(note)

    // 3. Respond back to user
    res.status(200).json({message:"New Note Created", note:note})

}

// 3. Update a Note 
const updateNote = async(req, res)=>{
    // 1. Get the ID of the note we want to update
    const noteID = req.params.id

    // 2. get the data off from the body
    const updatedNote= { 
        title:  req.body.title,
        body: req.body.body 
    }
    // 3. Update data in the database based on the ID
    await Note.findByIdAndUpdate(noteID, updatedNote)

    // 4. Respond back to the client
    res.status(200).json({message:"Note Updated", note:updatedNote})
}

// 4. Delete a Note 
const deleteNote = async (req, res)=>{
    // 1. Get the note you want to delete
    const noteID = req.params.id

    // 2. Based on ID from parameter, we will use Mongoose command to delete the data in the database
    const note = await Note.findByIdAndDelete(noteID)

    // 3. Respond back to client
    res.status(200).json({message:"Note Deleted", note:note})
}

// 5. Fetch a Single Note
const fetcANote = async(req, res)=>{
    // 1. Get the note you want to update
    const noteID = req.params.id
    
    // 2. Based on Id from parameter, we will use mongoose command to fetch a single record from the database
    const note = await Note.findById(noteID)
    
    // 3. Respond back to client
    res.status(200).json({message:"Note Fetched", note:note})
}

module.exports = {
                   fetchAllNotes, 
                   PostNewNote, 
                   updateNote, 
                   deleteNote, 
                   fetcANote
                }