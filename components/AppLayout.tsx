import AppHeader from "./AppHeader"
import Head from "next/head"
import { RecoilRoot } from "recoil"

const AppLayout: React.FC = ({ children }) => {
  return (
    <RecoilRoot>
      <Head>
        <title>Viet Phuc Game</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <AppHeader />
      </header>

      <main className="mt-3">{children}</main>
    </RecoilRoot>
  )
}

export default AppLayout
