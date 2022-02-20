<template>
  <MobileNav />

  <nav
    class="px-5 z-50 bg-black border-black border-b w-full md:block hidden"
  >
    <div class="px-2 list-none flex justify-between items-center">
        <h1 class="font-bold text-2xl font-primary text-white min-w-max">
          The Perfect 404
        </h1>

      <ul class="flex justify-between pr-4 text-white font-accent lg:w-1/2 md:w-7/12">
        <li
          class="duration-100 hover:text-white/70 py-3 px-1 min-w-max border-rose border-b-2"
        >
          <router-link to="/">
            Home
          </router-link>
        </li>
        <li
          class="duration-100 hover:text-white/70 py-3 px-1 min-w-max border-rose border-b-2"
        >
          <router-link to="/about">
            About Us
          </router-link>
        </li>
        
        <div @mouseover="open = true" @mouseleave="open = false" class="rounded-t-md relative min-w-max z-50">
          <div class="border-rose border-b-2">
            <button
              class="flex flex-row items-center py-3 px-1"
            >
              Service <ChevronDownIcon class="w-7 h-5" />
            </button>
          </div>
          <div v-if="open" class="bg-neutral-900 shadow-lg rounded-b-md absolute min-w-max pt-3 px-2 animate__animated animate__fadeInDown animate__faster">
            <router-link to="/course">
              <li
                class="hover:text-rose duration-200 p-2 border-rose border-b-2"
              >
                Our Courses
              </li>
            </router-link>
            <router-link to="/course">
              <li
                class="hover:text-rose duration-200 p-2"
              >
                Our Project
              </li>
            </router-link>
          </div>
        </div>
        <li
          class="duration-100 hover:text-white/70 py-3 px-1 min-w-max border-rose border-b-2"
        >
          <router-link to="#">
            Contact Us
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import MobileNav from "../components/MobileNav.vue"
import { ChevronDownIcon } from "@heroicons/vue/solid";
export default {
  name: "MenuBar",
  components: {
    MobileNav,
    ChevronDownIcon,
  },

  data() {
    return {
      open: false,
    };
  },
};
</script>
