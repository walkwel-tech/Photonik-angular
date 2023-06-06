export interface SolarBenefitsAndAdditionalTips {
    benefits?: title[]
    additionalTips?: title[]
}
export interface title {
    title: string
}
export interface PeriodicElement {
    qty: tableTitleAndValue;
    appliances: tableTitleAndValue;
    power: tableTitleAndValue;
    summerTimeHrs: tableTitleAndValue;
    summerEnergyKwh: tableTitleAndValue;
    winterTimeKwh: tableTitleAndValue;
    winterEnergyKwh: tableTitleAndValue;
    annualEnergyKwh: tableTitleAndValue;
    menu: tableTitleAndValue;
}

export interface tableTitleAndValue {
    title?: string,
    value: any[]
}
