<script>
import {defineComponent} from 'vue'
import Camera from "@/models/camera";

export default defineComponent({
  name: "Camera",
  data() {
    return {
      camera: new Camera('', '', '')
    }
  },
  methods: {
    handleCamera() {
      if (this.camera.url && this.camera.name) {
        this.$store.dispatch('cameras/postCamera', this.camera).then(response => {
          this.$store.dispatch('cameras/getAllCameras')
          this.camera = new Camera('', '', '')
        })
      }
    }
  }
})
</script>

<template>
  <v-card max-width="500">
    <v-form name="form" @submit.prevent="handleCamera">
      <v-text-field
        v-model="camera.url"
        label="Ссылка на камеру"
      ></v-text-field>

      <v-text-field
        v-model="camera.name"
        label="Название камеры"
      ></v-text-field>

      <v-text-field
        v-model="camera.description"
        label="Описание камеры"
      ></v-text-field>

      <v-btn type="submit" block class="mt-2">Создать</v-btn>
    </v-form>
  </v-card>
</template>

<style scoped>
.v-form {
  padding: 10px;
}
.v-card {
  margin: 0 auto;
}
</style>
