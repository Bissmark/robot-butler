<template>
  <div>
    <div class="title">
      <h1 class="the">The</h1>
      <h1 class="butler">Robot Butler</h1>  
    </div>
    
    <img class="robot" alt="robot" src="../assets/robot.jpeg">
    <p>Check out the latest skills of the Robot Butler!</p>
    <LazyYoutube
      ref="lazyVideo"
      src="https://www.youtube.com/watch?v=8LJOa0RQZBk&ab_channel=CNET"
    />
    <p>To keep up to date with the new robot Features and Functions sign up to our news letter.</p>
    
    <p>What Featues and Functions would you like to recieve up dates on?</p>
  
    <form>
      <div>
        <input type="checkbox" id="accept" class="form-check-input">
        <label class="form-check-label" for="accept">Personalization</label>
      </div>
      <div>
        <input type="checkbox" id="accept" class="form-check-input">
        <label class="form-check-label" for="accept">Skills cooking, cleaning etc</label>
      </div>
      <div>
        <input type="checkbox" id="accept" class="form-check-input">
        <label class="form-check-label" for="accept">Robot upgrades</label>
      </div>
      <div>
        <input type="checkbox" id="accept" class="form-check-input">
        <label class="form-check-label" for="accept">Other services and products</label>
      </div>
      <button class="signup">Sign up</button>
    </form>
    <p>We do not send spam. All newsletters can be easily unsubscribed via the email</p>

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

<style scoped>
@font-face {
  font-family: "Iceland-Regular";
  src: local("Iceland-Regular"),
  url(../fonts/Iceland-Regular.ttf) format("truetype")
}

h1 {
  font-family: "Iceland-Regular";
  font-size: 44px;
}

p {
  font-family: "Iceland-Regular";
  font-size: 20px;
}

.title {
  display: block;
  margin: 0;
}

.title h1.the {
  margin: 0;
}

.title h1.butler {
  margin: 10px 40px;
}

.robot {
  max-width: 600px;
  display: block;
  padding: 0;
  margin: 0;
}
</style>
