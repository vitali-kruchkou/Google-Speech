import styled from 'styled-components';
import { Color } from '@core/constants/colors';

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 400px;
    margin: 0 auto;
    height: 500px;
    border-radius: 3px;
    padding-top: 20px;
  `,
  Button: styled.div`
    width: 200px;
    & > .SignIn {
      width: 200px;
      background: ${Color.purple};
      background: linear-gradient(
        90deg,
        ${Color.lightPurple},
        ${Color.pink},
        ${Color.orange}
      );
      border: none;
      font-size: 18px;
      height: 30px;
      color: ${Color.white};
      transition: 0.4s linear;
    }
    & > .SignIn:hover {
      background-color: ${Color.gray};
      color: ${Color.black};
      border: none;
    }
    & > .Google {
      width: 200px;
      background-color: ${Color.white};
      border: none;
      font-size: 15px;
      height: 40px;
      transition: 0.4s linear;
    }
    & > .Google:hover {
      box-shadow: ${Color.boxShadowHover};
    }
    & > .Google > span {
      margin-left: 10px;
    }
  `,
  Form: styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    border: 1px solid ${Color.black};
    padding: 80px;
    box-shadow: ${Color.boxShadow};
  `,
  Title: styled.span`
    font-size: 30px;
    font-style: italic;
  `,
  Links: styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    margin: 20px 0;
    & > Link {
      color: ${Color.black};
    }
    & > Link > .SignUp {
      border: 1px solid ${Color.black};
    }
  `,
  Error: styled.span`
    color: ${Color.red};
  `,
};

export default Styled;
