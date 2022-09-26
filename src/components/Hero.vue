<template>
  <div
    class="bg-[url('@/assets/hero-bg-img.jpg')] h-screen bg-cover bg-fixed bg-center flex justify-items-center items-center"
  >
    <div class="relative -top-10 px-5 lg:px-28 xl:px-24">
      <h1 class="sm:text-6xl text-3xl mb-6 text-primaryVariant font-primary">
        Become A Future
        <AnimatedText />
      </h1>
      <p
        class="max-w-md text-sm md:text-base text-secondary font-accent whitespace- select-none"
      >
        {{ description }}
      </p>
      <router-link to="/course">
        <ButtonPrimary class="absolute" label="View course" />
      </router-link>
    </div>
  </div>
</template>

<script>
import AnimatedText from "./AnimatedText.vue";
import ButtonPrimary from "./ButtonPrimary.vue";
export default {
  components: {
    AnimatedText,
    ButtonPrimary,
  },
  data() {
    return {
      description: `Welcome to very first Lorem Coding Bootcamp. 
Here to help achieve your goals in the tech world. 
Wanna learn how to code? Let's talk.`,
    };
  },
};
</script>
