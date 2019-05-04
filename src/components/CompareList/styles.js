import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;

  margin-top: 50px;
`;

export const Repository = styled.div`
  width: 250px;
  background: #fff;
  border-radius: 3px;
  margin: 0 10px;

  display: flex;
  flex-direction: column;

  header {
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 64px;
    }

    strong {
      font-size: 24px;
      margin-top: 10px;
    }

    small {
      font-size: 16px;
      color: #666;
    }
  }

  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;

      small {
        font-weight: normal;
        font-size: 12px;
        color: #999;
        font-style: italic;
      }

      &:nth-child(2n - 1) {
        background: #f5f5f5;
      }
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  /* flex-direction: row; */
  justify-content: space-around;

  button {
    flex: 1;

    height: 40px;
    color: #fff;
    margin: 10px;
    border: 0;
    font-size: 16px;
    font-weight: bold;
    border-radius: 3px;

    i {
      margin-right: 3px;
    }

    &.update {
      background: #33f;

      &:hover {
        background: #1a1aff;
      }
    }

    &.remove {
      background: #f33;

      &:hover {
        background: #ff1a1a;
      }
    }
  }
`;
