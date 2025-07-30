<template>
  <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white rounded-xl p-6 max-w-md w-full mx-4">
      <div class="flex items-center mb-4">
        <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
          <i class="fas fa-exclamation-triangle text-red-600 text-xl"></i>
        </div>
        <h3 class="text-lg font-semibold text-gray-900">Confirm Delete</h3>
      </div>
      <p class="text-gray-600 mb-6">Are you sure you want to delete this menu item? This action cannot be undone.</p>
      <div class="flex justify-end space-x-3">
        <button @click="showDeleteModal = false" class="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors rounded-button whitespace-nowrap cursor-pointer">
          Cancel
        </button>
        <button @click="confirmDelete" class="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors rounded-button whitespace-nowrap cursor-pointer">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeleteModal',
  props: {
    showDeleteModal: Boolean,
  },
  emits: ['cancel', 'confirm'],
  methods: {
    confirmDelete() {
      this.$emit('confirm');
    },
  },
}
</script>