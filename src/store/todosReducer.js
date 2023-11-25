const initialState = {
    items: [],
    done: []
}

// {type: "ADD_TODO", payload: "сходить в магазин"}
// {type: "REMOVE_TODO", payload: "сходить в магазин"}
export const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                items: [...state.items, action.payload]
            }
        case "REMOVE_TODO":
            // const found = state.items.findIndex(item => item === action.payload)
            // if (found === -1) return state
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload)
            }
        default:
            return state;
    }
}

export const addTodo = (payload) => ({
    type: "ADD_TODO",
    payload
})