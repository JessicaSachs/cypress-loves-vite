<template>
  <button :class="classes">
    <slot />
  </button>
</template>

<script>
const types = {
  warning: "warning",
  primary: "primary",
  danger: "danger",
  success: "success",
};
export default {
  props: {
    size: { type: String, default: "medium" },
    outline: { type: Boolean, default: false },
    branded: { type: Boolean, default: false },
    color: { type: String, default: "primary" },
    rounded: { type: Boolean, default: false },
  },
  computed: {
    classes() {
      const classes = [types[this.color]];
      classes.push(this.outline ? "outline" : "");
      classes.push(this.rounded ? "rounded" : "");
      classes.push(this.size);
      return classes;
    },
  },
};
</script>

<style scoped>
button {
  @apply p-4 font-regular text-lg flex;
  max-height: 40px;
  align-items: center;
  place-content: center;
}

.primary {
  @apply bg-blue-600;
}

.success {
  @apply bg-emerald-600;
}

.warning {
  @apply bg-amber-500;
}

.danger {
  @apply bg-rose-500;
}

.large {
  @apply p-8;
}

.outline {
  @apply bg-white border-blue-600 text-black;
  border-width: 1px;
  border-style: solid;
}

.outline.success {
  @apply border-emerald-600;
}

.outline.danger {
  @apply border-rose-500;
}

.outline.warning {
  @apply border-amber-500;
}

.rounded {
  border-radius: 40px;
}

.small {
  @apply text-sm;
  max-width: 100px;
  height: 30px;
}
</style>