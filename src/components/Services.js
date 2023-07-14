import Title from "./Title";
import { dataService } from "../data";

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Title first="our" second="services" />
        <div className="section-center services-center">
          {dataService.map((service) => {
            const { id, name, icon, text } = service;
            console.log(service);
            return (
              <>
                <article className="service" key={id}>
                  <span className="service-icon">
                    <i className={icon}></i>
                  </span>
                  <div className="service-info">
                    <h4 className="service-title">{name}</h4>
                    <p className="service-text">{text}</p>
                  </div>
                </article>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Services;
