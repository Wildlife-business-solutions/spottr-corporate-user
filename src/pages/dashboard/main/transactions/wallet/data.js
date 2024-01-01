import fiat from 'assets/mem/fiat.svg';
import cliq from 'assets/mem/redcoin.svg';
import susd from 'assets/mem/yellowcoin.svg';

export const paymenttypes = [
    {
        id: 1,
        coin: fiat,
        type: 'Fiat',
        amount: 456780,
        rate: 357.89,
        percent: 4
    },
    {
        id: 2,
        coin: cliq,
        type: 'Cliq',
        amount: 4560,
        rate: 37.89,
        percent: 40
    },
    {
        id: 3,
        coin: susd,
        type: 'SUSD',
        amount: 456780,
        rate: 357.89,
        percent: 10
    }
]