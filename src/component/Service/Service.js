import React from 'react';
import './Service.css';

const Service = () => {
  const services = [
    {
      title: 'Premium Gadget',
      subTitle:
        'We import and distribute premium Accesories brand Pavareal In Bangladesh.',
      icon: 'fa-solid fa-paintbrush'
    },
    {
      title: 'Work Environment',
      subTitle: 'We ensure great work environment',
      icon: 'fa-solid fa-layer-group'
    },
    {
      title: 'Technology Focused',
      subTitle: 'Redgreen is fully futureproof tech focused.',
      icon: 'fa-solid fa-mobile-screen-button'
    }
  ];
  return (
    <div className="grid lg:grid-cols-3 gap-5 p-3 lg:p-32 bg-gray-200">
      {services.map((service) => (
        <div className="service-card">
          <i className={service.icon}></i>
          <h1 className="text-3xl text-gray-700">{service.title}</h1>
          <p>{service.subTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default Service;
