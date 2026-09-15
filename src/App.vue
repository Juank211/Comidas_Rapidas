<template>
  <q-layout view="hHh lpR fFf" class="bg-wood">

    <!-- HEADER ESTILO SALOON VIEJO OESTE -->
    <q-header elevated class="western-header" height-hint="110">
      <q-toolbar class="q-py-xs">
        <q-btn 
          dense 
          flat 
          round 
          icon="menu" 
          color="amber-4" 
          aria-label="Menu" 
          class="lt-md"
          @click="toggleLeftDrawer" 
        />

        <q-toolbar-title class="row items-center q-py-xs cursor-pointer" @click="$router.push('/')">
          <q-avatar size="46px" class="q-mr-sm shadow-3 border-gold">
            <img alt="Saloon Logo" src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=120&q=80">
          </q-avatar>
          <div>
            <div class="font-western text-amber-4 text-h5 text-weight-bolder tracking-wider" style="text-shadow: 2px 2px 4px rgba(0,0,0,0.9);">
              🌵 EL SALOON
            </div>
            <div class="text-caption font-cinzel text-amber-2" style="font-size: 0.68rem; letter-spacing: 1.5px;">
              COMIDAS RÁPIDAS • DESDE 1885
            </div>
          </div>
        </q-toolbar-title>

        <!-- BOTÓN WHATSAPP HEADER -->
        <q-btn 
          flat
          dense
          rounded
          color="positive" 
          icon="chat" 
          label="Pedir al WhatsApp" 
          class="gt-sm font-cinzel text-weight-bold"
          href="https://wa.me/573105557890?text=Hola%20El%20Saloon,%20quiero%20hacer%20un%20pedido"
          target="_blank"
        />
      </q-toolbar>

      <!-- BARRA DE NAVEGACIÓN (TABS) -->
      <q-tabs 
        align="center" 
        dense
        indicator-color="amber-4" 
        active-color="amber-3" 
        class="western-tabs text-grey-4 gt-sm"
      >
        <q-route-tab to="/" icon="local_offer" label="Promociones" exact />
        <q-route-tab to="/hamburguesas" icon="lunch_dining" label="Hamburguesas" />
        <q-route-tab to="/perros" icon="fastfood" label="Perros" />
        <q-route-tab to="/pizzas" icon="local_pizza" label="Pizzas" />
        <q-route-tab to="/bebidas" icon="local_drink" label="Bebidas" />
        <q-route-tab to="/postres" icon="icecream" label="Postres" />
        <q-route-tab to="/nosotros" icon="groups" label="Nosotros" />
      </q-tabs>
    </q-header>

    <!-- DRAWER LATERAL PARA MÓVILES -->
    <q-drawer 
      v-model="leftDrawerOpen" 
      side="left" 
      overlay 
      behavior="mobile" 
      bordered 
      class="western-drawer q-pa-md column justify-between"
    >
      <div>
        <div class="text-center q-mb-lg q-pt-sm">
          <q-avatar size="64px" class="q-mb-sm border-gold shadow-5">
            <img alt="Saloon Logo" src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=120&q=80">
          </q-avatar>
          <div class="font-western text-amber-4 text-h5">EL SALOON</div>
          <div class="text-caption font-cinzel text-grey-4">Menú del Viejo Oeste</div>
        </div>

        <q-separator color="amber-7" class="q-mb-md" />

        <div class="column q-gutter-sm">
          <q-btn flat align="left" color="amber-3" icon="local_offer" label="Promociones" to="/" @click="leftDrawerOpen = false" class="drawer-link-btn" />
          <q-btn flat align="left" color="amber-3" icon="lunch_dining" label="Hamburguesas" to="/hamburguesas" @click="leftDrawerOpen = false" class="drawer-link-btn" />
          <q-btn flat align="left" color="amber-3" icon="fastfood" label="Perros" to="/perros" @click="leftDrawerOpen = false" class="drawer-link-btn" />
          <q-btn flat align="left" color="amber-3" icon="local_pizza" label="Pizzas" to="/pizzas" @click="leftDrawerOpen = false" class="drawer-link-btn" />
          <q-btn flat align="left" color="amber-3" icon="local_drink" label="Bebidas" to="/bebidas" @click="leftDrawerOpen = false" class="drawer-link-btn" />
          <q-btn flat align="left" color="amber-3" icon="icecream" label="Postres" to="/postres" @click="leftDrawerOpen = false" class="drawer-link-btn" />
          <q-btn flat align="left" color="amber-3" icon="groups" label="Nosotros" to="/nosotros" @click="leftDrawerOpen = false" class="drawer-link-btn" />
        </div>
      </div>

      <div class="q-pt-md">
        <q-btn 
          color="positive" 
          icon="chat" 
          label="Pedir por WhatsApp" 
          class="full-width font-cinzel text-weight-bold" 
          unelevated
          href="https://wa.me/573105557890?text=Hola%20El%20Saloon,%20quiero%20hacer%20un%20pedido"
          target="_blank"
        />
      </div>
    </q-drawer>

    <!-- CONTENEDOR PRINCIPAL DE PÁGINA -->
    <q-page-container>
      <div class="main-content-wrapper">
        <router-view />
      </div>
    </q-page-container>

    <!-- PIE DE PÁGINA RÚSTICO -->
    <q-footer elevated class="western-footer text-grey-4">
      <div class="q-pa-lg">
        <div class="row q-col-gutter-lg items-center justify-between">
          <div class="col-12 col-md-4 text-center text-md-left">
            <div class="font-western text-amber-4 text-h6">🌵 EL SALOON</div>
            <div class="text-caption text-grey-4 q-mt-xs">
              El auténtico sabor del Lejano Oeste con carnes a la leña, pizzas en horno de piedra y recetas legendarias.
            </div>
          </div>

          <div class="col-12 col-md-4 text-center">
            <div class="text-subtitle2 font-cinzel text-amber-3">HORARIOS DE ATENCIÓN</div>
            <div class="text-caption text-grey-4">Lunes a Sábados: 12:00 PM - 11:30 PM</div>
            <div class="text-caption text-grey-4">Domingos y Festivos: 1:00 PM - 10:00 PM</div>
          </div>

          <div class="col-12 col-md-4 text-center text-md-right">
            <div class="text-subtitle2 font-cinzel text-amber-3">PEDIDOS A DOMICILIO</div>
            <div class="text-body2 text-weight-bold text-white">WhatsApp: 310 555 7890</div>
            <div class="text-caption text-grey-4">Bucaramanga, Colombia</div>
          </div>
        </div>

        <q-separator color="brown-8" class="q-my-md" />

        <div class="text-center text-caption text-grey-5 font-cinzel">
          &copy; 2026 El Saloon Comidas Rápidas. Todos los derechos reservados.
        </div>
      </div>
    </q-footer>

  </q-layout>
