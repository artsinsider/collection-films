<template>
  <div id="home" class="home">

    <div class="home_left">
      <img src="../css/img/max_and_duke.png" alt="">
    </div>

    <div class="home_right">
      <!--<h1>Do you want to create your own selection of favorite movies?</h1>-->
      <div class="auth-form">
        <div class="demo">
          <div class="login">
            <img class="logo" src="../css/img/logo.svg" alt="">
            <div class="login__form">
              <div class="login__row">
                <svg class="login__icon name svg-icon" viewBox="0 0 20 20">
                  <path d="M0,20 a10,8 0 0,1 20,0z M10,0 a4,4 0 0,1 0,8 a4,4 0 0,1 0,-8" />
                </svg>
                <input type="text" class="login__input name" placeholder="Username" autocomplete='off'/>
              </div>
              <div class="login__row">
                <svg class="login__icon pass svg-icon" viewBox="0 0 20 20">
                  <path d="M0,20 20,20 20,8 0,8z M10,13 10,16z M4,8 a6,8 0 0,1 12,0" />
                </svg>
                <input type="password" class="login__input pass" placeholder="Password" autocomplete='off'/>
              </div>
              <button type="button"
                      :class="{'login__submit': true, success, processing}"
                      class="login__submit"
                      @click='goHomeFilms'>
                Sign in
              </button>
              <p class="login__signup">Don't have an account? &nbsp;<a>Sign up</a></p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data:function () {
      return {
          processing: false,
          success: false
      }
  },
  methods: {
      goHomeFilms: function(){
          this.processing = true;
          const that = this;
          setTimeout(function() {
              that.success = true;
              setTimeout(function () {
                  that.$router.push({path: 'films'})
              },500);
          },1300)
      }
  }
}
</script>

<style lang="scss" src="../css/authForm.scss"></style>