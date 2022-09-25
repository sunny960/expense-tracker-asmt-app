import React from "react";
import styled from "styled-components";
import {FieldType, stringConstants} from "../../utils/constants";
import {useAppContext} from "../../hooks/useStore";
import {getAmountWithCurrency, isNegative} from "../../utils";
import {HistoryItem} from "../../../types";
import {addTransactionClicked, removeHistoryEntry} from "../../contexts/appContext/appActions";

const Column = styled.div`
  display: flex;
  flex-direction: column;
`
const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Title = styled(Column)`
    align-items: flex-start;
    padding: 0.4rem 0;
`
const FieldContainer = styled(Row)`
    background: #ffffff;
    // width: 75%;
    align-items: center;
    justify-content: space-between;
    align-items: center;
    margin: 0.4rem 0;
    position: relative;
    
    :hover,
  :active {
  img {
  display: flex;
  }
  }
`
const FieldText = styled(Column)`
padding: 0 0 0 0.7rem;
`
const Container = styled(Row)`
align-items: center;
`
const PlaceHolder = styled(Row)`
align-items: center;
justify-content: center;
    font-size: 13px;
    color: #d7d7d7;
`
const Wrapper = styled(Column)`
    max-width: 370px;
`
const FieldAmount = styled(Column)`
padding: 0 0.7rem 0 0;

`
const VerticalLine = styled.div<{ type: FieldType }>`
border-left: 0.3rem solid ${({type}: any)=>type === FieldType.expense ? 'red': 'green'};
    height: 2.6rem;
    `
const Image = styled.img`
position: absolute;
    left: -32px;
    display: none;
    cursor: pointer;
`

const History = ()=>{
    const { history, dispatch } = useAppContext();
    function closeHandler(text: string, amount: string, index:number) {
        dispatch(removeHistoryEntry({text, amount, index}))

    }

    const HistoryField = ({index= 0, text='', amount='', type = FieldType.income})=>{
        return <FieldContainer key={index}>
            <FieldText>{text}</FieldText>
            <Container>
            <FieldAmount>{getAmountWithCurrency(amount)}</FieldAmount>
            <VerticalLine type={type}/>
            </Container>
            <Image src={'/images/close.svg'} alt={'close'} onClick={()=>closeHandler(text,amount, index)}/>
        </FieldContainer>

    }
    return (<Wrapper>
        <Title>{stringConstants.HISTORY}</Title>
        {history.length && history.map((item: HistoryItem, index: number)=><HistoryField index={index}
                                                              text={ item.text}
                                                              amount={item.amount}
                                                              type={item.amount && isNegative(item.amount) ? FieldType.expense: FieldType.income}/>)
        || <PlaceHolder>{stringConstants.NO_HISTORY}</PlaceHolder>}

    </Wrapper>)

}

export default History;
