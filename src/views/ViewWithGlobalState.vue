<template>
    <q-scroll-area style="height: 100%; width: 100%;">
        <h4 class="q-my-md">View with global state</h4>
        <p>
        In cases when local state cannot be preserved (dragging onto another layout, duplicating
        a pane or opening a new one), use some global state. Some Vue recommended global state
        management library can be used (e.g. <a href="https://pinia.vuejs.org">Pinia</a>), or any
        custom implementation.
        </p>
        <div>
            Counter: {{state.counter}}
            <q-btn class="q-mx-sm" color="primary-dark" @click="state.Increment()" label="++"/>
        </div>
    </q-scroll-area>
</template>

<script setup lang="ts">
import useGlobalState from "@/GlobalState"

const state = useGlobalState()

</script>
