<template>
    <q-scroll-area style="height: 100%; width: 100%;">
        <h4 class="q-my-md">Layout save and restore</h4>
        <p>
        Current layout state can be serialized for saving and restoring later. Use
        <span class="codeSpan">GetLayout()</span> method for getting serialized representation and
        <span class="codeSpan">SetLayout()</span> for restoring it. User defined
        <span class="codeSpan">ContentSelector</span> object is used to represent content. This
        example uses local storage for saving current layout to and restoring from, try the buttons
        below.
        </p>
        <div class="q-ma-sm">
            <q-btn class="q-mx-sm" color="primary-dark" @click="$emit('save')" label="Save"/>
            <q-btn class="q-mx-sm" color="primary-dark" @click="$emit('restore')" label="Restore"/>
        </div>
        <div class="q-ma-sm">
            <q-btn class="q-mx-sm" color="primary-dark" @click="$emit('clear')"
                label="Clear current layout"/>
        </div>
    </q-scroll-area>
</template>
