<template>
  <div>
    <div class="container">
      <div class="section-title text-center mb-16">
        <h2 class="text-3xl lg:text-4xl font-semibold mb-2 text-secondary" v-html="props?.home_section_2?.home_s2_judul_section"></h2>
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10"  v-gsap.whenVisible.from="{ y: 100, opacity: 0, duration: 2 }">
        <div class="kiri">
          <div class="bg-white border-2 rounded-xl overflow-hidden h-full hover:shadow-lg duration-200" >
            <img :src="props?.home_section_2?.home_s2_featured_1?.image" alt="" class="w-full h-auto object-cover">
            <div class="p-6 ">
              <h4 class="text-xl  font-semibold mb-2" v-html="props?.home_section_2?.home_s2_featured_1?.title"></h4>
              <div v-html="props?.home_section_2?.home_s2_featured_1?.text"></div>
              <div class="flex justify-end mt-5">
                <NuxtLink :to="props?.home_section_2?.home_s2_featured_1?.text" class="hover:scale-110 duration-200">
                  <BootstrapIcon name="arrow-right-circle" class="text-4xl text-primary"  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <div class="kanan">
          <div class="bg-white border-2  rounded-xl overflow-hidden h-full hover:shadow-lg duration-200">
            <img :src="props?.home_section_2?.home_s2_featured_2?.image" alt="" class="w-full h-auto object-cover">
            <div class="p-6">
              <h4 class="text-xl  font-semibold mb-2" v-html="props?.home_section_2?.home_s2_featured_2?.title"></h4>
              <div v-html="props?.home_section_2?.home_s2_featured_2?.text"></div>
              <div class="flex justify-end mt-5">
                <NuxtLink :to="props?.home_section_2?.home_s2_featured_1?.text" class="hover:scale-110 duration-200">
                  <BootstrapIcon name="arrow-right-circle" class="text-4xl text-primary"  />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  type Props = {
    home_section_2:{
      home_s2_judul_section: string,
      home_s2_featured_1: {
        title: string,
        image: string,
        text: string,
        link: string
      },
      home_s2_featured_2: {
        title: string,
        image: string,
        text: string,
        link: string
      },
    }
  }

  const props = defineProps<Props>()
</script>

<style>

</style>