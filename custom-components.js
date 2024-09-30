class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="breakline">
        <div class="line"></div>
      </div>
      <footer>
        <div class="footer__container">
          <div class="footer__links">
            <div class="footer__link--wrapper">
              <div class="footer__link--items">
                <h2>Pages</h2>
                <a href="/">Home</a>
                <a href="/About_BasBoerboom">About</a>
                <a href="/About_BasBoerboom">Contact</a>
                <a href="/legals">Privacy & Terms</a>
              </div>
              <div class="footer__link--items">
                <h2>Work</h2>
                <a href="/Commercials">Commercials</a>
                <a href="/Trailers">Trailers</a>
                <a href="/Games">Games</a>
                <a href="/Shortfilm">Short Film</a>
              </div>
            </div>
          </div>
          <section class="social__media">
            <div class="social__media--wrap">
              <div class="footer__logo">
                <a href="/" id="footer__logo">Bas Boerboom</a>
              </div>
              <p class="website__rights">bas.boerboom@hotmail.com | +31 (0) 6 39678458 | KvK: 94987637</p>
              <p class="website__rights">© Bas Boerboom 2023-2024. All rights reserved</p>
              <div class="social__icons">
                <a href="https://www.instagram.com/bastianjohanmusic/" class="social__icon--link"><img class="social__icon--style" src="Socials/4202090_instagram_logo_social_social media_icon.png" alt="Instagram"></a>
                <a href="" class="social__icon--link"><img class="social__icon--style" src="Socials/4202000_tweet_twitter_logo_social_social media_icon.png" alt="Twitter"></a>
                <a href="https://www.facebook.com/bas.boerboom.9/" class="social__icon--link"><img class="social__icon--style" src="Socials/logo-facebookpng-32204.png" alt="Facebook"></a>
                <a href="https://www.youtube.com/@basboerboom9328" class="social__icon--link"><img class="social__icon--style" src="Socials/4202041_video_youtube_logo_social_social media_icon.png" alt="Youtube"></a>
                <a href="https://open.spotify.com/artist/5CMJEBnmSphZLKjbpBJIH8?si=GPABIxnLRGaYuXZNiNl1kg" class="social__icon--link"><img class="social__icon--style" src="Socials/4202068_spotify_logo_social_social media_icon.png" alt="Spotify"></a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    `;
  }
}
customElements.define('footer-component', FooterComponent);

class NavbarBBComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="navbar__container">
          <a href="/" id="navbar-logotxt"><img src="Pictures/Logo_PNG_Crop.png" alt="Logo" id="navbar-logo">as Boerboom</a> 
          <div class="navbar__toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class="navbar__menu">
            <li class="navbar__item">
              <span onclick="transitionToPage('/bastianjohan')" class="navbar__links">Bastian Johan</span>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}
customElements.define('navbar_bb-component', NavbarBBComponent);

class NavbarBJComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav class="navbar">
        <div class="navbar__container">
          <a href="/bastianjohan" id="navbar-logotxt"><img src="Pictures/Logo_PNG_Crop.png" alt="Logo" id="navbar-logo">astian Johan</a> 
          <div class="navbar__toggle" id="mobile-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </div>
          <ul class="navbar__menu">
            <li class="navbar__item">
              <span onclick="transitionToPage('/bastianjohan_yt')" class="navbar__links">Videos</span>
            </li>
            <li class="navbar__item">
              <span onclick="transitionToPage('/')" class="navbar__links">Bas Boerboom</span>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }
}
customElements.define('navbar_bj-component', NavbarBJComponent);