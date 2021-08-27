import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 16px 16px 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;

  border-radius: 0px 0px 8px 8px;
  border-top: 1px solid ${({ theme }) => theme.colors.tertiary};

  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;

  button {
    background: none;
    border: 0;
    outline: none;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.secondary};

    transition: 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.textColor};
    }
  }

  p {
    flex: 1;
  }

  div {
    flex: 2;
    display: flex;
    gap: 8px;
    justify-content: center;
    align-items: center;

    button {
      &.active {
        color: hsl(220, 98%, 61%);
      }
    }
  }

  @media (max-width: 420px) {
    position: relative;

    div {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;

      padding: 16px 16px 16px 24px;
      border-radius: 8px;

      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
      font-size: 16px;

      gap: 16px;
    }

    > p,
    > button {
      font-size: 14px;
    }
  }
`;
