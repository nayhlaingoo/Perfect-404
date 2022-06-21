<template>
  <nav class="z-50 w-full fixed block md:hidden" @click="openNav">
    <div
      class="header text-white bg-black/80 backdrop-blur-md delay-200 duration-1000"
    >
      <div class="flex justify-between px-5 py-3">
        <h1 class="font-bold text-xl font-primary min-w-max">
          <router-link to="/"> The Perfect 404 </router-link>
        </h1>
        <div @click="openNavBar = !openNavBar">
          <XIcon
            v-if="openNavBar"
            class="w-7 h-7 cursor-pointer hover:text-white/70 animate__animated animate__flipInX"
          />
          <MenuAlt3Icon
            v-else
            class="w-7 h-7 cursor-pointer hover:text-white/70 animate__animated animate__flipInX"
          />
        </div>
      </div>
    </div>
    <div class="bg-black bg-[url('@/assets/tailwindbg.png')] bg-no-repeat" :class="openNavBar === false ? 'close' : ''">
      <ul
        v-if="openNavBar"
        :class="
          openNavBar === true ? 'open' : openNavBar === false ? 'close' : ''
        "
        class="font-accent overflow-auto scrollbar-hide text-base text-white pt-2 pb-16 px-10 flex flex-col justify-start w-full h-screen z-10"
      >
        <li
          class="hover:text-white/70 duration-200 my-10 min-w-max border-primary border-b"
        >
          <router-link to="/"> Home </router-link>
        </li>
        <li
          class="hover:text-white/70 duration-200 my-10 min-w-max border-primary border-b"
        >
          <a class="cursor-pointer" @click="scrollToAbout"> About Us </a>
        </li>
        <li
          class="hover:text-white/70 duration-200 my-10 min-w-max border-primary border-b"
        >
          <router-link to="/course"> Our Courses </router-link>
        </li>
        <li
          class="hover:text-white/70 duration-200 my-10 min-w-max border-primary border-b"
        >
          <a class="cursor-pointer" @click="scrollToProject">Project</a>
        </li>
        <li
          class="hover:text-white/70 duration-200 my-10 min-w-max border-primary border-b"
        >
          <a class="cursor-pointer" @click="scrollToContact">Contact Us</a>
        </li>
      </ul>
    </div>
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
      openNavBar: null,
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
      const elem = document.querySelector('#contact');
      elem.scrollIntoView({behavior: "smooth" , inline: "nearest" , block: "end"})
    },
    openNav() {
      const elem = document.querySelector("body");
      const headerClass = document.querySelector(".header");
      if (this.openNavBar) {
        elem.style.overflowY = "hidden";
        headerClass.style.background = "#000";
      } else {
        elem.style.overflow = "";
        headerClass.style.background = "";
      }
    },
  },
};
</script>

<style>
@keyframes openAnimateHeight {
  from {
    height: 0px;
  }
  to {
    height: 100vh;
  }
}

.open {
  animation-fill-mode: forwards;
  animation-duration: 0.9s;
  animation-name: openAnimateHeight;
  transition: height 0.9s;
}

@keyframes closeAnimateHeight {
  from {
    height: 100vh;
  }
  to {
    height: 0px;
  }
}

.close {
  animation-fill-mode: forwards;
  animation-duration: 0.7s;
  animation-name: closeAnimateHeight;
  transition: height 0.7s;
}
</style>
