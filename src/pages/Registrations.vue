<template>
  <div class="q-pa-md" style="max-width: 800px">
    <q-form class="q-gutter-md" @submit="onSubmit" @reset="onReset">
      <q-input
        v-model="client"
        filled
        label="Cliente"
        hint="Pessoa fisíca ou jurídica"
        lazy-rules
        :rules="[
          val => (val && val.length > 0) || 'Por favor informe um cliente'
        ]"
      />

      <q-input
        v-model="price"
        style="max-width: 200px"
        filled
        type="float"
        label="Preço"
        lazy-rules
        :rules="[
          val => (val !== null && val !== '') || 'Por favor defina um preço',
          val => val > 0 || 'O preço não pode ser negativo'
        ]"
      />

      <q-input
        v-model="date"
        filled
        :rules="[v => /^[0-3]\d\/[0-1]\d\/-?[\d]+$/.test(v)]"
        style="max-width: 150px"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date
                v-model="date"
                mask="DD/MM/YYYY"
                @input="() => $refs.qDateProxy.hide()"
              />
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>

      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn
          label="Reset"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>
  </div>
</template>

<script>
import { date } from "quasar";

export default {
  name: "Registrations",
  data() {
    return {
      client: null,
      price: null,
      date: date.formatDate(Date.now(), "DD/MM/YYYY")
    };
  },
  methods: {
    onSubmit() {
      console.log("onSubmit");
    },
    onReset() {
      this.client = null;
      this.price = null;
      this.date = date.formatDate(Date.now(), "DD/MM/YYYY");
    }
  }
};
</script>
