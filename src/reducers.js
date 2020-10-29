import { combineReducers } from 'redux'
import { actionTypes, operators } from './constants'

const defaultState = {
  toStartNewNumber: false,
  stagedOperator: null,
  accumulator: 0,
  displayed: '0',
}

function calculate(operand1, operator, operand2) {
  // Handle float calculation
  // (Or we can use 3rd party package to handle it)
  const op1Digits = (operand1.toString().split('.')[1] || '').length;
  const op2Digits = (operand2.toString().split('.')[1] || '').length;
  const baseNum = Math.pow(10, Math.max(op1Digits, op2Digits));
  switch (operator) {
    case operators.add:
      return (operand1 * baseNum + operand2 * baseNum) / baseNum
    case operators.subtract:
      return (operand1 * baseNum - operand2 * baseNum) / baseNum
    case operators.multiply:
      return (operand1 * baseNum * operand2 * baseNum) / (baseNum * baseNum)
    case operators.divide:
      return ((operand1 * baseNum) / (operand2 * baseNum))
    case operators.mod:
      return ((operand1 * baseNum) % (operand2 * baseNum)) / baseNum
    default:
      return operand2
  }
}

function calculator(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.clear: {
      return defaultState
    }
    case actionTypes.decimal: {
      if (state.toStartNewNumber) {
        return {
          ...state,
          toStartNewNumber: false,
          displayed: '0.'
        }
      }
      if (state.displayed.includes('.')) {
        return state
      }
      return {
        ...state,
        toStartNewNumber: false,
        displayed: state.displayed + '.'
      }
    }
    case actionTypes.number: {
      const numberString = action.payload
      if (state.toStartNewNumber || state.displayed === '0') {
        return {
          ...state,
          toStartNewNumber: false,
          displayed: numberString,
        }
      }
      return {
        ...state,
        displayed: state.displayed + numberString,
      }
    }
    case actionTypes.operation:
      const operator = action.payload
      if (state.toStartNewNumber) {
        return {
          ...state,
          toStartNewNumber: true,
          stagedOperator: operator,
        }
      }
      return {
        ...state,
        toStartNewNumber: true,
        stagedOperator: operator,
        accumulator: calculate(state.accumulator, state.stagedOperator, parseFloat(state.displayed, 10))
      }
    case actionTypes.equal: {
      const result = calculate(state.accumulator, state.stagedOperator, parseFloat(state.displayed, 10))
      return {
        ...state,
        toStartNewNumber: true,
        stagedOperator: null,
        accumulator: result,
        displayed: `${result}`,
      }
    }
    case actionTypes.negation: {
      return {
        ...state,
        toStartNewNumber: false,
        displayed: `${parseFloat(state.displayed, 10) * -1}`,
      }
    }
    default:
      return state
  }
}

const rootReducer = combineReducers({
  calculator,
})


export default rootReducer