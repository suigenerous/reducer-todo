import React, {useState} from 'react';

export default function TodosForm(props) {
    const [text, setText] = useState("");
    return (
        <div>
            <input
                value = {text}
                onChange = {e => setText(e.target.value)}
            />
            <button onClick={() => {props.add(text); setText("")}}>Add To-do</button>

        </div>
    );
}