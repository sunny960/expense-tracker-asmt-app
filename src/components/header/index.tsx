import React from "react";
import styled from "styled-components";
import {stringConstants} from "../../utils/constants";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`
const Title = styled.span`
font-weight: 600;
padding: 1rem 0;
font-size: 24px;
line-height: 24px;
letter-spacing: -0.41px;
color: #101010;
`

const Header = () => {
    return (<Row>
        <Title>{stringConstants.EXPENSE_TRACKER}</Title>
    </Row>)

}
export default Header
