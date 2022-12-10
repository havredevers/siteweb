<template>
  <div id="modal" class="modal" @click="closeModal">
    <span class="close" @click="closeModal">&times;</span>
    <img />
    <div class="caption"></div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$el.style.display = 'none'
    },
  },
}
</script>

<style lang="scss">
@keyframes zoom {
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
}

.modal {
  display: none;
  position: fixed;
  z-index: 1500;
  padding-top: 100px;
  inset: 0;
  width: 100%;
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);

  img {
    margin: auto;
    display: block;
    width: 100%;
    max-width: 1000px;

    @media (min-width: 700px) {
      width: 80%;
    }
  }

  .caption {
    margin: auto;
    display: block;
    width: 80%;
    max-width: 700px;
    text-align: center;
    color: #ccc;
    padding: 10px 0;
    height: 150px;
  }

  img,
  .caption {
    animation-name: zoom;
    animation-duration: 0.6s;
  }

  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;

    &:hover,
    &:focus {
      color: #bbb;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
