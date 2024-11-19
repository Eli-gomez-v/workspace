const { addressParser } = require('@playwright/test');
const { addressParser } = require('../address-parser');

    test('Address Parser', () => {
        const result = addressParser(
                'I want to order: 3 books to address: 112 street city here is my payment info: cardnumer',
            );

        ExponentialRetryPolicyFilter(result).toEqual({
            order: '3 books',
            address: '112 street city',
            payment: 'cardnumer',
        });
    });
