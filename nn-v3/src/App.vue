<template>
  <h1>{{ title }}</h1>
  <p></p>
  <input type="text" ref="name" />
  <button @click="handleClick">Click Me</button>
  <teleport to=".modals" v-if="showModal">
    <Modal :theme="theme" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign up</a>
        <a href="#">More info</a>
      </template>
      <h1>{{ modalHeader }}</h1>
      <p>{{ modalContent }}</p>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h2>This is my second Modal</h2>
      <p>
        The tricky part is making sure you assign different attributes and
        manipulate them in a way that is independent from the previous modal.
      </p>
      <template v-slot:links>
        <a href="#">More About Components</a>
        <a href="vuejs.org">Vue Docs</a>
      </template>
    </Modal>
  </teleport>
  <p>Welcome...</p>
  <button @click.alt="toggleModal">Open Modal (hold alt key)</button>
  <p>Let's try another one...</p>
  <button @click="toggleModalTwo">Open Challenge Modal</button>
</template>

<script>
import Modal from "./components/Modal";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My First Vue3 App",
      modalHeader: "Sign up for Giveaway",
      modalContent: "Get some ninja swag",
      theme: "sale",
      showModal: false,
      showModalTwo: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    },
  },
};
</script>

<style>
#app {
  font-family: "Raleway", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
