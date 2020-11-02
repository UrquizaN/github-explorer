import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;

  max-width: 433px;
  margin-top: 100px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;

  display: flex;

  input {
    flex: 1;
    height: 70.8px;
    border: 0;
    border-radius: 5px 0px 0px 5px;
    padding: 24px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
      font-size: 20px;
    }

    ${props =>
      props.hasError &&
      css`
        border: 2px solid #f05400;
        border-right: 0;
      `}
  }

  button {
    width: 210px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    font-weight: bold;
    color: white;
    transition: background-color 0.4s;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #f05400;
  margin: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;

  a {
    background: #fff;
    padding: 18px;
    border-radius: 5px;
    display: flex;
    flex: 1;
    align-items: center;
    text-decoration: none;
    transition: 0.4s;

    &:hover {
      transform: translateX(16px);
    }

    & + a {
      margin-top: 16px;
    }

    div {
      margin: 0 16px;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
    }

    svg {
      color: #c9c9d4;
      margin-left: auto;
    }
  }
`;
