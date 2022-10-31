<template>
    <div>
        <h1>View with local state</h1>
        Counter: {{counter}}
        <q-btn @click="counter++" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const counter = ref(0)

</script>

<style scoped land="less">
</style>
