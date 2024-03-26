import { ReactNode } from "react"

const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center px-5">
        <div className="sm:w-2/3 w-4/5 flex flex-col justify-start">
            {children}
        </div>
    </div>
  )
}

export default ContentLayout