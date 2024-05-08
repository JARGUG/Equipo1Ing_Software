<template>
  <v-row>
    <!-- seccion de busqueda -->
    <v-col cols="6">
      <v-card-title>
        Busqueda
      </v-card-title>
      <v-text-field>
        <template #prepend>
          <v-icon>mdi-magnify</v-icon>
        </template>
      </v-text-field>
      <!-- Filtros de busqueda -->
      <v-container>
        <v-sheet class="mx-auto" max-width="600">
          <v-slide-group show-arrows>
            <v-slide-group-item
              v-for="n in 25"
              :key="n"
              v-slot="{ isSelected, toggle }"
            >
              <v-btn
                :color="isSelected ? 'primary' : undefined"
                class="ma-2"
                rounded
                @click="toggle"
              >
                Options {{ n }}
              </v-btn>
            </v-slide-group-item>
          </v-slide-group>
        </v-sheet>
      </v-container>
      <!-- viajes disponibles -->
      <v-card>
        <v-card-title>Card</v-card-title>
        <v-card-text>
          <p>Contenido de la card</p>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- seccion de card anuncios =============================== -->
    <v-col cols="6" min-width="600">
      <v-card min-width>
        <v-card-title>Card</v-card-title>
        <v-card-text>
          <p>Contenido de la card</p>
        </v-card-text>
      </v-card>
      <v-img
        :width="100"
        :heidht="100"
        aspect-ratio="16/9"
        cover
        src="static/img_cinturon.jpg"
      />
      <div class="new_container">
        <div class="info">
          <div class="new_title"></div>
          <div class="new_discription"></div>
        </div>
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>
  template {
    font-size: 1.5em;
    background-color: aliceblue;
    color: white;
  }

  .img_new {
    height: 10px;
    width: 30px;
  }
  .new_container {
    display: flex;
  }
</style>
