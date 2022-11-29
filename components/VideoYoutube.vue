<template>
  <div class="video-responsive">
    <iframe
      width="560"
      height="315"
      :src="'https://www.youtube-nocookie.com/embed/' + vid"
      :title="title"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: {
    vid: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      default: 'YouTube video player',
    },
  },
}
</script>

<style lang="scss">
.video-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;

  iframe {
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    position: absolute;
  }
}
</style>
