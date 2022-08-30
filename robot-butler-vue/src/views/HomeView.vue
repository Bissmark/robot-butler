<template>
  <div>
    <h1>The Robot Butler</h1>
    <img class="robot" alt="robot" src="../assets/robot.jpeg">
    <LazyYoutube
      ref="lazyVideo"
      src="https://www.youtube.com/watch?v=8LJOa0RQZBk&ab_channel=CNET"
    />
  </div>
</template>

<script>
import { LazyYoutube } from "vue-lazytube";

export default {
    name: 'YourComponent',
    components: {
        LazyYoutube
    },
}
</script>

<style>
.robot {
  max-width: 400px;
}
</style>
