import { IconLink } from '../components/links/iconLink';
import { TextLink } from '../components/links/textLink';

import { pageLinks } from '../data/pageLinks';
import { socialMediaLinks } from '../data/socialMediaLinks';

export const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                { pageLinks.map((link) => {
                    const { id, href, text } = link;
                    return <TextLink key={id}
                                     href={href} 
                                     text={text}
                                     className='footer-link'
                    />;
                })}
                <li>
                    <a href="#featured" className="footer-link">featured</a>
                </li>
            </ul>
            <ul className="footer-icons">
                {socialMediaLinks.map((link) => {
                    const { id, href, icon } = link;
                    return <IconLink key={id}
                                     href={href} 
                                     icon={icon}
                                     className='footer-icon'
                            />;
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    );
};