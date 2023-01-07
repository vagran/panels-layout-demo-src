<template>
<q-scroll-area style="height: 100%; width: 100%;">
    <h4 class="q-my-md">Tabs</h4>
    <p>
        Each panel can also have one or multiple tabs. Single tab is not displayed as tab by default
        but this can be enabled by <span class="codeSpan">showSingleTab</span> property.
    </p>
    <p>
        In this example new tabs can be created by "File/New tab" menu item in each non-empty panel.
        Also holding <span class="codeSpan">Ctrl</span> key while dragging pane content onto
        non-empty panel, places it in a new tab.
    </p>
    <p>
        Note: tabs is currently incomplete feature. It still needs full drag-and-drop support,
        proper tab bar overflow handling etc.
    </p>
    <q-btn color="primary-dark" label="Create new tab" class="q-ma-md"
        @click="props.layout.createTab(new T.ContentSelector(T.ContentType.TABS))" />
</q-scroll-area>
</template>

<script setup lang="ts">
import * as T from "@/CommonTypes"
import * as PL from "panels-layout/src/PublicTypes"

const props = defineProps<{
    layout: PL.ContentSlotProps
}>()

</script>
