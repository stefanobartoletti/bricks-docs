<template>
    <ParentLayout>
        <template #page-bottom>
            <footer class="footer">
                <div class="copyright">
                    ©2021-present <a href="https://www.stefanobartoletti.it" target="_blank">Stefano Bartoletti</a>
                </div>
                <div class="icons">
                    
                </div>
            </footer>
        </template>
    </ParentLayout>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  name: 'Layout',

  components: {
    ParentLayout
  }
}
</script>