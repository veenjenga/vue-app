<template>
  <div class="p-8">
    <div class="mb-8">
      <h2 class="text-3xl font-bold text-gray-900 mb-2">Dashboard</h2>
      <p class="text-gray-600">Manage your menu</p>
    </div>
    <div class="bg-white rounded-xl shadow-lg overflow-hidden">
      <div class="px-6 py-4 border-b border-gray-200 bg-gray-50">
        <div class="flex items-center justify-between">
          <h3 class="text-lg font-semibold text-gray-900">Menus</h3>
          <div class="flex items-center space-x-4">
            <select class="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option>All Status</option>
              <option>Active</option>
              <option>Inactive</option>
            </select>
            <button class="text-gray-500 hover:text-gray-700 cursor-pointer">
              <i class="fas fa-filter"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto w-full">
        <table class="w-full">
          <thead class="bg-gray-50 border-b border-gray-200">
            <tr>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>Name</span>
                  <i class="fas fa-sort text-gray-400"></i>
                </div>
              </th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>Priority</span>
                  <i class="fas fa-sort text-gray-400"></i>
                </div>
              </th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>Status</span>
                  <i class="fas fa-sort text-gray-400"></i>
                </div>
              </th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>Created Date</span>
                  <i class="fas fa-sort text-gray-400"></i>
                </div>
              </th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <div class="flex items-center space-x-1 cursor-pointer">
                  <span>Updated Date</span>
                  <i class="fas fa-sort text-gray-400"></i>
                </div>
              </th>
              <th class="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="(item, index) in menuItems" :key="index" class="hover:bg-gray-50 transition-colors">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-3">
                    <i class="fas fa-utensils text-white text-sm"></i>
                  </div>
                  <div>
                    <div class="text-sm font-medium text-gray-900">{{ item.name }}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                  {{ item.priority }}
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="relative">
                  <select
                    :value="item.status"
                    @change="updateStatus(index, $event.target.value)"
                    :class="{
                      'bg-green-100 text-green-800 border-green-200': item.status === 'Active',
                      'bg-gray-100 text-gray-800 border-gray-200': item.status === 'Inactive'
                    }"
                    class="appearance-none px-3 py-1 rounded-full text-xs font-medium border focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                  <i class="fas fa-chevron-down absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none"></i>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.createdDate }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.updatedDate }}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex items-center space-x-2">
                  <button @click="viewItem(item)" class="bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded-lg flex items-center space-x-1 transition-colors rounded-button whitespace-nowrap cursor-pointer" title="View Details">
                    <i class="fas fa-eye text-xs"></i>
                    <span class="text-xs">View</span>
                  </button>
                  <button @click="editItem(item)" class="bg-blue-100 hover:bg-blue-200 text-blue-600 px-3 py-1 rounded-lg flex items-center space-x-1 transition-colors rounded-button whitespace-nowrap cursor-pointer" title="Edit Item">
                    <i class="fas fa-edit text-xs"></i>
                    <span class="text-xs">Edit</span>
                  </button>
                  <button @click="deleteItem(index)" class="bg-red-100 hover:bg-red-200 text-red-600 px-3 py-1 rounded-lg flex items-center space-x-1 transition-colors rounded-button whitespace-nowrap cursor-pointer" title="Delete Item">
                    <i class="fas fa-trash text-xs"></i>
                    <span class="text-xs">Delete</span>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="px-6 py-4 border-t border-gray-200 bg-gray-50">
        <div class="flex items-center justify-between">
          <div class="text-sm text-gray-500">Showing 1 to 4 of 4 results</div>
          <div class="flex items-center space-x-2">
            <button class="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 cursor-pointer" disabled>
              <i class="fas fa-chevron-left"></i>
            </button>
            <button class="px-3 py-1 text-sm bg-blue-600 text-black rounded-lg rounded-button cursor-pointer">
              1
            </button>
            <button class="px-3 py-1 text-sm text-gray-500 hover:text-gray-700 cursor-pointer" disabled>
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-between mt-24 w-full">
      <div class="stats-card w-1/4">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-list text-blue-600 text-xl"></i>
          </div>
          <div class="ml-4 flex-1">
            <p class="text-sm font-medium text-gray-500">Total Items</p>
            <p class="text-2xl font-bold text-gray-900">{{ menuItems.length }}</p>
          </div>
        </div>
      </div>
      <div class="stats-card w-1/4">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-check-circle text-green-600 text-xl"></i>
          </div>
          <div class="ml-4 flex-1">
            <p class="text-sm font-medium text-gray-500">Active Items</p>
            <p class="text-2xl font-bold text-gray-900">{{ activeItemsCount }}</p>
          </div>
        </div>
      </div>
      <div class="stats-card w-1/4">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-pause-circle text-gray-600 text-xl"></i>
          </div>
          <div class="ml-4 flex-1">
            <p class="text-sm font-medium text-gray-500">Inactive Items</p>
            <p class="text-2xl font-bold text-gray-900">{{ inactiveItemsCount }}</p>
          </div>
        </div>
      </div>
      <div class="stats-card w-1/4">
        <div class="flex items-center">
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <i class="fas fa-clock text-purple-600 text-xl"></i>
          </div>
          <div class="ml-4 flex-1">
            <p class="text-sm font-medium text-gray-500">Last Updated</p>
            <p class="text-sm font-bold text-gray-900">{{ lastUpdated }}</p>
          </div>
        </div>
      </div>
    </div>
    <DeleteModal v-if="showDeleteModal" :show-delete-modal="showDeleteModal" @cancel="showDeleteModal = false" @confirm="confirmDelete" />
  </div>
</template>

<script>
import StatsCard from '../components/StatsCard.vue'
import DeleteModal from '../components/DeleteModal.vue'

export default {
  name: 'Dashboard',
  components: {
    StatsCard,
    DeleteModal,
  },
  data() {
    return {
      showDeleteModal: false,
      deleteIndex: null,
      menuItems: [
        { name: 'Header menu', priority: 1, status: 'Active', createdDate: '1/18/2024', updatedDate: '1/25/2024' },
        { name: 'Center menu', priority: 2, status: 'Inactive', createdDate: '1/10/2024', updatedDate: '1/22/2024' },
        { name: 'Top leagues', priority: 3, status: 'Active', createdDate: '1/12/2024', updatedDate: '1/24/2024' },
        { name: 'Top games', priority: 4, status: 'Inactive', createdDate: '1/14/2024', updatedDate: '1/21/2024' },
      ],
    };
  },
  computed: {
    activeItemsCount() {
      return this.menuItems.filter(item => item.status === 'Active').length;
    },
    inactiveItemsCount() {
      return this.menuItems.filter(item => item.status === 'Inactive').length;
    },
    lastUpdated() {
      const dates = this.menuItems.map(item => new Date(item.updatedDate));
      const latest = new Date(Math.max.apply(null, dates));
      return latest.toLocaleDateString();
    },
  },
  methods: {
    updateStatus(index, newStatus) {
      this.menuItems[index].status = newStatus;
      this.menuItems[index].updatedDate = new Date().toLocaleDateString();
    },
    viewItem(item) {
      this.$router.push({ path: '/menu-items', query: { name: item.name } });
    },
    editItem(item) {
      alert(`Editing: ${item.name}`);
    },
    deleteItem(index) {
      this.deleteIndex = index;
      this.showDeleteModal = true;
    },
    confirmDelete() {
      if (this.deleteIndex !== null) {
        this.menuItems.splice(this.deleteIndex, 1);
        this.showDeleteModal = false;
        this.deleteIndex = null;
      }
    },
  },
}
</script>