const normalActionCreator = (type: string) => ({
  type,
});

const payloadActionCreator = (type: string, payload: any) => ({
  type,
  payload,
});


const addInputFieldType = "ADD_VALUE_IN_INPUT_FILED";
const addInputField = (payload: any) => payloadActionCreator(addInputFieldType, payload);

const addTransactionClickedType = "ADD_TRANSACTION_CLICKED";
const addTransactionClicked = () => normalActionCreator(addTransactionClickedType);

const removeHistoryEntryType = "REMOVE_HISTORY_ENTRY";
const removeHistoryEntry = (payload: any) => payloadActionCreator(removeHistoryEntryType, payload);

const toggleViewType = "TOGGLE_VIEW";
const toggleView = () => normalActionCreator(toggleViewType);



export {
  toggleViewType,
  toggleView,
  addInputFieldType,
  addInputField,
  addTransactionClickedType,
  addTransactionClicked,
  removeHistoryEntryType,
  removeHistoryEntry
};
