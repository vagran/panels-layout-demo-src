<template>

<PanelsLayout class="panelsLayout" :contentDescriptorProvider="_GetContentDescriptor">
    <template #emptyContent="slot">
        <ContentPane :isEmpty="true" :isTab="false" :selector="null"
            @update:selector="_OnPanelContentSelected(slot.setContent, $event)"
            :setDraggable="slot.setDraggable">
            <div class="centered">
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
        <ContentPane :isEmpty="false" :isTab="slot.isTab"
            :selector="(slot.contentSelector as T.ContentSelector)"
            @update:selector="slot.setContent($event!)" :setDraggable="slot.setDraggable"
            @newTab="slot.createTab(new T.ContentSelector(T.ContentType.TABS))">
            <component :is="slot.contentDesc.component" v-bind="slot.contentDesc.props ?? {}"
                v-on="slot.contentDesc.events ?? {}" />
        </ContentPane>
    </template>

    <template #tab="slot">
        <div class="tab" :class="{active: slot.isActive, isFirst: slot.tabIndex == 0}"
            @click="slot.setActive()" :title="(slot.contentDesc as ContentDescriptor).title">
            <div class="title">{{(slot.contentDesc as ContentDescriptor).title}}</div>
            <div class="closeButton">
                <q-btn round color="page" icon="close" size="6px" @click.stop="slot.closeTab()" />
            </div>
        </div>
    </template>

    <template #expandGhostFrom="slot">
        <div class="expandGhostFromTo" :class="{active: slot.isActive}">
            <div v-if="!slot.isActive" class="iconContainer">
                <q-icon name="block" color="weak" class="icon" style="font-size: 200px;"/>
            </div>
        </div>
    </template>

    <template #expandGhostTo="slot">
        <div class="expandGhostFromTo" :class="{active: slot.isActive}">
            <q-icon v-if="slot.isActive" :name="_GetDirectionIconName(slot.dir)" color="weak"
                class="icon" />
        </div>
    </template>

    <template #expandGhostResult="slot">
        <div class="expandGhostResult" :class="{active: slot.isActive}" />
    </template>

    <template #dragSource="slot">
        <div class="dragSource">
            <q-icon name="r_open_in_new" color="weak" class="icon" />
        </div>
    </template>
</PanelsLayout>

</template>

<script setup lang="ts">
import type * as Vue from "vue"
import { reactive, ref, watchEffect, computed } from "vue"
import * as PL from "panels-layout/src/PublicTypes"
import * as T from "@/CommonTypes"

import PanelsLayout from "panels-layout/src/PanelsLayout.vue"
import PanelComponentSelector from "@/components/PanelContentSelector.vue"
import ContentPane from "@/components/ContentPane.vue"

import AboutView from "@/views/AboutView.vue"
import ViewWithLocalState from "@/views/ViewWithLocalState.vue"
import LongText from "@/views/LongText.vue"
import TabsView from "@/views/TabsView.vue"

interface ContentDescriptorOptions extends PL.ContentDescriptor {
    title: string
}

class ContentDescriptor implements PL.ContentDescriptor {
    constructor(options: ContentDescriptorOptions) {
        Object.assign(this, options)
    }
}

interface ContentDescriptor extends ContentDescriptorOptions {}

const contentDescriptors: {[selector: number]: ContentDescriptor} = {
    [T.ContentType.ABOUT]: new ContentDescriptor({
        component: AboutView,
        title: "About"
    }),
    [T.ContentType.VIEW_WITH_LOCAL_STATE]: new ContentDescriptor({
        component: ViewWithLocalState,
        title: "Local state",
        hideInactive: true
    }),
    [T.ContentType.VIEW_WITH_GLOBAL_STATE]: new ContentDescriptor({
        component: ViewWithLocalState,//XXX
        title: "Global state"
    }),
    [T.ContentType.LONG_TEXT]: new ContentDescriptor({
        component: LongText,
        title: "Long text long text long text long text"
    }),
    [T.ContentType.TABS]: new ContentDescriptor({
        component: TabsView,
        title: "Tabs"
    })
}

function _GetContentDescriptor(selector: PL.ContentSelector): PL.ContentDescriptor {
    return contentDescriptors[(selector as T.ContentSelector).type]
}

function _OnPanelContentSelected(setter: (content: PL.ContentSelector) => void,
                                 selector: T.ContentSelector | null): void {
    if (selector !== null) {
        setter(selector)
    }
}

function _GetDirectionIconName(dir: PL.Direction): string {
    switch (dir) {
    case PL.Direction.LEFT:
        return "r_chevron_left"
    case PL.Direction.RIGHT:
        return "r_chevron_right"
    case PL.Direction.UP:
        return "r_expand_less"
    case PL.Direction.DOWN:
        return "r_expand_more"
    }
}

</script>

<style scoped lang="less">

.centered {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.panelsLayout {
    width: 100%;
    height: 100%;
}

.emptyIcon {
    font-size: 20vmin;
    max-width: 10%;
}

.expandGhostFromTo, .dragSource {
    width: 100%;
    height: 100%;
    opacity: 0.35;
    background-color: rgb(100, 100, 100);
    border-radius: 8px;
    overflow: clip;
    position: relative;

    &.active {
        background-color: rgb(216, 216, 216);
    }

    .icon {
        .centered();
        font-size: 300px;
    }
}

.expandGhostResult {
    width: 100%;
    height: 100%;
    border: 2px solid rgb(160, 160, 160);
    border-radius: 8px;

    &.active {
        border-color: rgb(255, 255, 255);
    }
}

.tab {
    height: 100%;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-left-width: 0;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 4px 5px 0 8px;
    display: flex;
    flex-flow: row nowrap;

    .title {
        display: inline-block;
        max-width: 150px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .closeButton {
        display: inline-block;
        align-self: start;
        margin-left: 5px;
        margin-top: -2px;
    }

    &.isFirst {
        border-left-width: 1px;
    }

    &.active {
        border-bottom-width: 0;
        background-color: var(--q-dark-page);
    }
}

</style>
