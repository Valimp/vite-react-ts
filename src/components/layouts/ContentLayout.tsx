import { ReactNode } from "react"

const ContentLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex justify-center p-5">
        <div className="w-2/3">
            {children}
        </div>
    </div>
  )
}

export default ContentLayout