<template>
  <div class="q-pa-md-lg q-pa-sm">
    <!-- BANNER DE PORTADA DE LA CATEGORÍA -->
    <div class="hero-category-banner" style="background: url('https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1600&q=80') center/cover no-repeat;">
      <div class="banner-overlay"></div>
      <div class="banner-content">
        <div class="western-title-frame q-mb-md">
          <h1 class="text-h3 font-western text-amber-4 q-ma-none text-uppercase text-weight-bold">
            Pizzas Rústicas a la Leña
          </h1>
        </div>
        <p class="text-subtitle1 text-grey-2 text-weight-medium q-ma-none" style="text-shadow: 1px 1px 4px rgba(0,0,0,0.9);">
          Masa madre fermentada 48 horas, salsa de tomates San Marzano ahumados y queso fundido al horno de piedra.
        </p>
      </div>
    </div>

    <!-- SECCIÓN DE PRODUCTOS EN GRID -->
    <div class="row q-col-gutter-lg justify-center">
      <div 
        v-for="producto in pizzas" 
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
                  ★ HORNO DE PIEDRA MASTER
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

const pizzas = ref([
  {
    id: 1,
    nombre: "Gran Búfalo Suprema (Familiar)",
    ingredientes: "Base de masa madre artesanal, salsa BBQ bourbon ahumada, trozos de carne de res desmechada al carbón, tocineta ahumada, pepperoni curado, pimientos asados, queso mozzarella fundido y orégano fresco.",
    precio: "42.000",
    etiqueta: "🤠 Joya del Saloon",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: true,
    imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    nombre: "Pepperoni Salvaje del Oeste",
    ingredientes: "Doble porción de pepperoni rústico crocante, salsa de tomates San Marzano confitados con ajo asado, queso mozzarella de búfala fundido y orégano silvestre de monte.",
    precio: "36.500",
    etiqueta: "⭐ Más pedido",
    claseEtiqueta: "tag-badge-popular",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    nombre: "Texas BBQ Chicken & Bacon",
    ingredientes: "Pechuga de pollo jugosa marinada en especias sureñas, tocineta ahumada crocante, cebolla morada caramelizada, salsa BBQ dulce con miel de maple y abundante queso gouda.",
    precio: "38.000",
    etiqueta: "🔥 Favorita",
    claseEtiqueta: "tag-badge-hot",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    nombre: "Cuatro Quesos de la Pradera",
    ingredientes: "Combinación suprema de queso mozzarella, queso gorgonzola madurado, queso parmesano añejado y queso provolone ahumado, terminada con hilo de miel pura de abejas y nueces picadas.",
    precio: "39.500",
    etiqueta: "✨ Gourmet",
    claseEtiqueta: "tag-badge-new",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1573821663912-569905455b1c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    nombre: "Campirana de Champiñones",
    ingredientes: "Champiñones frescos salteados en mantequilla de ajo y vino blanco, pimientos morrones asados a la leña, aceitunas negras, rúcula fresca, aceite de oliva virgen extra y queso mozzarella.",
    precio: "34.000",
    etiqueta: "🌱 Vegetariana",
    claseEtiqueta: "tag-badge-veggie",
    esRecomendado: false,
    imagen: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80"
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