<template>
  <div id="app">
    <div class="main-title">
      <h1>Nethergonnaend</h1>
      <p>Nether gonna give you up</p>
    </div>
    <div class="row">
      <div class="col">
        <Card class="status">
          <h2>Statut</h2>
          <p>Beueu</p>
        </Card>
      </div>
      <div class="col">
        <Card class="players">
          <h2>Joueurs en ligne</h2>
          <p>Hello</p>
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap-grid';
@import "scss/breakpoints.scss";
@import url("https://use.typekit.net/qxr4owc.css");
@import 'scss/globals.scss';

body {
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
}
#app {
  position: fixed;
  width: 100%;
  max-width: 860px;
  color: $theme;
}
.main-title {
  font-family: 'Europa Light', sans-serif;
  text-align: center;
  margin-bottom: 30px;
}
.col {
  padding: 0 10px;
}
</style>
