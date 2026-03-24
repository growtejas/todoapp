function Note(props){
    return(
        <div className="note-card">
            <h1>{props.title}</h1>
            <p>{props.content}</p>

            <div className="note-btns-wrapper">
                <button onClick={()=>{props.onDelete(props.id)}}>
                    Delete
                </button>
                <button onClick={props.onEdit}>Edit</button>  
            </div>

        </div>
    );
} 
export default Note;