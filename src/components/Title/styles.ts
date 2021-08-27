import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;

  h1 {
    color: #ffffff;
    font-size: 2.2rem;
  }

  button {
    background: none;
    border: 0;

    img {
      width: 32px;
    }
  }
`;
