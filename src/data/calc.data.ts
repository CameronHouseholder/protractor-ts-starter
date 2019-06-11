export default class CalcData {
    // Operators
    public static readonly OPERATORS = {
        "add": "+",
        "subtract": "-",
        "multiple": "*",
        "divide": "/"
    }
    // Data providers
    public static readonly CALC_DATA_PROVIDER = [
        // Addition
        {
            description: "should add two positive numbers",
            operator: CalcData.OPERATORS.add,
            numOne: "1", 
            numTwo: "1", 
            result: "2",
        },
        {
            description: "should add one positive number and one negative number", 
            operator: CalcData.OPERATORS.add,
            numOne: "-1", 
            numTwo: "2", 
            result: "1",
        },
        {
            description: "should add one positive number and zero", 
            operator: CalcData.OPERATORS.add,
            numOne: "1", 
            numTwo: "0", 
            result: "1",
        },
        {
            description: "should add one negative number and zero", 
            operator: CalcData.OPERATORS.add,
            numOne: "-1", 
            numTwo: "0", 
            result: "-1",
        },
        {
            description: "should add zero and zero", 
            operator: CalcData.OPERATORS.add,
            numOne: "0", 
            numTwo: "0", 
            result: "0",
        },
    ];
}