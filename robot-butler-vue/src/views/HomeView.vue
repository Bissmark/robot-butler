<template>
  <div class="ALL">
  <div class="container">
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
    
    <form>
      <div>
        <input type="text" placeholder="Name (first)">
        <p class="input">Must contain a minimum of two letters and no numbers</p>
      </div>
      <div>
        <input type="text" placeholder="Name (last)">
        <p class="input">Must contain a minimum of two letters and no numbers</p>
      </div>
      <div>
        <input type="email" placeholder="Email">
        <p class="input">Must contain an @ and at least one '.'</p>
      </div> 
      <!-- <div role="group">
      <label for="input-live">Name:</label>
    <b-form-input
      id="input-live"
      v-model="name"
      :state="nameState"
      aria-describedby="input-live-help input-live-feedback"
      placeholder="Enter your name"
      trim
    ></b-form-input>

    <b-form-invalid-feedback id="input-live-feedback">
      Enter at least 3 letters
    </b-form-invalid-feedback>

    <b-form-text id="input-live-help">Your full name.</b-form-text>
  </div> -->
    </form>

    <p>What Featues and Functions would you like to recieve up dates on?</p>
  
    <form>
      <div class="checkboxes"> 
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
      </div>
      <button class="signup">Sign up</button>
    </form>
    <p>We do not send spam. All newsletters can be easily unsubscribed via the email</p>

      <footer>
        The Robot Butler
        <img class="robot-icon" src="../assets/robot-icon.png" alt="robot icon">
      </footer>
    </div>
</div>
</template>

<script>
import { LazyYoutube } from "vue-lazytube";

export default {
    name: 'YourComponent',
    components: {
        LazyYoutube
    },
    computed: {
      nameState() {
        return this.name.length > 2 ? true : false
      }
    },
    data() {
      return {
        name: ''
      }
    }
  
}
</script>

<style scoped>
@font-face {
  font-family: "Iceland-Regular";
  src: local("Iceland-Regular"),
  url(../fonts/Iceland-Regular.ttf) format("truetype")
}

.ALL {
  background-color: #c3cadd;
}

container {
  margin: 10px;
  max-width: 960px;
}

h1 {
  font-family: "Iceland-Regular";
  font-size: 44px;
}

p {
  font-family: "Iceland-Regular";
  font-size: 20px;
  line-height: 1;
  margin: 20px;
}

.title {
  display: block;
  margin: 0;
}

.title h1.the {
  margin: 0;
  padding: 0 0 0 10px;
}

.title h1.butler {
  margin: 0 40px;
  padding: 0 0 0 10px;
}

.robot {
  max-width: 400px;
  display: block;
  padding: 0;
  margin: 0;
}

input[type='checkbox'] {
  align-content: aqua;
}

input {
  width: 400px;
  padding: 10px 0 10px 0;
  margin: 0 0 0 20px;
  box-sizing: border-box;
  border-radius: 24px;
  border: none;
  background-color:rgb(104, 43, 226);
  color: white;
}

p.input {
  font-size: small;
  text-align: center;
}

::placeholder {
  color: white;
  padding: 20px;
}

button {
  background-color: #000000;
  color: white;
  border: none;
  height: 40px;
  width: 150px;
  line-height: 10px;
  border-radius: 16px;
  font-family: "Iceland-Regular";
  font-size: 30px;
  margin: 30px 150px;
  padding: 0 0 5px 0;
}

footer {
  font-family: "Iceland-Regular";
  font-size: 20px;
  text-align: center;
  background-color: #000000;
  color: white;
  padding: 10px;
}

footer img.robot-icon {
  height: 90px;
}
</style>
