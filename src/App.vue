<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/films">Films</router-link> |
      <router-link to="/test environment">Test Environment</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" src="../src/css/app.scss"></style>
