import styled from 'styled-components';
import { Color } from '@constants/colors';

const Style = {
  Container: styled.div`
    width: 1100px;
    height: 550px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,
  Groups: styled.div`
    width: 500px;
    margin: 0 auto;
    margin-top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `,
  MainImage: styled.div`
    margin: 0 auto;
    text-align: center;
  `,
  WordsContainer: styled.div`
    margin: 0 auto;
    width: 1100px;
    height: 200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  `,
  Words: styled.div`
    width: 200px;
    max-height: 100px;
    margin: 0 auto;
    margin-bottom: 20px;
    border: ${Color.WordsBorder};
    border-radius: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `,
  WordsText: styled.div`
    width: 100px;
    text-align: center;
  `,
  SpokenWord: styled.div`
    width: 100px;
    margin: 0 auto;
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `,
};

export default Style;
