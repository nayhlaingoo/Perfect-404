<template>
  <section>
    <div class="pt-10 sm:px-5 px-2">
      <h1 class="text-primary font-primary text-4xl text-center my-9">
        Our Project
      </h1>
      <div class="lg:grid-cols-3 sm:grid-cols-2 grid grid-cols-1"> 
        <!-- project card-1 -->
        <div
          class="bg-slate-200 rounded-md shadow-md flex mx-2 mb-7 overflow-hidden cursor-pointer"
        >
          <div class="felx flex-col w-auto">
            <img
              src="@/assets/web-layout-img.png"
              class="w-full h-52 object-cover mb-4 hover:scale-105 duration-500"
              alt="image"
            />
            <div>
              <h1 class="text-primaryVariant font-primary m-2">One page layout</h1>
              <p class="text-secondary text-sm mb-4 mx-2">
                This is a beginner-level project that allows freshers to test
                their newly knowledge and skill level.
              </p>
            </div>
          </div>
        </div>

        <!-- project card-2 -->
        <div
          class="bg-slate-200 rounded-md shadow-md flex mx-2 mb-7 overflow-hidden cursor-pointer"
        >
          <div class="felx flex-col w-auto">
            <img
              src="@/assets/responsive-img.jpg"
              class="w-full h-52 object-cover mb-4 hover:scale-105 duration-500"
              alt="image"
            />
            <div>
              <h1 class="text-primaryVariant font-primary m-2">
                Multi page responsive website
              </h1>
              <p class="text-secondary text-sm mb-4 mx-2">
                Responsive website has become important nowadays. Half of the
                people traffic to a website is through mobile devices.
              </p>
            </div>
          </div>
        </div>

        <!-- project card-3 -->
        <div
          class="bg-slate-200 rounded-md shadow-md flex mx-2 mb-7 overflow-hidden cursor-pointer"
        >
          <div class="felx flex-col w-auto">
            <img
              src="@/assets/to-do-img.jpg"
              class="w-full h-52 object-cover mb-4 hover:scale-105 duration-500"
              alt="image"
            />
            <div>
              <h1 class="text-primaryVariant font-primary m-2">
                Small application
              </h1>
              <p class="text-secondary text-sm mb-4 mx-2">
                You can use JavaScript to build a web application. For this
                project, you must be familiar with HTML and CSS.
              </p>
            </div>
          </div>
        </div>

        <!-- project card-4 -->
        <div
          class="bg-slate-200 rounded-md shadow-md flex mx-2 mb-7 overflow-hidden cursor-pointer"
        >
          <div class="felx flex-col w-auto">
            <img
              src="@/assets/random-num-img.jpeg"
              class="w-full h-52 object-cover mb-4 hover:scale-105 duration-500"
              alt="image"
            />
            <div>
              <h1 class="text-primaryVariant font-primary m-2">
                Random number generator
              </h1>
              <p class="text-secondary text-sm mb-4 mx-2">
                Another simple project is timer or clock that need to create a
                simple webpage that can update the time every second.
              </p>
            </div>
          </div>
        </div>

        <!-- project card-5 -->
        <div
          class="bg-slate-200 rounded-md shadow-md flex mx-2 mb-7 overflow-hidden cursor-pointer"
        >
          <div class="felx flex-col w-auto">
            <img
              src="@/assets/small-gm-img.png"
              class="w-full h-52 object-cover mb-4 hover:scale-105 duration-500"
              alt="image"
            />
            <div>
              <h1 class="text-primaryVariant font-primary m-2">
                Small games porject
              </h1>
              <p class="text-secondary text-sm mb-4 mx-2">
                We can create small game using a JS. We can experiment with our
                skills by working on a small JS-based game.
              </p>
            </div>
          </div>
        </div>

        <!-- project card-6 -->
        <div
          class="bg-slate-200 rounded-md shadow-md flex mx-2 mb-7 overflow-hidden cursor-pointer"
        >
          <div class="felx flex-col w-auto">
            <img
              src="@/assets/problem-solving-img.png"
              class="w-full h-52 object-cover mb-4 hover:scale-105 duration-500"
              alt="image"
            />
            <div>
              <h1 class="text-primaryVariant font-primary m-2">
                Problem solving skills
              </h1>
              <p class="text-secondary text-sm mb-4 mx-2">
                This is interesting and exciting project. In this project we'll
                know better how to think like a programmer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name: 'Project'
};
</script>

<style></style>
