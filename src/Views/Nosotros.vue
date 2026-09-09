<template>
  <div class="q-pa-md-lg q-pa-sm">
    <!-- BANNER DE PORTADA -->
    <div class="hero-category-banner" style="background: url('https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <div class="western-title-frame q-mb-md">
          <h1 class="text-h3 font-western text-amber-4 q-ma-none text-uppercase text-weight-bold">
            La Historia de El Saloon
          </h1>
        </div>
        <p class="text-subtitle1 text-grey-2 text-weight-medium q-ma-none" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.9);">
          Tradición de leña, cortes seleccionados y el auténtico espíritu del Viejo Oeste en cada bocado.
        </p>
      </div>
    </div>

    <!-- SECCIÓN: HISTORIA DEL RESTAURANTE -->
    <div class="row q-col-gutter-lg q-mb-xl">
      <div class="col-12 col-md-7">
        <div class="wanted-frame" style="height: 100%;">
          <div class="row items-center q-mb-md">
            <q-icon name="local_fire_department" color="deep-orange-9" size="32px" class="q-mr-sm" />
            <h2 class="text-h4 font-western text-brown-10 q-ma-none">Nuestra Leyenda</h2>
          </div>
          <p class="text-body1 text-grey-9 text-weight-medium q-mb-md" style="line-height: 1.7;">
            Fundado con la convicción de rescatar los sabores rústicos de las fogatas vaqueras, <strong>El Saloon</strong> nació como un homenaje a la cocina sin prisas: carnes maduradas asadas a fuego lento con madera de roble, panes horneados diariamente en nuestros propios fogones y salsas secretas que combinan el dulce del bourbon con el picante ahumado de los mejores ajíes.
          </p>
          <p class="text-body1 text-grey-9 text-weight-medium q-mb-none" style="line-height: 1.7;">
            No somos solo una parada rápida; somos el refugio de los hambrientos forasteros y cuadrillas familiares que buscan porciones generosas, ingredientes frescos de granjas locales y una experiencia gastronómica que te transporta a los saloons más legendarios.
          </p>
        </div>
      </div>

      <!-- UBICACIÓN, HORARIOS Y CONTACTO -->
      <div class="col-12 col-md-5">
        <div class="saloon-product-card q-pa-lg" style="height: 100%;">
          <div class="row items-center q-mb-md">
            <q-icon name="storefront" color="amber-10" size="30px" class="q-mr-sm" />
            <h3 class="text-h5 font-western text-brown-10 q-ma-none">El Campamento Base</h3>
          </div>

          <div class="q-mb-md">
            <div class="text-subtitle2 font-cinzel text-brown-9 q-mb-xs">
              <q-icon name="place" color="red-9" size="20px" /> Dirección:
            </div>
            <p class="text-body2 text-grey-9 q-pl-md q-ma-none text-weight-bold">
              Carrera 45 # 72 - 19, Boulevard del Oeste, Bucaramanga, Colombia
            </p>
          </div>

          <q-separator class="q-my-sm" color="amber-3" />

          <div class="q-mb-md">
            <div class="text-subtitle2 font-cinzel text-brown-9 q-mb-xs">
              <q-icon name="schedule" color="amber-10" size="20px" /> Horarios de Atención:
            </div>
            <ul class="text-body2 text-grey-9 q-pl-md q-ma-none" style="list-style-type: square;">
              <li><strong>Lunes a Jueves:</strong> 12:00 PM – 10:30 PM</li>
              <li><strong>Viernes y Sábados:</strong> 12:00 PM – 11:45 PM</li>
              <li><strong>Domingos y Festivos:</strong> 1:00 PM – 10:00 PM</li>
            </ul>
          </div>

          <q-separator class="q-my-sm" color="amber-3" />

          <div>
            <div class="text-subtitle2 font-cinzel text-brown-9 q-mb-xs">
              <q-icon name="phone" color="green-9" size="20px" /> Pedidos y Reservas:
            </div>
            <p class="text-body2 text-grey-9 q-pl-md q-mb-sm">
              Línea fija: <strong>(607) 645-8920</strong>
            </p>
            <div class="row q-gutter-sm q-mt-xs">
              <q-btn 
                color="positive" 
                icon="chat" 
                label="WhatsApp Pedidos" 
                class="col"
                unelevated
                href="https://wa.me/573105557890?text=Hola%20El%20Saloon,%20quiero%20hacer%20un%20pedido%20del%20menú"
                target="_blank"
              />
              <q-btn 
                color="primary" 
                icon="call" 
                label="Llamar" 
                unelevated
                href="tel:+576076458920"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- SECCIÓN: NUESTRO EQUIPO DEL SALOON -->
    <div class="text-center q-mb-lg">
      <div class="western-title-frame">
        <h2 class="text-h4 font-western text-amber-4 q-ma-none text-uppercase">
          La Cuadrilla del Saloon
        </h2>
      </div>
      <p class="text-subtitle1 text-grey-3 q-mt-sm">
        Conoce a los maestros del fuego, servicio y velocidad que hacen posible cada experiencia.
      </p>
    </div>

    <div class="row q-col-gutter-lg justify-center">
      <div 
        v-for="miembro in equipo" 
        :key="miembro.id" 
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card class="saloon-product-card text-center">
          <div class="product-img-wrapper" style="height: 280px;">
            <q-img 
              :src="miembro.foto" 
              :alt="miembro.nombre"
              height="100%"
              loading="lazy"
              spinner-color="amber"
            />
          </div>
          <q-card-section class="q-pa-md">
            <span class="tag-badge-western tag-badge-popular q-mb-xs">
              {{ miembro.rol }}
            </span>
            <h3 class="text-h5 font-western text-brown-10 q-my-xs text-weight-bold">
              {{ miembro.nombre }}
            </h3>
            <p class="text-caption font-cinzel text-deep-orange-9 text-weight-bold q-mb-sm">
              "{{ miembro.apodo }}"
            </p>
            <p class="text-body2 text-grey-8 q-ma-none">
              {{ miembro.descripcion }}
            </p>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const equipo = ref([
  {
    id: 1,
    nombre: "Don Mateo Sterling",
    apodo: "El Maestro Parrillero",
    rol: "Chef Ejecutivo & Ahumador",
    foto: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=80",
    descripcion: "Más de 15 años dominando el humo de leña de roble, cortes madurados y fórmulas secretas de marinados vaqueros."
  },
  {
    id: 2,
    nombre: "Elena Montgomery",
    apodo: "La Capitana del Saloon",
    rol: "Jefa de Servicio & Caja",
    foto: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    descripcion: "Encargada de brindar la bienvenida más cálida, coordinar la cuadrilla de mesa y garantizar pedidos sin esperas."
  },
  {
    id: 3,
    nombre: "Lucas 'Relámpago' Castro",
    apodo: "El Jinete de las Rutas",
    rol: "Jefe de Domicilios Express",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    descripcion: "Conoce cada rincón de la ciudad para llevar las hamburguesas y pizzas hirviendo hasta la puerta de tu rancho."
  }
])
</script>