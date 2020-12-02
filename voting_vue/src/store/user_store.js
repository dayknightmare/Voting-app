import { reactive, readonly } from 'vue'


const state = reactive({
    userId: '',
    userEmail: ''
})

const setUserId = (e) => {
    state.userId = e;
}

const setUserEmail = (e) => {
    state.userEmail = e;
}


console.log(state);

const stateRead = readonly(state)

export { stateRead, setUserId, setUserEmail }