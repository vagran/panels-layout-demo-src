<template>
<div class="panel" :class="{isTab: props.isTab}">
    <q-layout view="hHh lpR fFf" container class="panelLayoutContainer">

    <q-header bordered class="bg-dark-page text-white">
        <q-toolbar style="min-height: 40px;">
            <!-- XXX set draggable by plugin -->
            <div :ref="el => props.setDraggable?.call(null, 'selector', el)"
                 class="selectorContainer">
                <q-icon name="drag_indicator" class="dragIcon"/>
                <PanelComponentSelector class="componentSelector" :modelValue="props.selector"
                    @update:modelValue="_Emit('update:selector', $event)" />
            </div>
            <template v-if="props.isEmpty">
                <div class="emptyTitle">
                    Empty panel, select some content
                </div>
            </template>
            <template v-else>
                <q-separator vertical />
                <q-btn stretch flat label="File">
                    <q-menu>
                        <q-list style="min-width: 150px">
                            <q-item clickable v-close-popup>
                                <q-item-section>Open...</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>New...</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup @click="_Emit('newTab')">
                                <q-item-section>New tab</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>Save</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>Save as...</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable v-close-popup>
                                <q-item-section>Close</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>Quit</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
                <q-separator vertical />
                <q-btn stretch flat label="Edit">
                    <q-menu>
                        <q-list style="min-width: 150px">
                            <q-item clickable v-close-popup>
                                <q-item-section>Undo</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>Redo</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable v-close-popup>
                                <q-item-section>Cut</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>Copy</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>Paste</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable v-close-popup>
                                <q-item-section>Find</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>Replace</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
                <q-separator vertical />
                <q-btn stretch flat label="View">
                    <q-menu>
                        <q-list style="min-width: 150px">
                            <q-item clickable v-close-popup>
                                <q-item-section>Command palette...</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup>
                                <q-item-section>Open view...</q-item-section>
                            </q-item>
                            <q-separator />
                            <q-item clickable>
                                <q-item-section>Appearance</q-item-section>
                                <q-item-section side>
                                    <q-icon name="keyboard_arrow_right" />
                                </q-item-section>
                                <q-menu anchor="top end" self="top start">
                                    <q-list>
                                        <q-item clickable v-close-popup>
                                            <q-item-section>Fullscreen</q-item-section>
                                        </q-item>
                                        <q-separator />
                                        <q-item clickable v-close-popup>
                                            <q-item-section>Zoom in</q-item-section>
                                        </q-item>
                                        <q-item clickable v-close-popup>
                                            <q-item-section>Zoom out</q-item-section>
                                        </q-item>
                                    </q-list>
                                </q-menu>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
            </template>
        </q-toolbar>
    </q-header>

    <q-page-container>
        <q-page>
            <!-- Make full-page content. -->
            <div class="q-pa-sm pageContainer" :style="{overflow: props.isEmpty ? 'clip' : undefined}">
                <slot />
            </div>
        </q-page>
    </q-page-container>

    <q-footer bordered class="bg-dark-page text-white q-px-md q-py-xs statusLine">
        Some status line
    </q-footer>

</q-layout>
</div>
</template>

<script setup lang="ts">
import type * as Vue from "vue"
import PanelComponentSelector from "@/components/PanelContentSelector.vue"
import * as T from "@/CommonTypes"

const props = withDefaults(defineProps<{
    selector: T.ContentSelector | null,
    isEmpty: boolean,
    setDraggable?: (id: any, element: HTMLElement | Vue.Component | null) => void,
    isTab: boolean
}>(), {
    selector: null,
    isEmpty: true
})

const _Emit = defineEmits<{
    (e: "update:selector", value: T.ContentSelector | null): void,
    (e: "newTab"): void
}>()

</script>

<style scoped lang="less">

.panel {
    width: 100%;
    height:100%;
    position: relative;
    background-color: var(--q-dark-page);
    border-radius: 8px;
    overflow: clip;

    &.isTab {
        border-top-left-radius: 0;
    }
}

.pageContainer {
    min-height: inherit;
    height: 0;
    overflow: auto;
    position: relative;
}

.emptyTitle {
    font-style: italic;
    color: #c6d5e4;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-left: 10px;
}

.statusLine {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.selectorContainer {
    white-space: nowrap;

    .dragIcon {
        display: inline-block;
        font-size: 24px;
        line-height: 24px;
        width: 22px;
        margin-left: -10px;
        cursor: grab;
    }
    .componentSelector {
        display: inline-block;
        vertical-align: middle;
    }
}

</style>

<style lang="less">

/* Workaround to prevent scrollbars being shown for a short moment when resizing panels. We have
 * scrolling handling in pageContainer.
 */
.q-layout-container.panelLayoutContainer > div > .scroll {
    overflow: clip;
}

</style>
