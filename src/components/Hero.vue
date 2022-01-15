<template>
  <div
    class="bg-[url('@/assets/image-10.jpg')] h-screen bg-cover bg-center flex justify-items-center items-center"
  >
    <div class="px-7 lg:px-32 xl:px-24">
      <h1 class="text-6xl mb-6 text-primaryFont font-primary">
        <p>Become A Future</p>
        <AnimatedText />
      </h1>
      <p class="text-lg max-w-md text-accentsFont font-accent whitespace-pre">
        {{ description }}
      </p>
      <ButtonPrimary label="Join Us Now" />
    </div>
  </div>
</template>

<script>
import AnimatedText from './AnimatedText.vue';
import ButtonPrimary from "./ButtonPrimary.vue";
export default {
  components: {
    AnimatedText,
    ButtonPrimary,
  },
  data() {
    return {
      keywords: ["Maker", "Creator", "Engineer", "Developer"],
      status: 0,
      currentWidth: 0,
      description: `Welcome to very first Myanmar Coding Bootcamp. 
Here to help achieve your goals in the tech world. 
Wanna learn how to code? Let's talk.`,
    };
  },
  mounted() {
    setInterval(() => {
      if (this.status === 3) {
        this.status = 0;
      } else {
        this.status += 1;
      }
    }, 2000);
  },
  computed: {
    pickedWord() {
      return `<p id="animated-keyword" class='animate__animated animate__fadeInUp'>${
        this.keywords[this.status]
      }</p>`;
    },
  },
};
</script>
