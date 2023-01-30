import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import YotiButton, {
  THEME_EASYID,
  THEME_PARTNERSHIP,
  THEME_YOTI,
} from '@getyoti/react-native-yoti-button';

const Yotitest = () => {
  return (
    <View style={{flex:1,justifyContent:'center'}}>
      <Text>yotitest</Text>
      
      <YotiButton
        clientSDKID="YOUR_CLIENT_SDK_ID"
        scenarioID="YOUR_SCENARIOD_ID"
        useCaseID="YOUR_USE_CASE_ID"
        theme={THEME_YOTI}
        onSuccess={({useCaseId, token}) => {
          // Handle successful Yoti authentication.
          // You can send the token to your backend, for example, and
          // request the user's profile using any of the backend SDKs.
        }}
        onFail={error => {
          // Handle general failures such as the user not completing the Share
          // process in the Yoti app, or when the SDK fails to retrieve a useCaseID and token
          // the error object can either be populated or `undefined`
          
        }}
        onOpenYotiApp={() => {
          // It is a notification that the intent has been sent to the Yoti app.
          // Handle specific behaviour if needed.
          // You may want to restore your app's UI state when this happens.
        }}
        onStartScenario={() => {
          // Called when your scenario is about to be started.
        }}
        onStartScenarioError={error => {
          // Handler for when the SDK fails to start a scenario.
          // This may occur due to incorrect API keys or a network error.
          // the error object can either be populated or `undefined`
        }}
      />
    </View>
  );
};

export default Yotitest;

const styles = StyleSheet.create({
    theme: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
      },
});
