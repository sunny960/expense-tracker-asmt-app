// @ts-ignore
import {HistoryItem} from "../../types";

export const getAmountWithCurrency = (amount: string, _currency = '$') => {
    let data = parseFloat(amount).toFixed(2);
    if (isNegative(amount)) {
        // @ts-ignore
        return `-${_currency}${-1 * data}`
    } else
        return `${_currency}${data}`
}

export const isNegative = (num: string) => {
    return Math.sign(Number(num)) === -1;
}

export const calculateIncomeAndExpense = (list: HistoryItem[] = []) => {
    let income: string | number = '0', expense: string | number = '0', result;
    list.forEach((item) => {
        if (isNegative(item.amount)) {
            expense = parseFloat(String(expense)) + parseFloat(item.amount)
        } else {
            income = parseFloat(String(income)) + parseFloat(item.amount)
        }
    })
    result = parseFloat(String(income)) + parseFloat(expense)
    return {
        income: parseFloat(String(income)).toFixed(2),
        expense: parseFloat(String(expense)).toFixed(2),
        finalResult: parseFloat(String(result)).toFixed(2)
    }
}
