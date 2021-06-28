import React from 'react';
import styled from 'styled-components';
import Button from '../elements/Button';

const Days =()=>{

    return( 
    <SubTitle>
        <Day>2021년 6월 28일</Day>
        <Yoil>월요일</Yoil>
        <Button/>
    </SubTitle>
    )
}

export default Days;

const Day = styled.p`
    font-size : 15px;
    color : gray;
    padding : 0px;
    margin : 0px;
    text-align : center;
`;
const SubTitle = styled.div``;
const Yoil = styled.h1`
    font-size : 45px;
    margin : 0px;
`;