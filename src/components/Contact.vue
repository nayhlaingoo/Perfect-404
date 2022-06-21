<template>
  <section class="bg-[url('@/assets/tailwindbg.png')] bg-no-repeat shadow-slate-100 shadow-[0px_40px_50px_50px_inset]">

    <div class="pt-3 pb-2">
      <div class="flex flex-col w-11/12 mx-auto border-slate-300 border-t">
        <div class="lg:flex flex-row items-center mt-14">
          <div class="w-auto">
            <ChatAlt2Icon
              class="md:w-24 md:h-24 w-14 h-14 inline-flex text-primary/90"
            />
            <h1
              class="text-primary font-primary lg:text-left text-center text-5xl"
            >
              We'd love to hear from you.
            </h1>
            <p
              class="text-secondary font-accent mt-3 lg:text-left text-center lg:mx-0 mx-auto md:w-9/12"
            >
              We are ready to answer all of your question. If you have any
              questions, use the form below. We look forward to hearing from
              you.
            </p>
          </div>
          <div
            class="w-auto md:w-1/2 p-5 lg:mt-0 mt-10 mx-auto bg-white/70 backdrop-blur-sm drop-shadow-sm rounded-md"
          >
            <h1 class="text-primary font-primary text-2xl mb-7">
              Drop your message
            </h1>
            <div>
              <input
                class="block w-full my-5 p-1 border-slate-300 border focus:border-slate-500 rounded-md outline-none"
                type="text"
                placeholder="email@example.com"
              />
              <textarea
                class="block w-full my-5 p-1 border-slate-300 border focus:border-slate-500 rounded-md outline-none"
                name="message"
                id="message"
                cols="30"
                rows="4"
                placeholder="Go ahead we're listening"
              ></textarea>
              <ButtonWhite label="Send Message" class="drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="md:flex justify-between items-center w-11/12 mx-auto mt-20 py-10 px-5 bg-gray-900 rounded-md bg-[url('@/assets/bg-light.png')] sm:bg-cover bg-contain bg-right-top bg-no-repeat"
    >
      <div class="mx-auto hidden md:block">
        <h1
          class="text-primary font-primary text-xl w-full mb-5 pb-1 border-primary/70 border-b"
        >
          Let's get in touch
        </h1>
        <div class="flex items-center mb-3">
          <PhoneIcon class="w-4 h-4 text-primary" />
          <p class="text-slate-400 ml-6 text-sm">0123456789</p>
        </div>
        <div class="flex items-center">
          <MailIcon class="w-4 h-4 text-primary" />
          <p class="text-slate-400 ml-6 text-sm">theperfectt404@gmail.com</p>
        </div>
      </div>
      <div class="flex flex-col items-start justify-center md:w-1/2 ml-auto">
        <h1 class="text-primary font-primary text-xl">Have a project?</h1>
        <h1 class="text-primary mb-5 font-primary text-4xl">
          We would like to help.
        </h1>
        <p class="text-slate-400 font-accent">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit tenetur, fuga excepturi illo in id quasi magnam,
          veritatis explicabo.
        </p>
      </div>
      <div class="mx-auto block md:hidden mt-10">
        <h1
          class="text-primary font-primary text-xl w-fit mb-5 pb-1 border-primary/70 border-b"
        >
          Let's get in touch
        </h1>
        <div class="flex items-center mb-3">
          <PhoneIcon class="w-4 h-4 text-primary" />
          <p class="text-slate-400 ml-6 text-sm">0123456789</p>
        </div>
        <div class="flex items-center">
          <MailIcon class="w-4 h-4 text-primary" />
          <p class="text-slate-400 ml-6 text-sm">theperfectt404@gmail.com</p>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
import ButtonPrimary from "../components/ButtonPrimary.vue";
import ButtonWhite from "../components/ButtonWhite.vue";
import { ChatAlt2Icon } from "@heroicons/vue/solid";
import { PhoneIcon } from "@heroicons/vue/solid";
import { MailIcon } from "@heroicons/vue/solid";
import About from "../components/About.vue";
export default {
  name: "Contact",
  components: {
    ButtonPrimary,
    ButtonWhite,
    ChatAlt2Icon,
    PhoneIcon,
    MailIcon,
    About,
  },
};
</script>

<style></style>
