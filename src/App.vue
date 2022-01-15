<template>
   
  <menu-bar></menu-bar>
  <router-view></router-view>
  
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
