<template>
    <h1 :style="{ color: '#00ff00' }">{{ routeParameter }}</h1>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

// Assuming the route parameter is named 'number' - adjust as needed
const routeParameter = computed(() => route.params.id || 'No parameter')
</script>