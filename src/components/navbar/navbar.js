import navbarLogo from '../../images/logo.svg';

import { IconLink } from '../links/iconLink';
import { TextLink } from '../links/textLink';

import { pageLinks } from '../../data/pageLinks';
import { socialMediaLinks } from '../../data/socialMediaLinks';

export const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="nav-center">
                <div className="nav-header">
                    <img src={navbarLogo} className="nav-logo" alt="backroads" />
                    <button type="button" className="nav-toggle" id="nav-toggle">
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                <ul className="nav-links" 
                    id="nav-links">
                    { pageLinks.map((link) => {
                        const { id, href, text } = link;
                        return <TextLink key={id}
                                         href={href} 
                                         text={text}
                                         className='nav-link'
                                />;
                    })}
                </ul>
                <ul className="nav-icons">
                    {socialMediaLinks.map((link) => {
                        const { id, href, icon } = link;
                        return <IconLink key={id}
                                         href={href} 
                                         icon={icon}
                                         className='nav-icon'
                                />;
                    })}
                </ul>
            </div>
        </nav>
    );
};