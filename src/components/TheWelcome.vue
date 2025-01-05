<script setup lang="ts">

const openReadmeInEditor = () => fetch('/__open-in-editor?file=README.md')
</script>

<template>
 <h1 @click="openReadmeInEditor">Hello world</h1>
</template>
