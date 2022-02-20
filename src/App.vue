<template>
  <div class="bg-slate-100 min-w-screen min-h-screen">
  <menu-bar></menu-bar>
  <router-view></router-view>
  </div>
  
</template>

<script>
import MenuBar from "@/components/MenuBar";

export default {
  components: {
    MenuBar,
  },

  data() {
    return {
      
    };
  },
};
</script>
