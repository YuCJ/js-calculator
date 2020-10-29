import { operators, actionTypes } from '../../constants';
import { style as styleConstants, mockup } from '../../constants';
import { useSelector } from 'react-redux';
import { Key, Container as KeysContainer, styledKeys } from './keys';
import Display from './display';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: ${styleConstants.desktopWidth}px;
  height: ${(mockup.height / mockup.width) * styleConstants.desktopWidth}px;
  font-size: 40px;
  background: linear-gradient(#84baff, #0b0e1c);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  padding-bottom: 25px;
  @media (max-width: ${styleConstants.breakpoints.desktopSmallMaxWidth}px) {
    width: ${styleConstants.desktopSmallWidth}px;
    height: ${(mockup.height / mockup.width) *
    styleConstants.desktopSmallWidth}px;
    font-size: 30px;
  }
  @media (max-width: ${styleConstants.breakpoints.mobileMaxWidth}px) {
    width: 100%;
    display: inline-block;
    height: auto;
  }
`;

const Operator = styled.div`
  text-align: right;
  color: #333;
  height: 18px;
  font-size: 18px;
  padding-right: 20px;
  padding-top: 20px;
  box-sizing: border-box;
`;

function getOperatorSign(operator) {
  switch (operator) {
    case operators.mod:
      return '﹪';
    case operators.divide:
      return '÷';
    case operators.multiply:
      return '×';
    case operators.subtract:
      return '﹣';
    case operators.add:
      return '﹢';
    default:
      return '';
  }
}

export default function Panel(props) {
  const { displayed: displayedValue, stagedOperator } = useSelector(
    (state) => state.calculator
  );
  return (
    <Container>
      <Operator>{getOperatorSign(stagedOperator)}</Operator>
      <Display>{displayedValue}</Display>
      <KeysContainer>
        <Key
          Component={styledKeys.FunctionKey}
          type={actionTypes.clear}
          label="AC"
        />
        <Key
          Component={styledKeys.FunctionKey}
          type={actionTypes.negation}
          label="+/-"
        />
        <Key
          Component={styledKeys.FunctionKey}
          type={actionTypes.operation}
          payload={operators.mod}
          label="﹪"
        />
        <Key
          Component={styledKeys.BasicOperationKey}
          type={actionTypes.operation}
          payload={operators.divide}
          label="÷"
        />
        <Key
          Component={styledKeys.NumberKey}
          type={actionTypes.number}
          label="7"
          payload="7"
        />
        <Key
          Component={styledKeys.NumberKey}
          type={actionTypes.number}
          label="8"
          payload="8"
        />
        <Key
          Component={styledKeys.NumberKey}
          type={actionTypes.number}
          label="9"
          payload="9"
        />
        <Key
          Component={styledKeys.BasicOperationKey}
          type={actionTypes.operation}
          payload={operators.multiply}
          label="×"
        />
        <Key
          Component={styledKeys.NumberKey}
          type={actionTypes.number}
          label="4"
          payload="4"
        />
        <Key
          Component={styledKeys.NumberKey}
          type={actionTypes.number}
          label="5"
          payload="5"
        />
        <Key
          Component={styledKeys.NumberKey}
          type={actionTypes.number}
          label="6"
          payload="6"
        />
        <Key
          Component={styledKeys.BasicOperationKey}
          type={actionTypes.operation}
          payload={operators.subtract}
          label="﹣"
        />
        <Key
          Component={styledKeys.NumberKey}
          type={actionTypes.number}
          label="1"
          payload="1"
        />
        <Key
          Component={styledKeys.NumberKey}
          type={actionTypes.number}
          label="2"
          payload="2"
        />
        <Key
          Component={styledKeys.NumberKey}
          type={actionTypes.number}
          label="3"
          payload="3"
        />
        <Key
          Component={styledKeys.BasicOperationKey}
          type={actionTypes.operation}
          payload={operators.add}
          label="﹢"
        />
        <Key
          Component={styledKeys.ZeroKey}
          type={actionTypes.number}
          label="0"
          payload="0"
        />
        <Key
          Component={styledKeys.NumberKey}
          type={actionTypes.decimal}
          label="."
        />
        <Key
          Component={styledKeys.BasicOperationKey}
          type={actionTypes.equal}
          label="﹦"
        />
      </KeysContainer>
    </Container>
  );
}
