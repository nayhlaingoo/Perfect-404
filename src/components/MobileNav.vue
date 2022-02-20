<template>
  <nav
    class="z-50 w-full fixed bg-black block md:hidden"
  >
      <div class="flex justify-between px-5 py-2">
        <h1 class="font-bold text-2xl font-primary text-white min-w-max">
          The Perfect 404
        </h1>
        <div @click="openNavBar = !openNavBar">
            <XIcon
                v-if="openNavBar"
                class="w-8 h-8 cursor-pointer text-white hover:text-white/70 animate__animated animate__flipInX"
            />
            <MenuAlt3Icon
                v-else
                class="w-8 h-8 cursor-pointer text-white hover:text-white/70 animate__animated animate__flipInX"
            />
        </div>
                
      </div>
      <ul
        v-if="openNavBar"
        class="font-primary text-2xl text-white pb-16 flex flex-col justify-center items-center 
        absolute w-full z-10 h-screen bg-black animate__animated animate__fadeInRight"
      >
        <li
          class="hover:text-white/70 duration-200 my-7 min-w-max border-rose border-b-2"
        >
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li
          class="hover:text-white/70 duration-200 my-7 min-w-max border-rose border-b-2"
        >
          <router-link to="/about">
            About Us
          </router-link>
        </li>
        <li
          class="hover:text-white/70 duration-200 my-7 min-w-max border-rose border-b-2"
        >
          <router-link to="/course">
            Our Courses
          </router-link>
        </li>
        <li
          class="hover:text-white/70 duration-200 my-7 min-w-max border-rose border-b-2"
        >
          <router-link to="#">
            Project
          </router-link>
        </li>
        <li
          class="hover:text-white/70 duration-200 my-7 min-w-max border-rose border-b-2"
        >
          <router-link to="#">
            Contact Us
          </router-link>
        </li>
      </ul>
  </nav>
</template>

<script>
import { MenuAlt3Icon } from "@heroicons/vue/outline";
import { XIcon } from "@heroicons/vue/outline";
export default {
  components: {
    MenuAlt3Icon,
    XIcon,
  },

  data() {
    return {
      openNavBar: false,
    };
  },
};
</script>

<style></style>
