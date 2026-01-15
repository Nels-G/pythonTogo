import React from 'react';
import './news.css';

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "Lancement d'un nouvel atelier Python",
      description: "Nous organisons un atelier sur les bases de Python.",
      date: "2025-09-15",
      category: "Atelier",
      image: "/20251117_200618_tsfc73.jpg"
    },
    {
      id: 2,
      title: "Rencontre communautaire à Lomé",
      description: "Retour sur la rencontre mensuelle.",
      date: "2025-08-20",
      category: "Événement",
      image: "/20251117_200618_tsfc73.jpg"
    },
    {
      id: 3,
      title: "Python pour les débutants",
      description: "Formation intensive de 3 jours pour démarrer avec Python.",
      date: "2025-08-10",
      category: "Formation",
      image: "/20251117_200618_tsfc73.jpg"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <section className="news-section-pycon">
      <div className="news-container-pycon">
        {/* Section Header */}
        <div className="news-header-pycon">
          <div className="news-badge-pycon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
            Actualités
          </div>
          <h2 className="news-title-pycon">
            Les dernières nouvelles de la  
            <span className="news-title-highlight-pycon"> communauté</span>
          </h2>
          <p className="news-subtitle-pycon">
            Restez informés des événements, ateliers et rencontres Python au Togo
          </p>
        </div>

        {/* News Grid */}
        <div className="news-grid-pycon">
          {newsItems.map((item, index) => (
            <article 
              key={item.id} 
              className="news-card-pycon"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Thumbnail */}
              <div className="news-image-wrapper-pycon">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="news-image-pycon"
                />
                {/* Category Badge on Image */}
                <div className="news-category-pycon">
                  {item.category}
                </div>
              </div>

              {/* Content */}
              <div className="news-content-pycon">
                <h3 className="news-card-title-pycon">{item.title}</h3>
                <p className="news-card-description-pycon">{item.description}</p>
                
                {/* Footer with Date and Link */}
                <div className="news-card-footer-pycon">
                  <div className="news-date-pycon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    {formatDate(item.date)}
                  </div>

                  <a href={`#news-${item.id}`} className="news-link-pycon">
                    Voir plus
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="news-footer-pycon">
          <button className="news-view-all-btn-pycon">
            Voir toutes les actualités
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default News;