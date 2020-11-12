<template>
    <nav class="top__menu" :style="'background-color:' + colors">
        <span></span>
        <ul>
            <router-link to="/login">
                <button class="pub only__border">Fazer login</button>
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        props: {
            colors: {
                type: String,
                default: '#fff'
            }
        }
    };
</script>