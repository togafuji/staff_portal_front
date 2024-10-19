<template>
  <!-- ヘッダー部分 -->
  <header class="bg-[#78c2f683] h-20 flex items-center pl-8">
    <div>
      <h1 class="text-red-700 text-4xl">{{ $t('Header.title') }}</h1>
    </div>
  </header>
  <!-- ナビゲーションバー -->
  <nav class="bg-[#FFFFDD] min-h-[50px] text-white text-2xl border-t border-b border-black">
    <ul class="flex justify-center mt-2">
      <li class="mr-20">
        <router-link to="/home" class="text-green flex items-center" exact-active-class="font-bold text-white">
          <font-awesome-icon :icon="['fas', 'home']" class="mr-2" />
          {{ $t('Header.nav.home') }}
        </router-link>
      </li>
      <li class="mr-20">
        <router-link to="/chat" class="text-green flex items-center" exact-active-class="font-bold text-white">
          <font-awesome-icon :icon="['fas', 'comments']" class="mr-2" />
          {{ $t('Header.nav.chat') }}
        </router-link>
      </li>
      <li class="mr-20">
        <router-link to="/schedule" class="text-green flex items-center" exact-active-class="font-bold text-white">
          <font-awesome-icon :icon="['fas', 'calendar']" class="mr-2" />
          {{ $t('Header.nav.schedule') }}
        </router-link>
      </li>
      <li class="mr-20">
        <router-link to="/attendance" class="text-green flex items-center" exact-active-class="font-bold text-white">
          <font-awesome-icon :icon="['fas', 'user-check']" class="mr-2" />
          {{ $t('Header.nav.attendance') }}
        </router-link>
      </li>
      <li class="mr-20">
        <router-link to="/share" class="text-green flex items-center" exact-active-class="font-bold text-white">
          <font-awesome-icon :icon="['fas', 'share-alt']" class="mr-2" />
          {{ $t('Header.nav.share') }}
        </router-link>
      </li>
      <li class="mr-18">
        <router-link to="/config" class="text-green flex items-center" exact-active-class="font-bold text-white">
          <font-awesome-icon :icon="['fas', 'cog']" class="mr-2" />
          {{ $t('Header.nav.config') }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>