import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Animated, BackHandler, DeviceEventEmitter, Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import CronPayButton from './components/cronpay_button';
import { ColorConstants } from './constants/color_constants';
import CronPayHeader from './components/header';
import CronPaySpacer from './components/space';
import Timeline from './components/timeline';
import Splash from './components/splash';
import BankInfoView from './components/view_bank_info';
import { getBanks, initSdk, createmandate } from './services/auth';
import StepTwoView from './components/view_step_two';
import type { PaymentData } from './model/payment_data';
import Sign from './components/signature_pad';
import StepThreeView from './components/view_step_three';


const Home = ({navigation, route}) => {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingInStep, setLoadingStep] = useState(false);
  const [verifiedBankDetails, setVerifiedBankDetails] = useState(null);
  const [signaturePadSigned, setSIgnatureSigned] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentData, setPaymentData] = useState<PaymentData>();
  

  const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJmaXJzdE5hbWUiOiJnZ2ciLCJsYXN0TmFtZSI6ImdnZ2ciLCJpZCI6IjMiLCJleHAiOjE2NTM1NDU4OTYsImVtYWlsIjoidGVld2FoMjRAZ21haWwuY29tIiwianRpIjoiY2FiODgwNjUtNDBiNS00YTI0LWIwZWItMDdhYWY4NmQ2MjhiIiwiY2xpZW50X2lkIjoiY2xpZW50SWQifQ.L-Cd5BDbPxr_JTnmrEVoZCI9Zwd9__3tenm2_owo4FiLLKQyzpFncWVTAXUdX2Q5nYevhk5071d5H2dtHboXxLL-bTja2zL46GwlkO9qZIrfPji79X7ADszOGwB8mIxpGQuZgh1Pe0IN_XVLjP_lcsC4d1gphLffgCj2qOwcJ7s"


  useEffect(() => {
    initSdk(token)
      .then(async (data) => {
        setPaymentData(data)
        loadBanks()
      })
      .catch((error) => console.error(error));

  }, []);

  useEffect(() => {
    if (route.params?.signature) {
     setSIgnatureSigned(route.params?.signature)
    }
  }, [route.params?.signature]);

  function loadBanks() {
    getBanks()
      .then(() => {
        return setLoading(false);
      })
      .catch((error) => console.error(error))
  }

  function proceedToNextStep() {
      if (currentStep == 2) {
          createMandate()
      } else if (currentStep == 3){
        DeviceEventEmitter.emit("event.onClose", null);
        BackHandler.exitApp
      } else {
        setCurrentStep(currentStep + 1);
      }

  }

useEffect(() => {
    return () => {
        DeviceEventEmitter.removeAllListeners()
    };
}, []);

  function createMandate() {
    setLoadingStep(true)
    createmandate(paymentData,signaturePadSigned, verifiedBankDetails)
    .then((response) => {
      console.log(response)
      DeviceEventEmitter.emit("event.onMandateCreated", response);
      setLoadingStep(false);
      setCurrentStep(currentStep + 1);
    })
    .catch((error) => console.error(error))
}


  return (
  <SafeAreaView >
      { isLoading ? <Splash /> : (<View>
        <CronPayHeader />
        <View style={styles.container}>
          <Timeline></Timeline>
          <CronPaySpacer height={20} />
          {
          currentStep == 3 ?  
            <StepThreeView />
           : currentStep == 2 ?  
           <StepTwoView
           route={route}
           navigation={navigation}
           paymentData={ paymentData}
           bankData = {verifiedBankDetails}
           onSignatureReceived = {signaturePadSigned}
           />
          :<BankInfoView
            token={token}
            loading={(stateInStep: boolean) => setLoadingStep(stateInStep)}
            onStepOneDone={(data: any) => setVerifiedBankDetails(data)}
          />}
          <CronPaySpacer height={20} />
          <CronPayButton
            disabled={ verifiedBankDetails === null}
            title= {currentStep == 3 ? "Close" : "Proceed"}
            isLoading={isLoading || isLoadingInStep}
            onPress={() => proceedToNextStep()} />
        </View>
      </View>)}
    </SafeAreaView>
  );
};

export default Home;


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 54,
    backgroundColor: ColorConstants.window,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
});

