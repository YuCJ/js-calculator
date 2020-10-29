import styled from 'styled-components'

const Panel = styled.div`
  width: 480px;
  height: ${(474 / 274) * 480}px;
  font-size: 40px;
  background: linear-gradient(#84BAFF, #0B0E1C);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-end;
  padding-bottom: 25px;
  @media (max-width: 767px) {
    width: 360px;
    height: ${(474 / 274) * 360}px;
    font-size: 30px;
  }
`

export default Panel