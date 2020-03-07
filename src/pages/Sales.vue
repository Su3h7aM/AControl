<template>
  <ItemList :title="name" :items="items" />
</template>

<script>
import ItemList from "components/ItemList";

export default {
  name: "Sales",
  components: {
    ItemList
  },
  data() {
    return {
      items: this.$store.state.teste.ordereds,
      name: this.$store.state.pouch.db_name
    };
  }
};
</script>