</template>

<script setup>
import { ref } from 'vue'

const leftDrawerOpen = ref(false)
function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.western-header {
  background: 
    linear-gradient(180deg, rgba(20, 10, 4, 0.98), rgba(40, 18, 8, 0.98)),
    repeating-linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3) 0px,
      rgba(0, 0, 0, 0.3) 2px,
      transparent 2px,
      transparent 35px
    ) !important;
  border-bottom: 3px solid #b45309;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.8) !important;
}

.western-tabs {
  background: rgba(18, 9, 3, 0.6);
  border-top: 1px solid rgba(245, 158, 11, 0.2);
  font-family: 'Cinzel', serif;
  font-size: 0.95rem;
  letter-spacing: 0.8px;
}

.western-drawer {
  background: 
    linear-gradient(180deg, #1f0f06 0%, #30160a 100%) !important;
  border-right: 4px solid #b45309 !important;
}

.drawer-link-btn {
  font-family: 'Cinzel', serif;
  font-size: 1rem;
  font-weight: 700;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.drawer-link-btn:hover {
  background: rgba(245, 158, 11, 0.15) !important;
}

.border-gold {
  border: 2px solid #f59e0b;
}

.western-footer {
  background: 
    linear-gradient(180deg, #1a0c04 0%, #100602 100%) !important;
  border-top: 3px solid #b45309;
}

.main-content-wrapper {
  max-width: 1280px;
  margin: 0 auto;
  min-height: calc(100vh - 170px);
}

.pulse-btn {
  animation: pulse-glow 2s infinite;
}

@keyframes pulse-glow {
  0% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
  }
  70% {
    box-shadow: 0 0 0 15px rgba(34, 197, 94, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
  }
}
</style>