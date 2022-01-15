<template>
  <div class="shadow-2xl">
    <div
      class="border-b rounded-tr-lg rounded-tl-lg border-gray-500/50 p-2 flex code space-x-2"
    >
      <div class="w-3 h-3 bg-[#ec6a5f] rounded-full"></div>
      <div class="w-3 h-3 bg-[#f5cd78] rounded-full"></div>
      <div class="w-3 h-3 bg-[#61c454] rounded-full"></div>
    </div>
    <div class="code p-2 rounded-br-lg rounded-bl-lg" :class="language">
      {{ code }}
    </div>
  </div>
</template>

<script>
import hljs from "highlight.js";

export default {
  props: {
    code: {
      type: String,
      required: true,
    },
    language: {
      type: String,
      required: true,
    },
  },
  mounted() {
    // first, find all the div.code blocks
    document.querySelectorAll("div.code").forEach((el) => {
      // then highlight each
      hljs.highlightElement(el);
    });
  },
};
</script>

<style>
div.code {
  white-space: pre;
  font-family: monospace;
  overflow: auto;
}
div.code::before {
  counter-reset: listing;
}
div.code p {
  counter-increment: listing;
}
div.code p::before {
  content: counter(listing) ". ";
  display: inline-block;
  padding-left: auto;
  margin-left: auto;
  text-align: right;
}
</style>
