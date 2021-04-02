import { atom } from "recoil"

const categoryAtom = atom({
  key: "categoryAtom",
  default: "",
})

const choiceAtom = atom({
  key: "choiceAtom",
  default: {
    one: 0,
    two: 0,
    three: 0,
  },
})

export { categoryAtom, choiceAtom }
