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
import { computed } from "vue"
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
    selector: new T.ContentSelector(T.ContentType.ABOUT)
}, {
    label: "Local state",
    icon: "local_offer",
    selector: new T.ContentSelector(T.ContentType.VIEW_WITH_LOCAL_STATE)
}, {
    label: "Global state",
    icon: "public",
    selector: new T.ContentSelector(T.ContentType.VIEW_WITH_GLOBAL_STATE)
}, {
    label: "Long text",
    icon: "article",
    selector: new T.ContentSelector(T.ContentType.LONG_TEXT)
}, {
    label: "Tabs",
    icon: "tab",
    selector: new T.ContentSelector(T.ContentType.TABS)
}, {
    label: "Save/Restore",
    icon: "save_alt",
    selector: new T.ContentSelector(T.ContentType.SAVE_RESTORE)
}]

const _modelValue = computed(() => {
    const selector = props.modelValue
    if (selector === null) {
        return {
            icon: "check_box_outline_blank"
        }
    }
    const option = options.find(opt => opt.selector.type === selector.type)
    return option ?? null
})

</script>

<style scoped lang="less">
</style>
