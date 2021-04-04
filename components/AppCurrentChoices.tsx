import { choiceSelector } from "../recoil/gameAtom"
import { useRecoilValue } from "recoil"

const AppCurrentChoices: React.FC = () => {
  const choices = useRecoilValue(choiceSelector)

  return (
    <div className="mt-lg-0 mt-2 text-center">
      <img src={choices} style={{ maxWidth: 200 }} />
    </div>
  )
}

export default AppCurrentChoices
