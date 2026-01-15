import React, { useState, useEffect } from 'react';
import './hero.css';

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [language, setLanguage] = useState('FR');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const toggleSubmenu = (menu) => {
    setActiveSubmenu(activeSubmenu === menu ? null : menu);
  };

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setLangDropdownOpen(false);
  };

  return (
    <section className="hero-section-jkds">
      {/* Navigation */}
      <nav className="hero-nav-jkds">
        <div className="hero-logo-jkds">
          <img src="/logo.png" alt="PyCon Togo 2025" className="hero-logo-img-jkds" />
        </div>
        
        {/* Desktop Menu */}
        <ul className="hero-menu-jkds hero-menu-desktop-jkds">
          <li className="hero-menu-item-jkds">
            <a href="#accueil" className="hero-menu-link-jkds">
              <span className="hero-menu-text-jkds">Accueil</span>
              <span className="hero-menu-text-clone-jkds">Accueil</span>
            </a>
          </li>
          <li className="hero-menu-item-jkds hero-menu-has-submenu-jkds"
              onMouseEnter={() => setActiveSubmenu('apropos')}
              onMouseLeave={() => setActiveSubmenu(null)}>
            <a href="#apropos" className="hero-menu-link-jkds">
              <span className="hero-menu-text-jkds">
                À propos
                <svg className="hero-submenu-icon-jkds" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </span>
              <span className="hero-menu-text-clone-jkds">
                À propos
                <svg className="hero-submenu-icon-jkds" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </span>
            </a>
            <ul className={`hero-submenu-jkds ${activeSubmenu === 'apropos' ? 'hero-submenu-open-jkds' : ''}`}>
              <li><a href="#partenaires">Partenaires</a></li>
              <li><a href="#conduite">Code de conduite</a></li>
            </ul>
          </li>
          <li className="hero-menu-item-jkds">
            <a href="#evenements" className="hero-menu-link-jkds">
              <span className="hero-menu-text-jkds">Événements</span>
              <span className="hero-menu-text-clone-jkds">Événements</span>
            </a>
          </li>
          <li className="hero-menu-item-jkds hero-menu-has-submenu-jkds"
              onMouseEnter={() => setActiveSubmenu('plus')}
              onMouseLeave={() => setActiveSubmenu(null)}>
            <a href="#plus" className="hero-menu-link-jkds">
              <span className="hero-menu-text-jkds">
                Plus
                <svg className="hero-submenu-icon-jkds" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </span>
              <span className="hero-menu-text-clone-jkds">
                Plus
                <svg className="hero-submenu-icon-jkds" width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 10l5 5 5-5z"/>
                </svg>
              </span>
            </a>
            <ul className={`hero-submenu-jkds ${activeSubmenu === 'plus' ? 'hero-submenu-open-jkds' : ''}`}>
              <li><a href="#actualites">Actualités</a></li>
              <li><a href="#galerie">Galerie</a></li>
              <li><a href="#adherer">Adhérer</a></li>
            </ul>
          </li>
          <li className="hero-menu-item-jkds">
            <a href="#contact" className="hero-menu-link-jkds">
              <span className="hero-menu-text-jkds">Contact</span>
              <span className="hero-menu-text-clone-jkds">Contact</span>
            </a>
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hero-nav-buttons-jkds hero-nav-buttons-desktop-jkds">
          <div className="hero-lang-dropdown-jkds">
            <button 
              className="hero-lang-switcher-jkds"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            >
              {language === 'FR' ? (
                <svg className="hero-flag-jkds" width="20" height="15" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                  <rect width="900" height="600" fill="#ED2939"/>
                  <rect width="600" height="600" fill="#fff"/>
                  <rect width="300" height="600" fill="#002395"/>
                </svg>
              ) : (
                <svg className="hero-flag-jkds" width="20" height="12" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                  <clipPath id="s"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                  <clipPath id="t"><path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-30 h30 z"/></clipPath>
                  <g clipPath="url(#s)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t)" stroke="#C8102E" strokeWidth="4"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                  </g>
                </svg>
              )} {language}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            {langDropdownOpen && (
              <div className="hero-lang-dropdown-menu-jkds">
                <button onClick={() => changeLanguage('FR')} className="hero-lang-option-jkds">
                  <svg className="hero-flag-jkds" width="20" height="15" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="600" fill="#ED2939"/>
                    <rect width="600" height="600" fill="#fff"/>
                    <rect width="300" height="600" fill="#002395"/>
                  </svg>
                  Français
                </button>
                <button onClick={() => changeLanguage('EN')} className="hero-lang-option-jkds">
                  <svg className="hero-flag-jkds" width="20" height="12" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="s2"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                    <clipPath id="t2"><path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-30 h30 z"/></clipPath>
                    <g clipPath="url(#s2)">
                      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t2)" stroke="#C8102E" strokeWidth="4"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                    </g>
                  </svg>
                  English
                </button>
              </div>
            )}
          </div>
          <button className="hero-cta-donate-jkds">
            <span className="hero-heart-icon-jkds">♥</span> Faire un don
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`hero-hamburger-jkds ${menuOpen ? 'hero-hamburger-open-jkds' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`hero-mobile-menu-jkds ${menuOpen ? 'hero-mobile-menu-open-jkds' : ''}`}>
        <ul className="hero-mobile-menu-list-jkds">
          <li className="hero-mobile-menu-item-jkds">
            <a href="#accueil" onClick={() => setMenuOpen(false)}>Accueil</a>
          </li>
          <li className="hero-mobile-menu-item-jkds">
            <button onClick={() => toggleSubmenu('apropos')} className="hero-mobile-submenu-btn-jkds">
              À propos
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" 
                   className={activeSubmenu === 'apropos' ? 'hero-rotate-jkds' : ''}>
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            {activeSubmenu === 'apropos' && (
              <ul className="hero-mobile-submenu-list-jkds">
                <li><a href="#partenaires" onClick={() => setMenuOpen(false)}>Partenaires</a></li>
                <li><a href="#conduite" onClick={() => setMenuOpen(false)}>Code de conduite</a></li>
              </ul>
            )}
          </li>
          <li className="hero-mobile-menu-item-jkds">
            <a href="#evenements" onClick={() => setMenuOpen(false)}>Événements</a>
          </li>
          <li className="hero-mobile-menu-item-jkds">
            <button onClick={() => toggleSubmenu('plus')} className="hero-mobile-submenu-btn-jkds">
              Plus
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                   className={activeSubmenu === 'plus' ? 'hero-rotate-jkds' : ''}>
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            {activeSubmenu === 'plus' && (
              <ul className="hero-mobile-submenu-list-jkds">
                <li><a href="#actualites" onClick={() => setMenuOpen(false)}>Actualités</a></li>
                <li><a href="#galerie" onClick={() => setMenuOpen(false)}>Galerie</a></li>
                <li><a href="#adherer" onClick={() => setMenuOpen(false)}>Adhérer</a></li>
              </ul>
            )}
          </li>
          <li className="hero-mobile-menu-item-jkds">
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
        <div className="hero-mobile-buttons-jkds">
          <div className="hero-lang-dropdown-jkds">
            <button 
              className="hero-lang-switcher-jkds"
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
            >
              {language === 'FR' ? (
                <svg className="hero-flag-jkds" width="20" height="15" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                  <rect width="900" height="600" fill="#ED2939"/>
                  <rect width="600" height="600" fill="#fff"/>
                  <rect width="300" height="600" fill="#002395"/>
                </svg>
              ) : (
                <svg className="hero-flag-jkds" width="20" height="12" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                  <clipPath id="s3"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                  <clipPath id="t3"><path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-30 h30 z"/></clipPath>
                  <g clipPath="url(#s3)">
                    <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                    <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t3)" stroke="#C8102E" strokeWidth="4"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                    <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                  </g>
                </svg>
              )} {language}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z"/>
              </svg>
            </button>
            {langDropdownOpen && (
              <div className="hero-lang-dropdown-menu-jkds">
                <button onClick={() => changeLanguage('FR')} className="hero-lang-option-jkds">
                  <svg className="hero-flag-jkds" width="20" height="15" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
                    <rect width="900" height="600" fill="#ED2939"/>
                    <rect width="600" height="600" fill="#fff"/>
                    <rect width="300" height="600" fill="#002395"/>
                  </svg>
                  Français
                </button>
                <button onClick={() => changeLanguage('EN')} className="hero-lang-option-jkds">
                  <svg className="hero-flag-jkds" width="20" height="12" viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="s4"><path d="M0,0 v30 h60 v-30 z"/></clipPath>
                    <clipPath id="t4"><path d="M30,15 h30 v15 z v-30 h-30 z h-30 v15 z v-30 h30 z"/></clipPath>
                    <g clipPath="url(#s4)">
                      <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                      <path d="M0,0 L60,30 M60,0 L0,30" clipPath="url(#t4)" stroke="#C8102E" strokeWidth="4"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
                    </g>
                  </svg>
                  English
                </button>
              </div>
            )}
          </div>
          <button className="hero-cta-donate-jkds">
            <span className="hero-heart-icon-jkds">♥</span> Faire un don
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="hero-content-jkds">
        <a href="#inscription" className="hero-date-badge-jkds">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
          <span>26 Août 2025 - Lomé, Togo</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"/>
          </svg>
        </a>

        <h1 className="hero-title-jkds">
          La Premiere Conference
          <br />
          <span className="hero-python-jkds">Python</span> au Togo
        </h1>

        <p className="hero-description-jkds">
          Rejoignez-nous pour une celebration inoubliable de Python et sa
          <br />
          communaute. Developpeurs, passionnes et experts d'Afrique et d'ailleurs
          <br />
          seront reunis pour apprendre, partager et innover ensemble.
        </p>

        <div className="hero-cta-group-jkds">
          <button className="hero-cta-primary-jkds">
            S'inscrire Maintenant
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
              <path d="M8 0L6.59 1.41L12.17 7H0V9H12.17L6.59 14.59L8 16L16 8L8 0Z"/>
            </svg>
          </button>
          <button className="hero-cta-secondary-jkds">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z"/>
            </svg>
            Voir le Recap 2024
          </button>
        </div>
      </div>

      {/* Decorative Hills with Trees and Dots */}
      <div className="hero-hills-container-jkds">
        {/* Yellow Dots */}
        <div className="hero-yellow-dot-jkds hero-dot-left-jkds"></div>
        <div className="hero-yellow-dot-jkds hero-dot-right-jkds"></div>
        
        {/* Hills Layers */}
        <svg className="hero-hills-svg-jkds" viewBox="0 0 1200 400" preserveAspectRatio="none">
          {/* Dark green back hill */}
          <path d="M0,250 Q300,180 600,220 T1200,250 L1200,400 L0,400 Z" fill="#05401f" opacity="0.6"/>
          
          {/* Medium green middle hill */}
          <path d="M0,280 Q200,200 400,250 T800,270 Q1000,250 1200,280 L1200,400 L0,400 Z" fill="#0d6838"/>
          
          {/* Light green front hill with trees */}
          <path d="M0,320 Q150,260 300,300 Q450,280 600,310 Q750,290 900,310 Q1050,295 1200,320 L1200,400 L0,400 Z" fill="#1a8f4f"/>
        </svg>

        {/* Trees */}
        <div className="hero-trees-jkds">
          <div className="hero-tree-jkds" style={{left: '5%'}}></div>
          <div className="hero-tree-jkds" style={{left: '12%'}}></div>
          <div className="hero-tree-jkds" style={{left: '20%'}}></div>
          <div className="hero-tree-jkds" style={{left: '28%'}}></div>
          <div className="hero-tree-jkds" style={{left: '35%'}}></div>
          <div className="hero-tree-jkds" style={{left: '42%'}}></div>
          <div className="hero-tree-jkds" style={{left: '50%'}}></div>
          <div className="hero-tree-jkds" style={{left: '58%'}}></div>
          <div className="hero-tree-jkds" style={{left: '65%'}}></div>
          <div className="hero-tree-jkds" style={{left: '72%'}}></div>
          <div className="hero-tree-jkds" style={{left: '80%'}}></div>
          <div className="hero-tree-jkds" style={{left: '87%'}}></div>
          <div className="hero-tree-jkds" style={{left: '94%'}}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;