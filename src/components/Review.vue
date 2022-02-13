<template>
  <section class="bg-slate-100 py-10 flex flex-row flex-wrap">
    <div
      v-for="review in reviews"
      :key="review.user.comment"
      class="lg:w-1/4 md:w-1/3 w-1/2 px-5 md:px-5"
    >
      <div class="mb-5 bg-slate-50/70 p-3 rounded-md shadow-sm">
        <div class="text-primaryFont font-primary text-lg">
          {{ review.user }}
        </div>
        <div class="flex">
            <StarIcon class="h-4 w-4 text-rose" v-for="rate in review.rating" :key="rate"/>
            <StarIcon class="h-4 w-4 text-rose/20" v-for="rate in 5 - review.rating" :key="rate"/>
        </div>
        <div class="text-accentsFont/50 text-xs mt-1 mb-2">
          {{ review.bio }}
        </div>
        <div class="text-accentsFont text-sm font-accent">
          {{ review.comment }}
        </div>
      </div>
    </div>

    <div class="bg-white rounded-sm w-11/12 mt-10 mx-auto md:flex flex-row justify-around items-center">
      <div class="m-7">
          <h1 class="text-primary font-primary text-4xl mb-3">
              Leave Us A Feedback.
          </h1>
          <p class="text-accentsFont font-accent">How do you think on us. Share your opinion and feel free to write your review.</p>
      </div>
      <div class="md:w-72 w-80 py-5 mx-auto md:mx-5">
        <label class="mb-2 text-primaryFont text-center font-primary" for="Email">Email</label>
        <input
          type="text"
          placeholder="username@gmail.com"
          class="my-3 block text-primaryFont bg-slate-100 rounded-md shadow-md w-full px-1 py-2 mr-2"
        />
        <label class="text-primaryFont font-primary" for="Suggestion">Suggestion</label>
        <textarea
          name="feedback"
          id="feedback"
          placeholder="Any suggestion"
          cols="23"
          rows="2"
          class="my-3 block text-primaryFont bg-slate-100 rounded-md shadow-md w-full px-1 py-2"
        ></textarea>
        <ButtonPrimary class="w-full mt-4" label="Submit" />
      </div>
    </div>
  </section>
</template>

<script>
import ButtonPrimary from "../components/ButtonPrimary.vue"
import ButtonWhite from "../components/ButtonWhite.vue"
import { StarIcon } from '@heroicons/vue/solid'
export default {
  name: "Review",
  components: {
      ButtonPrimary,
      ButtonWhite,
      StarIcon,
  },
  data() {
    return {
      reviews: [
        {
          user: "Carol",
          rating: 5,
          bio: "from class A",
          comment:
            "Best way to learn code in here, very useful courses and very helpful, patients and friendly teachers. I am highly recommend it.",
        },

        {
          user: "Alex",
          rating: 4,
          bio: "from class C",
          comment: 
          "Love to improve my coding skills in here. Very helpful and easy to get point It helped me a lot for learning and developing a site. Thanks :)",
        },

        {
          user: "Flora",
          rating: 4,
          bio: "from class B",
          comment:
            "I am happy to study here and i love it the way they explain us, good teaching.",
        },

        {
          user: "Emma",
          rating: 5,
          bio: "from class C",
          comment: 
          "As a beginner, it will help you out and definitely get benefited. they took me up for bacme a fullstack dev. I'll recommend those people who want to become a web developer.",
        },

        {
          user: "Sofia",
          rating: 4,
          bio: "from class A",
          comment: "I really recommend this college for those people who want to become software developer, because very easy steps of how to write some coding the way they teach.",
        },

        {
          user: "Denial",
          rating: 5,
          bio: "from class B",
          comment: "This college helped me alot and explained very well. Easily taught and great experience to learn programming languages. Love it!",
        },

        {
          user: "Jenny",
          rating: 4,
          bio: "from class B",
          comment: "I am so thankful to mede me become good dev, all courses are good enough for you to make developer.",
        },

        {
          user: "Paul",
          rating: 4,
          bio: "from class A",
          comment: "I am familiar with coding but not expert. Now i've got better understanding of actual web dev and programming lang especially python.",
        },
      ],
    };
  },
};
</script>

<style></style>
