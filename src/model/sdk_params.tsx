
class SdkParams {
    accessToken : string | undefined;
    amount: string | undefined;
    bvn!: string;
    customerReference!: string;
    email!: string;
    endDate!: string;
    firstName!: string;
    lastName!: string;
    narration!: string;
    phone!: string;
    startDate!: string;

    constructor() {
        this.accessToken,
        this.amount,
        this.bvn,
        this.customerReference,
        this.email,
        this.endDate,
        this.firstName,
        this.lastName,
        this.narration,
        this.phone,
        this.startDate;
    }
}

export default new SdkParams();