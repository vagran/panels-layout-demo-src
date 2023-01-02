<template>

<q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary-dark text-white">
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
        <ExampleLayout />
    </q-drawer>

    <q-page-container>
        <q-page>
            <!-- Make full-page content. -->
            <div class="q-pa-sm" style="min-height: inherit; height: 0;">
                <ExampleLayout :initialLayout="initialLayout"/>
            </div>
        </q-page>
    </q-page-container>
</q-layout>

</template>

<script setup lang="ts">
import { ref } from "vue"
import ExampleLayout from "@/ExampleLayout.vue"

const rightDrawerOpen = ref(false)

const initialLayout = {
    "width": 1604,
    "height": 936,
    "edges": [
        {
            "id": "eyw3k821t3hc7zgxb",
            "orientation": 0,
            "position": 708
        },
        {
            "id": "eyw3k81528zoh5tb5",
            "orientation": 1,
            "position": 435.6152512998267
        },
        {
            "id": "eyw3k8217vnrxtrpr",
            "orientation": 0,
            "position": 1142.9999999999998
        }
    ],
    "panels": [
        {
            "left": null,
            "right": "eyw3k821t3hc7zgxb",
            "top": null,
            "bottom": null,
            "content": [
                {
                    "type": 0
                }
            ],
            "activeIdx": 0
        },
        {
            "left": "eyw3k821t3hc7zgxb",
            "right": null,
            "top": null,
            "bottom": "eyw3k81528zoh5tb5",
            "content": [
                {
                    "type": 4
                },
                {
                    "type": 5
                }
            ],
            "activeIdx": 0
        },
        {
            "left": "eyw3k821t3hc7zgxb",
            "right": "eyw3k8217vnrxtrpr",
            "top": "eyw3k81528zoh5tb5",
            "bottom": null,
            "content": [
                {
                    "type": 1
                }
            ],
            "activeIdx": 0
        },
        {
            "left": "eyw3k8217vnrxtrpr",
            "right": null,
            "top": "eyw3k81528zoh5tb5",
            "bottom": null,
            "content": [
                {
                    "type": 2
                }
            ],
            "activeIdx": 0
        }
    ]
}

</script>

<style lang="less">

.text-dark-page {
    color: var(--q-dark-page) !important;
}

.bg-dark-page {
    background: var(--q-dark-page) !important;
}

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

    .q-header, .q-footer {
        border-color: rgba(255, 255, 255, 0.15) !important;
    }
}

.codeSpan {
    font-family: monospace;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 3px;
    padding: 0 3px;
    background-color: var(--q-weak);
}

</style>
