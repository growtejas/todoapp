import { useState, useEffect } from 'react';
import {Header} from './components/Header';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import './App.css';
function App() {

const [title, setTitle] = useState("");
const [content, setContent] = useState("");

const [editIndex, setEditIndex] = useState(null);

const [notes, setNotesList] = useState(() => {
  const savedNotes = localStorage.getItem("myNotes");
  return savedNotes ? JSON.parse(savedNotes) : [];
});

useEffect(() => {
  localStorage.setItem("myNotes", JSON.stringify(notes));
}, [notes]);



// const submitNote = () =>{
//   const newNote ={
//     title: title,
//     content: content
//   };
    
//   setNotesList([...notes, newNote]);
//   resetForm();
// };
   
const submitNote = (newNote) => {
  setNotesList(prevNotes => {
    return [...prevNotes, newNote];
  });
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

  return (
    
    <div >
      <Header/>
      <CreateArea onAdd={submitNote} /> 

    <div className="notes-container"> 

      {notes.map((note, index) => (
  <div key={index}  className='notes-wrapper'>
    {editIndex === index ? (
      <>
        <input 
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)} 
        />
        <textarea 
          value={content} 
          placeholder='Take a note...'
          onChange={(e) => setContent(e.target.value)} 
          
        />
        <button  onClick={props.onSave(tempTitle, tempContent) && saveEdit}>Save</button>
        <button onClick={() => {
          setEditIndex(null);
          resetForm();
        }}>Cancel</button>
      </>
    ) : (
      <Note
        key={index}
        id={index}
        title={note.title}
        content={note.content}
        onDelete={deleteNote}
        onEdit={()=> startEdit(index, note)}
      />
    )}
  </div>
))}
    </div>
    </div>
  );
}

export default App
