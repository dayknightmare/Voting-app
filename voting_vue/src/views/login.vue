<template>
    <div>
        <NavBar colors="#fff"></NavBar>
        <main>
            <div class="grid grid__2">
                <div></div>
                <form class="padt-4">
                    <h3 class="padb-2">Fazer login</h3>
                    <div class="input__hero__label padb-1 w-50">
                        <input class="input w-100" type="text" placeholder=" ">
                        <label>Email</label>
                    </div>

                    <div class="input__hero__label padb-1 w-50">
                        <input class="input w-100" type="text" placeholder=" ">
                        <label>Senha</label>
                    </div>

                    <button class="pub">Fazer login</button>
                </form>
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