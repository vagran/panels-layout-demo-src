<template>
<div>
    <q-select :options="options" :modelValue="_modelValue" dense
        @update:modelValue="_Emit('update:modelValue', $event.selector)">
        <template v-slot:selected-item="scope">
            <q-icon :name="scope.opt.icon" size="25px" />
        </template>
        <template v-slot:option="scope">
          <q-item v-bind="scope.itemProps">
            <q-item-section avatar>
              <q-icon :name="scope.opt.icon" size="25px" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ scope.opt.label }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
    </q-select>
</div>
</template>

<script setup lang="ts">
import type * as Vue from "vue"
import { reactive, ref, watchEffect, computed } from "vue"
import type * as Q from "quasar/dist/types"
import * as T from "@/CommonTypes"

const props = withDefaults(defineProps<{
    modelValue: T.ContentSelector | null
}>(), {
    modelValue: null
})

const _Emit = defineEmits<{
    (e: "update:modelValue", value: T.ContentSelector | null): void
}>()

type ContentOption = {
    label: string,
    icon: string,
    selector: T.ContentSelector
}

const options: ContentOption[] = [{
    label: "About",
    icon: "info",
    selector: T.ContentSelector.ABOUT
}, {
    label: "Local state",
    icon: "local_offer",
    selector: T.ContentSelector.VIEW_WITH_LOCAL_STATE
}, {
    label: "Global state",
    icon: "public",
    selector: T.ContentSelector.VIEW_WITH_GLOBAL_STATE
}, {
    label: "Long text",
    icon: "article",
    selector: T.ContentSelector.LONG_TEXT
}]

const _modelValue = computed(() => {
    if (props.modelValue === null) {
        return {
            icon: "check_box_outline_blank"
        }
    }
    const option = options.find(opt => opt.selector === props.modelValue)
    return option ?? null
})

</script>

<style scoped lang="less">
</style>
