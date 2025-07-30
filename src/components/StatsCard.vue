<template>
  <div class="stats-card">
    <div class="flex items-center">
      <div :class="iconBgClass" class="w-12 h-12 rounded-lg flex items-center justify-center">
        <i :class="iconClass" class="text-xl"></i>
      </div>
      <div class="ml-4">
        <p class="text-sm font-medium text-gray-500">{{ title }}</p>
        <p class="text-2xl font-bold text-gray-900" v-if="value">{{ value }}</p>
        <p class="text-sm font-bold text-gray-900" v-else>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StatsCard',
  props: {
    title: String,
    value: Number,
    text: String,
    iconClass: String,
    iconBgClass: String,
  },
}
</script>