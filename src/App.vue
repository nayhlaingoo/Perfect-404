<template>
  <div class="bg-slate-100 min-w-screen min-h-screen">
    <menu-bar></menu-bar>
    <router-view></router-view>
    <Footer />
    <a
      href="#"
      id="top"
      class="sticky bottom-5 left-full mr-3 text-sm text-slate-100 bg-slate-900 p-2 rounded-full"
      >back to top &#8593;</a
    >
    
  </div>
</template>

<script>
import MenuBar from "@/components/MenuBar";
import Footer from "../src/components/footer.vue"
export default {
  components: {
    MenuBar,
    Footer,
  },

  data() {
    return {
      isHidden: false,
    };
  },
};
</script>

<style>
html,
body {
  scroll-behavior: smooth;
}
#top {
  --offset: 50px;
  margin-top: calc(100vh + var(--offset));
}
</style>
