export const userDataModel = (data) => ({
    userId: data.id,
    userInfos: data.userInfos,
    firstName: data.userInfos ? data.userInfos.firstName : undefined,
    todayScore: data.score || data.todayScore,
    keyData: data.keyData,
    calorieCount: data.keyData ? data.keyData.calorieCount : undefined,
    proteinCount: data.keyData ? data.keyData.proteinCount : undefined,
    carbohydrateCount: data.keyData ? data.keyData.carbohydrateCount : undefined,
    lipidCount: data.keyData ? data.keyData.lipidCount : undefined,
});

export const activityDataModel = (data) => ({
    userId: data.userId,
    sessions: data.sessions,

});

export const averageDataModel = (data) => ({
    userId: data.id,
    sessions: data.sessions,
});

export const performanceDataModel = (data) => ({
    userId: data.id,
    sessions: data.data,
});

export const renameAverage = () => {
    const days = (data) => {
        switch (data) {
            case 1:
                return "L";
            case 2:
                return "M";
            case 3:
                return "M";
            case 4:
                return "J";
            case 5:
                return "V";
            case 6:
                return "S";
            case 7:
                return "D";
            default:
                break;
        }
    };
    return days;
};

export const renameChart = () => {
    const change = (item) => {
        switch (item) {
            case 1:
                return "Cardio";
            case 2:
                return "Energie";
            case 3:
                return "Endurance";
            case 4:
                return "Force";
            case 5:
                return "Vitesse";
            case 6:
                return "Intensité";
            default:
                break;
        }
    };
    return change;
};
