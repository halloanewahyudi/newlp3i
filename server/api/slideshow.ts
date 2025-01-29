export default defineEventHandler(async () => {
  const apiurl = useRuntimeConfig().public.apiurl
  return await  $fetch(`${apiurl}/wp/v2/slideshow`,{
    params: {
      _fields: 'id,title,acf,_links',
      _embed: true
    }
  })
})