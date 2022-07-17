import { ReactNode } from 'react'
import Navbar from './Navbar'

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Navbar />
      <main className="mt-14 flex h-full w-full flex-col">{children}</main>
    </>
  )
}

export default Layout
