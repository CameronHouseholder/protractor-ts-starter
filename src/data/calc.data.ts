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
            firstNumber: "1", 
            secondNumber: "1", 
            result: "2",
        },
        {
            description: "should add one positive number and one negative number", 
            operator: CalcData.OPERATORS.add,
            firstNumber: "-1", 
            secondNumber: "2", 
            result: "1",
        },
        {
            description: "should add one positive number and zero", 
            operator: CalcData.OPERATORS.add,
            firstNumber: "1", 
            secondNumber: "0", 
            result: "1",
        },
        {
            description: "should add one negative number and zero", 
            operator: CalcData.OPERATORS.add,
            firstNumber: "-1", 
            secondNumber: "0", 
            result: "-1",
        },
        {
            description: "should add zero and zero", 
            operator: CalcData.OPERATORS.add,
            firstNumber: "0", 
            secondNumber: "0", 
            result: "0",
        },
    ];
}