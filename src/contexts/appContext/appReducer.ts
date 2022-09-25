/* eslint no-case-declarations: */
import { addInputFieldType, addTransactionClickedType, removeHistoryEntryType,
} from "./appActions";
import {calculateIncomeAndExpense} from "../../utils";
import {HistoryItem} from "../../../types";

export const appReducer = (state: any, action: any) => {
  switch (action.type) {
    case addInputFieldType:
      return {
        ...state,
        addTransaction: {
          ...action.payload,
        },
      };
    case addTransactionClickedType:
      const historyList: HistoryItem[] = [...state.history, {text: state.addTransaction.text, amount: parseFloat(String(state.addTransaction.amount)).toFixed(2)}]
      return {
        ...state,
        addTransaction: {
          amount: '',
          text: '',
          error: '',
          isBtnEnabled: false
        },
        history: historyList,
        result: calculateIncomeAndExpense(historyList)
      };
    case removeHistoryEntryType:
      const historyData: HistoryItem[] = state.history.filter((item:HistoryItem, index: number)=>!(index === action.payload.index && item.text === action.payload.text && item.amount === action.payload.amount) )
      return {
        ...state,
        history: historyData,
        result: calculateIncomeAndExpense(historyData)
      };
    default:
      return state;
  }
};
