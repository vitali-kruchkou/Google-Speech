import styled from 'styled-components';

const Style = {
  UsersTable: styled.table`
    margin: 0 auto;
    font-size: 20px;
    & > tr > td {
      padding: 10px;
      text-align: center;
    }
  `,
};

export default Style;
