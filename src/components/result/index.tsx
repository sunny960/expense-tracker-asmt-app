import React from "react";
import styled from "styled-components";
import {stringConstants} from "../../utils/constants";
import {useAppContext} from "../../hooks/useStore";
import {getAmountWithCurrency} from "../../utils";

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
`
const Balance = styled(Column)`
    align-items: flex-start;
`
const Box = styled(Row)`
    padding: 1rem 0;
    background: #ffffff;
    max-width: 370px;
    justify-content: center;
        margin: 20px 0;
        justify-content: space-evenly;
        align-items: center;
        min-width: 320px;
        width: 100%;
`
const Label = styled(Column)`
`
const Value = styled(Column)<{ isForIncome?: boolean }>`
color: ${({isForIncome}: any)=> isForIncome? '#5DD489': '#BD290C'};
`
const VerticalLine = styled.div`
border-left: 2px solid #DDDDDD;
height: 40px;
`
const Result = ()=>{
    const { result:{income = '',
        expense = '',
        finalResult = ''} } = useAppContext();

    return (<>
        <Title>{stringConstants.YOUR_BALANCE}</Title>
        <Balance>{getAmountWithCurrency(finalResult)}</Balance>
        <Box>
            <Column>
                <Label>{stringConstants.INCOME}</Label>
                <Value isForIncome={true}>{getAmountWithCurrency(income)}</Value>
            </Column>
            <VerticalLine/>
            <Column>
                <Label>{stringConstants.EXPENSE}</Label>
                <Value >{getAmountWithCurrency(expense)}</Value>
            </Column>
        </Box>
        </>

    )

}

export default Result
