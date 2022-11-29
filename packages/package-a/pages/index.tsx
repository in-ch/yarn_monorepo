/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { SimpleButton, Tabs } from '@common/components';
import { removeDuplicated } from '@common/utils';
import IOSSwitch from '@common/components/app/IOSSwitch';

const Home = () => {
  const [fruits] = useState(['사과', '바나나', '키위', '키위']);
  const [switchBoolean, setSwitchBoolean] = useState<boolean>(false);

  const handleSwitchChange = () => {
    setSwitchBoolean(switchBoolean);
  };

  useEffect(() => {
    console.log(removeDuplicated(fruits));
  }, [fruits]);

  return (
    <>
      <p>Prototype a project</p>
      <SimpleButton>심플 버튼</SimpleButton>
      <IOSSwitch handleChange={handleSwitchChange} state={switchBoolean} text="스위치!!" />
      <Tabs />
    </>
  );
};

export default Home;
