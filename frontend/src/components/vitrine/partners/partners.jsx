import React from 'react';
import './Partners.css';

const Partners = () => {
  const partners = [
    {
      id: 1,
      name: "Python Software Foundation",
      logo: "/Logo_TAHAGA_02_Plan_de_travail_1_5_rh5s9g.jpg",
      category: "Partenaire Principal"
    },
    {
      id: 2,
      name: "Django Software Foundation",
      logo: "/Logo_TAHAGA_02_Plan_de_travail_1_5_rh5s9g.jpg",
      category: "Partenaire Technique"
    },
    {
      id: 3,
      name: "NumFOCUS",
      logo: "/Logo_TAHAGA_02_Plan_de_travail_1_5_rh5s9g.jpg",
      category: "Partenaire Technique"
    },
    {
      id: 4,
      name: "PyData",
      logo: "/Logo_TAHAGA_02_Plan_de_travail_1_5_rh5s9g.jpg",
      category: "Partenaire Communauté"
    },
    {
      id: 5,
      name: "EuroPython Society",
      logo: "/Logo_TAHAGA_02_Plan_de_travail_1_5_rh5s9g.jpg",
      category: "Partenaire Communauté"
    },
    {
      id: 6,
      name: "Africa Python",
      logo: "/Logo_TAHAGA_02_Plan_de_travail_1_5_rh5s9g.jpg",
      category: "Partenaire Régional"
    }
  ];

  return (
    <section className="partners-section-pycon">
      <div className="partners-container-pycon">
        {/* Section Header */}
        <div className="partners-header-pycon">
          <div className="partners-badge-pycon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            Partenaires
          </div>
          <h2 className="partners-title-pycon">
            Ils nous font
            <span className="partners-title-highlight-pycon"> confiance</span>
          </h2>
          <p className="partners-subtitle-pycon">
            Des organisations de renommée mondiale qui soutiennent PyCon Togo
          </p>
        </div>

        {/* Partners Grid */}
        <div className="partners-grid-pycon">
          {partners.map((partner, index) => (
            <div 
              key={partner.id} 
              className="partner-card-pycon"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div className="partner-logo-wrapper-pycon">
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="partner-logo-pycon"
                />
              </div>
              <div className="partner-info-pycon">
                <h3 className="partner-name-pycon">{partner.name}</h3>
                <span className="partner-category-pycon">{partner.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="partners-cta-pycon">
          <div className="partners-cta-content-pycon">
            <h3 className="partners-cta-title-pycon">
              Devenez partenaire
            </h3>
            <p className="partners-cta-description-pycon">
              Rejoignez-nous pour soutenir la communauté Python au Togo et en Afrique
            </p>
            <button className="partners-cta-btn-pycon">
              Contactez-nous
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;