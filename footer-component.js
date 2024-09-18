class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer__container">
          <div class="footer__links">
            <div class="footer__link--wrapper">
              <div class="footer__link--items">
                <h2>Pages</h2>
                <a href="index.html">Home</a>
                <a href="About_BasBoerboom.html">About</a>
                <a href="work.html">Work</a>
                <a href="contact.html">Content</a>
              </div>
              <div class="footer__link--items">
                <h2>Work</h2>
                <a href="/Commercials.html">Commercials</a>
                <a href="/Trailers.html">Trailers</a>
                <a href="/Games.html">Games</a>
                <a href="/Shortfilm.html">Short Film</a>
              </div>
            </div>
          </div>
          <section class="social__media">
            <div class="social__media--wrap">
              <div class="footer__logo">
                <a href="index.html" id="footer__logo">Bas Boerboom</a>
              </div>
              <p class="website__rights">bas.boerboom@hotmail.com | +31 (0) 6 39678458 | KvK: 94987637</p>
              <p class="website__rights">© Bas Boerboom 2023. All rights reserved</p>
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