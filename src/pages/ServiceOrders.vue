<template>
  <ItemList title="OS's" :items="items" />
</template>

<script>
import ItemList from "components/ItemList";

export default {
  name: "ServiceOrders",
  components: {
    ItemList
  },
  data() {
    return {
      items: this.$store.state.teste.ordereds
    };
  }
};
</script>
