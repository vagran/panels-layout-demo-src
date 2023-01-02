<template>
<q-scroll-area style="height: 100%; width: 100%;">
    <h4 class="q-my-md">About</h4>
    <p>
        This package provides panels and tabs layout for Vue framework (specifically it is written
        for Vue 3). The behavior is mostly inspired (but not fully equal to) by similar
        functionality in Blender 3D editor, however it is written from scratch, Blender source code
        was not referenced.
    </p>
    <p>
        The appearance is fully defined by the application code, not this package. This is mostly
        by utilizing Vue slots feature, so there are slots for almost all elements of the layout.
        Therefore it is not bound to any UI building framework. This example uses Quasar but it can
        be anything compatible with Vue.
    </p>
    <p>
        So the first key feature of the concept is drag zones in each panel corner (grips). They are
        visible when hovering cursor on it. Dragging this grip inside the panel will split it. Split
        direction depends on drag direction. Dragging the grip outside the panel, onto some neighbor,
        will make the panel expand onto that neighbor. Depending on neighbor positioning, it may
        either fully consume the neighbor, make it shrink in perpendicular direction or split it
        into parts.
    </p>
    <p>
        Another key concept is Drag and Drop support for panes content. The application defines
        draggable elements which can be dragged between panels. In this example you can drag content
        selector element in the top-left corner of each panel. Try dragging it onto another panel.
        By default it will swap the content on drop. Holding <span class="codeSpan">Shift</span>
        button while dragging will make it to copy the content in the another panel. Holding
        <span class="codeSpan">Ctrl</span> button will cause opening new tab for a moved or copied
        content. Note that this behavior is specific to this example and can be fully customized by
        the application. Dragging empty panel content as well as swapping with it is also supported.
        This feature relies on HTML5 drag and drop functionality. It is not available on mobile
        platforms but this can be overcome by using
        <a href="https://github.com/timruffles/mobile-drag-drop">mobile-drag-drop</a> polyfill.
        Dragging between panels of one layout instance preserves components local state. However
        dragging onto another layout instance (in this example use layout in the right drawer to
        try) cannot preserve it. Also dragging onto another layout instance preserves the content of
        the pane being dragged, so swap and move are not supported in such case.
    </p>
</q-scroll-area>
</template>
