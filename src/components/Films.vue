<template>
    <div id="films">
        <div class="left" v-if="leftMenu" >
            <div class="left-side-menu">
                <h1 class="logo" >VIGE</h1>
                <ul @click="changeStatus($event)">
                    <li v-for="link in links"
                        :class="{'active': link.status}"
                        v-bind:id="link.name"
                    >
                        {{link.name}}
                        <span class="round" v-if="link.status"></span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="center">
            <input class="search-data" type="text"/>
            <button class="search">ПОИСК</button>
            <div class="container-films">
                <span class="title">ТОП 5 за последние 7 дней</span>
                <div class="collection">
                    <div class="film" v-for="film in collection">
                        <span class="name-film">{{film.title}}</span>
                        <span class="rating">{{film.rating}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="right" >
            <div class="title" v-for="cat in categori">
                {{cat.name}}
                <div class="filter-block" v-for="elem in cat.elems">
                    <input class="check-save" type="checkbox" name="elem">
                    <span class="text-check">{{elem}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import data from '../API/data'
    export default {
      data:function () {
          return {
              message: 'Hello Vue!',
              links: [
                  {
                      name:'Поиск',
                      status: true
                  },
                  {
                      name:'Новости',
                      status: false
                  },
                  {
                      name:'Рекомендуемое',
                      status: false
                  },
                  {
                      name:'Избранное',
                      status: false
                  }
              ],
              leftMenu: true,
              dialog: false,
              quastion: 'Добавить фильм в картотеку ?',
              collection: [],
              categori:[
                  {
                    name: 'Категории',
                    elems: ['Фильмы','Мультфильмы']
                  },
                  {
                    name: 'Жанры',
                    elems: ['Боевик','Комедия','Драма','Фантастика','Фентези','Триллер','Ужасы','Документальный','Серила','ТВ-передача',]
                  },
                  {
                      name: 'Качество',
                      elems: ['480р','720р','1024р','1892р и выше']
                  },
                  {
                      name: 'Субтитры',
                      elems: ['Без субтитров','рус.','англ.']
                  }
                  ,
                  {
                      name: 'Бубляж',
                      elems: ['Без дублежа','Любительский','Професиональный']
                  }
              ]
          }
      },
      computed: {
      },
        methods: {
            changeStatus: function(e) {
                return this.links.map(function(link) {
                    if(link.name === e.target.id) { link.status = !link.status;
                    } else { link.status = false; }
                })
            },
            onClose: function () { this.dialog = false },
            onOpenDialog: function () { this.dialog = true },
            onConfirm: function () { this.dialog = false },
            onCancel: function () { this.dialog = false },
        },
        mounted() {  // выполняет действия перед монтирование приложения или компонента
            const url = 'http://api.freetor.dev.origin-creative-studio.com:3000/movies?lang=ru&limit=75'
            return fetch(url)
                .then(response => {
                    return response.json()
                })
                .then(json => {
                    this.collection = json.data;
                })
                .catch((error, inf) => {
                this.collection = data;
                    return console.log('API ERROR', error, inf)
                })
        }
    }
</script>

<style lang="scss" src="../css/films.scss"> </style>



<!--<img alt="Vue logo" src="../assets/logo.png">-->
<!--<div class="hello">-->
    <!--<p>-->
        <!--For guide and recipes on how to configure / customize this project,<br>-->
        <!--check out the-->
        <!--<a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.-->
    <!--</p>-->
    <!--<h3>Installed CLI Plugins</h3>-->
    <!--<ul>-->
        <!--<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>-->
        <!--<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>-->
        <!--<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>-->
        <!--<li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener">unit-jest</a></li>-->
    <!--</ul>-->
    <!--<h3>Essential Links</h3>-->
    <!--<ul>-->
        <!--<li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>-->
        <!--<li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>-->
        <!--<li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>-->
        <!--<li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>-->
        <!--<li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>-->
    <!--</ul>-->
    <!--<h3>Ecosystem</h3>-->
    <!--<ul>-->
        <!--<li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>-->
        <!--<li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>-->
        <!--<li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>-->
        <!--<li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>-->
        <!--<li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>-->
    <!--</ul>-->
<!--</div>-->