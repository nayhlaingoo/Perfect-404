<template>
  <div class="text-gray-700">
    <h1>This is About Page</h1>
  </div>

  <div class="md:flex">
    <div class="md:flex bg-sky-200 rounded-lg p-6 w-fit shadow-lg m-2">
      <img
        class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src="@/assets/logo.png"
      />
      <div class="text-center md:text-left">
        <h2 class="text-lg text-gray-700">Kaiz (Teacher)</h2>
        <div class="text-gray-600">Softeare Engineer</div>
        <div class="text-gray-600">email123@example.com</div>
        <div class="text-gray-600">(123) 8765-4321</div>
      </div>
    </div>

    <div class="md:flex bg-sky-200 rounded-lg p-6 w-fit shadow-lg m-2">
      <img
        class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"
        src="@/assets/logo.png"
      />
      <div class="text-center md:text-left">
        <h2 class="text-lg text-gray-700">Sohail (Basic Teacher)</h2>
        <div class="text-gray-600">Web Designer</div>
        <div class="text-gray-600">email123@example.com</div>
        <div class="text-gray-600">(123) 8765-4321</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>
