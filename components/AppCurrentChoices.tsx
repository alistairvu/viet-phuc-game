import { choiceAtom } from "../recoil/gameAtom"
import { useRecoilValue } from "recoil"

const AppCurrentChoices: React.FC = () => {
  const choices = useRecoilValue(choiceAtom)

  const renderChoices = () => {
    const choiceList = []
    for (const [key, value] of Object.entries(choices)) {
      choiceList.push(
        <li>
          Category {key.charAt(0).toUpperCase() + key.slice(1)}: {value}
        </li>
      )
    }
    return choiceList
  }

  return <ul className="mt-lg-0 mt-2">{renderChoices()}</ul>
}

export default AppCurrentChoices
