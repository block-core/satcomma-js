interface TestDataTemplate {
    fromBitcoin: Array<[number, string]>;
    fromSats: Array<[number, string]>;
    fromBits: Array<[number, string]>;
}

export const testData: TestDataTemplate = {
    fromBitcoin: [
        [1.23456789, "1.23,456,789"],
        [1.2345678, "1.23,456,780"],
        [1.234567, "1.23,456,700"],
        [1.23456, "1.23,456,000"],
        [1.2345, "1.23,450,000"],
        [1.234, "1.23,400,000"],
        [1.23, "1.23,000,000"],
        [1.2, "1.20,000,000"],
        [1.0, "1.00,000,000"],
        [1, "1.00,000,000"],
        [1.00000, "1.00,000,000"],
    ],
    fromSats: [
        [123456789123, "1234.56,789,123"],
        [12345678912, "123.45,678,912"],
        [1234567891, "12.34,567,891"],
        [123456789, "1.23,456,789"],
        [12345678, "0.12,345,678"],
        [1234567, "0.01,234,567"],
        [123456, "0.00,123,456"],
        [12345, "0.00,012,345"],
        [1234, "0.00,001,234"],
        [123, "0.00,000,123"],
        [12, "0.00,000,012"],
        [10, "0.00,000,010"],
        [1, "0.00,000,001"],
        [100000, "0.00,100,000"],
    ],
    fromBits: [
        [123456789123, "123456.78,912,300"],
        [12345678912, "12345.67,891,200"],
        [1234567891, "1234.56,789,100"],
        [123456789, "123.45,678,900"],
        [12345678,"12.34,567,800"],
        [1234567,"1.23,456,700"],
        [123456,"0.12,345,600"],
        [12345,"0.01,234,500"],
        [1234,"0.00,123,400"],
        [123,"0.00,012,300"],
        [12,"0.00,001,200"],
        [10,"0.00,001,000"],
        [1,"0.00,000,100"],
        [100000, "0.10,000,000"],
    ],
};