import { createRouter, createWebHashHistory } from 'vue-router'
import Hamburguesas from "../Views/Hamburguesas.vue"
import Perros from "../Views/Perros.vue"
import Pizzas from "../Views/Pizzas.vue"
import Bebidas from "../Views/Bebidas.vue"
import Postres from "../Views/Postres.vue"
import Promociones from "../Views/Promociones.vue"
import Nosotros from "../Views/Nosotros.vue"

const routes = [
    { path: "/", component: Promociones },
    { path: "/hamburguesas", component: Hamburguesas },
    { path: "/perros", component: Perros },
    { path: "/pizzas", component: Pizzas },
    { path: "/bebidas", component: Bebidas },
    { path: "/postres", component: Postres },
    { path: "/nosotros", component: Nosotros }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router