<template>
  <div class="home">
    <the-Welcome />
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, type SetupContext } from 'vue';

// import { useStore } from '@logue/vue2-helpers/vuex';
import { useRoute } from 'vue-router/composables';

// Components
import TheWelcome from '@/components/TheWelcome.vue';

/** Home Component */
export default defineComponent({
  /** Components */
  components: {
    TheWelcome,
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
  },
});
</script>
