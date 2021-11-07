import errors from "../ts_src/errors"


type AssertTuple = [number, string | undefined]
type AssertTupleValidate = [number, string | undefined, boolean | undefined]

interface TestDataTemplate {
    fromBitcoin: Array<AssertTuple>;
    fromBitcoinValidate: Array<AssertTupleValidate>;
    fromSats: Array<AssertTuple>;
    fromBits: Array<AssertTuple>;
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
    fromBitcoinValidate: [
        [210000000, "210000000.00,000,000", false]
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

// here the second value of the AssertTuple is the expectation of if it errors 
// e.g true means error expected
export const errorTestData: TestDataTemplate = {
    fromBitcoin: [
        [-1, errors.SATS_RANGE_ERR],
        [0, undefined],
        [1, undefined],
        [20_999_999, undefined],
        [21_000_000, undefined],
        [21_000_001, errors.SATS_RANGE_ERR],
        [21e6, undefined],
        [211e6, errors.SATS_RANGE_ERR],
    ],
    fromBitcoinValidate: [
        [0, undefined, true]
    ],
    fromSats: [
        [-1, errors.SATS_RANGE_ERR],
        [0, undefined],
        [1, undefined],
        [20_999_999 * 1e8, undefined],
        [21_000_000 * 1e8, undefined],
        [21_000_001 * 1e8, errors.SATS_RANGE_ERR],
        [1.1, errors.SATS_NOT_INT_ERR],
        [1e-2, errors.SATS_NOT_INT_ERR],
    ],
    fromBits: [
        [-1, errors.SATS_RANGE_ERR],
        [0, undefined],
        [1, undefined],
        [20_999_999 * 1e6, undefined],
        [21_000_000 * 1e6, undefined],
        [21_000_001 * 1e6, errors.SATS_RANGE_ERR],
        [1.1, undefined],
        [1.11, undefined],
        [1.111, errors.BITS_PRECISION_ERR],
        [1.110, undefined],
        [1.11000, undefined],
        [1e-4, errors.BITS_PRECISION_ERR],
    ],
};