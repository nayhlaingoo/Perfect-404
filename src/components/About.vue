<template>
  <section class="md:pt-5 pt-16">
    <div class="mb-5">
      <h1 class="text-rose font-primary text-4xl text-center px-5">We are work from home around the world</h1>
    </div>
    <div class="bg-white bg-[url('@/assets/bg-light.png')] bg-cover mx-5 relative">
      <div class="lg:flex flex-row justify-between w-full shadow-slate-200 shadow-[0px_0px_90px_50px_inset]">
        <div class="lg:w-2/3 w-full py-3 md:px-10 px-5 z-10 h-full">
          <h1 class="text-rose font-primary text-3xl mt-3">
            About us 
          </h1>
          <p class="text-primaryFont font-accent my-5 md:w-4/5 absolute lg:static">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            provident similique placeat quidem esse odit, porro atque laborum
            error perferendis laboriosam ab eveniet maxime? Iste inventore
            aliquid porro rem. Tenetur! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Veniam provident similique placeat quidem esse
            odit, porro atque laborum error perferendis.
            adipisicing elit. Veniam provident similique placeat quidem esse
            odit, porro atque laborum error perferendis.
          </p>
        </div>
        <div class="w-auto flex flex-col justify-center items-center">
          <div class="lg:w-auto md:w-1/2 sm:w-9/12 mx-auto relative">
            <span
              class="animate__animated animate__zoomIn animate__infinite animate__slow absolute top-14 left-10 inline-flex h-2 w-2 rounded-full bg-sky-500 opacity-75"
            ></span>
            <span
              class="animate__animated animate__zoomIn animate__infinite animate__fast absolute top-24 left-20 inline-flex h-2 w-2 rounded-full bg-sky-500 opacity-75"
            ></span>
            <span
              class="animate__animated animate__zoomIn animate__infinite animate__slow absolute top-32 left-36 inline-flex h-2 w-2 rounded-full bg-sky-500 opacity-75"
            ></span>
            <span
              class="animate__animated animate__zoomIn animate__infinite animate__slower absolute top-36 right-20 inline-flex h-2 w-2 rounded-full bg-sky-500 opacity-75"
            ></span>
            <span
              class="animate__animated animate__zoomIn animate__infinite animate__slower absolute top-20 left-44 inline-flex h-2 w-2 rounded-full bg-sky-500 opacity-75"
            ></span>
            <span
              class="animate__animated animate__zoomIn animate__infinite animate__faster absolute top-20 right-10 inline-flex h-2 w-2 rounded-full bg-sky-500 opacity-75"
            ></span>
            <span
              class="animate__animated animate__zoomIn animate__infinite animate__slower absolute top-20 right-36 inline-flex h-2 w-2 rounded-full bg-sky-500 opacity-75"
            ></span>
            <span
              class="animate__animated animate__zoomIn animate__infinite animate__slower absolute top-44 left-40 inline-flex h-2 w-2 rounded-full bg-sky-500 opacity-75"
            ></span>
            <span
              class="animate__animated animate__zoomIn animate__infinite animate__fast absolute top-32 right-36 inline-flex h-2 w-2 rounded-full bg-sky-500 opacity-75"
            ></span>
            <span
              class="animate__animated animate__zoomIn animate__infinite animate__fast absolute top-52 right-16 inline-flex h-2 w-2 rounded-full bg-sky-500 opacity-75"
            ></span>
          </div>
          <img
            class="w-auto h-72 mx-auto"
            src="@/assets/map.png"
            alt="world-map-image"
          />
        </div>
      </div>
    </div>

    <div class="md:flex justify-center">
      <div
        class="md:flex flex-col bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg mx-auto md:mx-3 my-5 lg:w-1/3 w-4/5"
      >
        <div class="flex flex-col">
          <img
            class="h-24 w-24 rounded-full mx-auto"
            src="@/assets/profile-img.jpg"
          />
          <h1 class="text-sm text-primaryFont font-primary text-center mt-1">
            Kaiz
          </h1>
        </div>

        <div class="text-center">
          <h1 class="text-primaryFont font-primary text-sm mb-2">
            Software Enginner
          </h1>
          <p class="text-accentsFont font-accent text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, quod
            cum nihil fugit labore mollitia illum dolor iusto placeat.
          </p>
        </div>
      </div>

      <div
        class="md:flex flex-col bg-white/70 backdrop-blur-sm rounded-lg p-6 shadow-lg mx-auto md:mx-3 my-5 lg:w-1/3 w-4/5"
      >
        <div class="flex flex-col">
          <img
            class="h-24 w-24 rounded-full mx-auto"
            src="@/assets/profile-img.jpg"
          />
          <h1 class="text-sm text-primaryFont font-primary text-center mt-1">
            Sohail
          </h1>
        </div>

        <div class="text-center">
          <h1 class="text-primaryFont font-primary text-sm mb-2">
            Frontend Developer
          </h1>
          <p class="text-accentsFont font-accent text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, quod
            cum nihil fugit labore mollitia illum dolor iusto placeat.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
};
</script>
