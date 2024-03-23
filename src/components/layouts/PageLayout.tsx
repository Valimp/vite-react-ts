import { ReactNode } from 'react';
import Navbar from '../Navbar';

const PageLayout = ({ children }: { children: ReactNode }) => {

    const links = [
        { to: '/', content: 'about' },
        { to: '/about', content: 'work' },
        { to: '/contact', content: 'contact' },
    ]

    return (
        <>
            <Navbar links={links} />
            {children}
        </>
  )
}

export default PageLayout