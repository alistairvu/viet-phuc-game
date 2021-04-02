import ListGroup from "react-bootstrap/ListGroup"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import { categoryAtom } from "../recoil/gameAtom"
import { useRecoilState } from "recoil"
import { CATEGORY_LIST } from "../constants"

const AppCategoryPicker: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [category, setCategory] = useRecoilState(categoryAtom)

  return (
    <>
      <Button
        className="d-lg-none d-block w-100"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? "Hide Categories" : "Show Categories"}
      </Button>
      <ListGroup
        className={`d-lg-block ${isOpen ? "d-block" : "d-none"} mt-lg-0 mt-2 `}
      >
        {/* <ListGroup.Item action>Category 1</ListGroup.Item>
        <ListGroup.Item action>Category 2</ListGroup.Item>
        <ListGroup.Item action>Category 3</ListGroup.Item> */}
        {CATEGORY_LIST.map((item) => (
          <ListGroup.Item
            action
            active={item === category}
            onClick={() => setCategory(item)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  )
}

export default AppCategoryPicker
