<template>
    <div>
      <h1>Welcome to our Dashboard Page</h1>
      <button @click.prevent="signOut">Sign out</button>
      <p>Welcome: {{ userEmail }}</p>
    </div>
</template>