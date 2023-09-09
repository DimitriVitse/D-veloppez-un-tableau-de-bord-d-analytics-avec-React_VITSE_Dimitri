export interface userControl {
    data: Data;
}

export interface Data {
    userId:     number;
    userInfos:  UserInfos;
    todayScore: number;
    keyData:    KeyData;
    sessions:   Session[];
}

export interface KeyData {
    calorieCount:      number;
    proteinCount:      number;
    carbohydrateCount: number;
    lipidCount:        number;
}

export interface Session {
    day:           Date;
    kilogram:      number;
    calories:      number;
    sessionLength: number;
}

export interface UserInfos {
    firstName: string;
    lastName:  string;
    age:       number;
}