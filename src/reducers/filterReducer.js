import { createSlice } from "@reduxjs/toolkit"

const filterAtStart = {
    filter: ''
}

const filterSlice = createSlice({ 
  name: 'filter',
  initialState: filterAtStart,
  reducers: {
    setFilter(state, action) {
        state.filter = action.payload
    },
  },
})

export const { setFilter } = filterSlice.actions

export const adjustFilter = filterValue => {
  return async dispatch => {
    dispatch(setFilter(filterValue))
  }
}

export default filterSlice.reducer