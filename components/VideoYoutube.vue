<template>
  <iframe
    :width="width"
    :height="height"
    :src="'https://www.youtube-nocookie.com/embed/' + vid"
    :title="title"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
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
    width: {
      type: Number,
      default: 560,
    },
    height: {
      type: Number,
      default: 315,
    },
  },
}
</script>
