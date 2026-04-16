import { useState } from "react";

function Notes() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [note, setNote] = useState("");
    const [savedNotes, setSavedNotes] = useState([]);

    const handleSave = () => {
        if(note.trim() !== "") {
            setSavedNotes([
                ...savedNotes, 
                note
            ]);
            setNote("");
            setIsExpanded(false);
        }
    }
    return (
        <div className={`card notes-container ${isExpanded ? 'expanded' : ''}`}>
            <h3 className="notas">Notes</h3>

            {!isExpanded ? (
                <button onClick={() => setIsExpanded(true)} className="btn-add">
                    + New
                </button>
                
            ): (
                <div className="note-editor">
                    <p className="decorado"> ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ ⋆.˚ 𓆉 𓆝 𓆡⋆.˚ </p>

                    <textarea 
                        value={note} 
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Add your note ♡"
                        />
                    <div className="buttons">
                        <button onClick={handleSave}>Save</button>
                        <button onClick={() => setIsExpanded(false)} className="btn-cancel">Cancel</button>
                     </div>
                </div>
            )}
            <ul className="notes-list">
                {savedNotes.map((n, index) => (
                    <li key={index}>{n}</li>
                ))}
            </ul>
        </div>
    )
}

export default Notes;