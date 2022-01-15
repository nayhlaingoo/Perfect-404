<template>
  <nav
    class="flex-col z-10 bg-accent/10 border-b border-b-zinc-500/20 backdrop-blur-xl sticky top-0"
  >
    <div class="p-2 list-none flex justify-between">
      <div class="flex justify-evenly w-[20%] text-xl">
        <img class="w-[10%]" src="@/assets/logo.png" alt="image logo" />
        <p class="font-bold font-primary text-primaryFont">Welcome To Vue</p>
      </div>
      <ul class="flex justify-evenly pr-4 text-base text-white w-fit">
        <router-link to="/">
          <li
            class="bg-primary duration-100 hover:bg-primary/70 py-1 px-2 rounded-lg border border-zinc-500/10"
          >
            Home
          </li>
        </router-link>
        <router-link to="/about">
          <li
            class="mx-7 bg-primary duration-100 hover:bg-primary/70 py-1 px-2 rounded-lg border border-zinc-500/10"
          >
            About
          </li>
        </router-link>
        <router-link to="/course">
          <li
            class="bg-primary duration-100 hover:bg-primary/70 py-1 px-2 rounded-lg border border-zinc-500/10"
          >
            Courses
          </li>
        </router-link>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MenuBar",
};
</script>
