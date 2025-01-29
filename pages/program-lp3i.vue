<template>
  <div>
    <div v-if="status === 'pending'">
      <Loading />
    </div>
    <div v-else-if="status === 'error'"> {{ error }}</div>
    <div v-else>
      <program-hero class="mb-24" :image="data[0].acf.hero.background.url" :title="data[0].acf.hero.title"
        :description="data[0].acf.hero.description">
        <ElementsButton secondary :btnText="data[0].acf.hero.button.button_text" :btnLink="data[0].acf.hero.button.link"
          class="mt-10 " />
      </program-hero>

      <div class="container mb-24"> <!-- section 2 -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div>
            <h2 v-gsap.whenVisible.from="{ y: 100, opacity: 0, duration: 1 }"
              class="text-3xl lg:text-5xl mb-5 text-right max-w-[400px] leading-[1.2] text-secondary"
              v-html="data[0].acf.section_2.left_text"></h2>
          </div>
          <div>
            <div v-html="data[0].acf.section_2.right_text" class="text-xl leading-relaxed"></div>
            <div class="flex justify-end">
              <NuxtLink :to="data[0].acf.section_2.link_url" class="text-secondary font-semibold group"> {{
                data[0].acf.section_2.link_text }}
                <BootstrapIcon name="arrow-right" class="group-hover:translate-x-2 duration-200" />
              </NuxtLink>
            </div>

          </div>

        </div>
      </div> <!-- end sectoiin 2 -->

      <div class="container mb-24"><!--  section 3 -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-6 lg:gap-10 items-center">
          <div class="lg:col-span-3">
            <NuxtImg sizes="100vw" format="webp" quality="80" :src="data[0].acf.section_3.left_image.url" alt=""
              srcset="" class="w-full h-auto object-cover " />
          </div>
          <div class="lg:col-span-4">
            <div class="leading-relaxed right-text" v-html="data[0].acf.section_3.right_text"></div>
          </div>
        </div>
      </div> <!-- end section 3 -->

      <div class="container mb-24"> <!-- section 4 -->
        <div class="tabs">
          <div class="tab-header">
            <ul class="flex flex-wrap items-center justify-between gap-3 border-b border-secondary mb-5">
              <li v-for="(item, index) in data[0].acf.tabs.tab" :key="index">
                <button class="btn-tab text-xl lg:text-2xl font-semibold text-secondary p-2"
                  @click="selectedTab = index" :class="{ 'active': selectedTab === index }">
                  {{ item.title }}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div v-if="tabContent" class="tab-content  overflow-hidden">
          <Transition name="slide">
            <transition name="slide" mode="out-in">
              <div :key="selectedTab" v-if="tabContent" class="leading-relaxed text-xl">
                <div v-html="tabContent.tab_content.content"></div>
                <div class="flex justify-end mb-5">
                  <NuxtLink class="text-secondary font-semibold" :to="tabContent.right_link.link_url">{{ tabContent.right_link.link_text
                    }}</NuxtLink>
                </div>
                <div v-if="tabContent.sub_title" class="tab-content-bawah p-6 lg:p-10 rounded-xl bg-primary-50 text-gray-800 ">
                <h4 class="text-secondary mb-10">{{ tabContent.sub_title }}</h4>
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div class="lg:col-span-1">
                    <nuxtImg format="webp" width="90" :src="tabContent.logo_lp3i.url" alt="" class="object-cover" />
                  </div>
                  <div class="lg:col-span-3">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div v-for="item in tabContent.list_program" :key="item">
                      <h4 class="text-secondary mb-2"><BootstrapIcon name="arrow-right-circle-fill" /> {{ item.titel_list }}</h4>
                        <div class="pl-8 text-base" v-for="item in item.list_item" :key="item">
                          <NuxtLink :to="item.link" class="hover:text-primary hover:font-semibold duration-200">{{ item.item }} </NuxtLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> <!-- end tab content bawah -->
              </div> <!-- end tab inner content -->
            </transition>
          </Transition>
        </div>

      </div><!-- end section 4 -->

      <div class="cta min-h-[580px] flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat relative" :style="{ 'background-image': `url(${data[0].acf.background.url})` }"> <!-- section 5 -->
        <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-primary via-primary-800 to-primary-950 opacity-50"></div>
        <div class="container relative">
          <div class="max-w-[768px]">
            <div v-html="data[0].acf.text" class="text-2xl"></div>
          <div class="flex flex-wrap items-center gap-4 text-xl text-primary-50">
            <BootstrapIcon name="whatsapp" class="group-hover:translate-x-2 duration-200 text-primary-50" />
            <a :href="data[0].acf.link_url" target="_blank" class="group-hover:text-secondary duration-200">{{ data[0].acf.link_text}}</a>
          </div>
          </div>
        </div>
       
      </div> <!-- end section 5 -->
    </div><!--  end else -->
  </div>
</template>
<script lang="ts" setup>
import { ElementsSectionTitle } from '#components';

// const { data, status } = useAsyncData('program', () => $fetch('/api/program-lp3i'))

const { data, status } = await useAsyncData('program', async () => {
  try {
    const response = await $fetch('/api/program-lp3i');
    console.log('API Response (Server):', response); // Debug SSR
    return response;
  } catch (err) {
    console.error('API Error:', err); // Debug error API
    return null;
  }
}, { server: true });

// create tab content
const selectedTab = ref(0);
const tabContent = computed(() => {
  return data.value?.[0]?.acf.tabs.tab[selectedTab.value];
});

const meta = computed(() => data.value?.[0]?.meta ?? {});
useSeoMeta({
  title: computed(() => meta.value._seopress_titles_title ?? meta.value._seopress_titles_title),
  description: computed(() => meta.value._seopress_titles_desc ?? 'Default Description'),
  ogTitle: computed(() => meta.value._seopress_titles_title ?? 'LP3I'),
  ogDescription: computed(() => meta.value._seopress_titles_desc ?? 'LP3I')
})


</script>

<style scoped>
:deep(.right-text a) {
  @apply text-secondary;
}

:deep(.text-info) {
  @apply text-secondary;
}

:deep(.right-text h2) {
  @apply text-secondary font-semibold;
}


:deep(.cta h1){
  @apply text-3xl lg:text-4xl mb-6;
  line-height: 120%;
}

.right-text li {
  @apply list-decimal;
}

.tab-content p {
  @apply mb-8;
}

.btn-tab.active {
  @apply border-b-4 border-b-secondary;
}


/* Tambahkan transisi slide-left di sini atau di file terpisah */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.35s ease-in-out;
}

.slide-enter,
.slide-leave-to

/* .slide-leave-active pada Vue 3 */
  {
  transform: translateX(-100%);
}

.slide-enter-to,
.slide-leave {
  transform: translateX(0);
}
</style>