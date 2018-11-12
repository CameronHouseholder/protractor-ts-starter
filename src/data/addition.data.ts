export default class AdditionData {
    // Operators
    private static readonly ADDITION_OPERATOR: string = "+";
    // Data providers
    public static readonly ADDITION_DATA_PROVIDER = [
        {
            description: "should add two positive numbers",
            operator: AdditionData.ADDITION_OPERATOR,
            numOne: "1", 
            numTwo: "1", 
            result: "2",
        },
        {
            description: "should add one positive number and one negative number", 
            operator: AdditionData.ADDITION_OPERATOR,
            numOne: "-1", 
            numTwo: "2", 
            result: "1",
        },
        {
            description: "should add one positive number and zero", 
            operator: AdditionData.ADDITION_OPERATOR,
            numOne: "1", 
            numTwo: "0", 
            result: "1",
        },
        {
            description: "should add one negative number and zero", 
            operator: AdditionData.ADDITION_OPERATOR,
            numOne: "-1", 
            numTwo: "0", 
            result: "-1",
        },
        {
            description: "should add zero and zero", 
            operator: AdditionData.ADDITION_OPERATOR,
            numOne: "0", 
            numTwo: "0", 
            result: "0",
        },
    ];
}