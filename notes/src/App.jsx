import { useState } from 'react'
import {Header} from './components/Header'

function App() {
const [isExpanded, setIsExpanded] = useState(false);
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [notes, setNotesList] = useState([]);
const [editIndex, setEditIndex] = useState(null);

const submitNote = () =>{
  const newNote ={
    title: title,
    content: content
  };
    
  setNotesList([...notes, newNote]);
  resetForm();
};
   
const deleteNote = (id) => {
  setNotesList(prevNotes => {
    return prevNotes.filter((noteItem, index) => {
      return index !== id; 
    });        
  });
};

const startEdit = (index, note) => {
  setEditIndex(index);

  setTitle(note.title);
  setContent(note.content);
}

const saveEdit = () =>{
  const updateNotes = notes.map((note, index) => {
    if(index === editIndex){
      return{  
        title: title,
        content: content  
      }
    }else{
      return note;
    }
  });

setNotesList(updateNotes);

  setEditIndex(null);

  setTitle("");
  setContent("");
}
function resetForm(){
  setTitle("");
  setContent("");
  setIsExpanded(false);
}
const cancel = () => {
  resetForm();
};
  return (
    
    <div>
      <Header/>
      {isExpanded && (
      <input 
        placeholder="Title" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
      />
        )}

      <textarea type="text" value={content} 
      onClick={() => setIsExpanded(true)}
      onChange={(e)=> setContent(e.target.value)} 
      placeholder='Take a note...'/>

      <button onClick={submitNote}>Save</button>
      <button onClick={cancel}>Cancel</button>  

      {notes.map((note, index) => (
  <div key={index} style={{ border: "1px solid #ccc", margin: "10px" }}>
    {editIndex === index ? (
      <>
        <input 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />
        <button onClick={saveEdit}>Save</button>
        <button onClick={() => {
          setEditIndex(null);
          resetForm();
        }}>Cancel</button>
      </>
    ) : (
      <>
        <h1>{note.title}</h1>
        <p>{note.content}</p>
        <button onClick={() => deleteNote(index)}>Delete</button>
        <button onClick={() => startEdit(index, note)}>Edit</button>
      </>
    )}
  </div>
))}
    </div>
  );
}

export default App
