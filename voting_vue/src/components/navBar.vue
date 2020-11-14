<template>
    <nav class="top__menu" :style="'background-color:' + colors">
        <span></span>
        <ul>
            <router-link :to="i.link" v-bind:key="i" v-for="i in itensChildren.filter(e => e.type.toLowerCase() == 'a')">
                <li>{{i.text}}</li>
            </router-link>

            <li v-bind:key="i" v-for="i in itensChildren.filter(e => e.type.toLowerCase() == 'li')">
                {{i.text}}
            </li>

            <router-link :to="i.link" v-bind:key="i" v-for="i in itensChildren.filter(e => e.type.toLowerCase() == 'button')">
                <button class="pub only__border">{{i.text}}</button>
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
            },

            itensChildren: {
                type: Array,
                default: function () { return [] }
            }
        }
    };
</script>