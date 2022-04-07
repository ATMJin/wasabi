<template>
  <div class="another">
    <h1>This is an another page</h1>
    <h2>Display fake json API</h2>
    <table>
      <tr>
        <th>Name</th>
        <th>City</th>
      </tr>
      <!-- 用取得的資料輸出成表格 -->
      <tr v-for="data in fakeData" :key="data.name">
        <td>{{ data.name }}</td>
        <td>{{ data.city }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "AnotherPage",
  data() {
    return {
      // 宣告API資料要放置的變數
      fakeData: null,
    };
  },
  methods: {
    // 取得API資料
    getData() {
      fetch("https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8")
        .then((res) => res.json()) // 轉換成json格式
        .then((data) => (this.fakeData = data)) // 取代變數
        .catch((err) => console.log(err)); // 錯誤時輸出錯誤訊息
    },
  },
  created() {
    this.getData();
  },
};
</script>

<style scoped lang="scss">
// 表格的樣式
table {
  border: 1px solid #000;
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  * {
    border: 1px solid #000;
    padding: 10px;
  }
}
</style>