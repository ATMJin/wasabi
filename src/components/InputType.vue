<template>
  <div class="inputType">
    <form>
      <!-- input type="text" -->
      <label>Name: <input type="text" v-model="selected" /></label>
      <br />

      <!-- input type="radio" -->
      <label
        ><input
          type="radio"
          name="sex"
          value="Male"
          v-model="selected"
        />Male</label
      >
      <label
        ><input
          type="radio"
          name="sex"
          value="Female"
          v-model="selected"
        />Female</label
      >
      <br />

      <!-- select -->
      <label>
        Location:
        <select name="" id="" v-model="selected">
          <option
            v-for="location in locations"
            :key="location"
            :value="location"
          >
            {{ location }}
          </option>
        </select>
      </label>
    </form>

    <!-- 輸出 -->
    <h2>{{ result }}</h2>
  </div>
</template>

<script>
export default {
  name: "InputType",
  data() {
    return {
      locations: ["Taipei", "New Taipei", "Keelung", "Taoyuan", "Hsinchu"],
      selected: "",
    };
  },
  computed: {
    result() {
      return this.selected;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
label {
  display: inline-block;
  margin: 5px 0;
}
</style>
