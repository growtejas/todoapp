import { useContext } from "react";
import { NotesContext } from "./NotesContext";


function Note({ title, content, id, isPinned }){
    const { deleteNote, startEdit, pinNote } = useContext(NotesContext);
    //console.log(id, isPinned);
    return(
        <div className="note-card">
            {isPinned && <span className="pin-label">📌 Pinned</span>}
            <h1>{title}</h1>
            <p>{content}</p>
            
            <div className="note-btns-wrapper">
                <button onClick={() => deleteNote(id)}>
                    Delete
                </button>

                <button onClick={() => startEdit(id, {
                    title: title,
                    content: content
                    })}>
                    Edit
                </button> 

                <button onClick={() => pinNote(id)}>Pin</button>
            </div>

        </div>
    );
} 
export default Note;