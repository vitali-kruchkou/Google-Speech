import styled from 'styled-components';

const Style = {
  Container: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
    & > button {
      width: 400px;
      height: 60px;
      font-size: 30px;
    }
  `,
};

export default Style;
