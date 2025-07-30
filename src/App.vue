<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <Header />
    <div class="flex flex-1">
      <Sidebar class="w-64" />
      <main class="flex-1 p-6">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'

export default {
  components: {
    Header,
    Sidebar,
  },
}
</script>