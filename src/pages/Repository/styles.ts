import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color 0.2s;

    svg {
      margin-right: 6px;
    }

    &:hover {
      color: #666;
    }
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 8px;
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    margin-top: 32px;

    li {
      & + li {
        margin-left: 80px;
      }
      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }

      span {
        font-size: 24px;
        color: #6c6c80;
      }
    }
  }
`;

export const Issues = styled.div`
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

    svg {
      color: #c9c9d4;
      margin-left: auto;
    }
  }
`;
