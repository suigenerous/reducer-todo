import React, {useReducer} from 'react';

export function reducer(state, action) {
    switch (action.type) {
        case 'ADD':
            const newTodoObj = {
                item: action.text,
                completed: false,
                id: Math.random()
            };
            return {
                todosArr: [...state.todosArr, newTodoObj]
            };
        case 'REMOVE':
            const index = state.todosArr.findIndex(todo => todo.id === action.id);
            const tempTodosArr = [...state.todosArr];
            tempTodosArr.splice(index, 1);
            return {
                todosArr: tempTodosArr
            };
        default:
            return state;
    }
};

export const initialTodosArr = [

    {
        item: 'todo 1',
        completed: false,
        id: 3892987189
    },

    {
        item: 'todo 2',
        completed: false,
        id: 3872987589
    },

    {
        item: 'todo 3',
        completed: false,
        id: 3892937589
    }

];

  