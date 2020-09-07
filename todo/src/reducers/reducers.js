import React, {useReducer} from 'react';

export function todoReducer(state, action) {
    switch (action.type) {
        case 'ADD' :{
            const newTodoObj1 = {
                item: action.text,
                completed: false,
                id: Math.random()
            };
            const newTodosArr1 = [...state.todosArr, newTodoObj1];
            return {todosArr: newTodosArr1};
        }
        case 'REMOVE' :{
            const index1 = state.todosArr.findIndex(todo => todo.id === action.id);
            const newTodosArr2 = [...state.todosArr];
            newTodosArr2.splice(index1, 1);
            return {todosArr: newTodosArr2};
        }
        case 'MARK_COMPLETE' :{
            const index2 = state.todosArr.findIndex(todo => todo.id === action.id);
            const newTodoObj2 = state.todosArr[index2];
            newTodoObj2.completed = true;
            const newTodosArr3 = [...state.todosArr];
            newTodosArr3.splice(index2, 1, newTodoObj2);
            return {todosArr: newTodosArr3};
        }
        case 'MARK_INCOMPLETE' :{
            const index2 = state.todosArr.findIndex(todo => todo.id === action.id);
            const newTodoObj2 = state.todosArr[index2];
            newTodoObj2.completed = false;
            const newTodosArr3 = [...state.todosArr];
            newTodosArr3.splice(index2, 1, newTodoObj2);
            return {todosArr: newTodosArr3};
        }
        default:
            return state;
    }
};

export const initialState = {

    todosArr: 
        [

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

        ]

}