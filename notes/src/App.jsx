import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import Note from "./components/Note";
import CreateArea from "./components/CreateArea";
import EditModal from "./components/EditModal";
import { NotesContext } from "./components/NotesContext";
import "./App.css";
function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);

  const [editId, setEditId] = useState(null);
  const [filterText, setFilterText] = useState("");

  const [loading, setLoading] = useState(true);

  const [notes, setNotesList] = useState(() => {
    const savedNotes = localStorage.getItem("myNotes");
    if (!savedNotes) return [];
    
    const parsedNotes = JSON.parse(savedNotes);
    // Ensure all notes have IDs (for backward compatibility)
    return parsedNotes.map((note) => ({
      id: note.id || Date.now() + Math.random(),
      title: note.title || "",
      content: note.content || "",
    }));
  });

  const [isPin, setIsPin] = useState(() => {
    const savedPins = localStorage.getItem("pinnedNotes");
    return savedPins ? JSON.parse(savedPins) : [];
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(notes));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("pinnedNotes", JSON.stringify(isPin));
  }, [isPin]);

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
      return prevNotes.filter((note) => note.id !== id);
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
          id: note.id,
          title: title,
          content: content,
        };
      } else {
        return note;
      }
    });

    setNotesList(updateNotes);
    resetForm();
    setEditId(null);
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
              theme={theme}
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
              <EditModal
                title={title}
                content={content}
                onTitleChange={(e) => setTitle(e.target.value)}
                onContentChange={(e) => setContent(e.target.value)}
                onSave={saveEdit}
                onCancel={() => {
                  setEditId(null);
                  resetForm();
                }}
              />
            )}
          </NotesContext.Provider>
        )}
      </div>
    </div>
  );
}

export default App;
