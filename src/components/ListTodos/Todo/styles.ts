import styled, { css } from 'styled-components';

export const Container = styled.div<{ checked: boolean }>`
  width: 100%;
  padding: 16px 16px 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  border-radius: 8px 8px 0px 0px;
  background: ${({ theme }) => theme.colors.primary};

  transition: all 0.2s ease;

  &:hover {
    transform: translateX(4px);
  }

  &.fall {
    transform: translateY(4rem) rotateZ(12deg);
    opacity: 0;
  }

  & + & {
    border-radius: 0px 0px 0px 0px;
    border-top: 1px solid ${({ theme }) => theme.colors.tertiary};
  }

  button {
    background: none;
    border: 0;
  }

  p {
    flex: 1;
    cursor: pointer;
  }

  ${({ checked }) =>
    checked &&
    css`
      p {
        flex: 1;
        text-decoration: line-through;
        color: ${({ theme }) => theme.colors.secondary};
        font-style: italic;
      }
    `}
`;
