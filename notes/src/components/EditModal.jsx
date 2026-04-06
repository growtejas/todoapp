function EditModal({ title, content, onSave, onCancel, onTitleChange, onContentChange }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <input
          value={title}
          placeholder="Title"
          onChange={onTitleChange}
        />
        <textarea
          value={content}
          placeholder="Take a note..."
          onChange={onContentChange}
        />
        <div className="modal-buttons">
          <button onClick={onSave} className="btn-save">Save</button>
          <button onClick={onCancel} className="btn-cancel">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;


