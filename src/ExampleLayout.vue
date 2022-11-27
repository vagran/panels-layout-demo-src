<template>

<PanelsLayout class="panelsLayout" :contentDescriptorProvider="_GetContentDescriptor" />

</template>

<script setup lang="ts">
import type * as PL from "panels-layout/src/PublicTypes"
import PanelsLayout from "panels-layout/src/PanelsLayout.vue"
import AboutView from "@/views/AboutView.vue"
import ViewWithLocalState from "@/views/ViewWithLocalState.vue"

enum ContentSelector {
    ABOUT,
    VIEW_WITH_LOCAL_STATE
}

const contentDescriptors: {[selector: number]: PL.ContentDescriptor} = {
    [ContentSelector.ABOUT]: {
        component: AboutView,
        props: {}
    },
    [ContentSelector.VIEW_WITH_LOCAL_STATE]: {
        component: ViewWithLocalState,
        props: {}
    }
}

function _GetContentDescriptor(selector: ContentSelector): PL.ContentDescriptor {
    return contentDescriptors[selector]
}

</script>

<style scoped land="less">

.panelsLayout {
    width: 100%;
    height: 100%;
}

</style>
