import styled from 'styled-components';

const Style = {
  Container: styled.div`
    width: 1100px;
    height: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `,
  Groups: styled.div`
    width: 500px;
    margin: 0 auto;
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
    margin: 0 auto;
    width: 200px;
    max-height: 100px;
    border: 1px solid gray;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  `,
  WordsText: styled.div`
    width: 100px;
    text-align: center;
    border: 1px solid black;
  `,
};

export default Style;
