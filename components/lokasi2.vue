<template>
  <div class="relative" @click.outside="resetAutocomplete">
    <div class="relative">
      <input 
      type="text" 
      v-model="search" 
      @input="filterResults" 
      @focus="showDropdown = true"
      @keydown.down.prevent="navigateDropdown(1)"
      @keydown.up.prevent="navigateDropdown(-1)"
      @keydown.enter.prevent="selectHighlighted"
      placeholder="Cari lokasi..." 
      class="border p-3 w-full bg-secondary/80 rounded-full focus:outline-none focus:border-slate-100/50 placeholder:text-slate-50"
    />
    <IconsPinMap class="absolute right-2 top-1/2 transform -translate-y-1/2 text-2xl" />
    </div>

    <ul v-if="showDropdown && filteredLocations.length" class="border mt-1 absolute w-full bg-primary rounded-xl shadow-md max-h-40 overflow-x-hidden overflow-auto">
      <li 
        v-for="(location, index) in filteredLocations" 
        :key="location.id" 
        @click="selectLocation(location)"
        :class="{'bg-secondary text-slate-50': index === highlightedIndex}"
        class="p-2 cursor-pointer hover:bg-secondary hover:text-slate-50 duration-200"
      >
        {{ location.title.rendered }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import vClickOutside from 'vue-click-outside';

const apiurl = useRuntimeConfig().public.apiurl;
const { status, data: lokasi, error } = await useAsyncData('lokasi', () => $fetch(`${apiurl}/wp/v2/campus?_fields=title,slug`,{
  params: {
    per_page: 100
  }
}));

const search = ref('');
const filteredLocations = ref([]);
const showDropdown = ref(false);
const highlightedIndex = ref(-1);

const filterResults = () => {
  if (!search.value) {
    filteredLocations.value = [];
    showDropdown.value = false;
    highlightedIndex.value = -1;
    return;
  }
  
  filteredLocations.value = lokasi.value?.filter((item: any) => 
    item.title.rendered.toLowerCase().includes(search.value.toLowerCase())
  ) || [];
  showDropdown.value = true;
  highlightedIndex.value = -1;
};

const navigateDropdown = (direction: number) => {
  if (!filteredLocations.value.length) return;
  highlightedIndex.value = (highlightedIndex.value + direction + filteredLocations.value.length) % filteredLocations.value.length;
};

const selectHighlighted = () => {
  if (highlightedIndex.value !== -1) {
    selectLocation(filteredLocations.value[highlightedIndex.value]);
  }
};

const selectLocation = (location: any) => {
  search.value = location.title.rendered;
  filteredLocations.value = [];
  showDropdown.value = false;
  highlightedIndex.value = -1;
};

const resetAutocomplete = () => {
  showDropdown.value = false;
  filteredLocations.value = [];
  highlightedIndex.value = -1;
};
</script>

<style>
  /* Tambahkan styling jika diperlukan */
</style>
