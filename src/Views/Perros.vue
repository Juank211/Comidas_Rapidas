<template>
  <div class="q-pa-md-lg q-pa-sm">
    <!-- BANNER DE PORTADA DE LA CATEGORÍA -->
    <div class="hero-category-banner" style="background: url('https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <div class="western-title-frame q-mb-md">
          <h1 class="text-h3 font-western text-amber-4 q-ma-none text-uppercase text-weight-bold">
            Perros Calientes Salvajes
          </h1>
        </div>
        <p class="text-subtitle1 text-grey-2 text-weight-medium q-ma-none" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.9);">
          Salchichas jumbo tipo americana ahumadas en leña de manzano, pan suave horneado a diario y toppings generosos del viejo oeste.
        </p>
      </div>
    </div>

    <!-- SECCIÓN DE PRODUCTOS EN GRID -->
    <div class="row q-col-gutter-lg justify-center">
      <div 
        v-for="producto in perros" 
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
            <span>Recomendación del Chef</span>
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
                  ★ GIGANTE DEL OESTE
                </span>
              </div>

              <!-- NOMBRE -->
              <h2 class="text-h5 font-western text-brown-10 q-my-sm text-weight-bold" style="line-height: 1.2;">
                {{ producto.nombre }}
              </h2>

              <!-- INGREDIENTES / DESCRIPCIÓN -->
              <p class="text-body2 text-grey-8 q-mb-md" style="line-height: 1.45;">
                <strong class="text-brown-9">Ingredientes:</strong> {{ producto.ingredientes }}
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

const perros = ref([
  {
    id: 1,
    nombre: "Monster Saloon Dog 22cm",
    ingredientes: "Salchicha jumbo artesanal de 22cm envuelta en tocineta crocante, queso mozzarella gratinado al soplete, guacamole rústico al cilantro, ripio de papa casero y salsa tártara de ajo confitado.",
    precio: "24.500",
    etiqueta: "🤠 Coloso del Saloon",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: true,
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    nombre: "Texas Cowboy Chili Dog",
    ingredientes: "Salchicha americana a la parrilla, bañada en abundante chili con carne molida sazonada y frijoles negros, queso cheddar fundido, cebolla morada picada y nachos crujientes.",
    precio: "21.000",
    etiqueta: "⭐ Más pedido",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1627054234036-7c01b1a7cf73?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    nombre: "Fire Bandit Jalapeño",
    ingredientes: "Salchicha alemana ahumada, láminas de jalapeño encurtido al barril, tocineta crocante en cubos, crema de queso pepper jack y lluvia de tocineta caramelizada.",
    precio: "22.500",
    etiqueta: "🔥 Picante",
    claseEtiqueta: "tag-badge-hot",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    nombre: "Ranchero Bacon & Corn",
    ingredientes: "Salchicha ahumada a la leña, tiras de tocineta glaseada en BBQ de la casa, maíz tierno dulce salteado en mantequilla, cebolla crispy y salsa ranch casera con perejil fresco.",
    precio: "20.000",
    etiqueta: "✨ Nuevo",
    claseEtiqueta: "tag-badge-new",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    nombre: "Clásico Callejero Vaquero",
    ingredientes: "Salchicha americana tradicional, queso costeño rallado, ripio de papa artesanal crocante, dulce de piña melada al caldero y combinación clásica de salsas de la casa.",
    precio: "17.500",
    etiqueta: "🌾 Tradicional",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1599599810694-b5b37304c041?auto=format&fit=crop&w=800&q=80"
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