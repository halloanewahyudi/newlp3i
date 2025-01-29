export default defineEventHandler(async () => {
  const apiurl = useRuntimeConfig().public.apiurl
  return await  $fetch(`${apiurl}/wp/v2/campus`,{
    params: {
      _fields: 'id,title,content,meta,acf',
      _embed: true
    }
  })
})