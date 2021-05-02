<svelte:head>
  <title>Jean Maurice</title>
</svelte:head>

<h1>
  {[
    "Hey",
    "Hello",
    "Hi",
    "Howdy",
    "Bonjour",
    "Good day",
    "Aloha",
    "Yo",
    "Namaste",
    "Howdy-do",
    "Cheerio",
    "G'day",
    "Good day",
    "Sup",
    "Salute",
  ][Math.floor(Math.random() * 15)]} !
</h1>

<figure>
  <div class="container">
    <div class="logos-couple">
      <a href="/domoticz" class="logo-left">
        <img
          alt="domoticz"
          src="http://domoticx.com/wp-content/uploads/2018/01/domoticz-logo.png"
        />
      </a>
      <a href="/bw" class="logo-right">
        <img
          alt="bitwarden"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0c/Bitwarden_Logo_Horizontal.png"
        />
      </a>
    </div>
    <div class="logos-couple">
      <a href="https://guillaumejparis.github.io/recipes" class="logo-left">
        <img
          alt="recipes"
          src="https://iconape.com/wp-content/files/aq/167156/svg/bon-appetit-seeklogo.com.svg"
        />
      </a>
      <a href="/qb" class="logo-right">
        <img
          alt="qbittorrent"
          src="https://upload.wikimedia.org/wikipedia/commons/3/39/BitTorrent_logo.svg"
        />
      </a>
    </div>
    <div class="logos-couple">
      <a href="/netdata" class="logo-left">
        <img alt="netdata" src="https://landscape.cncf.io/logos/netdata.svg" />
      </a>
      <a href="/plex" class="plex">
        <img
          id="plex-logo-img"
          alt="plex"
          src="https://upload.wikimedia.org/wikipedia/commons/8/8e/Plex_favicon.png"
        />
        <img
          id="plex-logo-text"
          alt="plex"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Plex_vector_logo.svg/2880px-Plex_vector_logo.svg.png"
        />
      </a>
    </div>
  </div>
</figure>

<style>
  h1,
  figure {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  img {
    max-height: 77px;
    max-width: 100%;
  }

  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 40px;
    max-width: 100%;
  }

  .logos-couple {
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
  }

  .logo-left {
    display: flex;
    margin-right: 25px;
    height: 100%;
    flex: 1;
    justify-content: flex-end;
  }

  .logo-right {
    display: flex;
    margin-left: 25px;
    height: 100%;
    flex: 1;
    justify-self: flex-start;
  }

  .plex {
    display: flex;
    margin-left: 25px;
    flex: 1;
    justify-self: flex-start;
    align-items: center;
  }

  #plex-logo-img {
    max-height: 62px;
    max-width: 30%;
  }

  #plex-logo-text {
    max-height: 62px;
    max-width: calc(70% - 10px);
    margin-left: 10px;
  }

  @media screen and (min-width: 480px) {
    h1 {
      font-size: 6em;
    }
    #plex-logo-text {
      max-width: calc(70% - 30px);
      margin-left: 30px;
    }
  }
</style>
