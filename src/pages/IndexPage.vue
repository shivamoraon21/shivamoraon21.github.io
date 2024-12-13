<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-tabs align="center">
        <q-toolbar>
          <q-toolbar-title>Shivam. Oraon</q-toolbar-title>
        </q-toolbar>
        <q-btn
          v-for="item in navItems"
          :key="item.id"
          :label="item.label"
          :class="{ 'active-nav': activeSection === item.id }"
          @click="scrollTo(item.id)"
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <div v-for="item in navItems" :key="item.id" :id="item.id" class="section">
        <component :ref="item.id" :is="item.component" />
      </div>
    </q-page-container>

    <q-footer elevated>
      <q-toolbar>
        <div>© 2024 Shivam. Oraon</div>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { markRaw } from 'vue';

import HomeSection from 'components/HomeSection.vue'
import AboutSection from 'components/AboutSection.vue'
import SkillsSection from 'components/SkillsSection.vue'
import ProjectsSection from 'components/ProjectsSection.vue'
import ContactSection from 'components/ContactSection.vue'

export default {
  name: 'IndexPage',
  data() {
    return {
      navItems: [
        { id: 'home', label: 'Home', component: markRaw(HomeSection) },
        { id: 'about', label: 'About Me', component: markRaw(AboutSection) },
        { id: 'skills', label: 'Skills', component: markRaw(SkillsSection) },
        { id: 'projects', label: 'Projects', component: markRaw(ProjectsSection) },
        { id: 'contact', label: 'Contact', component: markRaw(ContactSection) },
      ],
      activeSection: 'home', // Tracks the current section in view
    }
  },
  methods: {
    scrollTo(sectionId) {
      const el = document.getElementById(sectionId)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    },
    observeSections() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              this.activeSection = entry.target.id
            }
          })
        },
        { root: null, threshold: 0.5 }, // Adjust threshold to control when the section is considered "in view"
      )

      this.navItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section) observer.observe(section)
      })
    },
  },
  mounted() {
    this.observeSections()
  },
}
</script>
