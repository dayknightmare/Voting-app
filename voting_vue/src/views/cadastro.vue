<template>
    <div class="hv-100">
        <NavBar colors="#fff" :itensChildren="[
            {type: 'a', link: '/', text: 'Home'},
            {type: 'button', link: '/login', text: 'Login'},
        ]"></NavBar>

        <main>
            <div class="grid grid__2 h-100">
                <div class="loginImg"></div>
                <form class="flex__column flex__align__center flex__justify__center" @submit.prevent="cadastrar">
                    <div class="w-50">
                        <h3 class="padb-2">Fazer cadastro</h3>
                        <div class="input__hero__label padb-1 w-100">
                            <input class="input w-100" type="text" v-model="name" placeholder=" " required>
                            <label>Nome</label>
                        </div>

                        <div class="input__hero__label padb-1 w-100">
                            <input class="input w-100" type="email" v-model="email" placeholder=" " required>
                            <label>Email</label>
                        </div>

                        <div class="input__hero__label padb-1 w-100">
                            <input class="input w-100" type="password" v-model="password" placeholder=" " required>
                            <label>Senha</label>
                        </div>

                        <div class="input__hero__label padb-1 w-100">
                            <input class="input w-100" type="password" v-model="againPassword" placeholder=" " required>
                            <label>Confirme</label>
                        </div>

                        <button class="pub" type="submit">Fazer cadastro</button>
                    </div>
                </form>
            </div>
        </main>
    </div>
</template>

<script>
    import { apiVoting } from '../apis';
    import NavBar from '@/components/navBar.vue';

    export default {
        components:{
            NavBar
        },

        data: () => {
            return {
                name: '',
                email: '',
                password: '',
                againPassword: ''
            }
        },

        methods: {
            cadastrar() {
                if (this.password != this.againPassword){
                    return alert("As senhas não conferem")
                }   

                apiVoting.post("/cadastro", {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                })
                    .then(re => {
                        if (re.data.token){
                            localStorage.setItem('token', re.data.token)
                            window.location.href = "/home"
                        }
                        
                        else{
                            alert(re.data)
                        }
                    })
            }
        }
    };
</script>

<style lang="scss" scoped>
    div.banner{
        max-width: 100%;
        height: 100vh;
    }

    div.loginImg{
        background-image: url("../assets/img/vote.jpg");
        height: 100%;
        background-size: cover;
        background-position: center;
    }
</style>