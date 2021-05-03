import styled from 'styled-components';

const Style = {
  Buttons: styled.div`
    width: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    & > #buttonSpeak {
      width: 400px;
    }
    & > button {
      font-size: 20px;
      height: 50px;
    }
  `,
};

export default Style;
