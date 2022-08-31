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
      <div role="group">
        <label for="input-live"></label>
          <b-form-input
            id="input-live"
            v-model="email"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="    Email">
            trim
          ></b-form-input>

          <p class="input">Must contain an @ and at least one '.'</p>

      </div>
        
        <div role="group">
        <label for="input-live"></label>
          <b-form-input
            id="input-live"
            v-model="first"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="     Name (first)"
            trim
          ></b-form-input>

          <p class="input">Must contain a minimum of two letters and no numbers</p>
      </div>

      <div role="group">
        <label for="input-live"></label>
          <b-form-input
            id="input-live"
            v-model="last"
            :state="nameState"
            aria-describedby="input-live-help input-live-feedback"
            placeholder="     Name (last)"
            trim
          ></b-form-input>

          <p class="input">Must contain a minimum of two letters and no numbers</p>
      </div>      

    </form>

    <p>What Features and Functions would you like to recieve up dates on?</p>
  
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
      <div>
        <b-button class="signup" v-b-modal.modal-1>Sign up</b-button>
        <b-modal id="modal-1" content-class="alertBackground" title="Thank you for signing up!">
          <p class="my-4">A confirmation email has been sent to your inbox to confirm</p>
          <p>We do not send spam. All newsletters can be easily unsubscribed via the email.</p>
        </b-modal>
      </div>
    </form>
    <p>We do not send spam. All newsletters can be easily unsubscribed via the email</p>
    </div>
    <footer>
        The Robot Butler
        <img class="robot-icon" src="../assets/robot-icon.png" alt="robot icon">
      </footer>
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
        return this.email.length > 1 ? true : false
      }
    },
    data() {
      return {
        email: '',
        first: '',
        last: ''
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

.form-control {
  height: 60px;
  width: 320px;
  padding: 10px 0 10px 0;
  margin: 15px 0 0 20px;
  border-radius: 24px;
  border: none;
  background-color: #5d68d1;
}

.ALL {
  background-color: #c3cadd;
}

.modal-content {
  background-color: black;
  color: white;
}

div.container {
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

div.checkboxes {
  display: inline;
  text-align: center;
}

div label.form-check-label {
  font-family: "Iceland-Regular";
}

.robot {
  max-width: 300px;
  display: block;
  padding: 0;
  margin: 0;
}

input[type='checkbox'] {
  display: block;
  margin: 0 0 0 70px;
}

p.input {
  font-size: small;
  text-align: center;
  margin: 0;
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
  margin: 20px 10px 10px 100px;
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
