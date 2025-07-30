<template>
  <header class="header">
    <div class="flex items-center justify-between px-6 py-4">
      <div class="flex items-center space-x-4">
        <h1 class="text-xl font-bold">HAKIBETS MENU SYSTEM</h1>
      </div>
      <div class="flex items-center space-x-4">
        <div class="relative">
          <input
            type="text"
            placeholder="Search menus..."
            class="bg-slate-700 text-white pl-8 pr-10 py-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-blue-400 w-64 text-sm"
          />
          <i class="fas fa-search absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm"></i>
        </div>
        <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors rounded-button whitespace-nowrap cursor-pointer">
          <i class="fas fa-plus text-sm"></i>
          <span class="text-sm">Add New</span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
/* Ensure search icon is inside and text adjusts */
input {
  padding-left: 2rem; /* Space for icon */
  padding-right: 2.5rem; /* Extra space on right for cursor */
}
</style>