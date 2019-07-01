export default class CalcData {
    // Operators
    private static readonly OPERATORS = {
        "add": "+",
        "subtract": "-",
        "multiply": "*",
        "divide": "/"
    }
    // Data providers
    public static readonly CALC_DATA_PROVIDER = [
        // Addition
        {
            description: "should add a positive number and a positive number",
            operator: CalcData.OPERATORS.add,
            firstNumber: "1", 
            secondNumber: "1", 
            result: "2",
        },
        {
            description: "should add a positive number and a negative number", 
            operator: CalcData.OPERATORS.add,
            firstNumber: "2", 
            secondNumber: "-1", 
            result: "1",
        },
        {
            description: "should add a positive number and zero", 
            operator: CalcData.OPERATORS.add,
            firstNumber: "1", 
            secondNumber: "0", 
            result: "1",
        },
        {
            description: "should add a negative number and zero", 
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
        // Subtraction
        {
            description: "should subtract a positive number from a positive number",
            operator: CalcData.OPERATORS.subtract,
            firstNumber: "2", 
            secondNumber: "1", 
            result: "1",
        },
        {
            description: "should subtract a positive number from a negative number", 
            operator: CalcData.OPERATORS.subtract,
            firstNumber: "-1", 
            secondNumber: "2", 
            result: "-3",
        },
        {
            description: "should subtract a negative number from a positive number", 
            operator: CalcData.OPERATORS.subtract,
            firstNumber: "2", 
            secondNumber: "-1", 
            result: "3",
        },
        {
            description: "should subtract a negative number from a negative number", 
            operator: CalcData.OPERATORS.subtract,
            firstNumber: "-1", 
            secondNumber: "-2", 
            result: "1",
        },
        {
            description: "should subtract zero from a positive number", 
            operator: CalcData.OPERATORS.subtract,
            firstNumber: "1", 
            secondNumber: "0", 
            result: "1",
        },
        {
            description: "should subtract zero from a negative number", 
            operator: CalcData.OPERATORS.subtract,
            firstNumber: "-1", 
            secondNumber: "0", 
            result: "-1",
        },
        {
            description: "should subtract a positive number from zero", 
            operator: CalcData.OPERATORS.subtract,
            firstNumber: "0", 
            secondNumber: "1", 
            result: "-1",
        },
        {
            description: "should subtract a negative number from zero", 
            operator: CalcData.OPERATORS.subtract,
            firstNumber: "0", 
            secondNumber: "-1", 
            result: "1",
        },
        {
            description: "should subtract zero from zero", 
            operator: CalcData.OPERATORS.subtract,
            firstNumber: "0", 
            secondNumber: "0", 
            result: "0",
        },
        // Multiplication
        {
            description: "should multiply a positive number and a positive number", 
            operator: CalcData.OPERATORS.multiply,
            firstNumber: "2", 
            secondNumber: "2", 
            result: "4",
        },
        {
            description: "should multiply a positive number and a negative number", 
            operator: CalcData.OPERATORS.multiply,
            firstNumber: "2", 
            secondNumber: "-2", 
            result: "-4",
        },
        {
            description: "should multiply a positive number and one", 
            operator: CalcData.OPERATORS.multiply,
            firstNumber: "2", 
            secondNumber: "1", 
            result: "2",
        },
        {
            description: "should multiply a negative number and one", 
            operator: CalcData.OPERATORS.multiply,
            firstNumber: "-2", 
            secondNumber: "1", 
            result: "-2",
        },
        {
            description: "should multiply a positive number and zerp", 
            operator: CalcData.OPERATORS.multiply,
            firstNumber: "2", 
            secondNumber: "0", 
            result: "0",
        },
        {
            description: "should multiply a negative number and zero", 
            operator: CalcData.OPERATORS.multiply,
            firstNumber: "-2", 
            secondNumber: "0", 
            result: "0",
        },
        {
            description: "should multiply zero and zero", 
            operator: CalcData.OPERATORS.multiply,
            firstNumber: "0", 
            secondNumber: "0", 
            result: "0",
        },
    ];
}