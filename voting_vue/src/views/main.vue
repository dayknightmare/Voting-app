<template>
    <div>
        <NavBar colors="#fff" :itensChildren="[
            {type: 'button', link: '/login', text: 'Login'},
        ]"></NavBar>
        <main>
            <div class="banner flex__column flex__justify__center flex_align__center padh-2">
                <h1>Bem vindo ao Voting</h1>
                <p>Um projeto de votação, para a imersão ao Vue e Vuex</p>

                <br>
                <div>
                    <router-link to="/cadastro">
                       <button class="pub">Cadastre-se</button>
                    </router-link>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
    import NavBar from '@/components/navBar.vue';

    export default {
        components:{
            NavBar
        }
    };
</script>

<style lang="scss" scoped>
    div.banner{
        max-width: 100%;
        height: 100vh;
    }
</style>