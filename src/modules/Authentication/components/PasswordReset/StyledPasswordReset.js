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
    width: 250px;
    & > .ResetPas {
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
    & > .ResetPas:hover {
      background-color: #e1dfdf;
      color: ${Color.black};
      border: none;
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
  Accept: styled.span`
    color: ${Color.green};
  `,
};

export default Style;
