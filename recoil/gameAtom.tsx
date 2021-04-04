import { atom, selector } from "recoil"

const categoryAtom = atom({
  key: "categoryAtom",
  default: "",
})

const choiceAtom = atom({
  key: "choiceAtom",
  default: {
    hat: 0,
    body: 0,
    shoes: 0,
  },
})

const choiceSelector = selector({
  key: "choiceSelector",
  get: ({ get }) => {
    const { hat, body, shoes } = get(choiceAtom)
    return `/images/hat-${hat}-body-${body}-shoes-${shoes}.png`
  },
})

export { categoryAtom, choiceAtom, choiceSelector }
