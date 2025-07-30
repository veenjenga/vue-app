<template>
  <aside class="sidebar">
    <nav class="p-4 space-y-2">
      <div class="bg-blue-600 rounded-lg">
        <a href="#" class="flex items-center space-x-3 px-4 py-3 text-white cursor-pointer">
          <i class="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </div>
      <a href="#" class="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors cursor-pointer">
        <i class="fas fa-user"></i>
        <span>Profile</span>
      </a>
      <a href="#" class="flex items-center space-x-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-700 rounded-lg transition-colors cursor-pointer">
        <i class="fas fa-cog"></i>
        <span>Settings</span>
      </a>
    </nav>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>