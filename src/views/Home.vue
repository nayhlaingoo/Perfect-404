<template>
  <section>
    <Hero />
  </section>

  <section class="mt-14">
    <h1
      class="my-5 text-center font-bold text-2xl text-primaryFont font-primary"
    >
      Help make a change
    </h1>
    <main class="py-48 lg:px-0 px-10 flex flex-col justify-center">
      <div class="grid grid-cols-2 gap-5 sm:gap-10 max-w-4xl mx-auto">
        <div class="flex justify-end -mt-40">
          <CodeBlock
            class="overflow-auto"
            :code="cssCode"
            language="language-css"
          />
        </div>
        <div class="flex justify-start">
          <CodeBlock
            class="overflow-auto"
            :code="htmlCode"
            language="language-html"
          />
        </div>
        <div class="sm:-mt-56 -mt-40 flex justify-start">
          <img
            class="rounded-lg object-cover overflow-hidden shadow-md"
            src="https://images.unsplash.com/photo-1533557950217-8768f2ee7491?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
        </div>
        <div class="flex justify-start -mr-10 ml-10">
          <img
            class="w-2/4 h-2/3 object-cover rounded-lg overflow-hidden shadow-md"
            src="https://images.unsplash.com/photo-1620371350502-999e9a7d80a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80"
          />
        </div>

        <!-- <div class="-translate-y-96 transform ml-28 -mr-28 p-16 shadow-xl rounded-xl overflow-hidden bg-white">
        <div class="space-y-4">
          <p class="text-5xl font-bold text-black tracking-tight">
            In unprecedented times, health and safety remain the priority.
          </p>
          <p class="text-xl text-black">
            From the moment the threat of COVID‑19 emerged, Apple took action. Working closely with medical experts and our suppliers, we put the health and safety of the people in our supply chain first. We implemented standard measures like
            personal protective equipment, deep‑cleaning protocols and health screenings. But we went much further, re‑imagining entire factory layouts and processes to ensure that people could practise proper social distancing. We continue to
            support our suppliers around the world and have shared our best practices and lessons learned with partners across the industry.
          </p>
        </div>
        <div class="grid grid-cols-2 gap-6 border-t border-b border-gray-200 my-12 py-8">
          <div>
            <p class="text-4xl font-bold text-black">
              2M+
            </p>
            <p class="text-sm text-black">
              people in the Apple supply chain covered by our health and safety standards in 2020
            </p>
          </div>
          <div>
            <p class="text-4xl font-bold text-black">
              170+
            </p>
            <p class="text-sm text-black">
              member companies of the Responsible Business Alliance given access to our COVID response tools
            </p>
          </div>
        </div>
      </div> -->
      </div>
    </main>
  </section>
  <section class="py-10 px-6 md:px-14">
    <div
      class="sm:flex items-center shadow-md bg-accent/10 text-primaryFont font-accent"
    >
      <!-- 1st div -->
      <div class="px-5 sm:px-10">
        <h1 class="pt-5 text-2xl font-bold font-primary">long established</h1>
        <p class="my-5 text-accentsFont">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that....
        </p>
        <div class="mb-5 flex justify-between">
          <span class="text-sm">May 20th 2020</span>
          <a class="sm:block hidden mb-2" href="#">Read more</a>
        </div>
      </div>
      <div>
        <img
          class="bg-cover lg:max-w-lg md:max-w-sm sm:max-w-xs mx-auto w-auto"
          src="@/assets/image-6.jpg"
          alt="image logo"
        />
      </div>
    </div>

    <div class="md:flex text-primaryFont font-accent">
      <!-- 2nd div-->
      <div class="my-5 shadow-md bg-accent/10">
        <!-- 2nd child div 1 -->
        <img
          class="mx-auto w-auto"
          src="@/assets/image-5.jpg"
          alt="image logo"
        />
        <div class="px-4">
          <h1 class="mt-3 text-2xl my-2 font-bold font-primary">
            long established
          </h1>
          <p class="mb-2 text-accentsFont">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </p>
          <div class="flex justify-between mt-4">
            <span class="text-sm">May 20th 2020</span>
            <a class="mb-2" href="#">Read more</a>
          </div>
        </div>
      </div>
      <div class="my-5 md:mx-3 shadow-md bg-accent/10">
        <!-- 2nd child div 2 -->
        <img
          class="mx-auto w-auto"
          src="@/assets/image-5.jpg"
          alt="image logo"
        />
        <div class="px-4">
          <h1 class="mt-3 text-2xl my-2 font-bold font-primary">
            long established
          </h1>
          <p class="mb-2 text-accentsFont">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </p>
          <div class="flex justify-between mt-4">
            <span class="text-sm">May 20th 2020</span>
            <a class="mb-2" href="#">Read more</a>
          </div>
        </div>
      </div>
      <div class="my-5 shadow-md bg-accent/10">
        <!-- 2nd child div 3 -->
        <img
          class="mx-auto w-auto"
          src="@/assets/image-5.jpg"
          alt="image logo"
        />
        <div class="px-4">
          <h1 class="mt-3 text-2xl my-2 font-bold font-primary">
            long established
          </h1>
          <p class="mb-2 text-accentsFont">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that....
          </p>
          <div class="flex justify-between mt-4">
            <span class="text-sm">May 20th 2020</span>
            <a class="mb-2" href="#">Read more</a>
          </div>
        </div>
      </div>
    </div>

    <div
      class="sm:flex items-center shadow-md bg-accent/10 text-primaryFont font-accent"
    >
      <!-- 3rd div -->
      <div>
        <img
          class="bg-cover w-auto"
          src="@/assets/image-1.jpg"
          alt="image logo"
        />
      </div>
      <div class="px-5 sm:px-10">
        <h1 class="pt-5 text-2xl font-bold font-primary">long established</h1>
        <p class="my-5 text-accentsFont">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that....
        </p>
        <div class="pb-5 flex justify-between">
          <span class="text-sm">May 20th 2020</span>
          <a class="sm:block hidden mb-2" href="#">Read more</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CodeBlock from "../components/CodeBlock.vue";
import Hero from "../components/Hero.vue";
export default {
  name: "Home",
  components: {
    Hero,
    CodeBlock,
  },
  data() {
    return {
      htmlCode: `<figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/sarah-dayan.jpg" alt="" width="384" height="512">
  <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>`,
      cssCode: `*{
    margin: 0%;
    padding: 0%;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
body{
    background-color: rgba(0, 0, 0, 0.918);
    overflow-x: hidden;
}
.navbar{
    color: rgb(255, 255, 255);
    position: fixed;
    width: 100%;
    z-index: 1;
}
.navbar ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    height: 10vh;
    margin-bottom: 0%;
}`,
    };
  },
};
</script>
