export default defineEventHandler(async () => {
  const apiurl = useRuntimeConfig().public.apiurl
  return await  $fetch(`${apiurl}/wp/v2/posts`,{
    params: {
      _fields: 'id,date,slug,title,_links',
      _embed: true,
      per_page: 3
    }
  })
})