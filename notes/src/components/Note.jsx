import { useContext } from "react";
import { NotesContext } from "./NotesContext";


function Note({ title, content, id }){
    const { deleteNote, startEdit } = useContext(NotesContext);
    return(
        <div className="note-card">
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
            </div>

        </div>
    );
} 
export default Note;