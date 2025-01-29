<template>
  <div>
    <div class="pt-20">
        <h4 v-if="props?.subtitle" class="text-xl  mb-2 text-center text-secondary"> {{ props?.subtitle }}</h4>
        <h2 class="text-3xl lg:text-4xl font-semibold mb-2 text-secondary text-center" v-html="props?.title">
        </h2>
      </div>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  title: string,
  subtitle: string
}
const props = defineProps<Props>()

</script>

<style>

</style>