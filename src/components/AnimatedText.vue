<template>
  <section>
    <div class="relative">
      <div class="hidden-texts absolute opacity-0">
        <p
          v-for="label in labels"
          v-bind:key="label"
          class="sm:text-6xl text-xl w-min px-3 select-none"
        >
          {{ label }}
        </p>
      </div>
    </div>
    
    <div
      id="wrapper"
      v-html="selectedLabel"
      class="mt-5 sm:text-6xl text-2xl sm:h-[90px] py-1 flex items-center justify-center w-min overflow-hidden text-primary border border-gray-600 rounded-lg transition-all duration-1000"
    ></div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      labels: ['Maker', 'Creator', 'Engineer', 'Developer'],
      status: 0,
      interval: null,
    };
  },
  mounted() {
    const hiddenTexts = document.querySelector(".hidden-texts");
    const wrapper = document.getElementById("wrapper");
    wrapper.style.width = hiddenTexts.children[0].clientWidth + "px";
    this.interval = setInterval(() => {
      this.status += 1;
      if (this.status === this.labels.length) {
        this.status = 0;
      }
      const wrapper = document.getElementById("wrapper");
      wrapper.style.width =
        hiddenTexts.children[this.status].clientWidth + "px";
    }, 2000);
  },
  beforeUnmount(){
    clearInterval(this.interval);
  },
  computed: {
    selectedLabel() {
      return `<p class='animate__animated animate__fadeInUp animate__duration-1s'>${
        this.labels [this.status]
      }</p>`;
    },
  },
};
</script>

<style></style>
