<template>
    <div class="hv-100">
        <NavBar colors="#fff" :itensChildren="[
            {type: 'a', link: '/', text: 'Home'},
            {type: 'button', link: '/cadastro', text: 'Cadastro'},
        ]"></NavBar>

        <main>
            <div class="grid grid__2 h-100">
                <div class="loginImg"></div>
                <form class="flex__column flex__align__center flex__justify__center" @submit.prevent="makeLogin">
                    <div class="w-50">
                        <h3 class="padb-2">Fazer login</h3>
                        <div class="input__hero__label marb-1 w-100">
                            <input class="input w-100" type="email" v-model="email" placeholder=" " required>
                            <label>Email</label>
                        </div>

                        <div class="input__hero__label marb-1 w-100">
                            <input class="input w-100" type="password" v-model="password" placeholder=" " required>
                            <label>Senha</label>
                        </div>

                        <button class="pub">Fazer login</button>
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
                email: '',
                password: '',
            }
        },

        methods: {
            makeLogin() {
                apiVoting.post("/login", {
                    email: this.email,
                    password: this.password
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
        background-image: url("../assets/img/login.jpg");
        height: 100%;
        background-size: cover;
        background-position: center;
    }
</style>