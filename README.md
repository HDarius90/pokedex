# 🚪 React Props: Pokedex

This project is an exercise to practice using **React components** and **props** by building a simple Pokémon application — a “Pokedex.”


---

## 📦 Project Structure

You will create three React components:

### 1. `App`

* The root component.
* Renders a single `Pokedex` component.

> ✅ Convention: Top-level apps usually just act as containers for rendering other components.

---

### 2. `Pokecard`

* Displays a single Pokémon card.
* Shows the **name**, **type**, **base experience**, and **image** of a Pokémon.

### 3. `Pokedex`

* Accepts a list of Pokémon via **props**.
* Renders a collection of `Pokecard` components.
* Use `defaultProps` to provide a default list of Pokémon (see below).

---

## 🔢 Default Pokémon Data

Use the following array for default Pokémon if none is passed via props:

```js
[
  { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
  { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
  { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
  { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
  { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
  { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
  { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
  { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
]
```

---

## 🖼 Image Sources

* **Basic sprite image:**
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

* **Fancier high-res image:**
  `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${id}.png`

  > ⚠️ Note: IDs must be zero-padded to 3 digits (e.g., `004`, `025`, `133`).
  > Create a utility function to format the ID accordingly.

---

## 🎮 Bonus: Pokegame Component

Create a new component called `Pokegame` and update `App` to render it.

### Functionality:

* Split the 8 Pokémon into **two random hands** of 4 Pokémon each.
* Render **two `Pokedex`** components — one per hand.
* Calculate the **total experience** of each hand and pass it as a prop.
* Determine the **winner** (the hand with higher total experience).
* Pass a boolean prop `isWinner` to each `Pokedex`.
* If a `Pokedex` is the winner, display:
  **“THIS HAND WINS!”**

> 🔀 Each page load should result in a different winner due to random hand assignment.

---

## 🎨 Styling Ideas

* Style the Pokédex and Pokécards with CSS.
* Add:

  * Hover effects
  * Entrance animations
  * Dynamic backgrounds or borders based on type
* Use `transition`, `transform`, or libraries like `Framer Motion` for animations.

---

## 🚀 Summary

This project is ideal for practicing:

* Component composition
* Props and defaultProps
* Conditional rendering
* State management
* Styling and animations
