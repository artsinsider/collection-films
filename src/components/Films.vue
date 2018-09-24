<template>
    <div id="films">
        <div class="left" v-if="leftMenu" >
            <div class="left-side-menu">
                <h1 class="logo" >ASF</h1>
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
                <div>
                    <div class="film" v-for="film in films">
                        <img class="image" :src="film.img"  alt="">
                        <div class="name-film">
                            {{film.name}}
                            <div class="genre">{{film.genre}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="right" >
            <img alt="Vue logo" src="../assets/logo.png">
            <div class="hello">
                <p>
                    For guide and recipes on how to configure / customize this project,<br>
                    check out the
                    <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
                </p>
                <h3>Installed CLI Plugins</h3>
                <ul>
                    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
                    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa" target="_blank" rel="noopener">pwa</a></li>
                    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
                    <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener">unit-jest</a></li>
                </ul>
                <h3>Essential Links</h3>
                <ul>
                    <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
                    <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
                    <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
                    <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
                    <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
                </ul>
                <h3>Ecosystem</h3>
                <ul>
                    <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
                    <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
                    <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
                    <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
                    <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
      data:function () {
          return {
              message: 'Hello Vue!',
              films: [
                  {   name: "Пираты карибского моря",
                      genre: 'Фэнтези/Боевик',
                      publish: '2017 г.',
                      img: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTjPHMJa8ur8he05sqngUOi0VMdsu5lDHlwoJpaM8p2hNn0bhD5',
                      active: true
                  },
                  {   name: "Код Да Винчи",
                      genre: 'Триллер/Детектив',
                      publish: '2006 г.',
                      img:'http://t1.gstatic.com/images?q=tbn:ANd9GcSp3v_UpvyFndFx3IA4JmWQFgD2bsoXgY4SbVSyyx6bPu0GF9P6',
                      active: true
                  },
                  {   name: "Ночь в музее",
                      genre: 'Фэнтези/Приключения',
                      publish: '2014 г.',
                      img: 'http://www.gorod.cn.ua/image/news/gorod_5/gr_23.01.14_kino_16.jpg',
                      active: true
                  },
                  {   name: "Тачки",
                      genre: 'Спортивный фильм/Приключения',
                      publish: '2006 г.',
                      img: 'http://t0.gstatic.com/images?q=tbn:ANd9GcTTMBKNW-PjAQvAZ8Y-O21lbntbkOQGIVIaB-Cn3drOu6KN_K05',
                      active: true
                  },
                  {   name: "Люди Икс",
                      genre: 'Кинофантастика/Триллер',
                      publish: '2003 г.',
                      img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/6/69/X-men2_poster.jpg/235px-X-men2_poster.jpg',
                      active: true
                  },
                  {   name: "Миссия невыполнима 3",
                      genre: 'Триллер/Боевик',
                      publish: '2006 г.',
                      img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/4/4c/Mi_III.jpg/211px-Mi_III.jpg',
                      active: true
                  },
                  {   name: "Возвращение супермена",
                      genre: 'Фэнтези/Кинофантастика',
                      publish: '2006 г.',
                      img: 'https://upload.wikimedia.org/wikipedia/ru/thumb/7/76/Superman_back.jpg/203px-Superman_back.jpg',
                      active: true
                  }
              ],
              links: [
                  {
                      name:"Поиск",
                      status: true
                  },{
                      name: "Новости",
                      status: false
                  } ,{
                      name: "Рекомендуемое",
                      status: false
                  }, {
                      name: "Избранное",
                      status: false
                  }
              ],
              leftMenu: true,
              dialog: false,
              quastion: 'Добавить фильм в картотеку ?'
          }
      },

      computed: {
          reverseComputed() {
              return this.message.split('').reverse().join();
          }
      },
        methods: {
            changeStatus: function(e) {
                return this.links.map(function(link) {
                    if(link.name === e.target.id) { link.status = !link.status;
                    } else { link.status = false; }
                })
            },
            onClose: function () { this.dialog = false; },
            onOpenDialog: function () { this.dialog = true; },
            onConfirm: function () { this.dialog = false; },
            onCancel: function () { this.dialog = false; },
        },
        mounted() {  // выполняет действия перед монтирование приложения или компонента
            // alert('START')
        }

    }
</script>


<style lang="scss" src="../css/films.scss"> </style>
