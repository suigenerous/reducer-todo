import React, { useReducer } from 'react';
import { todoReducer, initialState } from '../reducers/reducers';
import Todo from './Todo';

export default function TodosList(props){
    const [state, dispatch] = useReducer(todoReducer, initialState);

    return(
        <div>
            {state.todosArr.map(t => (
                <Todo
                    key = {t.id}
                    todo = {t}
                    remove = {() => dispatch({type: "REMOVE", id: t.id })}
                    toggleComplete = {t.completed === false ? () => dispatch({type: "MARK_COMPLETE", id: t.id}) : () => dispatch({type: "MARK_INCOMPLETE", id: t.id})
                    }
                />
            ))}
        </div>
    )
}
