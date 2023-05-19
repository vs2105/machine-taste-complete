export interface orderArr {
    id: string;
    customerName: string;
    orderDate: string;
    orderTime: string;
    amount: number;
    orderStatus: string;
}

export interface medicinArr{
    id: string;
    medicineName: string;
    medicineBrand: string;
    expiryDate: string;
    unitPrice: number;
    prescriptionRequired: boolean;
    stock: number;
}

export interface UserArr{
    id: number;
    profilePic: string;
    fullName: string;
    dob: string;
    gender: string;
    currentCity: string;
    currentCountry: string;
}