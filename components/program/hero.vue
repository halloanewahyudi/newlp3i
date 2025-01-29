<template>
  <div class="min-h-[480px] flex flex-col justify-center items-center text-slate-50 bg-primary-950" :style="{backgroundImage: `url(${props.image})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}" >
    <div class="container">
      <div class="max-w-[768px] ">
        <h2 class="text-3xl lg:text-5xl font-semibold mb-5" v-html="props?.title"></h2>
        <div class="text-xl" v-html="props?.description"></div>
        <slot  />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface Props {
  image: string,
  title: string,
  description: string
}

const props = defineProps<Props>()
</script>

<style></style>