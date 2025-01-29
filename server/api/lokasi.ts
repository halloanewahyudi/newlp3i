export default defineEventHandler(async () => {
  const apiurl = useRuntimeConfig().public.apiurl
  return await  $fetch(`${apiurl}/wp/v2/pages?slug=lokasi`,{
    params: {
      _fields: 'title,meta,acf',
      _link: true,
      _embed: true
    }
  })
})
