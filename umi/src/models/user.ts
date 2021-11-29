const userModel = {
    namespace: 'user',
    state: {
        'name': 'user',
        'token': 'xxx'
    },
    reducers: {
        setForm(state, action) {
            return { ...state, ...action.payload }
        }
    }
}
export default userModel;