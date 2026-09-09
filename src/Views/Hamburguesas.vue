<template>
  <div class="q-pa-md-lg q-pa-sm">
    <!-- BANNER DE PORTADA DE LA CATEGORÍA -->
    <div class="hero-category-banner" style="background: url('https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <div class="western-title-frame q-mb-md">
          <h1 class="text-h3 font-western text-amber-4 q-ma-none text-uppercase text-weight-bold">
            Hamburguesas Artesanales
          </h1>
        </div>
        <p class="text-subtitle1 text-grey-2 text-weight-medium q-ma-none" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.9);">
          Carne 100% de res seleccionada y asada a fuego de roble, pan brioche artesanal y tocineta premium ahumada en leña.
        </p>
      </div>
    </div>

    <!-- SECCIÓN DE PRODUCTOS EN GRID -->
    <div class="row q-col-gutter-lg justify-center">
      <div 
        v-for="producto in hamburguesas" 
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
                  ★ CORTE MASTER PARRILLERO
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

const hamburguesas = ref([
  {
    id: 1,
    nombre: "La Gran Forajida 350g",
    ingredientes: "Doble carne de res madurada asada a la brasa, queso cheddar añejo fundido, tocineta crujiente glaseada en maple, cebolla caramelizada al bourbon, salsa tártara ahumada y pan brioche artesanal.",
    precio: "32.500",
    etiqueta: "🤠 Firma de la Casa",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: true,
    imagen: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    nombre: "Sheriff Bacon BBQ",
    ingredientes: "200g de res a la parrilla, queso gouda derretido, doble porción de tocineta crocante, aros de cebolla apanados y crujientes, salsa BBQ ahumada con toques de miel y pan brioche.",
    precio: "26.500",
    etiqueta: "⭐ Más pedido",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    nombre: "Texas Fire Jalapeño",
    ingredientes: "200g de res jugosa, queso pepper jack fundido, jalapeños encurtidos al barril, tocineta, lechuga romana fresca, rodajas de tomate maduro y mayonesa artesanal de chipotle.",
    precio: "27.000",
    etiqueta: "🔥 Picante",
    claseEtiqueta: "tag-badge-hot",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1583032015879-63ff13d2f2b3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    nombre: "El Paso Pulled Pork",
    ingredientes: "180g de carne de res a la parrilla coronada con bondiola de cerdo desmechada cocinada por 8 horas en salsa BBQ dulce, queso suizo gratinado y ensalada coleslaw fresca.",
    precio: "29.000",
    etiqueta: "✨ Nuevo",
    claseEtiqueta: "tag-badge-new",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    nombre: "La Vaquera Portobello",
    ingredientes: "Medallón de hongo portobello marinado en ajo y hierbas asado al carbón, queso mozzarella derretido, pimientos morrones asados, rúcula fresca y aderezo cremoso de aguacate.",
    precio: "25.000",
    etiqueta: "🌱 Vegetariano",
    claseEtiqueta: "tag-badge-veggie",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=800&q=80"
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