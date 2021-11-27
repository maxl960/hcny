const Model = {
    namespace: 'test',
    state: {
        form: { 'b': 'test/model(test)' }
    },
    reducers: {
        setForm(state, action) {
            return { ...state, form: action.payload || {} }
        }
    }
}
export default Model;