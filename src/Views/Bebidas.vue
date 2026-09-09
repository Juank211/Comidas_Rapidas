<template>
  <div class="q-pa-md-lg q-pa-sm">
    <!-- BANNER DE PORTADA DE LA CATEGORÍA -->
    <div class="hero-category-banner" style="background: url('https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <div class="western-title-frame q-mb-md">
          <h1 class="text-h3 font-western text-amber-4 q-ma-none text-uppercase text-weight-bold">
            Bebidas del Saloon
          </h1>
        </div>
        <p class="text-subtitle1 text-grey-2 text-weight-medium q-ma-none" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.9);">
          Cervezas heladas de barril, malteadas cremosas de antología, limonadas cítricas del rancho y sodas refrescantes.
        </p>
      </div>
    </div>

    <!-- SECCIÓN DE PRODUCTOS EN GRID -->
    <div class="row q-col-gutter-lg justify-center">
      <div 
        v-for="producto in bebidas" 
        :key="producto.id" 
        class="col-12 col-sm-6 col-md-4 col-lg-4"
      >
        <q-card 
          class="saloon-product-card"
          :class="{ 'chef-recommended-card': producto.esRecomendado }"
        >
          <!-- RIBBON RECOMENDACIÓN DEL CHEF -->
          <div v-if="producto.esRecomendado" class="chef-badge-ribbon">
            <q-icon name="stars" size="18px" />
            <span>Recomendación del Barman</span>
          </div>

          <!-- FOTO DEL PRODUCTO -->
          <div class="product-img-wrapper">
            <q-img 
              :src="producto.imagen" 
              :alt="producto.nombre"
              :ratio="16/10"
              loading="lazy"
              spinner-color="amber"
            >
              <template v-slot:error>
                <div class="absolute-full flex flex-center bg-brown-10 text-white">
                  Imagen no disponible
                </div>
              </template>
            </q-img>
          </div>

          <!-- CONTENIDO DE LA CARD -->
          <q-card-section class="q-pa-md col column justify-between">
            <div>
              <div class="row items-center justify-between q-mb-xs">
                <span 
                  v-if="producto.etiqueta" 
                  class="tag-badge-western"
                  :class="producto.claseEtiqueta"
                >
                  {{ producto.etiqueta }}
                </span>
                <span v-if="producto.esRecomendado" class="text-caption font-cinzel text-deep-orange-9 text-weight-bolder">
                  ★ BREBAJE MAESTRO
                </span>
              </div>

              <!-- NOMBRE -->
              <h2 class="text-h5 font-western text-brown-10 q-my-sm text-weight-bold" style="line-height: 1.2;">
                {{ producto.nombre }}
              </h2>

              <!-- INGREDIENTES / DESCRIPCIÓN -->
              <p class="text-body2 text-grey-8 q-mb-md" style="line-height: 1.45;">
                <strong class="text-brown-9">Preparación:</strong> {{ producto.ingredientes }}
              </p>
            </div>

            <!-- PRECIO Y BOTÓN DE ACCIÓN -->
            <div>
              <q-separator class="q-my-sm" color="amber-3" />
              <div class="row items-center justify-between q-pt-xs">
                <div class="price-tag-western">
                  <span class="currency-symbol">$</span>
                  <span>{{ producto.precio }}</span>
                  <span class="cop-badge">COP</span>
                </div>
                <q-btn 
                  class="btn-saloon-order"
                  icon="shopping_bag"
                  label="Pedir"
                  dense
                  unelevated
                  padding="6px 14px"
                  @click="ordenarProducto(producto)"
                />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()

const bebidas = ref([
  {
    id: 1,
    nombre: "Texas Bourbon Iced Tea (Jarra)",
    ingredientes: "Té negro artesanal infusionado en frío con notas de vainilla, zumo de limón mandarino fresco, sirope aromático de roble dulce y hierbabuena fresca en jarra rústica.",
    precio: "14.500",
    etiqueta: "🤠 Firma del Barman",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: true,
    imagen: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    nombre: "Malteada Salvaje de Brownie",
    ingredientes: "Helado artesanal de chocolate belga, leche entera fresca batida, trozos de brownie horneado al momento, corona de crema chantilly suave y sirope de chocolate espeso.",
    precio: "16.000",
    etiqueta: "⭐ Más pedida",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    nombre: "Cerveza Artesanal Forajido IPA",
    ingredientes: "Cerveza artesanal rubia premium de 330ml con lúpulos cítricos, aroma floral y amargor balanceado de barril, servida en vaso rústico escarchado con sal marina.",
    precio: "15.500",
    etiqueta: "🔥 Cerveza de Barril",
    claseEtiqueta: "tag-badge-hot",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1608270191763-7eb54f15d2a9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    nombre: "Limonada Vaquera de Frutos Rojos",
    ingredientes: "Zumo de limón natural recién exprimido combinado con reducción de moras, fresas y arándanos silvestres, endulzada con panela orgánica y mucho hielo.",
    precio: "12.000",
    etiqueta: "✨ Cítrico Frutal",
    claseEtiqueta: "tag-badge-new",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    nombre: "Soda de Maracuyá & Albahaca",
    ingredientes: "Soda mineral burbujeante con pulpa fresca de maracuyá colombiano, hojas de albahaca fresca machacadas al mortero y toques suaves de jengibre.",
    precio: "11.500",
    etiqueta: "🌱 Refrescante",
    claseEtiqueta: "tag-badge-veggie",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80"
  }
])

function ordenarProducto(prod) {
  $q.notify({
    type: 'positive',
    icon: 'check_circle',
    message: `¡${prod.nombre} añadido al pedido por $${prod.precio} COP!`,
    position: 'top',
    color: 'amber-9',
    textColor: 'black',
    timeout: 2500
  })
}
</script>