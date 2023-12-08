<template>
  <main class="home" :aria-labelledby="data.heroText !== null ? 'main-title' : null">
    <header class="hero">
      <h1 v-if="data.heroText !== null" id="main-title">
        <img src="../imgs/common/logo.svg" :alt="data.heroAlt || 'hero'" /><span>{{
          data.heroText || $title || "Hello"
        }}</span>
      </h1>
    </header>

    <div v-if="data.features && data.features.length" class="features">
      <div class="container">
        <div v-for="(feature, index) in data.features" :key="index" class="feature">
          <div class="feature-index">{{ index + 1 }}</div>
          <h2>{{ feature.title }}</h2>
          <p>{{ feature.details }}</p>
        </div>
      </div>
    </div>

    <Content class="theme-default-content custom" />

    <div class="hero">
      <p v-if="data.actionText && data.actionLink" class="action">
        <NavLink class="action-button" :item="actionLink" />
      </p>
    </div>
    <div v-if="data.footer" class="footer">
      {{ data.footer }}
    </div>
  </main>
</template>

<script>
import NavLink from "@vuepress/theme-default/components/NavLink.vue";

export default {
  name: "Home",

  components: { NavLink },

  computed: {
    data() {
      return this.$page.frontmatter;
    },

    actionLink() {
      return {
        link: this.data.actionLink,
        text: this.data.actionText,
      };
    },
  },
};
</script>

<style lang="stylus">
$accentColor =#083ac4
$homePageWidth = 1080px
.container
  max-width $homePageWidth
  margin 0px auto
  display block
.home
  padding $navbarHeight  0
  display block
  max-width initial
  margin initial
  background-color #f5f8fe
  .hero
    text-align center
    img
      width: 190px
      height 50px
      display inline-block
      margin initial
      margin-bottom 0
      margin-right 20px
      vertical-align sub
    h1
      font-size 1.5rem
      font-weight 600
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      color lighten($textColor, 40%)
    .action-button
      display inline-block
      font-size 1rem
      color #fff
      background-color $accentColor
      padding 0.4rem 2rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      &:hover
        background-color lighten($accentColor, 10%)
  .features
    border-top 1px solid $borderColor
    padding 80px 0
    background-color #fff
    margin-top 2.5rem
    .container
      display flex
      flex-wrap wrap
      align-items flex-start
      align-content stretch
      justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 27%
    border-radius 8px
    padding 20px 22px
    box-shadow 0 0 8px rgba(0,0,0,.1)
    .feature-index
      border-radius 4px
      background-color #083ac4
      width 50px
      line-height 50px
      color #fff
      font-size 20px
      text-align center
      margin-bottom 6px
      box-shadow 1px 0 0 0 rgba(0,0,0,0.1)
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      color lighten($textColor, 10%)
    p
      color lighten($textColor, 25%)
  .footer
    padding 2.5rem
    border-top 1px solid $borderColor
    text-align center
    color lighten($textColor, 25%)

@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
