<template>
  <div :class="['bg-primary text-slate-100 h-[70px] flex flex-col justify-center fixed top-0 left-0 w-full z-[100] transition-transform duration-300 shadow-md', isVisible ? 'translate-y-0' : '-translate-y-full']">
     <div class="container">
        <nav class="flex justify-between items-center gap-5">
          <IconsLogo class="w-10 h-auto"/>
          <div class="menu">
            <ul class="lg:flex items-center">
              <li v-for="menu in menus" class="group relative h-[70px] flex items-center">
                <NuxtLink :to="menu.path" class="hover:text-white hover:bg-[#0c3044] rounded-full text-slate-100 duration-200 relative py-2 px-4" prefetch="false" :key="menu.key">{{ menu.name }}</NuxtLink>
                <ul class="sub-menu" v-if="menu.children">
                  <li v-for="child in menu.children">
                     <NuxtLink :to="child.path" class="hover:text-white hover:bg-[#0c3044] rounded-full text-slate-100 duration-200 relative py-2 px-4" prefetch="false" :key="child.key">{{ child.name }}</NuxtLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="flex items-center gap-6 text-xl">
            <button>
              <BootstrapIcon name="whatsapp" />
            </button>
            <button>
              <BootstrapIcon name="search" />
            </button>
          </div>
        </nav>
     </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue'

const { menus } = useMenus()
const isVisible = ref(true)
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY
  isVisible.value = currentScrollY < lastScrollY // Jika scroll ke atas, navbar muncul
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
  .menu .router-link-active {
    @apply text-white flex items-center gap-2 bg-[#0c3044] rounded-full;
  }

  .menu .router-link-active::after {
    content: '';
    @apply bg-tertiary w-2 h-2 block rounded-full;
  }

  .sub-menu {
    @apply bg-primary text-slate-100 absolute top-[100%] left-0 w-[200px] hidden group-hover:flex group-hover:flex-col gap-5 p-5 rounded-b-xl;
  }

  .sub-menu .router-link-active {
    @apply bg-transparent;
  }
</style>
