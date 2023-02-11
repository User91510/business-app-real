const initialState = 0;

interface Update {
    type: "update"
    payload: number
}

interface Delete {
    type: "delete"
    payload: number
}

type Action = Update | Delete

const reducer = (state: number = initialState, action: Action) => {
    switch(action.type){
        case "update":
        return state + action.payload
        case "delete":
        return state - action.payload
        default:
            return state

    }
}

export default reducer;