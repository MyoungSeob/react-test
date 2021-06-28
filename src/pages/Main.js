import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Days from "../components/Days";
import Task from "../components/Task";
import TodoList from "../components/TodoList";
import {useDispatch, useSelector} from 'react-redux';
import {actionsCreators as updatehandle} from '../redux/modules/update'

const Main = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(updatehandle.loadTodolistDB())
    }, [])
    const load_list = useSelector(store => store.update.load_list)
    console.log(load_list)
  return (
    <>
      <Grid>
        <Title>
          <Days />
          <Task />
        </Title>
        <Contents>
            {load_list.map((p)=>{
                return <TodoList key={p.id} {...p}/>
            })}
        </Contents>
        <Line />
      </Grid>
    </>
  );
};

export default Main;

const Grid = styled.div`
  width: 400px;
  height: 600px;
  border: 1px solid black;
  margin : 20px auto auto auto;
`;
const Title = styled.div`
  display: flex;
  border-bottom : 1px solid #b9b9b9;
  padding : 40px;
`;
const Contents = styled.div`
    margin : 30px;
    padding : 10px;
    
`;
const Line = styled.div`
    border-bottom : 1px solid #b9b9b9;
`