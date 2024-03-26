import TextButton from "./TextButton"

const Navbar = (props: any) => {
    return (
        <header className="h-16 w-full shadow backdrop-blur-sm sticky top-0 flex justify-center items-center gap-5">
            <img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Beetle.png" alt="Beetle" width="25" height="25" />
            <nav className="flex gap-5">
                {
                    props.links.map((link: any, index: number) => {
                        return <TextButton key={index} to={link.to} content={link.content} />
                    })
                }
            </nav>
        </header>
  )
}

export default Navbar