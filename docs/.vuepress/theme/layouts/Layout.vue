<template>
    <ParentLayout>
        <template #page-bottom>
            <footer class="footer">
                <div class="icons">
                    <a href="https://github.com/stefanobartoletti" target="_blank" rel="noopener noreferrer"><icon-github/></a>                    
                    <a href="https://twitter.com/ste_bartoletti" target="_blank" rel="noopener noreferrer"><icon-twitter/></a>
                    <a href="https://www.linkedin.com/in/bartolettistefano/" target="_blank" rel="noopener noreferrer"><icon-linkedin/></a>
                </div>
            </footer>
        </template>
    </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import IconTwitter from '../../components/icon-twitter.vue'
import IconLinkedin from '../../components/icon-linkedin.vue'
import IconGithub from '../../components/icon-github.vue'

export default {
  name: 'Layout',

  components: {
    ParentLayout,
    IconTwitter,
    IconLinkedin,
    IconGithub,
  }
}
</script>