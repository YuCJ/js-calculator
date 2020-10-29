import React from 'react'
import * as keys from './keys'
import Display from './display'
import Panel from './Panel'

export default function Calculator(props) {
  const value = 0
  return (
    <Panel>
      <Display>{value}</Display>
      <keys.Container>
        <keys.FunctionKey><span>AC</span></keys.FunctionKey>
        <keys.FunctionKey><span>+/-</span></keys.FunctionKey>
        <keys.FunctionKey><span>﹪</span></keys.FunctionKey>
        <keys.BasicOperationKey><span>÷</span></keys.BasicOperationKey>
        <keys.NumberKey><span>7</span></keys.NumberKey>
        <keys.NumberKey><span>8</span></keys.NumberKey>
        <keys.NumberKey><span>9</span></keys.NumberKey>
        <keys.BasicOperationKey><span>×</span></keys.BasicOperationKey>
        <keys.NumberKey><span>4</span></keys.NumberKey>
        <keys.NumberKey><span>5</span></keys.NumberKey>
        <keys.NumberKey><span>6</span></keys.NumberKey>
        <keys.BasicOperationKey><span>﹣</span></keys.BasicOperationKey>
        <keys.NumberKey><span>1</span></keys.NumberKey>
        <keys.NumberKey><span>2</span></keys.NumberKey>
        <keys.NumberKey><span>3</span></keys.NumberKey>
        <keys.BasicOperationKey><span>﹢</span></keys.BasicOperationKey>
        <keys.ZeroKey><span>0</span></keys.ZeroKey>
        <keys.NumberKey><span>.</span></keys.NumberKey>
        <keys.BasicOperationKey><span>﹦</span></keys.BasicOperationKey>
      </keys.Container>
    </Panel>
  )
}
