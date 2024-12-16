import { createSlice } from "@reduxjs/toolkit";
import { getLocalStorage, setLocalStorage } from "@utils/localstorage";
import { notifyError, notifySuccess } from "@utils/toast";

const initialState = {
  compare: [],
};

export const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    add_to_compare: (state, { payload }) => {
        const isExist = state.compare.some(item => item._id === payload._id);
        if(!isExist){
            state.compare.push(payload);
            notifySuccess(`${payload.title} added to compare`)
        }
        else {
            state.compare = state.compare.filter(item => item._id !== payload._id);
            notifyError(`${payload.title} removed from compare`);
        }
      setLocalStorage("compare_items", state.compare);
    },
    remove_compare_product: (state, { payload }) => {
      state.compare = state.compare.filter((item) => item._id !== payload._id);
      notifyError(`${payload.title} removed from compare`);
      setLocalStorage("compare_items", state.compare);
    },
    get_compare_products: (state, { payload }) => {
      state.compare = getLocalStorage("compare_items");
    },
  },
});

export const {
  add_to_compare,
  remove_compare_product,
  get_compare_products,
} = compareSlice.actions;
export default compareSlice.reducer;
