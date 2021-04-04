import { choiceSelector } from "../recoil/gameAtom"
import { useRecoilValue } from "recoil"
import Image from "next/image"

const AppCurrentChoices: React.FC = () => {
  const choices = useRecoilValue(choiceSelector)

  return (
    <div className="mt-lg-0 mt-2 text-center">
      <Image src={choices} layout="intrinsic" height={600} width={200} />
    </div>
  )
}

export default AppCurrentChoices
