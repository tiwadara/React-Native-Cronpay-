export interface PaymentData {
    accessToken?:       string;
    amount?:            number;
    bvn?:               string;
    customerReference?: string;
    email?:             string;
    endDate?:           string;
    firstName?:         string;
    lastName?:          string;
    narration?:         string;
    phone?:             string;
    startDate?:         string;
    accountNumber?:     string;
    bank?:              string;
    maxAmount?:         string;
    signature?:         string;
}

// Converts JSON strings to/from your types
export class Convert {
    public static async toPaymentData(json: string): Promise<PaymentData> {
        return await JSON.parse(json);
    }

    public static async paymentDatatoJson(value: PaymentData): Promise<string> {
        return await JSON.stringify(value);
    }
}