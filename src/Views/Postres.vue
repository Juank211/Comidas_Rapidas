<template>
  <div class="q-pa-md-lg q-pa-sm">
    <!-- BANNER DE PORTADA DE LA CATEGORÍA -->
    <div class="hero-category-banner" style="background: url('https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <div class="western-title-frame q-mb-md">
          <h1 class="text-h3 font-western text-amber-4 q-ma-none text-uppercase text-weight-bold">
            Postres del Rancho
          </h1>
        </div>
        <p class="text-subtitle1 text-grey-2 text-weight-medium q-ma-none" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.9);">
          Brownies en sartenes de hierro fundido, pays tradicionales del campo y recetas dulces para un final glorioso.
        </p>
      </div>
    </div>

    <!-- SECCIÓN DE PRODUCTOS EN GRID -->
    <div class="row q-col-gutter-lg justify-center">
      <div 
        v-for="producto in postres" 
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
            <span>Recomendación Repostera</span>
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
                  ★ DULCE MAESTRO EN HIERRO
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

const postres = ref([
  {
    id: 1,
    nombre: "Skillet Brownie en Sartén",
    ingredientes: "Brownie tibio y melcochudo de chocolate amargo horneado en sartén de hierro fundido, nueces tostadas, bola gigante de helado de vainilla y baño de caramelo salado caliente.",
    precio: "19.500",
    etiqueta: "🤠 Estrella Dulce",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: true,
    imagen: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    nombre: "Apple Pie Rústico Vaquero",
    ingredientes: "Pay tradicional de manzanas verdes caramelizadas en mantequilla, canela y nuez moscada, envuelto en masa hojaldrada y servido con helado artesanal de crema.",
    precio: "16.500",
    etiqueta: "⭐ Más pedido",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    nombre: "Waffle Rústico Dulce de Leche",
    ingredientes: "Waffle belga recién tostado con textura crocante, bañado en abundante arequipe artesanal de paila, trozos de fresa fresca y lluvia de almendras laminadas tostadas.",
    precio: "17.000",
    etiqueta: "✨ Favorito",
    claseEtiqueta: "tag-badge-new",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1562376552-0d160a2f238d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    nombre: "Cheesecake de Frutos del Bosque",
    ingredientes: "Suave crema de queso horneada al punto sobre base crocante de galletas con mantequilla, cubierta con mermelada artesanal de moras, frambuesas y arándanos silvestres.",
    precio: "18.000",
    etiqueta: "🍰 Cremoso",
    claseEtiqueta: "tag-badge-hot",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    nombre: "S'mores Campfire Saloon",
    ingredientes: "Cazuela caliente de barro con chocolate de leche fundido, malvaviscos gigantes dorados al fuego directo y galletas de miel Graham para sumergir y compartir.",
    precio: "15.500",
    etiqueta: "🔥 Para Compartir",
    claseEtiqueta: "tag-badge-hot",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&w=800&q=80"
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