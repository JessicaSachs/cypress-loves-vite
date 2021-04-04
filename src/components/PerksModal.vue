<template>
  <!-- fade in -->
  <transition name="fade">
  <div :class="['modal', 'fade', visible && 'visible']" key="modal">
    <div class="content"  v-if="visible" key="modal">
      <div class="header-image" />

      <!-- This form should not trigger a full-page refresh! -->
      <form @submit.prevent="$emit('submit', formData)"> 
        <p class="modal-title"> A $10 off Perk for your first order </p>
        <p class="modal-subtitle"> Get <b>$10 off</b> your first order of $15+. Now, that's tasty! </p>
        <fieldset>
          <label for="email">
            Email address
            <input id="email" type="email" v-model="formData.email" data-testid="email" />
          </label>

          <label for="zip-code">
            ZIP Code
            <input id="zip-code" type="number" v-model="formData.zipCode" data-testid="zip-code" />
          </label>

          <!-- When the user clicks the submit button, trigger a form submission -->
          <button @click="jiggle" type="submit">Get $10 off</button>
        </fieldset>

        <div class="footer-links">
          <p><a data-testid="dismiss-text" class="close" href="#">Dismiss</a></p>
          <p><a data-testid="terms-link" class="terms" href="#">Terms apply.</a></p>
        </div>
      </form>
    </div>
    <div class="overlay" key="overlay"></div>
  </div>
  </transition>
</template>

<script>
export default {
  props: { visible: { type: Boolean } },
  data() {
    return {
      formData: {},
    };
  },
};
</script>

<style scoped>
/** transform */

/** Full-screen container */
.modal {
  @apply grid
  relative
  place-content-center;

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

/** Submit button */
button[type="submit"] {
  @apply bg-blue-600 rounded-sm font-black text-white p-3 w-full mt-2;
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

input {
  @apply mb-2 mt-1 py-1 px-2 rounded-md border-2 border-true-gray-300 block;
}

form {
  @apply text-center grid place-items-center p-4;
}

/** Footer section */
.footer-links {
  @apply grid text-center place-content-center flex-row;
}

.close {
  @apply text-black font-black text-sm underline;
}

.terms {
  @apply font-medium text-xs underline;
  color: blue;
}
</style>



<style scoped>
.fade {
  transition:all 0.3s ease;
  opacity:0.5;
}
.fade.visible {
  opacity:1;
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
