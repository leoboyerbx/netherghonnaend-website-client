<template>
  <div id="app" class="container">
    <div class="main-title">
      <h1>Nethergonnaend</h1>
      <p>Nether gonna give you up</p>
    </div>
    <div class="row">
      <div class="col-md">
        <Status
        :online="online"
        :onlinePlayers="players"
        :maxPlayers="maxPlayers" />
      </div>
      <div class="col-md">
        <Card class="players">
          <h2>Joueurs en ligne</h2>
          <UsersList :usersList="onlinePlayers" />
        </Card>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './components/Card.vue'
import Status from './components/Status'
import UsersList from './components/UsersList'

export default {
  name: 'App',
  components: {
    Card,
    Status,
    UsersList
  },
  data () {
    return {
      online: true,
      players: 2,
      maxPlayers: 20,
      onlinePlayers: [
        'DouxLit',
        'leobx'
      ]
    }
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
.players, .status {
  margin-top: 20px;
}
h2 {
  margin-bottom: 20px !important;
}
</style>
