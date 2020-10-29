import React from 'react'
import * as keys from './keys'
import Display from './display'
import Panel from './Panel'
import { useDispatch, useSelector } from 'react-redux'
import { operators, actionTypes } from '../../constants'

export default function Calculator(props) {
  const { displayed: displayedValue } = useSelector(state => state.calculator)
  const dispatch = useDispatch()
  return (
    <Panel>
      <Display>{displayedValue}</Display>
      <keys.Container>
        <keys.FunctionKey onClick={() => {dispatch({ type: actionTypes.clear }) }}><span>AC</span></keys.FunctionKey>
        <keys.FunctionKey onClick={() => {dispatch({ type: actionTypes.negation }) }}><span>+/-</span></keys.FunctionKey>
        <keys.FunctionKey onClick={() => {dispatch({ type: actionTypes.operation, payload: { operator: operators.mod } }) }}><span>﹪</span></keys.FunctionKey>
        <keys.BasicOperationKey onClick={() => {dispatch({ type: actionTypes.operation, payload: { operator: operators.divide } }) }}><span>÷</span></keys.BasicOperationKey>
        <keys.NumberKey onClick={() => {dispatch({ type: actionTypes.number, payload: { inputNumber: '7' } }) }}><span>7</span></keys.NumberKey>
        <keys.NumberKey onClick={() => {dispatch({ type: actionTypes.number, payload: { inputNumber: '8' } }) }}><span>8</span></keys.NumberKey>
        <keys.NumberKey onClick={() => {dispatch({ type: actionTypes.number, payload: { inputNumber: '9' } }) }}><span>9</span></keys.NumberKey>
        <keys.BasicOperationKey onClick={() => {dispatch({ type: actionTypes.operation, payload: { operator: operators.multiply } }) }}><span>×</span></keys.BasicOperationKey>
        <keys.NumberKey onClick={() => {dispatch({ type: actionTypes.number, payload: { inputNumber: '4' } }) }}><span>4</span></keys.NumberKey>
        <keys.NumberKey onClick={() => {dispatch({ type: actionTypes.number, payload: { inputNumber: '5' } }) }}><span>5</span></keys.NumberKey>
        <keys.NumberKey onClick={() => {dispatch({ type: actionTypes.number, payload: { inputNumber: '6' } }) }}><span>6</span></keys.NumberKey>
        <keys.BasicOperationKey onClick={() => {dispatch({ type: actionTypes.operation, payload: { operator: operators.subtract } }) }}><span>﹣</span></keys.BasicOperationKey>
        <keys.NumberKey onClick={() => {dispatch({ type: actionTypes.number, payload: { inputNumber: '1' } }) }}><span>1</span></keys.NumberKey>
        <keys.NumberKey onClick={() => {dispatch({ type: actionTypes.number, payload: { inputNumber: '2' } }) }}><span>2</span></keys.NumberKey>
        <keys.NumberKey onClick={() => {dispatch({ type: actionTypes.number, payload: { inputNumber: '3' } }) }}><span>3</span></keys.NumberKey>
        <keys.BasicOperationKey onClick={() => {dispatch({ type: actionTypes.operation, payload: { operator: operators.add } }) }}><span>﹢</span></keys.BasicOperationKey>
        <keys.ZeroKey onClick={() => {dispatch({ type: actionTypes.number, payload: { inputNumber: '0' } }) }}><span>0</span></keys.ZeroKey>
        <keys.NumberKey onClick={() => {dispatch({ type: 'decimal', payload: { inputNumber: '.' } }) }}><span>.</span></keys.NumberKey>
        <keys.BasicOperationKey onClick={() => {dispatch({ type: actionTypes.equal }) }}><span>﹦</span></keys.BasicOperationKey>
      </keys.Container>
    </Panel>
  )
}
