import axios from "axios"

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
        case "FETCH_TODOS":
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}

// Thunk 
// Middleware - промежуточное ПО
// dispatch(fetchTodos())
export const fetchTodos = () => {
    return async (dispatch) => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/todos")
        dispatch({ type: "FETCH_TODOS", payload: response.data })
    }
}

// dispatch(addTodo("сходить в магазин"))
export const addTodo = (payload) => ({
    type: "ADD_TODO",
    payload
})

export const removeTodo = (payload) => ({
    type: "REMOVE_TODO",
    payload
})