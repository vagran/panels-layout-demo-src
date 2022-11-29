<template>

<q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary-dark text-white" height-hint="98">
        <q-toolbar>

            <q-toolbar-title>
                <q-avatar>
                    <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                </q-avatar>
                Panels and tabs layout system
            </q-toolbar-title>

            <q-btn dense flat round icon="menu" @click="rightDrawerOpen = !rightDrawerOpen" />
        </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
        <!-- drawer content -->
        drawer here
    </q-drawer>

    <q-page-container>
        <q-page>
            <!-- Make full-page content. -->
            <div class="q-pa-sm" style="min-height: inherit; height: 0;">
                <ExampleLayout />
            </div>
        </q-page>
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white q-pa-sm">
        Footer here
    </q-footer>

</q-layout>

</template>

<script setup lang="ts">
import { ref } from "vue"
import ExampleLayout from "@/ExampleLayout.vue"

const rightDrawerOpen = ref(false)

</script>

<style lang="less">

.text-primary-dark {
    color: var(--q-primary-dark) !important;
}

.bg-primary-dark {
    background: var(--q-primary-dark) !important;
}

.text-weak {
    color: var(--q-weak) !important;
}

.bg-weak {
    background: var(--q-weak) !important;
}

body.body--dark {
    color: #c6d5e4 !important;
    background-color: var(--q-dark) !important;

    a {
        color: #b4cec5;
        &:hover {
            color: #d6f1e8;
        }
    }
}
</style>
