/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { SimpleButton } from '@common/components';
import { removeDuplicated } from '@common/utils';

const Home = () => {
  const [fruits] = useState(['사과', '바나나', '키위', '키위']);

  useEffect(() => {
    console.log(removeDuplicated(fruits));
  }, [fruits]);

  return (
    <>
      <p>Prototype a project</p>
      <SimpleButton text="simple button" />
    </>
  );
};

export default Home;
