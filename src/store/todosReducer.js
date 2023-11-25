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
            return {
                ...state,
                items: state.items.filter(item => item !== action.payload)
            }
        default:
            return state;
    }
}