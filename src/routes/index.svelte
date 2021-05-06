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
      <a href="/netdata" class="logo logo-left">
        <img alt="netdata" src="netdata-logo.png" />
      </a>
      <a href="/bw" class="logo logo-right">
        <img alt="bitwarden" src="bitwarden-logo.png" />
      </a>
    </div>
    <div class="logos-couple">
      <a
        href="https://guillaumejparis.github.io/recipes"
        class="logo logo-left"
      >
        <img alt="recipes" src="bon-appetit-logo.png" />
      </a>
      <a href="/qb" class="logo logo-right">
        <img alt="qbittorrent" src="qbittorrent-logo.png" />
      </a>
    </div>
    <div class="logos-couple">
      <a href="/domoticz" class="logo logo-left">
        <img alt="domoticz" src="domoticz-logo.png" />
      </a>
      <a href="/plex" class="logo logo-right">
        <img alt="plex" src="plex-logo.png" />
      </a>
    </div>
  </div>
</figure>

<style>
  figure {
    height: calc(100% - 47px - 28px);
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
    margin: 0 auto;
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
  }

  img {
    max-width: 100%;
  }

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 100%;
  }

  .logos-couple {
    display: flex;
    align-items: center;
    padding: 20px 0px;
    width: 100%;
  }

  .logo {
    flex: 1;
    display: flex;
  }

  .logo-left {
    margin-right: 5px;
  }

  .logo-right {
    margin-left: 5px;
  }

  @media screen and (min-width: 480px) {
    h1 {
      font-size: 6em;
    }

    .logo-left {
      margin-right: 25px;
    }

    .logo-right {
      margin-left: 25px;
    }

    .logos-couple {
      padding: 20px;
    }
  }
</style>
