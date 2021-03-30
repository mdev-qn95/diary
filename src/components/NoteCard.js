import React from 'react'

const NoteCard = (props) => (
    <div className="alert alert-success">
        {props.children}
    </div>
)

export default NoteCard