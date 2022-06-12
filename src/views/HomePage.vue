<template>
  <div class="home">
    <img
      alt="Vue logo"
      :src="require('@/assets/logo.svg')"
      height="200"
      Width="200"
    />
    <hello-world msg="Welcome to Your Vue.js + TypeScript App" />
    <teleport to="head">
      <meta
        name="keyword"
        content="template,typescript,vue2,vue-property-decorator,vue-class-component,vite,vite-template,volar"
      />
      <meta name="description" content="Vite Vue2 TypeScript Demo" />
      <pre :is="'script'" type="application/ld+json">
{
  '@context': 'http://schema.org',
  '@type': 'WebSite',
  name: 'Vite Vue2 TypeScript Startar',
  url: 'https://github.com/logue/vite-vue2-ts-starter',
  logo: '{{ require('@/assets/logo.svg') }}',
  description: 'Vite Vue2 TypeScript Demo Page',
}
      </pre>
    </teleport>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import HelloWorld from '@/components/HelloWorld.vue';
import Teleport from 'vue2-teleport';

@Component({ components: { HelloWorld, Teleport } })
/** Home Component */
export default class HomePage extends Vue {
  /*
  // Props
  @Prop({ type: String, default: 'prop' })
  readonly prop: string = 'prop';

  // Model and Data
  data: string | null = null;

  // Computed
  get computed(): string {
    return this.$store.getters.computed;
  }

  // Watch
  @Watch('$route', { immediate: true })
  onRouteChanged(): void {
    // ...
  }

  // created or mounted etc.
  created(): void {
    // ...
  }

  // Methods
  methods(): string {
    return 'method';
  }
  */
}
</script>
