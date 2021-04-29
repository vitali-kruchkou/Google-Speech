import React, { MouseEvent, useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { database } from '@firebaseConfig/index';
import Style from './StyledLongTermStatistics';
import { Button } from 'antd';

const LongTermStatistics: React.FC = () => {
  const [info, setInfo] = useState([]);
  const history = useHistory();

  useEffect(() => {
    database
      .ref()
      .child('/users')
      .on('value', snapshot => {
        setInfo(Object.values(snapshot.val()));
      });
  }, []);

  info.sort((a, b) => (a.score > b.score ? -1 : 1));

  const hanlderBackButton = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      history.push('/ShortTermStatistics');
    },
    [history],
  );

  return (
    <>
      <Button type="primary" onClick={hanlderBackButton}>
        Return
      </Button>
      <Style.UsersTable>
        <tr>
          <td>№</td>
          <td>email</td>
          <td>displayName</td>
          <td>score</td>
          <td>date</td>
        </tr>
        {info.map(
          (
            res: {
              date: string;
              displayName: string;
              email: string;
              photoURL: string;
              score: number;
              uid: string;
            },
            i: number,
          ) => {
            return (
              <tr key={i}>
                <td>{++i}</td>
                <td>{res.email}</td>
                <td>{res.displayName}</td>
                <td>{res.score}</td>
                <td>{res.date}</td>
              </tr>
            );
          },
        )}
      </Style.UsersTable>
    </>
  );
};

export default LongTermStatistics;
