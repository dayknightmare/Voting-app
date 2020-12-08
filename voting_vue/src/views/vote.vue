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
            <div class="banner">
                <div class="flex__row flex__justify__center banner">
                    <div class="w-75">
                        <form class="mar-075 pad-4 flex__column">
                            <h3>
                                {{ vote.name }}
                            </h3>
                            <p>
                                {{ vote.description }}
                            </p>
                            <br>
                            <br>
                            <div v-if="vote.typeVote == 'many'" class="grid grid__4">
                                <div class="input__mask" v-for="i in vote.itens"  v-bind:key="i">
                                    <label>
                                        <input type="checkbox" name="item">
                                        <div class="mask__checkbox"></div>
                                        <span>{{ i.name }}</span>
                                    </label>
                                </div>
                            </div>

                            <div v-if="vote.typeVote == 'one'" class="grid grid__4">
                                <div class="input__mask" v-for="i in vote.itens"  v-bind:key="i">
                                    <label>
                                        <input type="radio" name="item">
                                        <div class="mask__radio"></div>
                                        <span>{{ i.name }}</span>
                                    </label>
                                </div>
                            </div>

                            <div class="mart-3">
                                <button class="pub">
                                    Salvar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import { stateRead } from './../store/user_store'
    import NavBar from '../components/navBar'
    import { apiVoting } from '../apis'

    export default {
        components: {
            NavBar
        },

        props: {
            id: route => ({ search: route.query.q }),
        },

        data: () => ({
            state: stateRead,
            vote: {}
        }),

        mounted() {
            this.getVote()
        },
        
        methods: {
            getVote(){
                apiVoting.post('/vote/' + this.id, {
                    user: this.state.userId
                })
                    .then(res => {
                        this.vote = res.data.vote
                    }) 
            }
        }
    }
</script>

<style lang="scss" scoped>
    div.banner {
        background-image: url("./../assets/img/backgroundForm.svg");
        background-size: cover;
        max-width: 100%;
        min-height: 100vh;
        background-attachment: fixed;

        form {
            background-color: white;
            border-radius: 8px;
            box-shadow: 0 0 10px -2px rgba(26, 26, 26, .2);
        }
    }
</style>