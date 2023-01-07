<template>
<q-scroll-area style="height: 100%; width: 100%;">
    <h4 class="q-my-md">About</h4>
    <div v-html="state.aboutHtml.value" />
</q-scroll-area>
</template>

<script setup lang="ts">
import useGlobalState from "@/GlobalState"

const state = useGlobalState()

</script>
