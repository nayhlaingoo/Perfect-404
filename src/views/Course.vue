<template>
  <div class="flex-row flex justify-center flex-wrap">
    <div
      class="card-main bg-accents/20 rounded-lg shadow-md w-72 m-3 p-2"
      v-for="i in [1, 2, 3, 4, 5, 6, 7, 8]"
      :key="i"
    >
      <div class="card-body flex-col flex items-center">
        <div class="image-logo">
          <img class="w-16" src="@/assets/logo.png" alt="image" />
        </div>
        <div class="text-center">
          <h3 class="text-xl pt-2 text-primaryFont">Vue</h3>
          <p class="py-3 text-sm text-accentsFont">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-2"
        >
          More Details
        </button>
      </div>
    </div>
  </div>

  <div class="w-10/12 md:w-7/12 lg:6/12 mx-auto py-20 font-accents">
    <h1 class="text-3xl text-center mb-10 font-bold text-primaryFont font-primary">
      Hello Vue From Tailwind
    </h1>
    <div class="border-l border-zinc-500/50">
      <!-- card1 -->
      <div class="transform transition shadow-md cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-blue-500 text-slate-100 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
        <div 
          class="w-5 h-5 bg-blue-500 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
        </div>
        <div class="w-10 h-1 bg-blue-300 absolute -left-10 z-0"></div>
        <div class="flex-auto">
          <p class="text-lg">Basic Class</p>
          <p class="text-xl">Period (Four months & Twice aweeks)</p>
          <p>Online Class</p>
        </div>
        <button
          class="bg-blue-400/50 rounded py-2 px-4 text-center text-white hover:bg-blue-400">
          More Details
        </button>
      </div>
      <!-- card2 -->
      <div class="transform transition shadow-md cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-green-500 text-slate-100 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
        <div
          class="dot w-5 h-5 bg-green-500 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
        </div>
        <div class="w-10 h-1 bg-green-300 absolute -left-10 z-0"></div>
        <div class="card1 flex-auto">
          <p class="text-lg">Advanced Class</p>
          <p class="text-xl">Period (Six months & Twice aweeks)</p>
          <p>Online Class</p>
        </div>
        <button
          class="bg-green-400/50 rounded py-2 px-4 text-center text-white hover:bg-green-400">
          More Details
        </button>
      </div>
      <!-- card3 -->
      <div class="transform transition shadow-md cursor-pointer hover:-translate-y-2 ml-10 relative flex items-center px-6 py-4 bg-fuchsia-500 text-slate-100 rounded mb-10 flex-col md:flex-row space-y-4 md:space-y-0">
        <div
          class="dot w-5 h-5 bg-fuchsia-500 absolute -left-10 transform -translate-x-2/4 rounded-full z-10 mt-2 md:mt-0">
        </div>
        <div class="w-10 h-1 bg-fuchsia-300 absolute -left-10 z-0"></div>
        <div class="card1 flex-auto">
          <p class="text-lg">Full Stack Developer</p>
          <p class="text-xl">Period (Six months & Twice aweeks)</p>
          <p>Online Class</p>
        </div>
        <button
          class="bg-fuchsia-400/50 rounded py-2 px-4 text-center text-white hover:bg-fuchsia-400">
          More Details
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Course",
};
</script>
