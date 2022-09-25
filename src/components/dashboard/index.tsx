import React from "react";
import styled from "styled-components";

import './App.css';
import Header from "../header";
import Result from "../result";
import History from "../history";
import AddTransaction from "../addTransaction";

const Wrapper = styled.div`
background: #F7F7F7;
height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
`


const DashboardContainer = () => {
    return (
        <Wrapper>
        <Container className="App">
        <Header/>
        <Result/>
        <History/>
        <AddTransaction/>
    </Container>
        </Wrapper>)

}

export default DashboardContainer
