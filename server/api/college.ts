export default defineEventHandler(async () => {
  const apiurl = useRuntimeConfig().public.apiurl
  return await  $fetch(`${apiurl}/wp/v2/pages?slug=lp3i-college`,{
    params: {
      _fields: 'title,meta,acf',
      _link: true,
      _embed: true
    }
  })
})
