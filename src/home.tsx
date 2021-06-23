import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import {
  BackHandler,
  DeviceEventEmitter,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
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
import StepThreeView from './components/view_step_three';

const Home = ({ navigation, route }: any) => {
  const [isLoading, setLoading] = useState(true);
  const [isLoadingInStep, setLoadingStep] = useState(false);
  const [verifiedBankDetails, setVerifiedBankDetails] = useState(null);
  const [signaturePadSigned, setSIgnatureSigned] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentData, setPaymentData] = useState<PaymentData>();

  const token = route.params.token;

  useEffect(() => {
    initSdk(token)
      .then(async (data) => {
        setPaymentData(data);
        loadBanks();
      })
      .catch((error) => console.error(error));
  }, [token]);

  useEffect(() => {
    if (route.params?.signature) {
      setSIgnatureSigned(route.params?.signature);
    }
  }, [route.params?.signature]);

  function loadBanks() {
    getBanks()
      .then(() => {
        return setLoading(false);
      })
      .catch((error) => console.error(error));
  }

  function proceedToNextStep() {
    if (currentStep == 2) {
      createMandate();
    } else if (currentStep == 3) {
      DeviceEventEmitter.emit('event.onClose', null);
      BackHandler.exitApp;
    } else {
      setCurrentStep(currentStep + 1);
    }
  }

  useEffect(() => {
    return () => {
      DeviceEventEmitter.removeAllListeners();
    };
  }, []);

  function createMandate() {
    setLoadingStep(true);
    createmandate(paymentData, signaturePadSigned, verifiedBankDetails)
      .then((response: any) => {
        DeviceEventEmitter.emit('event.onMandateCreated', response);
        setLoadingStep(false);
        setCurrentStep(currentStep + 1);
      })
      .catch((error) => console.error(error));
  }

  return (
    <SafeAreaView>
      {isLoading ? (
        <Splash />
      ) : (
        <View>
          <CronPayHeader />
          <View style={styles.container}>
            <Timeline step={currentStep} />
            <CronPaySpacer height={20} />
            {currentStep == 3 ? (
              <StepThreeView />
            ) : currentStep == 2 ? (
              <StepTwoView
                route={route}
                navigation={navigation}
                paymentData={paymentData}
                bankData={verifiedBankDetails}
                onSignatureReceived={signaturePadSigned}
              />
            ) : (
              <BankInfoView
                token={token}
                loading={(stateInStep: boolean) => setLoadingStep(stateInStep)}
                onStepOneDone={(data: any) => setVerifiedBankDetails(data)}
              />
            )}
            <CronPaySpacer height={20} />
            <CronPayButton
              disabled={verifiedBankDetails === null}
              title={currentStep == 3 ? 'Close' : 'Proceed'}
              isLoading={isLoading || isLoadingInStep}
              onPress={() => proceedToNextStep()}
            />
          </View>
        </View>
      )}
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
