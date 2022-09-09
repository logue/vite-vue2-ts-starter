<template>
  <div class="home">
    <a href="https://vitejs.dev" target="_blank">
      <img :src="require('@/assets/vite.svg')" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="require('@/assets/vue.svg')" class="logo vue" alt="Vue logo" />
    </a>
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
    <teleport to="head">
      <meta
        name="keyword"
        content="template, typescript, vue2, vue-property-decorator, vue-class-component, vite, vite-template, composition-api, volar"
      />
      <meta name="description" content="Vite Vue2 TypeScript Demo" />
      <component :is="'script'" type="application/ld+json">
        {{ jsonLd }}
      </component>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, type Ref, type SetupContext } from 'vue';
// import { useStore } from '@logue/vue2-helpers/vuex';
import { useRoute } from 'vue-router/composables';

// Components
import HelloWorld from '@/components/HelloWorld.vue';

// Logo
import vueLogo from '@/assets/vue.svg';

/** Home Component */
export default defineComponent({
  /** Components */
  components: {
    HelloWorld,
  },
  /** Props */
  props: {
    prop: { type: String, default: 'prop' },
  },
  /**
   * Setup
   *
   * @param _props - Props
   * @param _context - Context
   */
  setup(_props, _context: SetupContext) {
    /** Route */
    const route = useRoute();
    /** Vuex */
    // const store = useStore();

    /** JSON LD Sample */
    const jsonLd: Ref<string> = ref(
      JSON.stringify(
        {
          '@schema': 'https://json.schemastore.org/jsonld.json',
          '@context': 'http://schema.org',
          '@type': 'WebSite',
          name: 'Vite Vue2 TypeScript Startar',
          url: 'https://github.com/logue/vite-vue2-ts-starter',
          logo: vueLogo,
          description: 'Vite Vue2 TypeScript Demo Page',
        },
        null,
        2
      )
    );

    /* *
     * Computed
     * /
    const computedValue: Ref<string> = computed({
      get: () => store.getters.computedValue,
      set: v => store.dispatch('setComputedValue', v)
    }
     */

    // Watch
    watch(
      () => route?.name,
      name => console.log('route is changed:', name)
    );

    return {
      jsonLd,
    };
  },
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
