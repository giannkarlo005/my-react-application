export const ToursArticle = (props) => {
    const { imgSrc, imgAlt, tourDate, tourTitle, tourDesc, tourCountry, tourDuration, tourPrice } = props;
    return (
        <article className="tour-card">
            <div className="tour-img-container">
                <img src={imgSrc} className="tour-img" alt={imgAlt} />
                <p className="tour-date">{tourDate}</p>
            </div>
            <div className="tour-info">
                <div className="tour-title">
                    <h4>{tourTitle}</h4>
                </div>
                <p>{tourDesc}</p>
                <div className="tour-footer">
                    <p>
                        <span><i className="fas fa-map"></i></span>
                        {tourCountry}
                    </p>
                    <p>{tourDuration}</p>
                    <p>{tourPrice}</p>
                </div>
            </div>
        </article>
    );
};