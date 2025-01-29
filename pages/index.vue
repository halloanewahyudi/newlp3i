<template>
  <div>
    <div v-if="status === 'pending'"> 
      <Loading />
    </div>
    <div v-else-if="status === 'error'"> {{ error }}"></div>
    <div v-else>
      <!--  slideshow -->
        <div class="bg-gradient-to-tr from-primary via-primary-800 to-primary-950 min-h-screen">
          <Slideshow class="mb-24" />
        </div>
     
      <!--   end slideshow -->

      <!--  section one -->
      <div class="container ">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          <div class="kiri">
            <div class="relative">
              <NuxtImg sizes="100vw" format="webp" quality="100" :src="sectionOne?.home_s1_image?.url" alt="" srcset=""
                class="" v-gsap.whenVisible.from="{ y: 100, opacity: 0, duration: 1 }" />
              <div
                class="absolute top-1/2 right-1/2 lg:-right-10 max-w-[200px] rounded-xl text-center bg-secondary text-primary-50 p-5 shadow-lg"
                v-gsap.whenVisible.delay-500.from="{ y: 100, opacity: 0, duration: 1 }">
                <h3 class="text-3xl lg:text-7xl font-semibold mb-2 "> {{ sectionOne?.counter?.angka }} </h3>
                <div v-html="sectionOne?.counter?.counter_text"></div>
              </div>
            </div>
          </div>
          <div class="kanan">
            <div class="flex flex-col gap-5">
              <h4 class="text-2xl lg:text-3xl font-semibold mb-2" v-html="sectionOne?.home_s1_content_section?.title">
              </h4>
              <div v-html="sectionOne?.home_s1_content_section?.description">
              </div>
              <ul>
                <li v-for="item in sectionOne?.home_s1_content_section?.list" class="flex items-center gap-2 mb-2">
                  <NuxtImg sizes="" format="webp" quality="100" :src="item.icon?.url" alt="" srcset="" />
                  <span class="text-lg" v-html="item.text"></span>
                </li>
              </ul>
              <div v-html="sectionOne?.home_s1_content_section?.last_description">
              </div>
              <NuxtLink :to="sectionOne?.home_s1_content_section?.button?.button_link"
                class="py-2.5 px-6 rounded-full bg-primary text-primary-100 hover:bg-opacity-80 hover:shadow-md duration-300 inline-block max-w-max">
                {{ sectionOne?.home_s1_content_section?.button?.button_text }}</NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- end section one -->

      <!--  section two -->
      <div class="container mb-24">
        <ElementsSectionTitle :title="sectionTwo?.home_s2_judul_section" class="mb-10" />
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
          <div v-gsap.whenVisible.from="{ y: 100, opacity: 0, duration: 1 }">
            <ElementsCard :cardImage="sectionTwo?.home_s2_featured_1?.image"
              :cardTitle="sectionTwo?.home_s2_featured_1?.title"
              :cardDescription="sectionTwo?.home_s2_featured_1?.text">
            </ElementsCard>
          </div>
          <div v-gsap.whenVisible.delay-500.from="{ y: 100, opacity: 0, duration: 1 }">
            <ElementsCard :cardImage="sectionTwo?.home_s2_featured_2?.image"
              :cardTitle="sectionTwo?.home_s2_featured_2?.title"
              :cardDescription="sectionTwo?.home_s2_featured_2?.text">
            </ElementsCard>
          </div>

        </div>
      </div>
      <!--   end section two -->
         
      <!--  section three -->
      <HomeSectionThree :home_section_3="{
        home_s3_judul_section: sectionThree?.home_s3_judul_section,
        background: sectionThree?.background,
        list: sectionThree?.list
      }" class="" />
      <!--  end sction three -->

      <!--  section four -->
      <HomeSectionFour :home_section_4="{
        home_s4_judul_section: sectionFour?.home_s4_judul_section
        //  home_s4_content_section:sectionFour?.home_s4_content_section 
      }" class="py-20 bg-neutral-100" />
      <!--   end section  four -->

      <!--   section five -->
      <HomeSectionFive :home_section_5="{
        home_s5_judul_section: sectionFive?.home_s5_judul_section,
        home_s5_image: sectionFive?.home_s5_image
      }" class="mb-20 py-20 bg-gradient-to-tr from-primary via-primary-800 to-primary backdrop-blur-lg" />
      <!--  end secton five -->

      <!--  section six -->
      <div class="pt-20" v-gsap.whenVisible.from="{ y: 100, opacity: 0, duration: 2 }">
        <h4 class="text-xl  mb-2 text-center text-secondary"> Puluhan Mitra</h4>
        <h2 class="text-3xl lg:text-4xl font-semibold mb-2 text-secondary text-center">
          Penempatan Kerja
        </h2>
      </div>

      <HomeSectionSix :home_section_6="{
        judul_section: sectionSix?.judul_section,
        content_section: sectionSix?.content_section
      }" class="mb-20" />
      <!--  end section six -->
