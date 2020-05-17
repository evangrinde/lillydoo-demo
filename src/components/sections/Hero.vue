<template>
  <div id="hero" class="grid-x grid-padding-x">
    <div class="info-prompt cell small-12 small-auto large-4">
      <h1>Entdecke unsere Hautfreundlichkeit</h1>
      <button type="button" class="button primary">Wähle Deine Grösse</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#hero {
  padding-top: 0;
  padding-bottom: 0;
  min-height: 35.25rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: #f2f0ec;

  /* Small only */
  @media screen and (max-width: 39.9375em) {
    background-image: url("/images/backgrounds/header-trialbox-mobile.jpg");
  }

  /* Medium only */
  @media screen and (min-width: 40em) and (max-width: 63.9375em) {
    background-image: url("/images/backgrounds/header-trialbox-tablet.jpg");
  }

  /* Medium and down */
  @media screen and (max-width: 63.9375em) {
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
  }

  /* Large and up */
  @media screen and (min-width: 64em) {
    background-image: url("/images/backgrounds/header-trialbox-desktop.jpg");
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }

  .info-prompt {
    padding: 2.5rem 2.5rem 1.5rem 2.5rem;
    background: rgba(255, 255, 255, 0.7);

    @media screen and (min-width: 64em) {
      width: 31.25rem;
      margin-right: 4rem;
    }
  }
}
</style>
