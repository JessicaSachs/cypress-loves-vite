<template>
  <div class="p-4 gap-2">
    <h3 class="text-2xl">Button Playground</h3>
    <section class="">
      <div class="flex flex-row items-end gap-4">
        <BaseButton>Primary</BaseButton>
        <BaseButton v-for="size in sizes" :size="size" :key="size" outline>{{
          size
        }}</BaseButton>
      </div>
      <div class="flex flex-row items-end gap-4">
        <BaseButton v-for="color in colors" :color="color" :key="color">{{
          color
        }}</BaseButton>
      </div>
      <div class="flex flex-row items-end gap-4">
        <BaseButton
          v-for="color in colors"
          :color="color"
          :key="color"
          outline
          >{{ color }}</BaseButton
        >
      </div>

      <div class="flex flex-row items-end gap-4">
        <BaseButton
          v-for="color in colors"
          :color="color"
          :outline="true"
          :rounded="true"
          :key="color"
          >{{ color }}</BaseButton
        >
      </div>
    </section>
  </div>
  <hr class="my-8" />
  <div class="flex align-middle justify-evenly">
    <div>
      <BaseButton
        :color="config.color"
        :size="config.size"
        :outline="config.outline"
        :rounded="config.rounded"
        >Playground</BaseButton
      >
    </div>
    <form class="block">
      <label>
        Type:
        <select v-model="config.color">
          <option v-for="color in colors" :key="color" :value="color">
            {{ color }}
          </option>
        </select>
      </label>

      <label>
        Size:
        <select v-model="config.size">
          <option v-for="size in sizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </label>

      <label>
        Outline:
        <input type="checkbox" v-model="config.outline" />
      </label>

      <label>
        Rounded:
        <input type="checkbox" v-model="config.rounded" />
      </label>
    </form>
  </div>
</template>

<script>
import BaseButton from "./BaseButton.vue";

const colors = ["primary", "success", "warning", "danger"];
const sizes = ["small", "medium", "large"];

export default {
  components: { BaseButton },
  data() {
    return {
      config: {
        color: colors[0],
        outline: false,
        size: "large",
      },
    };
  },
  computed: {
    colors() {
      return colors;
    },
    sizes() {
      return sizes;
    },
  },
};
</script>

<style scoped>
label {
  @apply m-4 block align-middle justify-center;
}

select {
  @apply p-2;
  border: 1px solid #eaeaea;
  text-transform: capitalize;
}

input {
  width: 20px;
  height: 20px;
}

p {
  text-align: left;
}

button {
  text-transform: capitalize;
}
</style>