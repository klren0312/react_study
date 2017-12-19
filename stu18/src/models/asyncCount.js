app.model({
  namespace:'count',
  effects:{
    *add(action, { call,put }){
      yield call(delay, 1000)
      yield put({ type: 'minus'})
    }
  },
  
})