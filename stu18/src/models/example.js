
export default {

  namespace: 'count',

  state: {
    max : 0,
    min:0,
    current : 0
  },
  reducers:{
    add(state){
      const newCurrent = state.current + 1
      return { ...state,
        max: newCurrent > state.max ? newCurrent : state.max,
        current: newCurrent,
      }
    },
    minus(state){
      const newCurrent = state.current - 1
      return {...state, 
        min: newCurrent < state.min ? newCurrent : state.min,
        current: newCurrent
      }
    }
  }
}
