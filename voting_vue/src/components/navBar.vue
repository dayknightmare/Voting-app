<template>
    <nav class="top__menu" :style="'background-color:' + colors">
        <span></span>
        <ul>
            <div v-for="i in itensChildren" v-bind:key="i">

                <router-link :to="i.link" v-if="i.type.toLowerCase() == 'a'">
                    <li>
                        <i :class="i.icon + ' padr-025'" v-if="i.icon"></i>
                        {{i.text}}
                    </li>
                </router-link>

                <li v-if="i.type.toLowerCase() == 'li'">
                    <i :class="i.icon + ' padr-025'" v-if="i.icon"></i>
                    {{i.text}}
                </li>

                <router-link :to="i.link" v-if="i.type.toLowerCase() == 'button'">
                    <button class="pub only__border">
                        <i :class="i.icon + ' padr-025'" v-if="i.icon"></i>
                        {{i.text}}
                    </button>
                </router-link>
            </div>
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
        },
    };
</script>