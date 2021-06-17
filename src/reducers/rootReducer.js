const initState = {
    options: [
        {
            id: 1,
            content: 'Option 0',
            value: ['test', 'test3']
        },
        { id: 2, content: 'Option 1', value: ['test2'] },
        { id: 3, content: 'Option 2', value: ['test2'] },
    ]
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'ADD_OPTION') {
        return {
            ...state,
            options: [...state.options, action.options],
        }
    }
    return state;
}

export default rootReducer;