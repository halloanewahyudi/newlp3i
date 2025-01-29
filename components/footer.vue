<template>
  <div class="footer bg-primary text-slate-200 pt-20  ">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div class="lg:col-span-2">
          <img sizes="120" format="webp"  src="/logo-footer.svg" alt="" srcset="" class="w-[120px] h-[128px] object-cover" />
        </div>
        <div>
          <h4 class="text-xl font-semibold mb-2">Telusuri</h4>
           <ul>
            <li v-for="item in menuFooter"><NuxtLink :to="item.link">
              {{ item.title }}
            </NuxtLink></li>
           </ul>
        </div>
        <div>
          <h4 class="text-xl font-semibold mb-2">Alamat Yayasan</h4>
          <div class="text-normal">
            Jl. Kramat Raya No.7-9, RT.4/RW.2,
            Kramat, Kec. Senen, Jakarta Pusat,
            DKI Jakarta 10450
          </div>
          <a href="https://wa.me/+6281514756666?text=Hallo%20LP3I" target="_blank" class="flex items-center gap-2">
            <BootstrapIcon name="whatsapp" class="text-xl" />
            <span>+62 815 1475 6666</span>
          </a>
          <img   src="/logo-collage.png" alt="" srcset="" class=" object-cover" />
        </div>
      </div> <!-- end grid -->
      <div class="social flex items-center gap-5  text-primary">
        <a href="https://web.facebook.com/LP3Iindonesia" target="_blank" class="hover:scale-110 duration-200 bg-slate-200 flex items-center justify-center rounded-full w-10 h-10"><BootstrapIcon name="facebook" class="text-xl" /> </a>
        <a href="https://twitter.com/LP3I_PUSAT" target="_blank" class="hover:scale-110 duration-200 bg-slate-200 flex items-center justify-center rounded-full w-10 h-10"><BootstrapIcon name="twitter-x" class="text-xl" /> </a>
        <a href="https://www.instagram.com/lp3i.indonesia/" target="_blank" class="hover:scale-110 duration-200 bg-slate-200 flex items-center justify-center rounded-full w-10 h-10"><BootstrapIcon name="instagram" class="text-xl" /> </a>
        <a href="https://www.linkedin.com/company/31562271/" target="_blank" class="hover:scale-110 duration-200 bg-slate-200 flex items-center justify-center rounded-full w-10 h-10"><BootstrapIcon name="linkedin" class="text-xl" /> </a>
        <a href="https://www.youtube.com/channel/UCnuyIWUfDd1B7MmdktccvXQ" target="_blank" class="hover:scale-110 duration-200 bg-slate-200 flex items-center justify-center rounded-full w-10 h-10"><BootstrapIcon name="youtube" class="text-xl" /> </a>
      </div>
      <div class="border-t border-slate-200/50 mt-10 py-5 text-center text-sm text-opacity-65">
        © 2025 LP3I | All rights reserved.
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  const menuFooter = [
    {
      title: "Pendaftaran Calon Mahasiswa Baru",
      link: "#"
    },
    {
      title: "Program Studi LP3I",
      link: "#"
    },
    {
      title: "Tentang LP3I College",
      link: "#"
    },
    {
      title: "Tentang Politeknik LP3I",
      link: "#"
    }
  ]
</script>

<style></style>