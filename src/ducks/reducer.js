const INITIAL_STATE = {
    num: 0
};

const ADD_NUMBER = "ADD_NUMBER";
const SUB_NUMBER = "SUB_NUMBER";
const MUL_NUMBER = "MUL_NUMBER";
const DIV_NUMBER = "DIV_NUMBER";



export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case ADD_NUMBER:

            return {...state, num: state.num + 1};

        case SUB_NUMBER:

            return {...state, num: state.num - 1}

        case MUL_NUMBER: 

            return {...state, num: state.num * state.num}
        
        case DIV_NUMBER: 

            return {...state, num: state.num % 2}

        default: return state;
    }
};

export function add(){
    return {
        type: ADD_NUMBER,
        payload: null
    }
}

export function sub(){
    return {
        type: SUB_NUMBER,
        payload: null
    }
}

export function multiply(){
    return {
        type: MUL_NUMBER,
        payload: null
    }
}

export function divide(){
    return {
        type: DIV_NUMBER,
        payload: null
    }
}
