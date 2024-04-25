# Hero Project: Heroes Come to Save Hahow!

#### Demo
[Online Demo](https://hero-project-9efe1.web.app)
Deployed By Firebase Hosting

#### How to Install and Run
1. node: v20.9.0+
2. clone 專案：`git clone https://github.com/zzuhann/hero-project.git`
3. 安裝 `pnpm`(https://pnpm.io/zh-TW/installation): v8.10.5+
4. `pnpm i --frozen-lockfile` 安裝所需套件、產生 node_modules
5. `pnpm dev` 啟動 vite 開發 server
6. 進入 `http://localhost:5173/` 即可進入專案

#### Project Structure
```
├── README.md
├── dist // build 後產生的檔案
├── firebase.json
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.ico
├── src
│   ├── App.tsx
│   ├── apis // api 集中管理
│   │   ├── index.ts
│   │   ├── instance.ts
│   │   └── type.ts
│   ├── assets
│   │   └── 404-not-found.png
│   ├── components // 共用組件
│   │   ├── NotFound
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   └── Skeleton
│   │       └── index.tsx
│   ├── context
│   │   ├── heroesContext.tsx
│   │   ├── index.tsx
│   │   └── stableNavigateContext.tsx
│   ├── features // 有商業邏輯的組件、功能
│   │   └── heroes
│   │       └── components
│   │           ├── HeroList
│   │           │   ├── components
│   │           │   │   └── HeroCard
│   │           │   │       ├── index.tsx
│   │           │   │       └── style.ts
│   │           │   ├── index.tsx
│   │           │   └── style.ts
│   │           └── HeroProfile
│   │               ├── components
│   │               │   └── AbilityCounterList
│   │               │       ├── components
│   │               │       │   └── AbilityCounter
│   │               │       │       ├── index.tsx
│   │               │       │       └── style.ts
│   │               │       ├── index.tsx
│   │               │       └── style.ts
│   │               ├── index.tsx
│   │               ├── style.ts
│   │               └── type.ts
│   ├── hooks // 目前是放 useQuery 相關
│   │   └── index.ts
│   ├── layout
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── main.tsx
│   ├── pages
│   │   └── notFound
│   │       └── index.tsx
│   ├── reset.css
│   ├── routes
│   │   └── index.tsx 
│   ├── utils // 共用的 function
│   │   ├── index.test.ts
│   │   └── index.ts
│   ├── vite-env.d.ts
│   └── vite.setup.ts
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

```

#### Web Structure
1. route 管理
	1. 使用 react router dom 來處理 route
	2. 當使用者進入 `/` 頁面時，會被導向到 `/heroes` 作為初始頁面
	3. 如果進入 `/`、`/heroes`、`/heroes/:id` 以外的 route，會被導向到 404 頁面
2. 資料串接
	1. 透過 `axios` 打 api
	2. 使用 `react query` 進行非同步狀態管理，`GET` 相關的設定 `staleTime` 為 5 分鐘，相同參數五分鐘內不會再次打 api，減少請求
3. 狀態管理
	1. 除了 `react query` 的 useHook 外，針對 `heroProfile` 做了一個 `heroProfileContext` ，減少一層又一層的 props 傳遞，子組件可以直接透過 context 取得當前狀態或是 function 使用
4. 組件
	1. 共用的組件會放在 components 內，目前專案為 Skeleton 及 NotFound
	2. 帶有商業邏輯、由多個組件組成的功能會放在 features 資料夾，把比較針對性的 hook、style 等就放在 features 資料夾中

#### 使用的第三方 library
1. `Mui`
	1. UI framework
	2. 在不需要特別客製化的情況下，可以透過 MUI 的組件作為基礎建設，減少開發基本組件的時間，且也提供 styled component 的用法，習慣 styled component 的話可以更快上手
2. `@tanstack/react-query`
	1. React Query 可以 fetch、mutate api 的資料，透過 useHook 的方式，讓打 api 的邏輯可以複用，也可以設定快取時間，在快取時間內以相同參數 fetch 的話，不會再次觸發請求，會直接拿 cache data，減少請求次數
	2. mutate 資料後，可以設定 invalidateKey，讓有這個 key 的 useQuery 資料失效，重新 fetch 資料，省去後續還要去手動觸發 get 的 api function
3. `axios`
	1. 基於 Promised 的 HTTP 請求工具
	2. 除了做 HTTP 請求之外，也可以針對請求和回應來統一做處理
4. `react-router-dom`
	1. react router 可以實踐 SPA，在前端設定 route，在不刷新頁面的條件下，就能夠切換 route 並且切換相對應的 components。react-router-dom 讓瀏覽器可以使用 API 來達到上述這些事情。
5. `react-hot-toast`
	1. 在 react 專案中可以做到在畫面中進行通知提示，像是資料修改成功、失敗或是 loading 狀態
6. `TypeScript`
	1. 可以宣告型別、進行靜態型別檢查，在開發過程當中可以即時檢查到一些可能的錯誤：例如 state 資料可能是 undefined、null，需要多做一道防護。在使用物件時，使用 method 或是 property 時也會有智慧提示、錯字提示，是讓開發更加安全的工具。
7. `prettier`
	1. 在專案中針對排版進行規範
8. `eslint`
	1. 針對專案中的 coding style 進行規範
	2. 在這個專案中，eslint 主要是針對沒使用的變數、console
9. `vite`
	1. 打包工具
	2. 相較於 Webpack 先將檔案打包轉譯後，啟動 dev server，server 給打包後的結果，Vite 會直接啟動 dev server，跳過打包的部分，根據瀏覽的頁面進行即時編譯，Vite 在專案變大的時候會更加快速
	3. Vite 有 HMR(Hot Module Replacement)，檔案有改動時會即時重新渲染 local 頁面

#### 寫註解的原則
1. 在規格中比較特殊、不易理解的商業邏輯
2. 為了解決某個問題（可能是平常比較少遇到的），而做的解法
	1. 這次針對 `stableNavigateContext.tsx` 有寫註解，因為覺得只是看這段 code 的話，不一定能馬上理解我想做的事，補上註解以及參考的網站，也許能讓看的人理解當初的問題、為什麼我這樣做

#### 在這份專案中你遇到的困難、問題，以及解決的方法
1. useNavigate 的重複渲染
	1. 因為規格有提到 **"Hero Card" 連結會連到單一 Hero 的 "Hero Profile Page"，"Hero List" 依然在相同位置，並且不因切換連結重新 render** ，原本預計是使用 `<Outlet />` 讓 `/heroes` 及 `/heroes/:id` 來共用同個 Layout，在不改變 state 的情況下，也許不會重新 render？
	2. 實作的結果發現切頁後整頁都會 re-render，在研究的過程中發現使用 `useNavigate` 進行切換頁面，是會導致重新 render 的，而過去的 `react-router-dom` v5 的 `useHistory` 沒有這樣的情況（[相關的PR討論](https://github.com/remix-run/react-router/issues/7634)）
	3. 在尋找解法的過程，找到了這篇文章 [Why useNavigate hook in react-router v6 triggers waste re-renders and how to solve it](https://shallowdepth.online/posts/2022/04/why-usenavigate-hook-in-react-router-v6-triggers-waste-re-renders-and-how-to-solve-it/)將 useNavigate 使用 ref 存起來，防止改變
2. 思考這類規模的專案適合怎樣的資料夾結構，以及如果之後擴充的話好不好擴充？參考了一些文章是提到，沒有最推薦的做法，而是因應專案的需求來做調整，因此目前先將架構以 page、features、componets、context、utils、hook、api 等最必要的需求與功能做出來。
3. 如何測試 route 是否導向正確，因為這是我第一次在專案中使用 react testing library，起初有針對 route 相關的邏輯來做測試，包括到 `/` 頁面時是否會被導向到 `/heroes`、以及點擊 heroCard 時是否會被導向到 `/heroes/:id` ，隨著專案比較完整後，反而不知道如何做到上述兩者測試，因應時程關係，目前先將 route 相關測試移除，僅留下針對 function 的單元測試。