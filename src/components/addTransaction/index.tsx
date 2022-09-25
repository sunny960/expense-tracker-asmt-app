import React from "react";
import styled from "styled-components";
import {stringConstants} from "../../utils/constants";
import {useAppContext} from "../../hooks/useStore";
import {addInputField, addTransactionClicked} from "../../contexts/appContext/appActions";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`

const Container = styled(Column)`
max-width: 370px;
`

const Title = styled(Row)`
    align-items: flex-start;
    border-bottom: 2px solid #DDDDDD;
    padding: 1rem 0;
    `

const Label = styled(Row)`
    padding: 0.5rem 0;
    text-align: left;
    font-size: 15px;
`
const AmountLabel = styled(Label)`
    padding: 0.5rem 0 0 0;
`
const Hint = styled(Label)`
    padding: 0 0 0.5rem 0;
`
const Input = styled.input`
padding: 9px 0 9px 9px;
  font-size: 14px;
  line-height: 21px;
  border-radius: 0 4px 4px 0;
  color: #6E767F;
  border: 1px solid #E5E7E8;
  background-color: #FFFFFF;

  :disabled {
    background-color: #F2F3F4;
  }
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

const AddTransaction = ()=>{
    let { dispatch, addTransaction: {amount:amountValue= 0, text:textValue= '', error='', isBtnEnabled = false} } = useAppContext();

    function handleChange(event: any){
        const {name, value} = event.target;
        isBtnEnabled = name === 'text' && value && amountValue || name === 'amount' && value && textValue || false;
        let payload = {error: error, isBtnEnabled: isBtnEnabled }
        // @ts-ignore
        payload[name] = value
        // @ts-ignore
        payload[name == 'text'? 'amount':'text']= name==='text'? amountValue:textValue;
        dispatch(addInputField(payload))
    }
    function handleSubmit(){
        dispatch(addTransactionClicked())
    }

    return (<Container>
        <Title>{stringConstants.ADD_TRANSACTION}</Title>
        <Label>{stringConstants.TEXT}</Label>
        <Input type={'text'} name={'text'} value={textValue} placeholder={'Enter Text...'} onChange={handleChange}/>
        <AmountLabel>{stringConstants.AMOUNT}</AmountLabel>
        <Hint>{stringConstants.HINT}</Hint>
        <Input type={'number'} name={'amount'} value={amountValue} onChange={handleChange}/>
        <Button disabled={!isBtnEnabled} onClick={handleSubmit}>{stringConstants.ADD_TRANSACTION_BTN_TEXT}</Button>
    </Container>)
}

export default AddTransaction
