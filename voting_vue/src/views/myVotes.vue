<template>
    <div>
         <NavBar colors="#fff" :itensChildren="[
            {type: 'a', link: '/perfil', text: 'Perfil', icon: 'vi-user'},
            {type: 'a', link: '/home', text: 'Home', icon: 'vi-code-tag'},
            {type: 'a', link: '/participe', text: 'Participações', icon: 'vi-send'},
            {type: 'a', link: '/minhas', text: 'Minhas votações', icon: 'vi-heart'},
            {type: 'button', link: '/nova', text: 'Nova votação', icon: 'vi-plus'},
            {type: 'li', link: '/sair', text: 'Sair', icon: 'vi-logout', logout: true},
        ]"></NavBar>

        <main>
            <div class="pad-2">
                <h3 class="marb-2 whiter">Minhas votações</h3>

                <div class="grid grid__3">
                    <div v-for="i in votes" v-bind:key="i" class="card">
                        <div class="pad">
                            <header>
                                <div class="flex__column">
                                    <span class="card__header__info">
                                        {{ i.name }} |  
                                        <span v-if="i.typeVote == 'one'">Escolha única</span>
                                        <span v-if="i.typeVote == 'two'">Escolha binária</span>
                                        <span v-if="i.typeVote == 'many'">Escolha multipla</span> |
                                        <span class="card__header__info weight__600 red__text" v-if="new Date(i.limitDate) < new Date()">Fechado</span>
                                        <span class="card__header__info weight__600 green__text" v-if="new Date(i.limitDate) > new Date()">Aberto</span>
                                    </span>
                                    <span class="card__header__info">{{new Date(i.limitDate).toLocaleString()}}</span>
                                </div>
                            </header>
                            <p class="text">
                                {{ i.description }}
                            </p>
                        </div>

                        <div class="card__footer">
                            <div class="item">{{ i.itens.length }} itens</div>
                            <div class="item">{{ '9' }} votos</div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import { stateRead } from './../store/user_store'
    import NavBar from '@/components/navBar.vue'
    import { apiVoting } from '../apis'
    
    export default {
        components: {
            NavBar,
        },

        data: () => ({
            state: stateRead,
            votes: []
        }),

        mounted() {
            this.getMys()
        },

        methods: {
            getMys() {
                apiVoting.get('/vote/showme/' + this.state.userId)
                    .then(re => {
                        this.votes = re.data.votes
                    })
            }
        }
    }
</script>

<style lang="scss" scoped>
    main {
        background-image: url('./../assets/img/back.svg');
        min-height: 100vh;

        .whiter{
            color: #fff;
        }
    }
    
</style>