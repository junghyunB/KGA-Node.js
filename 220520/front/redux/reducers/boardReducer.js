// redux-actions npm install redux-actions
// const { createAction } = require("redux-actions")
const CHANGE_SUBJECT = "change_subject";
// const change_name = (payload) => ({type:CHANGE_NAME, payload})

// dispatch(change_name())

// const changeName = createAction("change_subject")
// console.log(changeName.toString())
const initalState = {
    list: [
        {
            idx: 0,
            subject: "asdf"
        }
    ]
}

const boardReducer = (state=initalState, action) => {
    switch(action.type) {
        case CHANGE_SUBJECT: {
            const newList = [...state.list]
            newList[0].subject = action.payload
            return {
                ...state,
                list:newList
            }
        }

        default:
            return state
    }
}

module.exports = boardReducer