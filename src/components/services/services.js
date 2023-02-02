import { Title } from '../title';
import { ServicesArticle } from './servicesArticle';

import { servicesList } from '../../data/servicesList';

export const Services = () => {
    return (
        <section className="section services" id="services">
            <Title title="our"
                subtitle="services"
            />
            <div className="section-center services-center">
                {servicesList.map((service) => {
                    const { id, title, icon, text } = service;
                    return (
                        <ServicesArticle key={id}
                                         title={title}
                                         icon={icon}
                                         text={text}
                        />
                    );
                })}
            </div>
        </section>
    );
};