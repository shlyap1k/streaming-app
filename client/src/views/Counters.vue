<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Counters",
  data() {
    return {
      refreshInterval: null,
      countersData: []
    };
  },
  computed: {
    counters() {
      // Объект для хранения последних временных меток для каждого URL
      const latestTimestamps = {};

      // Перебираем массив данных и обновляем последние временные метки для каждого URL
      this.$store.state.counters.all.forEach(item => {
        const url = item.url;
        const timestamp = item.timestamp;
        const people_count = item.people_count;

        // Если для данного URL еще нет временной метки или текущая метка больше сохраненной
        if (!latestTimestamps[url] || timestamp > latestTimestamps[url].timestamp) {
          latestTimestamps[url] = {timestamp, people_count};
        }
      });

      // Создаем массив объектов с последней временной меткой для каждого URL
      const resultArray = Object.keys(latestTimestamps).map(url => {
        return {
          url: url,
          urlToShow: url,
          latestTimestamp: latestTimestamps[url].timestamp,
          people_count: latestTimestamps[url].people_count
        };
      });

      return resultArray
    },
    cameras() {
      return this.$store.state.cameras.all
    },

  },
  mounted() {
    this.$store.dispatch('counters/getAllCounters')
    this.$store.dispatch('cameras/getAllCameras').then(() => {
      this.countersData = this.counters
    })
    this.startRefreshing();
  },
  methods: {
    cameraInfo(url) {
      if (this.$store.state.cameras.all) {
        return this.$store.state.cameras.all.filter((camera) => {
          return camera.url === url
        })[0]
      }
      return {name: "asdf", description: "asdf"}
    },
    getTimedImageUrl(url) {
      const timestamp = new Date().getTime();
      return `${url}&timestamp=${timestamp}`;
    },
    startRefreshing() {
      this.refreshInterval = setInterval(() => {
        this.countersData = this.countersData.map((counter) => {
          return {
            ...counter,
            url: this.getTimedImageUrl(counter.url),
          };
        });
      }, 2000);
    },
  }
})
</script>

<template>
  <v-container>
    <v-card >
      <v-card-title>
        Камера в тренажерном зале
      </v-card-title>
      <v-card-text>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI8PtLbPCMQtzXW0AVdV28DmEJkb-ucmXEs3pDxW5f8zv7EMhl5vqriL9qyuw_oCCBZSs&usqp=CAU" alt="image from camera"/>
      </v-card-text>
      <v-card-item>
        <p>Количество человек: 0</p>
      </v-card-item>
    </v-card>
    <v-card >
      <v-card-title>
        Камера на спортивной площадке
      </v-card-title>
      <v-card-text>
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.webcam-oko.ru%2Fsportzaly-fitness%2F&psig=AOvVaw2zP8qog_98FIpUczeEdwEg&ust=1717099080508000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCNDRhtnSs4YDFQAAAAAdAAAAABBX" alt="image from camera"/>
      </v-card-text>
      <v-card-item>
        <p>Количество человек: 0</p>
      </v-card-item>
    </v-card>
    Всего: 0
  </v-container>
</template>
