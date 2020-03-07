<template>
  <div class="q-pa-md">
    <q-table :title="title" :data="data" :columns="columns" row-key="name" />
  </div>
</template>

<script>
export default {
  name: "ItemList",
  props: {
    title: {
      type: String,
      default: "Table"
    },
    items: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      data: this.items,
      columns: [
        {
          name: "pedido",
          required: true,
          label: "N° Pedido",
          align: "left",
          field: row => row.pedido,
          format: val => `${val}`,
          sortable: true
        },
        {
          name: "cliente",
          align: "center",
          label: "Cliente",
          field: "cliente",
          sortable: true
        },
        {
          name: "data",
          align: "center",
          label: "Data",
          field: "data",
          sortable: true
        },
        {
          name: "valor",
          align: "center",
          label: "Valor",
          field: "valor",
          sortable: true
        },
        {
          name: "status",
          align: "center",
          label: "Status",
          field: "status",
          sortable: true
        }
      ]
    };
  }
};
</script>
