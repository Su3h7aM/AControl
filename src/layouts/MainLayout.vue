<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-brand">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          AControl
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      content-class="bg-grey-1"
      :width="225"
    >
      <q-list>
        <q-item-label header />
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
      <q-list>
        <q-expansion-item
          :content-inset-level="0"
          expand-separator
          icon="o_mail"
          label="Outros"
          default-closed
        >
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon name="smartphone"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  Clientes
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="account_box"></q-icon>
              </q-item-section>
              <q-item-section>
                <q-item-label>
                  Fornecedores
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-expansion-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";

export default {
  name: "MainLayout",

  components: {
    EssentialLink
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "Dashboard",
          icon: "home",
          link: "/dashboard"
        },
        {
          title: "Ordens de Serviços",
          icon: "receipt",
          link: "/serviceorders"
        },
        {
          title: "Vendas",
          icon: "store",
          link: "/sales"
        },
        {
          title: "Financeiro",
          icon: "account_balance_wallet",
          link: "/financial"
        },
        {
          title: "Cadastros",
          icon: "business_center",
          link: "/registrations"
        },
        {
          title: "Relatórios",
          icon: "description",
          link: "/reports"
        }
      ]
    };
  }
};
</script>

<style lang="sass">
.bg-brand
  background-color: #203d79
</style>
