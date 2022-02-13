<template>
  <div
    class="bg-[url('@/assets/image-10.jpg')] h-screen bg-cover bg-fixed bg-center flex justify-items-center items-center"
  >
    <div class="relative -top-10 px-5 lg:px-28 xl:px-24">
      <h1 class="text-6xl mb-6 text-primaryFont font-primary">
        Become A Future
        <AnimatedText />
      </h1>
      <p class="max-w-md text-accentsFont font-accent whitespace-pre select-none">
        {{ description }}
      </p>
      <ButtonPrimary class="absolute" label="Join Us Now" />
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
      description: `Welcome to very first Myanmar Coding Bootcamp. 
Here to help achieve your goals in the tech world. 
Wanna learn how to code? Let's talk.`,
    };
  },
};
</script>
