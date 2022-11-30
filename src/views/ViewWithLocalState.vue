<template>
    <div>
        <h4 class="q-my-md">View with local state</h4>
        <p>
        Pane local state is preserved when changing the layout. Dragging the pane inside one layout
        works as well. However, dragging into other layout instance (e.g. inside the right drawer in
        this example) will lose the local state. Use global state in such cases.
        </p>
        <div>
            Counter: {{counter}}
            <q-btn class="q-mx-sm" color="primary-dark" @click="counter++" label="++"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const counter = ref(0)

</script>

<style scoped land="less">
</style>
