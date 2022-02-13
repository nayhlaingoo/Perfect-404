<template>
  <div class="bg-white/70 rounded-md shadow-xl">
    <div>
      <div
        class="bg-black pl-2 flex flex-row justify-between items-center rounded-t-md"
      >
        <div
          class="bg-neutral-800 rounded-tl-lg rounded-tr-lg p-2 text-white text-xs w-1/3 flex flex-row justify-between"
        >
          <p class="hidden lg:block">
            <i class="fas fa-info-circle mr-2"></i>Code Example
          </p>
          <p class="block lg:hidden">
            <i class="fas fa-info-circle mr-2"></i>Code...
          </p>
          <i class="fas fa-times"></i>
        </div>
        <div class="text-white/80 text-xs">
          <i class="far fa-window-minimize mx-2"></i>
          <i class="fas fa-window-restore mx-2"></i>
          <i class="fas fa-times mx-2"></i>
        </div>
      </div>
      <div class="bg-neutral-800 pt-1 pb-2 border-black/50 border-b">
        <div
          class="w-4/5 text-xs py-1 pl-3 mx-auto rounded-full bg-neutral-900 text-white cursor-text"
        >
          loaclhost<span class="text-white/40">:8080</span>
        </div>
      </div>
    </div>
    <div class="overflow-auto h-60">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Browser",
  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>
