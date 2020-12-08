import { createWebHistory, createRouter } from 'vue-router';
import { setUserId, setUserEmail, stateRead } from './store/user_store.js';
import jwt from 'jsonwebtoken'

import Main from "@/views/main.vue";
import Login from "@/views/login.vue";
import Cadastro from "@/views/cadastro.vue";
import Voting from "@/views/voting.vue";
import Nova from "@/views/new.vue";
import Minha from "@/views/myVotes.vue";
import Vote from "@/views/vote.vue";

/* 
    Login
    1 - need
    0 - only unlogged
    2 - don't need

*/

const routes = [
    {
        path: '/',
        name: "Main",
        component: Main,
        loginType: '0'
    },
    
    {
        path: '/login',
        name: "Login",
        component: Login,
        loginType: '0'
    },
    
    {
        path: '/cadastro',
        name: "Cadastro",
        component: Cadastro,
        loginType: '0'
    },

    {
        path: '/home',
        name: "Home",
        component: Voting,
        loginType: '1'
    },

    {
        path: '/nova',
        name: "Nova votação",
        component: Nova,
        loginType: '1'
    },

    {
        path: '/minhas',
        name: "Minhas votações",
        component: Minha,
        loginType: '1'
    },

    {
        path: '/vote/:id',
        name: "Votação",
        component: Vote,
        loginType: '1',
        props: true
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    let routerItem = routes.find(e => e.path == to.path)

    if (!routerItem) {
        let splited = to.path.split("/")
        let links = routes.filter(e => e.path.includes(":") && e.path.split('/').length === splited.length)

        console.log(links);

        for (const i of links) {
            let l = ""
            let s = i.path.split('/')

            for (const j of s) {
                if(!j) continue

                if (j.includes(':')){
                    console.log(s.indexOf(j));
                    l += "/" + splited[s.indexOf(j)]
                }
                else{
                    l += "/" + j
                }
            }

            if (l == to.path) {
                routerItem = routes.find(e => e.path == i.path)
                break
            }
        }
    }

    if (routerItem.loginType == 1 && !localStorage.getItem("token")){
        window.location.href = "/login"
        return
    }
    
    if (routerItem.loginType == 0 && localStorage.getItem("token")){
        window.location.href = "/home"
        return
    }

    if(localStorage.getItem('token')){
        jwt.verify(localStorage.getItem('token'), 'kaizokuOu', (err, d) => {
            if (err){
                alert("Por favor faça o login")
                localStorage.clear()
                window.location.href = "/login"

                return
            }
            
            setUserId(d.id)
            setUserEmail(d.email)
            console.log(stateRead);
        })
    }

    document.title = "Voting | " + to.name
    next()
})

export default router