import ListGroup from "react-bootstrap/ListGroup"
import { CATEGORY_LENGTH, CATEGORY_LIST } from "../constants"
import { categoryAtom, choiceAtom } from "../recoil/gameAtom"
import { useRecoilState, useRecoilValue } from "recoil"

const AppSelections: React.FC = () => {
  const category = useRecoilValue(categoryAtom)
  const [choice, setChoice] = useRecoilState(choiceAtom)

  const renderListGroup = () => {
    if (CATEGORY_LIST.indexOf(category) < 0) {
      return null
    }

    const listGroupItems = []
    const itemCount = CATEGORY_LENGTH[category]
    for (let i = 1; i <= itemCount; i++) {
      listGroupItems.push(
        <ListGroup.Item
          action
          active={choice[category] === i}
          onClick={() => setChoice((prev) => ({ ...prev, [category]: i }))}
        >
          Category {category.charAt(0).toUpperCase() + category.slice(1)} -
          Option {i}
        </ListGroup.Item>
      )
    }
    return listGroupItems
  }

  return <ListGroup className="mt-2 mt-lg-0">{renderListGroup()}</ListGroup>
}

export default AppSelections
