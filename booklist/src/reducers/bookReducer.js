import uuid from 'uuid/v1';

export const bookReducer = (state, action) => {
    if (action.type === 'addBook') {
        return [...state, {title: action.book.title, author: action.book.author, id: uuid()}];
    } else if (action.type === 'removeBook') {
        return state.filter(book => book.id !== action.id);
    } else {
        return state;
    }
}