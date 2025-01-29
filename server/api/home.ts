export default defineEventHandler(async () => {
  const apiurl = useRuntimeConfig().public.apiurl
  return await $fetch(`${apiurl}/wp/v2/pages?slug=home`,{
    params: {
      _fields: 'title,slug,meta,acf'
     // _link: true,
    //  _embed: true
    }
  })
})
