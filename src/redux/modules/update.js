import { creacteAction, createAction, handleActions } from 'redux-actions';
import {produce} from 'immer';
import axios from 'axios';

const LOAD_TODOLIST = "LOAD_TODOLIST";

const loadTodolist = createAction(LOAD_TODOLIST, (load_list) => load_list);

const initialState = {
    load_list : [],
}

const loadTodolistDB = () =>{
    return function (dispatch, getState, {history}){
        axios({
            headers : {
                "Content-Type" : "application/json"
            },
            method : 'get',
            url : "http://3.36.55.80:3000/api/todolist/:user",
        }).then((res) => {
            console.log(res)
            const loadList = [...res.data.result]
            dispatch(loadTodolist(loadList))
            console.log(loadList)
        })
    }
}


export default handleActions ({
    [LOAD_TODOLIST] : (state, action) => 
        produce(state, (draft) => {
            draft.load_list = action.payload
        })
}, initialState);

const actionsCreators ={
    loadTodolist,
    loadTodolistDB,
}

export {actionsCreators}