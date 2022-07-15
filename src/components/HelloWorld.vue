<template>
  <div class="hello">
    <section>
      <h1 v-text="msg" />
      <p>
        Build:
        <time
          :datetime="meta.date"
          v-text="new Date(meta.date).toLocaleString()"
        />
      </p>
      <p>
        For a guide and recipes on how to configure / customize this project,
        <br />
        check out the
        <a
          href="https://github.com/vitejs/vite-plugin-vue2#readme"
          target="_blank"
          rel="noopener"
        >
          vite-plugin-vue2
        </a>
        .
      </p>
      <p>
        Edit
        <code>components/HelloWorld.vue</code>
        to test HMR
      </p>
    </section>
    <section>
      <h3>Installed Vite Plugins</h3>
      <ul>
        <li>
          <a
            href="https://vitejs.dev/guide/features.html#typescript"
            target="_blank"
            rel="noopener"
          >
            typescript
          </a>
        </li>
        <li>
          <a
            href="https://github.com/fi3ework/vite-plugin-checker"
            target="_blank"
            rel="noopener"
          >
            vite-plugin-checker
          </a>
        </li>
        <li>
          <a
            href="https://github.com/btd/rollup-plugin-visualizer"
            target="_blank"
            rel="noopener"
          >
            rollup-plugin-visualizer
          </a>
        </li>
      </ul>
    </section>
    <section>
      <h3>Essential Links</h3>
      <ul>
        <li>
          <a href="https://vuejs.org" target="_blank" rel="noopener">
            Core Docs
          </a>
        </li>
        <li>
          <a href="https://forum.vuejs.org" target="_blank" rel="noopener">
            Forum
          </a>
        </li>
        <li>
          <a href="https://chat.vuejs.org" target="_blank" rel="noopener">
            Community Chat
          </a>
        </li>
        <li>
          <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">
            Twitter
          </a>
        </li>
        <li>
          <a href="https://news.vuejs.org" target="_blank" rel="noopener">
            News
          </a>
        </li>
        <li>
          <a
            href="https://github.com/vuejs/awesome-vue"
            target="_blank"
            rel="noopener"
          >
            awesome-vue
          </a>
        </li>
      </ul>
    </section>
    <section>
      <h3>Ecosystem</h3>
      <ul>
        <li>
          <a href="https://v3.router.vuejs.org" target="_blank" rel="noopener">
            vue-router
          </a>
        </li>
        <li>
          <a href="https://v3.vuex.vuejs.org" target="_blank" rel="noopener">
            vuex
          </a>
        </li>
        <li>
          <a
            href="https://github.com/logue/vue2-helpers"
            target="_blank"
            rel="noopener"
          >
            @logue/vue2-helpers
          </a>
        </li>
        <li>
          <a href="https://devtools.vuejs.org/" target="_blank" rel="noopener">
            vue-devtools
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Mechazawa/vue2-teleport"
            target="_blank"
            rel="noopener"
          >
            vue2-teleport
          </a>
        </li>
        <li>
          <a
            href="https://class-component.vuejs.org/"
            target="_blank"
            rel="noopener"
          >
            vue-class-component
          </a>
        </li>
        <li>
          <a
            href="https://github.com/kaorun343/vue-property-decorator"
            target="_blank"
            rel="noopener"
          >
            vue-property-decorator
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, type Ref, type SetupContext } from 'vue';

import type MetaInterface from '@/interfaces/MetaInterface';
import Meta from '@/Meta';

/** HelloWorld Component */
export default defineComponent({
  props: {
    /** Prop message */
    msg: { type: String, required: true },
  },
  /**
   * Setup
   *
   * @param _props - Props
   * @param _context - Context
   */
  setup(_props, _context: SetupContext) {
    /** Meta information */
    const meta: Ref<MetaInterface> = ref(Meta);

    return {
      meta,
    };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
