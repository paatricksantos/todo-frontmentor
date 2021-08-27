import styled from 'styled-components';

export const Form = styled.form`
  > div {
    width: 100%;
    border-radius: 8px;
    padding: 16px 16px 16px 24px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;

    background: ${({ theme }) => theme.colors.primary};

    input[type='text'] {
      flex: 1;
      background: none;
      border: 0;
      font-size: 18px;
      outline: none;
      color: ${({ theme }) => theme.colors.textColor};

      margin: 0px 8px 0px 16px;

      &::placeholder {
        color: ${({ theme }) => theme.colors.secondary};
      }
    }

    button {
      border: 0;
      background: none;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        fill: ${({ theme }) => theme.colors.secondary};

        transition: all 0.2s ease;
      }

      &:hover {
        svg {
          fill: ${({ theme }) => theme.colors.tertiary};
        }
      }
    }
  }

  @media (max-width: 420px) {
    > div {
      input[type='text'] {
        font-size: 14px;
        &::placeholder {
          color: ${({ theme }) => theme.colors.secondary};
          font-size: 12px;
        }
      }
    }
  }
`;
