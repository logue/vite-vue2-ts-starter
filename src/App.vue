<template>
  <div id="app">
    <header>
      <img
        :src="logo"
        class="logo vue"
        alt="Vue logo"
        width="125"
        height="125"
      />
      <div class="wrapper">
        <hello-world msg="vite-vue2-ts-starter" />
        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
        </nav>
      </div>
    </header>
    <router-view />
    <teleport to="head">
      <meta
        name="keyword"
        content="template, typescript, vue2, vue-property-decorator, vue-class-component, vite, vite-template, composition-api, volar"
      />
      <meta name="description" content="Vite Vue2 TypeScript Demo" />
      <link rel="icon" :href="logo" type="image/svg+xml" />
      <component :is="'script'" :type="'application/ld+json'">
        {{ jsonLd }}
      </component>
    </teleport>
  </div>
</template>

<script lang="ts">
import { defineComponent, type SetupContext } from 'vue';

import logo from '@/assets/vue.svg';
import HelloWorld from '@/components/HelloWorld.vue';

/** App Component */
export default defineComponent({
  components: {
    HelloWorld,
  },
  /**
   * Setup
   *
   * @param _props - Props
   * @param _context - Context
   */
  setup(_props, _context: SetupContext) {
    document.title = import.meta.env.VITE_APP_TITLE || 'Vite Vue2 Application';

    /** JSON LD Sample */
    const jsonLd = JSON.stringify(
      {
        '@schema': 'https://json.schemastore.org/jsonld.json',
        '@context': 'http://schema.org',
        '@type': 'WebSite',
        name: 'Vite Vue2 TypeScript Startar',
        url: 'https://github.com/logue/vite-vue2-ts-starter',
        logo,
        description: 'Vite Vue2 TypeScript Demo Page',
      },
      null,
      2
    );

    return {
      logo,
      jsonLd,
    };
  },
});
</script>

<style lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  will-change: filter;

  &:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

    &:first-of-type {
      border-left: none;
    }

    &.router-link-exact-active {
      color: var(--color-text);

      &:active {
        background-color: transparent;
      }
    }
  }
}

code {
  font-size: 0.875em;
  color: #d63384;
  word-wrap: break-word;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);

    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
