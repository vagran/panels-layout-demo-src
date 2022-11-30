<template>

<PanelsLayout class="panelsLayout" :contentDescriptorProvider="_GetContentDescriptor">
    <template #emptyContent="slot">
        <ContentPane :is-empty="true" :selector="null"
            @update:selector="_OnPanelContentSelected(slot.setContent, $event)">
            <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                <div>
                    <q-icon name="web_asset" color="weak" class="emptyIcon" />
                </div>
                <div style="color: var(--q-weak); text-align: center; margin-top: -15px;">
                    Select content
                </div>
            </div>
        </ContentPane>
    </template>

    <template #contentPane="slot">
        <ContentPane :is-empty="false" :selector="slot.contentSelector"
            @update:selector="slot.setContent($event)">
            <component :is="slot.contentDesc.component" v-bind="slot.contentDesc.props ?? {}"
                v-on="slot.contentDesc.events ?? {}" />
        </ContentPane>
    </template>
</PanelsLayout>

</template>

<script setup lang="ts">
import type * as Vue from "vue"
import { reactive, ref, watchEffect, computed } from "vue"
import type * as PL from "panels-layout/src/PublicTypes"
import * as T from "@/CommonTypes"

import PanelsLayout from "panels-layout/src/PanelsLayout.vue"
import PanelComponentSelector from "@/components/PanelContentSelector.vue"
import ContentPane from "@/components/ContentPane.vue"

import AboutView from "@/views/AboutView.vue"
import ViewWithLocalState from "@/views/ViewWithLocalState.vue"
import LongText from "@/views/LongText.vue"

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
    },
    [T.ContentSelector.LONG_TEXT]: {
        component: LongText
    }
}

function _GetContentDescriptor(selector: T.ContentSelector): PL.ContentDescriptor {
    return contentDescriptors[selector]
}

function _OnPanelContentSelected(setter: (content: PL.ContentSelector) => void,
                                 selector: T.ContentSelector | null): void {
    if (selector !== null) {
        setter(selector)
    }
}

</script>

<style scoped land="less">

.panelsLayout {
    width: 100%;
    height: 100%;
}

.emptyIcon {
    font-size: 20vmin;
    max-width: 10%;
}

</style>
