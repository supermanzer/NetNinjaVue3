<template>
  <div class="not-found">
    <h2>404: Page Not Found</h2>
    <hr />
    <p>
      The route you are looking for could not be found. Please check your URL or
      return to the
    </p>
    <br />
    <router-link :to="{ name: 'Home' }">Home Page</router-link>
  </div>
</template>


<style scoped>
div.not-found {
  padding: 4em;
  max-width: 640px;
  margin: 40px auto;
  border-radius: 10px;
  background-color: #8bc3f7;
  color: #0d507e;
  letter-spacing: 1.5px;
}
a {
  text-decoration: none;
  border: solid 1px white;
  color: white;
  border-radius: 25px;
  margin: 40px 10px;
  padding: 1em;
}
a:hover {
  background: white;
  color: #040f88;
}
hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}
</style>