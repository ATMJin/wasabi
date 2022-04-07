<template>
  <div id="app">
    <!-- 切換分頁 -->
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/another">Another Page</router-link>
    </nav>

    <!-- 不同分頁的組件內容 -->
    <router-view />

    <p class="github">
      Github:
      <a href="https://github.com/ATMJin/wasabi"
        >https://github.com/ATMJin/wasabi</a
      >
    </p>
  </div>
</template>

<style lang="scss">
// 引入外部scss檔
@import "./assets/scss/style.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
      // 使用外部變數改寫組件樣式
      color: $hyperlink;
    }
  }
}
.github {
  position: relative;
  bottom: -100px;
}
</style>
