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
            <div class="banner flex__column flex__justify__center flex__align__center">
                <h1>Seja bem vindo ao Voting</h1>
                <p>um projeto de votação de itens</p>

                <br>
                <div>
                    <router-link to="/nova">
                       <button class="pub">Criar uma votação</button>
                    </router-link>
                </div>
            </div>

            <div class="pad-2">
                <h2 class="marb-3">Comece a votar hoje mesmo</h2>

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
                            <div class="item">{{ '9' }} votos</div>
                            <div class="item marl-auto">
                                <router-link :to="'/vote/' + i._id">
                                    <button class="pub min">
                                        Votar
                                    </button>
                                </router-link>
                            </div>
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
        components:{
            NavBar
        },

        data: () => ({
            state: stateRead,
            votes: []
        }),

        mounted() {
            this.callVotes()
        },

        methods: {
            callVotes(){
                apiVoting.post("/vote/randomvote", {
                    user: this.state.userId,
                    q: 9
                })
                    .then((res) => {
                        console.log(res.data.vote);
                        this.votes = res.data.vote;
                    })
            }
        }
    };
</script>

<style lang="scss" scoped>
    div.banner {
        background-image: url("./../assets/img/back.svg");
        background-size: cover;
        max-width: 100%;
        height: 100vh;
        color: white;
    }
</style>