<template>
  <div class="card">
    <div id="bookmark">
      <img 
        id="bookmark-img"
        src="https://i.pinimg.com/originals/ca/44/77/ca4477c4eeff8d0ac211fa114be21e6c.png"
      >
    </div>

    <img 
      id="image"
      src="https://res.cloudinary.com/grubhub/image/upload/d_search:browse-images:default.jpg/w_271,h_132,f_auto,q_auto,dpr_auto,g_auto,c_fill/yre8t3aa0fhgv8rhrjof"
    />

    <div class="card-content">
      <h1 data-cy="restaurant">{{ restaurant }}</h1>

      <div>
        <span class="badge">GH+</span><span data-cy="genre">{{ genre }}</span>
      </div>

      <div class="info">
        <span class="status" data-cy="status">
          <p :class="{ unavailable: !isAvailable }">
            {{ availability }}
          </p>
        </span>
        <span>
          <span 
            v-for="i in stars" 
            :key="i"
            data-cy="stars"
            class="star"
          >
            ⭐
          </span>
        ️️</span>
      </div>
    </div>
  </div>
</template>

<script>
const requiredString = {
  type: String,
  required: true
}

const requiredBoolean = {
  type: Boolean,
  required: true
}

export default {
  props: {
    restaurant: requiredString,
    genre: requiredString,
    availability: requiredString,
    isAvailable: requiredBoolean,
    stars: {
      type: Number,
      default: 0
    }
  }
}
</script>


<style scoped>
.card {
  position: relative;
  box-shadow: 0 0 0 1px rgb(67 41 163 / 8%), 0 1px 5px 0 rgb(67 41 163 / 8%);
  width: 400px;
  text-align: left;
}

.card:hover {
  cursor: pointer;
  box-shadow: 0 0 0 1px lightgray, 0 1px 5px 0 lightgray;
  transition: 0.25s;
}

#bookmark {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  background: white;
  box-shadow: 0 0 0 1px rgb(67 41 163 / 8%), 0 1px 5px 0 rgb(67 41 163 / 8%);
}

#bookmark-img {
  margin: 3px 0 0 0;
  padding: 4px;
  height: 40px;
  width: 50px;
}

.info {
  margin: 10px 0 0 0;
  display: flex;
  justify-content: space-between;
}

.unavailable {
  color: #fb6100;
}

.badge {
  background: #fbcf42;
  padding: 1px 3px;
  margin-right: 10px;
}

.card-content {
  padding: 20px;
  height: 100%;
}

.status {
  max-width: 70%;
}
.star {
  margin: 0 2px;
}

img {
  width: 100%;
}

h1 {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>