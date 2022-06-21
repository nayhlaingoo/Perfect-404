<template>
  <MobileNav />

  <nav
    class="px-5 z-50 bg-black/80 backdrop-blur-md border-black border-b w-full md:block hidden relative"
  >
    <div class="px-2 list-none flex justify-between items-center">
      <h1 class="font-bold text-2xl font-primary text-white min-w-max">
        <router-link to="/"> The Perfect 404 </router-link>
      </h1>

      <ul
        class="flex justify-between pr-4 text-white font-accent lg:w-1/2 md:w-7/12"
      >
        <li
          class="duration-100 hover:text-white/70 py-3 px-1 min-w-max border-primary border-b-2"
        >
          <router-link to="/"> Home </router-link>
        </li>
        <li
          class="duration-100 hover:text-white/70 py-3 cursor-pointer px-1 min-w-max border-primary border-b-2"
        >
          <a @click="scrollToAbout"> About Us </a>
        </li>

        <div
          @mouseover="open = true"
          @mouseleave="open = false"
          class="rounded-t-md relative min-w-max"
        >
          <div class="border-primary border-b-2">
            <button class="flex flex-row items-center py-3 px-1">
              Service <ChevronDownIcon class="w-7 h-5" />
            </button>
          </div>
          <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95"
          >
            <div v-if="open" class="absolute min-w-max pt-1">
              <div class="bg-neutral-900 shadow-lg rounded-sm px-3">
                <router-link to="/course">
                  <li
                    class="hover:text-primary duration-200 p-2 border-primary/90 border-b-2"
                  >
                    Our Courses
                  </li>
                </router-link>
                <li class="hover:text-primary duration-200 p-2 cursor-pointer">
                  <a @click="scrollToProject">Our Project</a>
                </li>
              </div>
            </div>
          </transition>
        </div>

        <li
          class="duration-100 hover:text-white/70 py-3 px-1 min-w-max border-primary border-b-2 cursor-pointer"
        >
          <a @click="scrollToContact">Contact Us</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import MobileNav from "../components/MobileNav.vue";
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
  methods: {
    scrollToAbout() {
      const elem = document.querySelector("#aboutUs");
      elem.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    },
    scrollToProject() {
      const elem = document.querySelector("#project");
      elem.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    },
    scrollToContact() {
      const elem = document.querySelector("#contact");
      elem.scrollIntoView({behavior: "smooth" , block: "end" , inline: "nearest"})
    }
  },
};
</script>
