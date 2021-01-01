import React from 'react';
import {ActivityIndicator, Button, SafeAreaView, View} from 'react-native';
import {useDelete, useGet, usePatch, usePost, usePut} from 'hooks/api';

const TestingApi = () => {
  const {loading, data} = useGet('test.checkApi');
  const [loadingPost, sendRequest] = usePost('test.checkApi');
  const [loadingPut, sendPut] = usePut('test.checkApi');
  const [loadingPatch, sendPatch] = usePatch('test.checkApi');
  const [loadingDelete, sendDelete] = useDelete('test.checkApi');

  const isLoading =
    loading || loadingPost || loadingPut || loadingPatch || loadingDelete;
  const handleDoPost = async () => {
    const response = await sendRequest();
    console.log('Response: ', response);
  };
  const handleDoPut = async () => {
    const response = await sendPut();
    console.log('Response: ', response);
  };
  const handleDoPatch = async () => {
    const response = await sendPatch();
    console.log('Response: ', response);
  };
  const handleDoDelete = async () => {
    const response = await sendDelete();
    console.log('Response: ', response);
  };
  return (
    <SafeAreaView>
      {isLoading && <ActivityIndicator />}
      <View>
        <Button title="Do post" onPress={handleDoPost} />
        <Button title="Do Put" onPress={handleDoPut} />
        <Button title="Do Patch" onPress={handleDoPatch} />
        <Button title="Do Delete" onPress={handleDoDelete} />
      </View>
    </SafeAreaView>
  );
};

export default TestingApi;
