import { ReactNode } from 'react';
import Navbar from '../Navbar';
import ContentLayout from './ContentLayout';

const PageLayout = ({ children }: { children: ReactNode }) => {

    const links = [
        { to: '/', content: 'à propos' },
        { to: '/about', content: 'mon travail' },
        { to: '/contact', content: 'me contacter' },
    ]

    return (
        <div className='font-poppins'>
            <Navbar links={links} />
            <ContentLayout>
                {children}
            </ContentLayout>
        </div>
  )
}

export default PageLayout