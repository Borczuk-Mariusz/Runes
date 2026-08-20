# How to Start the Ancient Runes Project

This guide provides step-by-step instructions to run this Vite + React + TypeScript project, along with explanations of the errors you encountered.

---

##  Step-by-Step Instructions

### Step 1: Navigate to the Root Directory
Make sure you are in the main project folder where `package.json` resides:
```bash
cd /Volumes/TB_ALLL/code/React/Runes/Runes/Runes
```
*Note: Do not run npm commands inside the `src/` folder.*

### Step 2: Install Project Dependencies
Dependencies must be installed first so local tools like `vite` are available.

```bash
npm install
```

### Step 3: Run the Development Server

```bash
npm run dev
```

Once executed, Vite will output a local server address (e.g., `http://localhost:2418`). Open that link in your web browser.

---

## Explanation of Errors Encountered

1. **`sh: vite: command not found`**
   - **Why it happened:** `npm install` was not run yet, so the `vite` executable wasn't installed into `./node_modules/.bin/`.
   - **Solution:** Run `npm install` first.

2. **`npm error Missing script: "start"`**
   - **Why it happened:** Vite projects define `"dev"` in `package.json` rather than `"start"`.
   - **Solution:** Use `npm run dev`.

3. **Running `npm` commands inside `src/` directory**
   - **Why it happened:** Navigating into `src` via `cd src` moves you away from `package.json`.
   - **Solution:** Always run `npm` commands from the project root directory.

---
Secret message encoded in the rune dial:
 ```bash
 　　　　　　　　　　ᚠ　 ᛃ　ᚲ
　　　　　　　　　　ᛞ　ᚺ　ᛜ
　　　　　　　　　　ᛗ　ᚨ　ᛇ
```


```bash
Fehu - Wealth, cattle, money
Jera - Year, harvest, cycle
Kenaz - Torch, knowledge

Dagaz - Daybreak, awakening
Hagalaz - Hail, destruction
Ingwaz - Ing, fertility

Mannaz - Mankind, community, society
Ansuz - Communication, wisdom, message
Eihwaz - Yew tree, death, transformation
```

message all together meaning:
```bash
Gold fields turn shrivel,
Dawn shatters the peaceful dream,
Elder wisdom withers.
```
Solve this puzzle to get the secret message!