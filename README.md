# wasabi

## 沿用性與維護性

### 沿用性

我目前為止沒經驗過大型專案，因此不清楚對程式的沿用性有什麼要求。
但我的想法是提高 function、component、甚至是 module 的獨立性，變成像類似樂高一樣的積木，當有需要時直接尋找合適的組合在一起就好了。
彼此間如果有很高的相依性的話就包在一起，不用特地拆分。

### 維護性

我對如何提高程式維護性的想法首重程式內的各種註解，讓他人或以後的自己能理解寫這段程式碼的想法及目的。
譬如 vue 的撰寫會分割成 script 內的 JS 跟 template 內的 HTML，只看一邊會很難理解整個流程，如果有註釋說明該如何互相搭配的話會增加理解速度以至於提高維護性。
其次是變數集中在一處改變。譬如若很常需要使用某個 html element ，如果每次都寫一次`document.querySelector()`，那後續要再更改時就必須要把每個都找出來。如果先宣告變數`let element = document.querySelector()`，只要改寫宣告的地方就好了。

## 指定目標

1. [x] 用 Vue Cli 或 Nuxt 完成以下功能
    > 使用 vue-cli
2. [x] 以 scss 撰寫內容樣式
    > 因為沒對外觀多做設計，所以運用到的 scss 不多
    > 在 App.vue 有使用到基本的巢狀寫法及使用變數
3. [x] 應用 component 功能
    > vue-cli 就是由 component 組合成
4. [ ] 應用 computed 功能
    > Vue 的 computed 用在變數改變後經由函式 return 的值，類似 method，主要差異在是否有相關變數改變後再執行。
    > 因為在此測驗中不理解第 5 點的意思，所以沒真正活用 computed
5. [ ] 製作 輸入類型 text, radio, select 、同一 component 切換 prop 來改變對應的輸入類型，並可套用 v-model
    > 不理解"切換 prop 來改變對應的輸入類型"的意思，也不理解使用 v-model 的目的。
    > 因為 v-model 的使用場景是雙向綁定。如使用者在 input text 輸入值後會同步改變綁定的變數值，若變數值在其他地方被改變，input text 內的值也會同步被改變。
    > 因此我最後只有建立三種輸入類型後用 v-model 綁定變數並在最後做輸出。
6. [x] 可切換頁面
    > 使用 vue-router 切換頁面
7. [x] 設定頁面 title, description
    > 切換頁面時改寫頁面 title 及 description
8. [ ] 設定 Global 參數、讓頁面的顏色、主題會隨著更換
    > 不清楚實際的要求及 Global 參數的意思。
    > 但我的理解是 component 在建好後可能會在不同的專案中被使用，為了配合不同專案會有不同的風格及主題設計，使用全域變數傳入 component 使用就可以快速的改變 CSS 樣式。
    > 因此我寫了額外的外部 scss 檔，並在裡面設定一個 wasabi 色，然後在 component 引入這隻 scss 檔，這樣就可以配合需要改變顏色了。
9. [x] 串接一組列表資料 api (https://mocki.io/fake-json-api)
    > 在 AnotherPage 頁串接資料後以表格顯示
10. [x] 程式架構做到最大的沿用性、維護性，並於 Readme 說明你的想法
    > [https://github.com/ATMJin/wasabi/blob/main/README.md](https://github.com/ATMJin/wasabi/blob/main/README.md)
11. [x] 使用 Firebase Hosting，提供連結給我們進行瀏覽
    > [https://wasabi-48c91.firebaseapp.com/](https://wasabi-48c91.firebaseapp.com/)
12. [x] 提供 Github 程式碼
    > [https://github.com/ATMJin/wasabi](https://github.com/ATMJin/wasabi)

---

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
