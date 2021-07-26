import React, { useState } from "react";
import Heading from "./heading";
import Notes from "./Notes";
import Footer from "./Footer";
import CreateArea from "./CreateArea";
import { IndexKind } from "typescript";

function App() {
    const [notes, setNotes] = useState([]);

    function AddNote(Note) {
        console.log(Note)
        setNotes((pre) => ([...pre, Note]));
    }
    function DeleteNote(NoteIndex) {
        notes.splice(NoteIndex, 1);
        console.log(notes);
        setNotes((pre) => ([...pre]));
    }
    return (
        <div>
            <Heading />
            <CreateArea
                onAdd={AddNote}
            />
            {notes.map((Note, index) => (
                <Notes
                    key={index}
                    id={index}
                    title={Note.title}
                    content={Note.content}
                    Delete={DeleteNote}
                />
            ))
            }
            <Footer />
        </div>)
}
export default App;