<template>
  <div class="q-pa-md-lg q-pa-sm">
    <!-- BANNER DE PORTADA DE LA CATEGORÍA -->
    <div class="hero-category-banner" style="background: url('https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <div class="western-title-frame q-mb-md">
          <h1 class="text-h3 font-western text-amber-4 q-ma-none text-uppercase text-weight-bold">
            Promociones del Saloon
          </h1>
        </div>
        <p class="text-subtitle1 text-grey-2 text-weight-medium q-ma-none" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.9);">
          ¡Ofertas salvajes y combos legendarios cocinados a fuego de leña para calmar el hambre de toda la cuadrilla!
        </p>
      </div>
    </div>

    <!-- SECCIÓN DE PRODUCTOS EN GRID -->
    <div class="row q-col-gutter-lg justify-center">
      <div 
        v-for="producto in promociones" 
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
              <div v-if="producto.esRecomendado" class="row items-center justify-end q-mb-xs">
                <span class="text-caption font-cinzel text-deep-orange-9 text-weight-bolder">
                  ★ ESPECIAL DEL SALOON
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

const promociones = ref([
  {
    id: 1,
    nombre: "Combo Duelo al Sol",
    ingredientes: "2 Hamburguesas artesanales de 150g, queso cheddar fundido, tocineta ahumada, cebolla crispy, salsa BBQ del Saloon, porción doble de papas rústicas y 2 bebidas de 400ml.",
    precio: "38.500",
    etiqueta: "⭐ Más pedido",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    nombre: "Gran Banquete del Sheriff",
    ingredientes: "2 Hamburguesas Dobles Forajidas (carne madurada 300g c/u), 1 Perro Salvaje con tocineta, 8 Alitas glaseadas en BBQ bourbon, 2 porciones de papas sazonadas y 4 gaseosas.",
    precio: "68.900",
    etiqueta: "🤠 Especial Cuadrilla",
    claseEtiqueta: "tag-badge-hot",
    esRecomendado: true,
    imagen: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    nombre: "Martes 2x1 Perros Vaqueros",
    ingredientes: "2 Perros calientes jumbo con salchicha americana ahumada, queso mozzarella gratinado al soplete, tocineta crocante, ripio de papa artesanal y salsa tártara de la casa.",
    precio: "22.000",
    etiqueta: "🏷️ Promo 2x1",
    claseEtiqueta: "tag-badge-promo",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    nombre: "Fiesta Vaquera Pizza & Wings",
    ingredientes: "1 Pizza familiar de 8 porciones a la leña (BBQ carnes y tocineta) acompañada de 8 alitas crocantes bañadas en salsa Jack Daniel's y gaseosa de 1.5 litros.",
    precio: "52.000",
    etiqueta: "✨ Nuevo",
    claseEtiqueta: "tag-badge-new",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    nombre: "Combo Forastero Individual",
    ingredientes: "1 Hamburguesa Texas Bacon con queso pepper jack, aros de cebolla crocantes, salsa ahumada, papas francesas doradas y limonada natural con hierbabuena.",
    precio: "24.500",
    etiqueta: "🔥 Individual",
    claseEtiqueta: "tag-badge-hot",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
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