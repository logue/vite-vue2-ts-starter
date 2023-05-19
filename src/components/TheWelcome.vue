<template>
  <div>
    <welcome-item>
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>Documentation</template>
      Vue' s
      <a href="https://v2.vuejs.org/" target="_blank" rel="noopener">
        official documentation
      </a>
      provides you with all information you need to get started.
    </welcome-item>

    <welcome-item>
      <template #icon>
        <tooling-icon />
      </template>
      <template #heading>Tooling</template>
      This project is served and bundled with
      <a
        href="https://vitejs.dev/guide/features.html"
        target="_blank"
        rel="noopener"
      >
        Vite
      </a>
      . The recommended IDE setup is
      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener">
        VSCode
      </a>
      +
      <a
        href="https://github.com/johnsoncodehk/volar"
        target="_blank"
        rel="noopener"
      >
        Volar
      </a>
      <br />
      More instructions are available in
      <code>README.md</code>
      .
    </welcome-item>

    <welcome-item>
      <template #icon>
        <ecosystem-icon />
      </template>
      <template #heading>Ecosystem</template>

      Get official tools and libraries for your project:
      <a href="https://v3.vuex.vuejs.org/" target="_blank" rel="noopener">
        Vuex
      </a>
      ,
      <a href="https://v3.router.vuejs.org/" target="_blank" rel="noopener">
        Vue Router
      </a>
      ,
      <a href="https://v1.test-utils.vuejs.org/" target="_blank" rel="noopener">
        Vue Test Utils
      </a>
      , and
      <a
        href="https://github.com/vuejs/devtools"
        target="_blank"
        rel="noopener"
      >
        Vue Dev Tools
      </a>
      . If you need more resources, we suggest paying
      <a
        href="https://github.com/vuejs/awesome-vue"
        target="_blank"
        rel="noopener"
      >
        Awesome Vue
      </a>
      a visit.
    </welcome-item>

    <welcome-item>
      <template #icon>
        <plugin-icon />
      </template>
      <template #heading>Pre Installed Plugins</template>
      <a
        href="https://vitejs.dev/guide/features.html#typescript"
        target="_blank"
        rel="noopener"
      >
        typescript
      </a>
      ,
      <a
        href="https://github.com/fi3ework/vite-plugin-checker"
        target="_blank"
        rel="noopener"
      >
        vite-plugin-checker
      </a>
      ,
      <a
        href="https://github.com/btd/rollup-plugin-visualizer"
        target="_blank"
        rel="noopener"
      >
        rollup-plugin-visualizer
      </a>
      ,
      <a href="https://github.com/logue/vue2-helpers" target="_blank">
        @logue/vue2-helpers
      </a>
      .
    </welcome-item>

    <welcome-item>
      <template #icon>
        <community-icon />
      </template>
      <template #heading>Community</template>

      Got stuck? Ask your question on
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener">
        Vue Land
      </a>
      , our official Discord server, or
      <a
        href="https://stackoverflow.com/questions/tagged/vue.js"
        target="_blank"
        rel="noopener"
      >
        StackOverflow
      </a>
      . You should also subscribe to
      <a href="https://news.vuejs.org" target="_blank" rel="noopener">
        our mailing list
      </a>
      and follow the official
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">
        @vuejs
      </a>
      twitter account for latest news in the Vue world.
    </welcome-item>

    <welcome-item>
      <template #icon>
        <support-icon />
      </template>
      <template #heading>Support Vue</template>

      As an independent project, Vue relies on community backing for its
      sustainability. You can help us by
      <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">
        becoming a sponsor
      </a>
      .
    </welcome-item>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import WelcomeItem from '@/components/WelcomeItem.vue';
import CommunityIcon from '@/components/icons/IconCommunity.vue';
import DocumentationIcon from '@/components/icons/IconDocumentation.vue';
import EcosystemIcon from '@/components/icons/IconEcosystem.vue';
import PluginIcon from '@/components/icons/IconPlugin.vue';
import SupportIcon from '@/components/icons/IconSupport.vue';
import ToolingIcon from '@/components/icons/IconTooling.vue';

export default defineComponent({
  components: {
    CommunityIcon,
    DocumentationIcon,
    EcosystemIcon,
    PluginIcon,
    SupportIcon,
    ToolingIcon,
    WelcomeItem,
  },
});
</script>
