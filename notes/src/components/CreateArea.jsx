import { useContext, useState } from "react";
//import { Edit, SaveOff, Delete } from "lucide-react";
//import { Download } from "./components/animate-ui"; 

import { NotesContext } from "./NotesContext";

function CreateArea() {
  // Keep your states here
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { submitNote } = useContext(NotesContext);
  // The Logic Function
  
  function submitLocalNote(event) {
    // Logic - Package the title and content
    const newNote = {
      title: title,
      content: content,
    };

    // Logic- Send it to the App.jsx
    submitNote(newNote);

    // Logic - Clear the inputs
    setTitle("");
    setContent("");

    // Prevent the page from refreshing
    event.preventDefault();
  }
  function cancel() {
    setTitle("");
    setContent("");
    setIsExpanded(false);
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
      <textarea
        type="text"
        value={content}
        onClick={() => setIsExpanded(true)}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Take a note..."
        rows={isExpanded ? 3 : 1}
      />

      {isExpanded && (
        <div className="button-container">
          <button onClick={submitLocalNote} className="flex items-center gap-2">
            {/* <Download animateOnHover /> */}
            Save
          </button>

          {/* <button onClick={submitLocalNote}>
            {" "}
            <SaveOff>Save</SaveOff>
          </button> */}
          <button onClick={cancel}>Cancel</button>
        </div>
      )}
    </form>
  );
}

export default CreateArea;
