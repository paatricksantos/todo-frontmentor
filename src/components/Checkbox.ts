import styled from 'styled-components';

import checkIcon from '../assets/images/icons/icon-check.svg';

export default styled.input`
  appearance: none;
  --webkit-appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;

  border: 1px solid hsl(234, 11%, 52%);

  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;

  &:after {
    content: '';
    background: url(${checkIcon}) no-repeat center;
    background-size: cover;
    height: 12px;
    width: 12px;
    position: absolute;
    display: none;
  }

  &:hover {
    background: linear-gradient(
          ${({ theme }) => theme.colors.primary},
          ${({ theme }) => theme.colors.primary}
        )
        padding-box,
      linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))
        border-box;
    border: 1px solid transparent;
  }

  &:checked {
    background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%))
        padding-box,
      linear-gradient(to right, hsl(192, 100%, 67%), hsl(280, 87%, 65%))
        border-box;

    border: none;
  }

  &:checked:after {
    display: block;
  }
`;
