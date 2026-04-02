import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import { NotesContext } from "./components/NotesContext";
import Draggable from "react-draggable";
import "./App.css";
function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const [editId, setEditId] = useState(null);
  const [filterText, setFilterText] = useState("");

  const [loading, setLoading] = useState(true);
  const [isPin, setIsPin] = useState([]);
  //const [theme, setTheme] = useState("light");

  const [notes, setNotesList] = useState(() => {
    const savedNotes = localStorage.getItem("myNotes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(notes));
  }, [notes]);

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  // const submitNote = () =>{
  //   const newNote ={
  //     title: title,
  //     content: content
  //   };

  //   setNotesList([...notes, newNote]);
  //   resetForm();
  // };
  function handleChange(e) {
    setFilterText(e.target.value);
  }

  const submitNote = (newNote) => {
    setNotesList((prevNotes) => {
      return [
        ...prevNotes,
        {
          id: Date.now(),
          ...newNote,
        },
      ];
    });
  };
  const deleteNote = (id) => {
    setNotesList((prevNotes) => {
      return prevNotes.filter((note0Item, index) => {
        return index !== id;
      });
    });
  };

  const pinNote = (id) => {
    setIsPin((prev) => {
      if (prev.includes(id)) {
        return prev.filter((pid) => pid !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const filteredNotes = notes.filter((note) => {
    return (
      note.title.toLowerCase().includes(filterText.toLowerCase()) ||
      note.content.toLowerCase().includes(filterText.toLowerCase())
    );
  });

  const pinnedItems = filteredNotes.filter((note) => isPin.includes(note.id));

  const unpinnedItems = filteredNotes.filter(
    (note) => !isPin.includes(note.id),
  );
  const finalNotes = [...pinnedItems, ...unpinnedItems];

  const startEdit = (id, note) => {
    setEditId(id);

    setTitle(note.title);
    setContent(note.content);
  };

  const saveEdit = () => {
    const updateNotes = notes.map((note) => {
      if (note.id === editId) {
        return {
          title: title,
          content: content,
        };
      } else {
        return note;
      }
    });

    setNotesList(updateNotes);

    setEditId(null);

    setTitle("");
    setContent("");
  };
  function resetForm() {
    setTitle("");
    setContent("");
    setIsExpanded(false);
  }

  console.log("isPin:", isPin);

  return (
    <div className={theme}>
      <div>
        {/* <Draggable>
      <div className="card">
        <h3>Drag Me</h3>
      </div>
    </Draggable> */}
        {loading ? (
          <p className="load">Loading...</p>
        ) : (
          <NotesContext.Provider
            value={{
              notes,
              submitNote,
              deleteNote,
              startEdit,
              saveEdit,
              pinNote,
            }}
          >
            <Header
              filterText={filterText}
              onSearch={handleChange}
              toggleTheme={toggleTheme}
            />

            <CreateArea />
            {notes.length === 0 ? (
              <p className="nonote">No notes available</p>
            ) : (
              <div className="notes-container">
                {finalNotes.map((note, index) => (
                  <div key={index} className="notes-wrapper">
                    <Note
                      id={note.id}
                      title={note.title}
                      content={note.content}
                      isPinned={isPin.includes(note.id)}
                    />
                  </div>
                ))}
              </div>
            )}
            {editId !== null && (
              <div className="modal-overlay">
                <div className="modal">
                  <input
                    value={title}
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <textarea
                    value={content}
                    placeholder="Take a note..."
                    onChange={(e) => setContent(e.target.value)}
                  />
                  <button onClick={saveEdit}>Save</button>
                  <button
                    onClick={() => {
                      setEditIndex(null);
                      resetForm();
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </NotesContext.Provider>
        )}
      </div>
    </div>
  );
}

export default App;
