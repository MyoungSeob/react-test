import React from 'react';
import styled from 'styled-components';

const TodoList =(props)=>{
    console.log(props)
    return (
        <Grid>
            <Input type="checkbox" /><Contents>{props.contents}</Contents>
        </Grid>
    )
}
export default TodoList;

const Grid = styled.div`
    display : flex;
    border-bottom : 0.5px solid #b9b9b9;
    margin-top : 10px;
`
const Input = styled.input`

`
const Contents = styled.p`
    margin : 0 0 0 20px;
`