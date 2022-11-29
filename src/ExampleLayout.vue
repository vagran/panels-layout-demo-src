<template>

<PanelsLayout class="panelsLayout" :contentDescriptorProvider="_GetContentDescriptor">
    <template #emptyContent>
        <div class="panel" >
            <PanelComponentSelector class="componentSelector" v-model="tmpSelector" />
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                <div>
                    <q-icon name="web_asset" color="weak" class="emptyIcon" />
                </div>
                <div style="color: var(--q-weak); text-align: center; margin-top: -15px;">
                    Select content
                </div>
            </div>
        </div>
    </template>
</PanelsLayout>

</template>

<script setup lang="ts">
import type * as Vue from "vue"
import { reactive, ref, watchEffect, computed } from "vue"
import type * as PL from "panels-layout/src/PublicTypes"
import PanelsLayout from "panels-layout/src/PanelsLayout.vue"
import AboutView from "@/views/AboutView.vue"
import ViewWithLocalState from "@/views/ViewWithLocalState.vue"
import PanelComponentSelector from "@/components/PanelContentSelector.vue"
import * as T from "@/CommonTypes"

const tmpSelector: Vue.Ref<T.ContentSelector | null> = ref(null)

const contentDescriptors: {[selector: number]: PL.ContentDescriptor} = {
    [T.ContentSelector.ABOUT]: {
        component: AboutView
    },
    [T.ContentSelector.VIEW_WITH_LOCAL_STATE]: {
        component: ViewWithLocalState
    },
    [T.ContentSelector.VIEW_WITH_GLOBAL_STATE]: {
        component: ViewWithLocalState//XXX
    }
}

function _GetContentDescriptor(selector: T.ContentSelector): PL.ContentDescriptor {
    return contentDescriptors[selector]
}

</script>

<style scoped land="less">

.panelsLayout {
    width: 100%;
    height: 100%;
}

.panel {
    width: 100%;
    height:100%;
    position: relative;
    background-color: var(--q-dark-page);
    border-radius: 8px;
    overflow: clip;
}

.emptyIcon {
    font-size: 20vmin;
    max-width: 10%;
}

.componentSelector {
    position: absolute;
    top: 10px;
    left: 20px;
}

</style>
