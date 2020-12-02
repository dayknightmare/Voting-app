<template>
    <div>
        <NavBar colors="#fff" :itensChildren="[
            {type: 'a', link: '/perfil', text: 'Perfil', icon: 'vi-user'},
            {type: 'a', link: '/home', text: 'Home', icon: 'vi-code-tag'},
            {type: 'a', link: '/participe', text: 'Participações', icon: 'vi-send'},
            {type: 'a', link: '/minhas', text: 'Minhas votações', icon: 'vi-heart'},
            {type: 'button', link: '/nova', text: 'Nova votação', icon: 'vi-plus'},
            {type: 'li', link: '/sair', text: 'Sair', icon: 'vi-logout'},
        ]"></NavBar>

        <main>
            <div class="flex__row flex__justify__center banner">
                <div class="w-75">
                    <form class="mar-075 pad-4 flex__column " @submit.prevent="createVoting">
                        <h3 class="marb-2">
                            Nova votação
                        </h3>
                        <div class="input__hero__label marb-1 w-100">
                            <input v-model="title" class="input w-100" type="text" placeholder=" ">
                            <label>Título</label>
                        </div>

                        <div class="input__hero__label marb-1 w-100">
                            <textarea v-model="desc" class="input w-100" type="text" placeholder=" "></textarea>
                            <label>Descrição</label>
                        </div>

                        <div class="grid grid__2">
                            <div class="input__hero__label marb-1 w-100">
                                <input v-model="dateVote" class="input w-100" type="date" placeholder=" ">
                                <label>Data limite</label>
                            </div>

                            <div class="input__hero__label marb-1 w-100">
                                <input v-model="hourVote" class="input w-100" type="time" placeholder=" ">
                                <label>Hora limite</label>
                            </div>
                        </div>

                        <p class="marb-1 mart-2">
                            Tipo de votação
                        </p>
                        <div class="grid grid__3 marb-2">
                            <div class="input__mask">
                                <label>
                                    <input type="radio" name="item_vote" value="one" v-model="voteType">
                                    <div class="mask__radio"></div>
                                    Escolha única
                                </label>
                            </div>

                            <div class="input__mask">
                                <label>
                                    <input type="radio" name="item_vote" value="two" v-model="voteType">
                                    <div class="mask__radio"></div>
                                    Escolha binária
                                </label>
                            </div>

                            <div class="input__mask">
                                <label>
                                    <input type="radio" name="item_vote" value="many" v-model="voteType">
                                    <div class="mask__radio"></div>
                                    Multipla escolha
                                </label>
                            </div>
                        </div>

                        <div class="grid grid__3">
                            <div class="item marb-1 pad-050 flex__row flex__align__center flex__justify__between" v-for="(i, index) in itens" v-bind:key="i">
                                <span>{{i}}</span>
                                <i class="vi-x" @click="removeItem(index)"></i>
                            </div>
                        </div>

                        <div class="flex__row marv-1 nowrap">
                            <div class="input__hero__label flex__align__center w-100">
                                <input class="input w-100" type="text" placeholder=" " v-model="newItem">
                                <label>Item novo</label>
                            </div>

                            <button type="button" class="pub circle rounded min marl-1 flex-auto" @click="addItem">
                                <i class="vi-plus"></i>
                            </button>
                        </div>
                        <div class="mart-2">
                            <button class="pub"><i class="vi-send"></i>&nbsp;Criar</button>
                        </div>
                    </form>
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
            itens: [
            ],

            state: stateRead,            
            newItem: '',
            dateVote: '',
            hourVote: '',
            title: '',
            desc: '',
            voteType: 'one'
        }),

        mounted() {
            console.log();
            console.log(localStorage.getItem('token'));

        },

        methods: {
            addItem() {
                if (!this.newItem.trim()) return

                this.itens.push(this.newItem)
                this.newItem = ""
            },

            removeItem(index) {
                this.itens.splice(index, 1)
            },

            createVoting() {                
                if (!(this.hourVote && this.dateVote && this.desc && this.title)) return alert("Preencha os campos")
                if (this.itens.length < 2) return alert("É preciso ter 2 itens no minímo")
                if (this.itens.length > 2 && this.voteType == 'two') return alert("É preciso ter 2 itens apenas")

                let limit = new Date(`${this.dateVote} ${this.hourVote}`);

                if (new Date() > limit) return alert("A data e hora limite precisam ser maiores que a data atual")

                apiVoting.post("/vote/create", {
                    limit: limit,
                    desc: this.desc,
                    title: this.title,
                    user: this.state.userId,
                    itens: this.itens,
                    typeVote: this.voteType
                }).then(() => {
                    window.location = "/home"
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

    .nowrap{
        flex-wrap: nowrap !important;
    }

    .flex-auto{
        flex: 0 0 auto;
    }

    .item{
        background: rgb(239, 239, 242);
        border-radius: 6px;
        font-size: .85rem;
    }
</style>