<template>
<div class="background">
  <form>
    <h1 class="title">Create account</h1>
    <span class="helper">Already have account?
      <a class="underline text-light-blue-900" href="#">Sign in</a>
    </span>
    <div class="w-full mt-6">
      <div class="w-full">
        <input type="text" id="username" name="username" placeholder="Username"/>
      </div>
      <div class="w-full mt-4">
        <input type="text" id="email" name="email" placeholder="Email"/>
      </div>
      <div class="w-full mt-4 flex justify-between">
        <input type="text" class="bg-gray-100 w-6/12 py-2.5 px-4 rounded-l-lg border-r-2 border-white focus:shadow focus:bg-white focus:outline-none" id="password" name="password" placeholder="Password"/>
        <input type="text" class="bg-gray-100 w-6/12 py-2.5 px-4 rounded-r-lg border-l-2 border-white focus:shadow focus:bg-white focus:outline-none" id="confirmpassword" name="confirmpassword" placeholder="Confirm password"/>
      </div>
      <div class="w-full mt-4">
        <button id="signup" class="w-full font-normal text-xl text-white bg-purple-400 py-2.5 rounded-lg">Sign up</button>
      </div>
      <div class="w-full mt-5">
        <label class="inline-flex items-center font-medium">
           <input type="checkbox" class="h-5 w-5"><span class="ml-2 text-gray-500">I have read and agree to the</span><span class="text-purple-500">&nbsp;Term of Service</span>
            </label>
      </div>
    </div> 
  </form>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
.background {
  @apply w-screen h-screen;
  @apply bg-gradient-to-bl from-blue-gray-900 via-blue-gray-800 to-emerald-800;
  @apply flex justify-item-center;
  min-width: 450px;
}

form {
  @apply w-1\/4 w-200 max-w-100 m-auto h-auto rounded-lg;
  @apply bg-white;
  @apply py-8 px-7;
}

.half-width {

}

input {
  @apply py-2.5 px-4  bg-gray-100 focus:shadow focus:bg-white focus:outline-none;
  @apply border-white focus:shadow focus:bg-white focus:outline-none;
}

.title {
  @apply text-4xl font-bold text-gray-600 text-center
}

.helper {
  @apply mt-3 text-center text-base font-medium text-gray-500 block;
}

input[name=email], input[name=username] {
  @apply w-full;
  @apply rounded-lg;
}

input[name=password], input[name=confirmpassword] {
  @apply w-1/2;
}
</style>