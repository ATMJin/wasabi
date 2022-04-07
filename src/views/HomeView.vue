<template>
  <div class="home">
    <InputType />
  </div>
</template>

<script>
// @ is an alias to /src
// 引入InputType組件
import InputType from "@/components/InputType.vue";

export default {
  name: "HomeView",
  components: {
    InputType,
  },
};
</script>
