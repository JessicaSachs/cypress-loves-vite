<template>
  <!-- fade in -->
  <transition name="fade">
    <div class="modal" v-show="visible">
      <div class="overlay"></div>
      <!-- <div class="overlay" key="overlay" /> -->
      <div class="content">
        <span class="close x-button" @click="$emit('close')">❌</span>
        <div class="header-image" />
        <!-- This form should not trigger a full-page refresh! -->
        <form @submit.prevent="onSubmit">
          <p class="modal-title">A $10 off Perk for your first order</p>
          <p class="modal-subtitle">
            Get <b>$10 off</b> your first order of $15+. Now, that's tasty!
          </p>
          <fieldset>
            <label for="email">
              Email address
              <input
                id="email"
                type="email"
                v-model="formData.email"
                data-testid="email"
              />
            </label>

            <label for="zip-code">
              ZIP Code
              <input
                id="zip-code"
                type="number"
                v-model="formData.zipCode"
                data-testid="zip-code"
              />
            </label>

            <!-- When the user clicks the submit button, trigger a form submission -->
            <BaseButton
              color="primary"
              size="medium"
              type="submit"
              class="w-full"
              >Get $10 off</BaseButton
            >
          </fieldset>

          <div class="footer-links">
            <p @click.prevent="onClose">
              <a data-testid="dismiss-text" class="close dismiss-text" href="#"
                >Dismiss</a
              >
            </p>
            <p>
              <a data-testid="terms-link" class="terms" href="#"
                >Terms apply.</a
              >
            </p>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.close {
  cursor: pointer;
}

.x-button {
  position: absolute;
  top: 0;
  right: 0;
  text-decoration: none;
}
</style>

<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: {
    visible: { type: Boolean },
  },
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    onClose() {},
    onSubmit() {
      this.$emit("save", this.formData);
      this.$emit("close");
    },
  },
  components: { BaseButton },
};
</script>

<style scoped>
.overlay {
  background: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
}

/** Input Fields */

input {
  @apply mb-2 mt-1 py-1 px-2 rounded-md border-2 border-true-gray-300 block;
}

/** transform */

/** Full-screen container */
.modal {
  @apply grid absolute place-content-center;
  top: 0;
  left: 0;

  height: 100vh;
  width: 100vw;
}

/** Inner container */
.content {
  @apply bg-white
    relative
    grid
    min-w-250px
    shadow-xl
    mb-80px;

  min-height: 80%;
  height: 100%;
  max-height: 800px;
  max-width: 500px;
  min-width: 400px;
}

/** Title and Subtitle */
.modal-title {
  @apply text-lg font-black pt-1;
}

.modal-subtitle {
  @apply text-sm pb-2 px-2 mb-4;
}

/**
 * Form inputs
 */
fieldset {
  @apply grid text-center gap-1 w-full;
}

label {
  @apply grid relative text-center font-bold text-sm;
}

form {
  @apply text-center grid place-items-center p-4;
}

/** Footer section */
.footer-links {
  @apply grid text-center place-content-center flex-row;
}

.close {
  @apply text-black font-black text-sm;
}

.dismiss-text {
  @apply underline;
}

.terms {
  @apply font-medium text-xs underline;
  color: blue;
}
</style>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

<style scoped>
.header-image {
  @apply min-h-80px;

  background-image: url(https://source.unsplash.com/400x225/?grubhub);
  background-size: cover;
}
</style>

<style>
body {
  @apply bg-gray-100;
}
</style>
