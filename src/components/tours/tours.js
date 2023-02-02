import { Title } from '../title';
import { ToursArticle } from './toursArticle';

import { toursList } from "../../data/toursList";

export const Tours = () => {
    return (
    <section className="section" id="tours">
        <Title title="featured"
                subtitle="tours"
        />
        
        <div className="section-center featured-center">
            {toursList.map((tour) => {
                const { id, imgSrc, imgAlt, tourDate, tourTitle, tourDesc, tourCountry, tourDuration, tourPrice } = tour;
                return (
                    <ToursArticle key={id}
                                  imgSrc={imgSrc}
                                  imgAlt={imgAlt}
                                  tourDate={tourDate}
                                  tourTitle={tourTitle}
                                  tourDesc={tourDesc}
                                  tourCountry={tourCountry}
                                  tourDuration={tourDuration}
                                  tourPrice={tourPrice}
                    />
                );
            })}
        </div>
    </section>
    );
};