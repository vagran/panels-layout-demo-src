import {reactive, computed} from "vue"

const state = reactive({
    counter: 0
})

export default function useGlobalState() {

    return {
        counter: computed(() => state.counter),

        Increment() {
            state.counter++
        }
    }
}
