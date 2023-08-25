import { createSlice } from "@reduxjs/toolkit"

const notificationAtStart = {
    notification: ''
}

const notificationSlice = createSlice({ 
  name: 'notifications',
  initialState: notificationAtStart,
  reducers: {
    makeNotification(state, action) {
      const content = action.payload
      state.push({
        message: content
      })
    },

    removeNotification(state, action) {
      return state.filter((_, idx) => idx !== 0)
    },
  },
})

export const { makeNotification, removeNotification } = notificationSlice.actions

export const makeNotifUpVote = (id, timer) => {
  return async (dispatch, getState) => {
    const state = getState()
    const currAnecdotes = state.anecdotes
    const anecdoteForNotification = currAnecdotes.find(n => n.id === id).content
    dispatch(makeNotification(`You have voted for '${anecdoteForNotification}'`))
    setTimeout(() => dispatch(makeNotification('')), (timer*1000))
  }
}

export const makeNotifNewAnec = (content, timer) => {
  return async dispatch => {
    console.log(timer)
    dispatch(makeNotification(`You have made a new anecdote '${content}'`))
    setTimeout(() => dispatch(makeNotification('')), (timer*1000))
  }
}

export default notificationSlice.reducer