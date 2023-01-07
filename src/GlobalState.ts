import {reactive, computed} from "vue"

const state = reactive({
    counter: 0,
    aboutHtml: ""
})

export default function useGlobalState() {

    return {
        counter: computed(() => state.counter),
        aboutHtml: computed(() => state.aboutHtml),

        Increment() {
            state.counter++
        }
    }
}

/* Some SEO */
const aboutBlock = document.getElementById("about")!
state.aboutHtml = aboutBlock.innerHTML
aboutBlock.style.display = "none"
/* For web crawler. */
document.getElementById("noscript")!.innerText = aboutBlock!.innerText
