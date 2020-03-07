<template>
  <q-page padding>
    <q-list bordered>
      <q-item v-for="client in clients" :key="client.name" v-ripple clickable>
        <q-item-section avatar>
          <q-icon color="primary" name="bluetooth" />
        </q-item-section>
        <q-item-section>{{ client.name }}</q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: "Financial",
  data() {
    return {
      clients: null
    };
  },
  created() {
    this.clients = this.$store.state.teste.clients;
  }
};
</script>
