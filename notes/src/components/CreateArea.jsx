import { useState } from "react";
import {Edit, SaveOff, Delete} from "lucide-react";

function cancel(){
        setTitle("");
        setContent("");
        setIsExpanded(false);
    }

function CreateArea(props) {
  // Keep your states here
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // The Logic Function
  function submitLocalNote(event) {
    // Logic - Package the title and content
    const newNote = {
      title: title,
      content: content
    };


    // Logic- Send it to the App.jsx
    props.onAdd(newNote);

    // Logic - Clear the inputs
    setTitle("");
    setContent("");

    // Prevent the page from refreshing 
    event.preventDefault();
  }

  return (
    <form className="create-note">
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
      placeholder='Take a note...'
      rows={isExpanded ? 3 : 1}/>
 
    {isExpanded && (
     <div className="button-container">
      <button onClick={submitLocalNote} > <SaveOff>Save</SaveOff></button>
      <button onClick={cancel} >Cancel</button>
     </div>
    )}
    </form>
  );
}

export default CreateArea; 