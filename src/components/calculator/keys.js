import styled from 'styled-components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { operators, actionTypes } from '../../constants';

const BaseKey = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  width: 20%;
  ::after {
    padding-bottom: 100%;
    display: block;
    content: '';
  }
  border-radius: 50%;
  margin: 2%;
  > span {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1em; /* base on Panel font-size */
  }
`;
export const styledKeys = {
  NumberKey: styled(BaseKey)`
    color: #ffffff;
    background-color: #333333;
  `,
  BasicOperationKey: styled(BaseKey)`
    color: #ffffff;
    background-color: #3091fd;
  `,
  FunctionKey: styled(BaseKey)`
    color: #000000;
    background-color: #afafaf;
  `,
  ZeroKey: styled(BaseKey)`
    color: #ffffff;
    background-color: #333333;
    width: 44%;
    border-radius: 0;
    border-top-right-radius: 22.5% 50%;
    border-top-left-radius: 22.5% 50%;
    border-bottom-right-radius: 22.5% 50%;
    border-bottom-left-radius: 22.5% 50%;
    ::after {
      padding-bottom: 45%; /*  = 20% / 44% */
      display: block;
      content: '';
    }
    >span {
      left: 22.5%;
    }
  `,
};

export function Key({ type, payload, Component, label }) {
  const dispatch = useDispatch();
  return (
    <Component
      onClick={() => {
        dispatch({ type, payload });
      }}
    >
      <span>{label}</span>
    </Component>
  );
}

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
