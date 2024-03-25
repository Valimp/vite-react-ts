import { ReactNode } from "react"

const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center px-5">
        <div className="w-2/3 flex flex-col justify-start">
            {children}
        </div>
    </div>
  )
}

export default ContentLayout