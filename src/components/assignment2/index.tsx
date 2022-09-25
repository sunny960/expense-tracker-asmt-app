import React, {useCallback, useState} from "react";
import styled from "styled-components";
import Child from "./child";


const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Container = styled(Column)`
    width: 70%;
    height: 100vh;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Title = styled(Column)`
    align-items: flex-start;
`


const Button = styled.button<{ disabled: boolean }>`
    margin: 1rem 0;
    color: #ffffff;
    font-size: 14px;
  cursor: ${({disabled}:any)=>disabled ? 'not-allowed': 'pointer'};
  border: 1px solid #9C88FF;
  background-color: #9C88FF;
  border-radius: 2px;
  padding: 9px 0;
  text-align: center;
  outline: none;

  :hover,
  :active {
    border-color: #017DE8;
  }
`
const Assignment2 = ()=>{
    const [count,counter] = useState(0)
    const  handler = useCallback(()=> {
        counter((prev)=>prev +1)
    }, [count])
    return (<Container>
        <Title>{`Current Counter Value: ${count}`}</Title>
        <Button onClick={handler}>Counter</Button>
        <Child count={count}/>
    </Container>)

}
export default Assignment2
