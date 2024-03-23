import { ReactNode } from 'react';
import Navbar from '../Navbar';
import ContentLayout from './ContentLayout';

const PageLayout = ({ children }: { children: ReactNode }) => {

    const links = [
        { to: '/', content: 'about' },
        { to: '/about', content: 'work' },
        { to: '/contact', content: 'contact' },
    ]

    return (
        <>
            <Navbar links={links} />
            <ContentLayout>
                {children}
            </ContentLayout>
        </>
  )
}

export default PageLayout