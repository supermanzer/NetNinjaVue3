<template>
  <form @submit.prevent="handleSubmit">
    <label>Email: </label>
    <input type="email" required v-model="form.email" />
    <label>Password: </label>
    <input type="password" required v-model="form.password" />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="form.role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills (press Alt+Enter to add Skill)</label>
    <input type="text" v-model="tempSkill" @keyup.alt="addSkill" />
    <div class="skillHolder">
      <div v-for="skill in form.skills" :key="skill" class="pill">
        {{ skill }} <span class="dismiss" @click="dismiss(skill)"> X </span>
      </div>
    </div>

    <div class="terms">
      <input type="checkbox" required v-model="form.terms" />
      <label>Accept Terms and Conditions</label>
    </div>
    <div class="submit">
      <hr />
      <button type="submit">Create an Account</button>
    </div>
    <!--
    <div>
      <input type="checkbox" value="Ryan" v-model="names" />
      <label>Ryan</label>
    </div>
    <div>
      <input type="checkbox" value="Yoshi" v-model="names" />
      <label>Yoshi</label>
    </div>
    <div>
      <input type="checkbox" value="Zelda" v-model="names" />
      <label>Zelda</label>
    </div> -->
  </form>
  <div class="callout">
    <p>Email: {{ form.email }}</p>
    <p>Password: {{ form.password }}</p>
    <p>Role: {{ form.role }}</p>
    <p>Terms accepted: {{ form.terms }}</p>
    <!-- <p>Names: {{ names }}</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "me@stuff.things",
        password: "",
        role: "",
        terms: false,
        skills: [],
        //   names: [],
      },
      tempSkill: "",
      passwordError: "",
    };
  },
  methods: {
    addSkill(e) {
      if (e.key === "Enter" && this.tempSkill) {
        if (!this.form.skills.includes(this.tempSkill)) {
          this.form.skills.push(this.tempSkill);
        }
        this.tempSkill = "";
      }
    },
    dismiss(skill) {
      const index = this.form.skills.indexOf(skill);
      if (index > -1) {
        this.form.skills.splice(index, 1);
      }
    },
    handleSubmit() {
      // validate password
      this.passwordError =
        this.form.password.length > 6
          ? ""
          : "Password must be at least 6 characters";

      if (!this.passwordError) {
        console.log(this.form);
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: 30px auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
div.callout {
  max-width: 420px;
  background: #919b9e;
  margin: 30px auto;
  color: white;
  padding: 3em 1em;
  border-radius: 10px;
  font-size: 18px;
  letter-spacing: 1.4px;
}
div.skillHolder {
  margin-top: 15px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  background: #ddd;
  color: #555;
  letter-spacing: 1px;
  text-transform: lowercase;
}
.dismiss {
  margin-left: 5px;
  text-align: center;
}
.dismiss:hover {
  background: #555;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>