<!-- section seven -->
<div class="container mb-20">
        <div v-gsap.whenVisible.from="{ y: 100, opacity: 0, duration: 2 }">
          <h4 class="text-xl  mb-2 text-center text-secondary"> Blog Terkini</h4>
          <h2 class="text-3xl lg:text-4xl font-semibold mb-2 text-secondary text-center ">
            Beberapa tampilan blog terupdate
          </h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10 mt-20">
          <div v-for="item in posts" :key="item.id" class="group">
            <div class="rounded-xl overflow-hidden w-full h-[280px] mb-4">
              <NuxtImg sizes="100vw" format="webp" quality="80" :src="item._embedded['wp:featuredmedia'][0].source_url"
                alt="" srcset="" class="w-full h-[280px] object-cover group-hover:scale-110 duration-200 mb-5" />
            </div>
            <span class="text-sm mb-3"> <BootstrapIcon name="calendar-check" />  {{ postDate(item?.date) }}</span>
            <NuxtLink :to="`/${item?.slug}`" class="text-secondary">
              <h4 class="text-lg  font-semibold mb-2" v-html="item?.title?.rendered"></h4>
            </NuxtLink>
          </div>
        </div>
      </div>
      <!--   end section seven -->
    </div>
  </div>
</template>
<script lang="ts" setup>


const { data: home, status } = useAsyncData('home', async () => {
  try {
    const response = await $fetch('/api/home');
    console.log('API Response (Server):', response); // Debug SSR
    return response;
  } catch (err) {
    console.error('API Error:', err); // Debug error API
    return null;
  }
}, { server: false })
// section one
const sectionOne = computed(() => home.value?.[0]?.acf?.home_section_1)
const sectionTwo = computed(() => home.value?.[0]?.acf?.home_section_2)
const sectionThree = computed(() => home.value?.[0]?.acf?.home_section_3)
const sectionFour = computed(() => home.value?.[0]?.acf?.home_section_4)
const sectionFive = computed(() => home.value?.[0]?.acf?.home_section_5)
const sectionSix = computed(() => home.value?.[0]?.acf?.home_section_6)


const { data: posts, status: load } = await useAsyncData('posts', () => $fetch('/api/home-post'))
const {postDate, formattedDate} = useDateFormat()
// meta
const meta = computed(() => home.value?.[0]?.meta ?? {});
useSeoMeta({
  title: computed(() => meta.value._seopress_titles_title ?? meta.value._seopress_titles_title),
  description: computed(() => meta.value._seopress_titles_desc ?? 'Default Description'),
  ogTitle: computed(() => meta.value._seopress_titles_title ?? 'LP3I'),
  ogDescription: computed(() => meta.value._seopress_titles_desc ?? 'LP3I')
})
// Pastikan `useSeoMeta()` hanya dipanggil saat `meta` sudah ada
/* watchEffect(() => {
  if (meta.value && meta.value._seopress_titles_title) {
    useSeoMeta({
      title: meta.value._seopress_titles_title,
      description: meta.value._seopress_titles_desc,
      ogTitle: meta.value._seopress_titles_title,
      ogDescription: meta.value._seopress_titles_desc
    });
  }
}); */
</script>

<style></style>