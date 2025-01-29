<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
        <div class="kiri relative">
          <img :src="props?.image" alt="" class="w-full h-auto object-cover"
            v-gsap.whenVisible.from="{ y: 100, opacity: 0 }">
          <div
            class="absolute top-1/2 right-3 lg:-right-10 w-[200px] bg-secondary text-slate-50  p-6 lg:p-10 flex flex-col justify-center items-center rounded-xl"
            v-gsap.whenVisible.delay-500.from="{ y: 100, opacity: 0, duration: 2 }">
            <h4 class="text-3xl lg:text-6xl font-semibold mb-2" > {{
              props?.counter?.angka }}</h4>
            <div v-html="props?.counter?.text" class="text-lg text-center"></div>
          </div>
        </div>
        <div class="kanan lg:px-10">
          <h4 class="text-3xl font-medium mb-5">{{ props?.home_s1_content_section?.title }}</h4>
          <div v-html="props?.home_s1_content_section?.description"></div>
          <ul class="flex flex-col gap-5"
            v-if="props?.home_s1_content_section?.list && props?.home_s1_content_section?.list.length > 0">
            <li class="item" v-for="item in props?.home_s1_content_section?.list">
              <div class="flex items-center gap-2">
                <img :src="item?.icon?.url" alt="">
                <span class="text-xl"> {{ item?.text }} </span>
              </div>
            </li>
          </ul>
          <div class="mb-3" v-html="props?.home_s1_content_section?.last_description"> </div>
          <NuxtLink :to="props?.home_s1_content_section?.button?.button_link"
            class="bg-primary text-slate-50 py-2 px-5 rounded-full inline-block hover:bg-slate-700 duration-200">
            {{ props?.home_s1_content_section?.button?.button_text }}
          </NuxtLink>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
type Props = {
  image: string,
  counter: {
    angka: number,
    text: string
  },
  home_s1_content_section: {
    title: string,
    description: string,
    list: { 
      icon: { url: string }, 
      text: string 
    }[], // ⬅️ Pastikan ini array objek, bukan string[]
    last_description: string,
    button: {
      button_text: string,
      button_link: string
    }
  }
}

const props = defineProps<Props>()
</script>

<style></style>