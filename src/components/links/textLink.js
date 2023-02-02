export const TextLink = (props) => {
    const { href, text, className } = props;
    return (
        <li>
            <a href={href}
               className={className}>{ text }</a>
        </li>
    );
};