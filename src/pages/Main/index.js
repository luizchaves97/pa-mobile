import React, { useState, useEffect, useCallback } from 'react';
import { Text } from 'react-native';

import { MainContainer } from './style';
import api from '~/services/api';

const Main = () => {
  const [helloText, setHelloText] = useState('');

  const getHelloWorld = useCallback(async () => {
    const response = await api.get('/');

    setHelloText(response.data);
  }, []);

  useEffect(() => {
    getHelloWorld();
  }, [getHelloWorld]);

  return (
    <MainContainer>
      <Text>{helloText.greeting}</Text>
    </MainContainer>
  );
};

export default Main;
