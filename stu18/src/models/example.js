
export default {

  namespace: 'count',

  state: {
    record : 0,
    current : 0
  },
  reducers:{
    add(state){
      const newCurrent = state.current + 1
      return { ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent,
      }
    },
    minus(state){
      return {...state, current: state.current - 1}
    }
  }
}
