<template>
  <div id="c-footer">
    <footer class="footer c-padding">
      <img src="" alt="" class="footer__img" />
      <div class="footer-top">
        <img
          class="footer-top__logo"
          src="@/assets/Logo/Breaking_Bad_logo.svg.png"
          alt=""
        />
        <ul class="footer-nav">
          <li v-for="item in menuListData" :key="item.id">
            <router-link class="footer-nav__item" :to="item.route">{{
              item.text
            }}</router-link>
          </li>
        </ul>
        <!-- / footer-nav -->
        <div class="footer-icons">
          <img
            class="footer-icons__img"
            src="@/assets/icons/fb.png"
            alt="facebook"
          />
          <img
            class="footer-icons__img"
            src="@/assets/icons/twitter.png"
            alt="twitter"
          />
          <img
            class="footer-icons__img"
            src="@/assets/icons/instagram.png"
            alt="instagram"
          />
        </div>
        <!-- / footer-icons -->
      </div>
      <!-- / footer-top -->
      <hr class="footer__divider" />
      <div class="footer-bottom">
        <div></div>
        <div class="footer-bottom-middle">
          <span class="footer-bottom-middle__text"
            >Chamber of Commerce: 88888888</span
          >
          <span class="footer-bottom-middle__text"
            >VAT: NL 1234.56.789.B01</span
          >
          <span class="footer-bottom-middle__text" href="/"
            >Terms and conditions</span
          >
        </div>
        <!-- / footer-bottom-middle -->
        <div class="footer-copyright-wrapper">
          <span class="footer-bottom__copyright"
            >&copy; 2020 Edgaras Spiridonovas</span
          >
        </div>
        <!-- / footer-copyright-wrapper -->
      </div>
      <!-- / footer-bottom -->
    </footer>
    <!-- / footer -->
    <div @click="scrollTop" class="arrow-container">
      <span class="arrow-container__button">
        <img
          class="arrow-container__img"
          src="@/assets/icons/up-arrow.svg"
          alt=""
        />
        <span class="arrow-container__text">Top</span>
      </span>
    </div>
    <!-- / arrow-container -->
  </div>
</template>

<script>
import MenuListData from "@/Data/MenuListData";

export default {
  name: "TheFooter",
  data() {
    return {
      menuListData: MenuListData,
    };
  },
  methods: {
    scrollTop() {
      if (document.scrollingElement.scrollTop === 0) return;

      const cosParameter = document.scrollingElement.scrollTop / 2;
      let scrollCount = 0,
        oldTimestamp = null;

      function step(newTimestamp) {
        if (oldTimestamp !== null) {
          scrollCount += (Math.PI * (newTimestamp - oldTimestamp)) / 900;
          if (scrollCount >= Math.PI)
            return (document.scrollingElement.scrollTop = 0);
          document.scrollingElement.scrollTop =
            cosParameter + cosParameter * Math.cos(scrollCount);
        }
        oldTimestamp = newTimestamp;
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/_theFooter.scss";
</style>
