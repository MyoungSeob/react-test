import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Task =()=>{
    const number = useSelector(store => store.update.load_list)
    console.log(number)
    return(
        <Grid>
            <Contents>2 Tasks</Contents>
        </Grid>
    )
}

export default Task;

const Grid = styled.div`
    margin : 15px 0px 0px 148px;
`;
const Contents = styled.p`
    text-align : right;
    color : gray;
`;