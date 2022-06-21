<template>
  <section class="bg-slate-100 py-10 flex flex-row flex-wrap">
    <div
      v-for="review in reviews"
      :key="review.user.comment"
      class="lg:w-1/4 md:w-1/3 w-1/2 px-5 md:px-5"
    >
      <div class="mb-5 bg-slate-50/70 p-3 rounded-md shadow-sm">
        <div class="text-primaryVariant font-primary text-lg">
          {{ review.user }}
        </div>
        <div class="flex mt-1 mb-2">
          <StarIcon
            class="h-4 w-4 text-primary"
            v-for="rate in review.rating"
            :key="rate"
          />
          <StarIcon
            class="h-4 w-4 text-primary/20"
            v-for="rate in 5 - review.rating"
            :key="rate"
          />
        </div>
        <div class="text-secondary text-sm font-accent">
          {{ review.comment }}
        </div>
      </div>
    </div>

    <!-- <div
      class="bg-white rounded-sm w-11/12 mt-10 mx-auto md:flex flex-row justify-around items-center bg-[url('@/assets/bg-light.png')]"
    >
      <div class="m-7">
        <ChatAlt2Icon
          class="md:w-17 md:h-17 w-14 h-14 inline-flex text-primary/90"
        />
        <h1 class="text-primary font-primary text-5xl mb-3">
          Leave Us A Feedback.
        </h1>
        <p class="text-secondary font-accent">
          How do you think on us. Share your opinion and feel free to write your
          review.
        </p>
      </div>

      <div class="md:w-1/3 w-80 py-5 mx-auto md:mx-5">
        <h1 class="text-primary font-primary text-xl mb-5">
          Drop your message
        </h1>
        <input
          v-model="user"
          type="text"
          placeholder="email@example.com"
          class="block w-full my-5 p-1 border-slate-300 border focus:border-slate-500 rounded-md outline-none"
        />

        <textarea
          v-model="comment"
          name="feedback"
          id="feedback"
          placeholder="Go ahead we're listening"
          cols="23"
          rows="3"
          class="block w-full my-5 p-1 border-slate-300 border focus:border-slate-500 rounded-md outline-none"
        ></textarea>

        <div class="">
          <p class="text-primaryVariant/90 font-primary mb-2">Rate</p>
          <StarIcon
            v-for="i in 5"
            :key="i"
            class="inline w-7 h-7 text-primary/20 cursor-pointer mr-3"
          />
        </div>

        <div class="text-red-900 bg-red-300 p-2 mt-2 rounded-md" v-if="message">
          {{ message }}
        </div>
        <ButtonWhite
          @click="postReview()"
          class="mt-4 drop-shadow-lg"
          label="Send message"
        />
      </div>
    </div> -->
  </section>
</template>

<script>
import ButtonPrimary from "../components/ButtonPrimary.vue";
import ButtonWhite from "../components/ButtonWhite.vue";
import { StarIcon } from "@heroicons/vue/solid";
import { ChatAlt2Icon } from "@heroicons/vue/solid";
export default {
  name: "Review",
  components: {
    ButtonPrimary,
    ButtonWhite,
    StarIcon,
    ChatAlt2Icon,
  },

  data() {
    return {
      reviews: [
        {
          user: "Carol",
          rating: 5,
          comment:
            "Best way to learn code in here, very useful courses and very helpful, patients and friendly teachers. I am highly recommend it.",
        },

        {
          user: "Alex",
          rating: 4,
          comment:
            "Love to improve my coding skills in here. Very helpful and easy to get point It helped me a lot for learning and developing a site. Thanks :)",
        },

        {
          user: "Flora",
          rating: 4,
          comment:
            "I am happy to study here and i love it the way they explain us, good teaching.",
        },

        {
          user: "Emma",
          rating: 5,
          comment:
            "As a beginner, it will help you out and definitely get benefited. they took me up for bacme a fullstack dev. I'll recommend those people who want to become a web developer.",
        },

        {
          user: "Sofia",
          rating: 4,
          comment:
            "I really recommend this college for those people who want to become software developer, because very easy steps of how to write some coding the way they teach.",
        },

        {
          user: "Denial",
          rating: 5,
          bio: "from class B",
          comment:
            "This college helped me alot and explained very well. Easily taught and great experience to learn programming languages. Love it!",
        },

        {
          user: "Jenny",
          rating: 4,
          comment:
            "I am so thankful to mede me become good dev, all courses are good enough for you to make developer.",
        },

        {
          user: "Paul",
          rating: 4,
          comment:
            "I am familiar with coding but not expert. Now i've got better understanding of actual web dev and programming lang especially python.",
        },
      ],

      user: "",
      comment: "",
      message: "",
    };
  },
  methods: {
    postReview() {
      if (this.user === "" || this.comment === "") {
        this.message = "Please fill your name and comment.";
      } else {
        this.reviews.push({ user: this.user, comment: this.comment });
      }
      this.user = "";
      this.comment = "";
    },
  },
};
</script>

<style scoped></style>
