<template>
  <button
    @click="$emit('click')"
    class="bg-primary flex justify-center items-center hover:bg-primary/80 text-white py-2 px-4 rounded my-2"
  >
    <svg class="w-5 h-5 mr-3 animate-spin" viewBox="0 0 24 24" v-if="loading">
      <path
        fill="currentColor"
        d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
      />
    </svg>
    {{ label }}
  </button>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: () => false,
    },
    label: {
      type: String,
      required: true,
    },
  },
  emits: ["click"],
};
</script>

<style></style>
