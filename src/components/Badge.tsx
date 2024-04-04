import { ReactNode } from "react"

interface BadgeProps {
    children: ReactNode
    url?: string
    email?: string
}

const Badge = ({children, url, email}: BadgeProps) => {
    if (email) {
        return (
            <a target="_blanck" href={`mailto:${email}`}>
                {children}
            </a>
        )
    } else {
        return (
            <a target="_blanck" href={url}>
                {children}
            </a>
        )
    }
}

export default Badge