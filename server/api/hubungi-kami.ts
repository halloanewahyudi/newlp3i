export default defineEventHandler(async () => {
  const apiurl = useRuntimeConfig().public.apiurl
  return await  $fetch(`${apiurl}/wp/v2/pages?slug=hubungi-kami`,{
    params: {
      _fields: 'title,meta,content,acf',
      _link: true,
      _embed: true
    }
  })
})
