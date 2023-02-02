export const ServicesArticle = (props) => {
    const { title, icon, text } = props;
    return (
        <article className="service">
            <span className="service-icon">
                <i className={ icon }></i>
            </span>
            <div className="service-info">
                <h4>{ title }</h4>
                <p className="service-text">{ text } </p>
            </div>
        </article>
    );
};