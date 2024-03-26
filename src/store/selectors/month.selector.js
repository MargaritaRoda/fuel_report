export const selectMonth = (state) => {
    if(state.month.numberMonth <= 9) {
        return {
            nameMonth: state.month.nameMonth,
            numberMonth: `0${state.month.numberMonth}`
        }
    }
    return state.month;
}