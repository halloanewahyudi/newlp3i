export const useMenus = () => {
  const menus = ref([
    {
      name: 'Home',
      path: '/',
      key: 'home'
    },
    {
      name: 'Program LP3I',
      path: '/program-lp3i',
      key: 'program',
      children: [
        {
          name: 'LP3I College',
          path: '/lp3i-college',
          key: 'college'
        },
        {
          name: 'LP3I Politeknik',
          path: '/lp3i-politeknik',
          key: 'politeknik'
        },
        {
          name: 'Tribe',
          path: '/tribe',
          key: 'tribe'
        }
      ]
    },
    {
      name: 'CDC',
      path: '/cdc',
      key: 'cdc'
    },
    {
      name: 'Lokasi LP3I',
      path: '/lokasi',
      key: 'lokasi'
    },
    {
      name: 'Alumni',
      path: '/alumni',
      key: 'lokasi'
    },
    {
      name: 'Tentang Kami',
      path: '/tentang-kami',
      key: 'tentang-kami',
      children: [
        {
          name: 'Hubungi Kami',
          path: '/hubungi-kami',
          key: 'hubungi-kami'
        }
      ]
    },
 
  ])
  return {
    menus
  }
}
