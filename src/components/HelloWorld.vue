<template>
  <div class="hello">
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
        href="https://github.com/underfin/vite-plugin-vue2#readme"
        target="_blank"
        rel="noopener"
      >
        vite-plugin-vue2 documentation
      </a>
      .
    </p>
    <h3>Installed Vite Plugins</h3>
    <ul>
      <li>
        <a href="https://v3.router.vuejs.org/" target="_blank" rel="noopener">
          router
        </a>
      </li>
      <li>
        <a href="https://v3.vuex.vuejs.org/" target="_blank" rel="noopener">
          vuex
        </a>
      </li>
      <li>
        <a
          href="https://github.com/ModyQyW/vite-plugin-eslint"
          target="_blank"
          rel="noopener"
        >
          eslint
        </a>
      </li>
      <li>
        <a
          href="https://github.com/ModyQyW/vite-plugin-stylelint"
          target="_blank"
          rel="noopener"
        >
          stylelint
        </a>
      </li>
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
          href="https://github.com/vuejs/composition-api"
          target="_blank"
          rel="noopener"
        >
          @vue/composition-api
        </a>
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
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
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
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
        <a href="https://devtools.vuejs.org/" target="_blank" rel="noopener">
          vue-devtools
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
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

import type MetaInterface from '@/interfaces/MetaInterface';
import Meta from '@/Meta';

@Component
/** HelloWorld Component */
export default class HelloWorld extends Vue {
  /** Meta information */
  readonly meta: MetaInterface = Meta;

  /** Prop message */
  @Prop()
  readonly msg!: string;
}
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
