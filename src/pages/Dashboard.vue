<template>
  <q-page padding class="flex flex-center">
    <img src="../statics/icons/icon-512x512.png" alt="" :width="250" />
  </q-page>
</template>

<script>
export default {
  name: "Dashboard",
  computed: {
    layout() {
      return this.$q.screen.lt.sm
        ? "dense"
        : this.$q.screen.lt.md
        ? "comfortable"
        : "loose";
    }
  }
};
</script>
