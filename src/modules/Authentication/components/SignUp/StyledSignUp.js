import styled from 'styled-components';
import { Color } from '@core/constants/colors';

const Style = {
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
    & > .SignUp {
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
    & > .SignUp:hover {
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
  Title: styled.div`
    font-size: 30px;
    font-style: italic;
    padding-bottom: 30px;
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
  `,
  Error: styled.span`
    color: ${Color.red};
  `,
  Toast: styled.div`
    color: ${Color.red};
  `,
};

export default Style;
