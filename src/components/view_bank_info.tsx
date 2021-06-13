import React, { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { ColorConstants } from '../constants/color_constants';
import { initSdk, loadLocalBanks, verifyBankDetails } from '../services/auth';


const BankInfoView = (props: any) => {
    const [ammount, onChangeNumber] = useState("");
    const [accountName, setAccountName] = useState("");
    const [verificationResponse, setVerificationResponse] = useState("");
    const [accountNumber, setaccountNumber] = useState("");
    const [banks, setBanks] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedBank, setValue] = useState(null);
    const [isLoadingDetails, setLoadingDetails] = useState(false);

    useEffect(() => {
        loadLocalBanks()
            .then((response) => {
                console.log(response)
                setBanks(response)
            })
            .catch((error) => console.error(error));

    }, []);

    useEffect(() => {
        if (accountNumber.length == 10 && selectedBank != null) {
            verifyDetails();
        }
    }, [selectedBank, accountNumber]);

    useEffect(() => {
        if ((accountName !== "" && (ammount.length !== 0))) {
            props.onStepOneDone?.({"accountNumber" : accountNumber,
             "maxAmount" : ammount, 
             "bankObj": banks.find((bank : any) => bank.id === selectedBank)})
        }
        
    }, [accountName, ammount]);

    function verifyDetails() {
        setLoadingDetails(true)
        props.loading?.(true);
        verifyBankDetails(accountNumber, selectedBank)
            .then((response) => {
                if (response.data == null) {
                    setVerificationResponse(response.message)
                    setAccountName("")
                } else {
                    setVerificationResponse(response.data.accountName)
                    setAccountName(response.data.accountName)
                }
            })
            .catch((error) => {
                setVerificationResponse(error)
            })
            .finally(() => 
            {
            props.loading?.(false);
            setLoadingDetails(false);
        });
    }


    return (
        <View>
            <DropDownPicker
                style={styles.dropdown}
                dropDownContainerStyle={styles.dropdownContent}
                placeholder={'Select Bank'}
                schema={{
                    label: 'name',
                    value: 'id'
                }}
                open={open}
                value={selectedBank}
                items={banks}
                setOpen={setOpen}
                setValue={(bankId: any) => setValue(bankId)}
                searchable={false}

            />
            <TextInput
                style={styles.input}
                placeholder="Account Number"
                keyboardType="numeric"
                onChangeText={(text) => setaccountNumber(text)}
            />
            {isLoadingDetails ? 
            <ActivityIndicator style={styles.accountNameProgress} size="small" color={ColorConstants.primary} /> 
            : <Text style={styles.accountName}>{verificationResponse}</Text>}
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={ammount}
                placeholder="Amount"
                keyboardType="numeric"
            />
        </View>
    );
};

export default BankInfoView;

const styles = StyleSheet.create({

    accountName: {
        color: 'black',
        fontWeight: '400',
        fontSize: 9,
        textAlign: 'right',
        marginVertical: 10,
    },
    accountNameProgress: {
        alignItems: 'flex-end',
        marginVertical: 10,
    },
    input: {
        height: 60,
        paddingHorizontal: 20,
        marginVertical: 10,
        backgroundColor: ColorConstants.white,
        borderWidth: 0.001,
        borderColor: ColorConstants.white,
        borderRadius: 5.0,
        shadowColor: ColorConstants.shadow,
        shadowOffset: { width: 0, height: 800 },
        shadowRadius: 200,
        elevation: 2,

    },
    dropdown: {
        height: 60,
        paddingHorizontal: 20,
        backgroundColor: ColorConstants.white,
        borderColor: ColorConstants.white,
        borderRadius: 5.0,
        shadowColor: ColorConstants.shadow,
        shadowOffset: { width: 0, height: 800 },
        shadowRadius: 2000,
        elevation: 2,
    },
    dropdownContent: {
        paddingHorizontal: 10,
        backgroundColor: ColorConstants.white,
        borderColor: ColorConstants.white,
        borderRadius: 5.0,
        shadowColor: ColorConstants.shadow,
        shadowOffset: { width: 0, height: 800 },
        shadowRadius: 2000,
        elevation: 2
    },
});

