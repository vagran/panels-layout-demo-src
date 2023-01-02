<template>
    <q-scroll-area style="height: 100%; width: 100%;">
        <h4 class="q-my-md">View with local state</h4>
        <p>
        Pane local state is preserved when changing the layout. Dragging the pane in one layout
        scope works as well. However, dragging into other layout instance (e.g. inside the right
        drawer in this example) will lose the local state. Use global state in such cases. To
        preserve state with tabs, use <span class="codeSpan">hideInactive: true</span> option in
        <span class="codeSpan">ContentDescriptor</span>.
        </p>
        <div>
            Counter: {{counter}}
            <q-btn class="q-mx-sm" color="primary-dark" @click="counter++" label="++"/>
        </div>
    </q-scroll-area>
</template>

<script setup lang="ts">
import { ref } from "vue"

const counter = ref(0)

</script>

<style scoped land="less">
</style>
