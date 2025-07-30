<template>
  <div class="min-h-screen flex" style="margin: 0; width: 100vw">
    <!-- Main Content -->
    <div class="ml-64 flex-1 p-0" style="width: calc(100vw - 16rem);">
      <div class="flex items-center justify-between mb-8">
        <div class="flex items-center space-x-4">
          <i class="fas fa-arrow-left text-gray-500 cursor-pointer" @click="$router.push('/dashboard')"></i>
          <span class="text-sm text-gray-600">Back to Dashboard</span>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <input
              type="text"
              placeholder="Search menu items..."
              class="bg-white border border-gray-300 px-4 py-2 pr-10 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
            <i class="fas fa-search absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
          <button class="bg-blue-600 hover:bg-blue-700 text-black px-4 py-2 rounded-lg text-sm font-medium !rounded-button whitespace-nowrap cursor-pointer">
            <i class="fas fa-plus mr-2"></i>Add New Item
          </button>
        </div>
      </div>
      <div class="mt-6">
        <div class="bg-white rounded-xl shadow-lg border border-gray-100 w-full">
          <table class="w-full">
            <thead class="bg-gray-50 border-b border-gray-200">
              <tr>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Name</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Priority</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Icon</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Route</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Created Date</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Updated Date</th>
                <th class="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="(item, index) in menuItems" :key="index" class="hover:bg-gray-50 transition-colors">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-medium text-gray-900">{{ item.name }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900">{{ item.priority }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <select
                    v-model="item.status"
                    @change="updateStatus(index)"
                    :class="{
                      'bg-green-100 text-green-800 border-green-200': item.status === 'Active',
                      'bg-red-100 text-red-800 border-red-200': item.status === 'Inactive'
                    }"
                    class="appearance-none px-3 py-1 rounded-full text-xs font-medium border focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                  >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                    <img :src="item.icon" alt="Icon" class="w-10 h-10 object-cover object-top">
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm font-mono text-gray-700">{{ item.route }}</div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.createdDate }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{{ item.updatedDate }}</td>
                <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div class="flex space-x-3">
                    <button class="flex items-center space-x-2 text-green-600 hover:text-green-900 cursor-pointer px-3 py-1 rounded-lg border border-green-200 hover:bg-green-50">
                      <i class="fas fa-eye"></i>
                      <span>View</span>
                    </button>
                    <button class="flex items-center space-x-2 text-blue-600 hover:text-blue-900 cursor-pointer px-3 py-1 rounded-lg border border-blue-200 hover:bg-blue-50">
                      <i class="fas fa-edit"></i>
                      <span>Edit</span>
                    </button>
                    <button class="flex items-center space-x-2 text-red-600 hover:text-red-900 cursor-pointer px-3 py-1 rounded-lg border border-red-200 hover:bg-red-50" @click="confirmDelete(item)">
                      <i class="fas fa-trash"></i>
                      <span>Delete</span>
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Delete Confirmation Modal -->
    <div v-if="showDeleteModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-xl p-8 max-w-md w-full mx-4 shadow-2xl">
        <div class="text-center">
          <div class="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-exclamation-triangle text-red-600 text-2xl"></i>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">Confirm Delete</h3>
          <p class="text-gray-600 mb-8">Are you sure you want to delete this menu item? This action cannot be undone.</p>
          <div class="flex justify-center space-x-4">
            <button @click="showDeleteModal = false" class="px-6 py-2 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer !rounded-button whitespace-nowrap">
              Cancel
            </button>
            <button @click="deleteItem" class="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer !rounded-button whitespace-nowrap">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showDeleteModal: false,
      itemToDelete: null,
      menuItems: [
        {
          name: 'Sports',
          priority: 1,
          status: 'Active',
          icon: 'https://readdy.ai/api/search-image?query=home%20house%20icon%20modern%20flat%20design%20blue%20color%20clean%20minimal%20background%20administrative%20interface&width=12&height=12&seq=home001&orientation=squarish',
          route: '/sports',
          createdDate: '7/15/2024',
          updatedDate: '12/20/2024'
        },
        {
          name: 'Crash',
          priority: 2,
          status: 'Active',
          icon: 'https://readdy.ai/api/search-image?query=about%20information%20icon%20modern%20flat%20design%20blue%20color%20clean%20minimal%20background%20administrative%20interface&width=12&height=12&seq=about001&orientation=squarish',
          route: '/crash',
          createdDate: '7/16/2024',
          updatedDate: '12/22/2024'
        },
        {
          name: 'Virtual',
          priority: 3,
          status: 'Inactive',
          icon: 'https://readdy.ai/api/search-image?query=services%20gear%20settings%20icon%20modern%20flat%20design%20blue%20color%20clean%20minimal%20background%20administrative%20interface&width=12&height=12&seq=services001&orientation=squarish',
          route: '/virtual',
          createdDate: '7/17/2024',
          updatedDate: '12/23/2024'
        },
        {
          name: 'Aviator',
          priority: 4,
          status: 'Active',
          icon: 'https://readdy.ai/api/search-image?query=contact%20mail%20envelope%20icon%20modern%20flat%20design%20blue%20color%20clean%20minimal%20background%20administrative%20interface&width=12&height=12&seq=contact001&orientation=squarish',
          route: '/aviator',
          createdDate: '7/18/2024',
          updatedDate: '12/24/2024'
        },
        {
          name: 'Popular',
          priority: 5,
          status: 'Active',
          icon: 'https://readdy.ai/api/search-image?query=contact%20mail%20envelope%20icon%20modern%20flat%20design%20blue%20color%20clean%20minimal%20background%20administrative%20interface&width=12&height=12&seq=contact001&orientation=squarish',
          route: '/popular',
          createdDate: '7/19/2024',
          updatedDate: '12/25/2024'
        },
        {
          name: 'Live',
          priority: 6,
          status: 'Inactive',
          icon: 'https://readdy.ai/api/search-image?query=contact%20mail%20envelope%20icon%20modern%20flat%20design%20blue%20color%20clean%20minimal%20background%20administrative%20interface&width=12&height=12&seq=contact001&orientation=squarish',
          route: '/live',
          createdDate: '7/20/2024',
          updatedDate: '12/21/2024'
        },
        {
          name: 'New',
          priority: 7,
          status: 'Active',
          icon: 'https://readdy.ai/api/search-image?query=contact%20mail%20envelope%20icon%20modern%20flat%20design%20blue%20color%20clean%20minimal%20background%20administrative%20interface&width=12&height=12&seq=contact001&orientation=squarish',
          route: '/new',
          createdDate: '7/21/2024',
          updatedDate: '12/22/2024'
        }
      ]
    };
  },
  methods: {
    confirmDelete(item) {
      this.itemToDelete = item;
      this.showDeleteModal = true;
    },
    deleteItem() {
      if (this.itemToDelete) {
        const index = this.menuItems.indexOf(this.itemToDelete);
        if (index > -1) {
          this.menuItems.splice(index, 1);
        }
      }
      this.showDeleteModal = false;
      this.itemToDelete = null;
    },
    updateStatus(index) {
      this.menuItems[index].updatedDate = new Date().toLocaleDateString();
    }
  }
};
</script>