import ListGroup from "react-bootstrap/ListGroup"
import { CATEGORY_LENGTH, CATEGORY_LIST } from "../constants"
import { categoryAtom, choiceAtom } from "../recoil/gameAtom"
import { useRecoilState, useRecoilValue } from "recoil"
import Image from "next/image"

const AppSelections: React.FC = () => {
  const category = useRecoilValue(categoryAtom)
  const [choice, setChoice] = useRecoilState(choiceAtom)

  const renderListGroup = () => {
    if (CATEGORY_LIST.indexOf(category) < 0) {
      return null
    }

    const listGroupItems = []
    const itemCount = CATEGORY_LENGTH[category]
    for (let i = 0; i <= itemCount; i++) {
      listGroupItems.push(
        <ListGroup.Item
          action
          active={choice[category] === i}
          onClick={() => setChoice((prev) => ({ ...prev, [category]: i }))}
          className="text-center"
        >
          {i > 0 ? (
            <img src={`/images/${category}-${i}.png`} width={100} />
          ) : (
            <h4>Clear</h4>
          )}
        </ListGroup.Item>
      )
    }
    return listGroupItems
  }

  return <ListGroup className="mt-2 mt-lg-0">{renderListGroup()}</ListGroup>
}

export default AppSelections
