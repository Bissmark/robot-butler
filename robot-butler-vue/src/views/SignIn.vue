<template>
    <div>
        <h1>SignUp Page</h1>
        <form @submit.prevent="signUp">
          <input
            class="inputField"
            type="email"
            placeholder="Your email"
            v-model="form.email"
          />
          <input
            class="inputField"
            type="password"
            placeholder="Your Password"
            v-model="form.password"
          />
          <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? 
        <router-link to="/sign-in">Log in</router-link>
      </p>
    </div>
</template>

<script>

</script>

<style>
    
</style>