<template>
  <section class="section-page">
    <span id="equipe" class="ancre"></span>
    <div class="title">
      <h2>Présentation <br />de l'équipe</h2>
    </div>
    <div class="content">
      <LoaderApple v-if="$apollo.queries.membres.loading" />
      <div v-else-if="error != ''">{{ error }}</div>
      <ul v-else class="membres">
        <li
          v-for="membre in membres"
          :key="membre.databaseId"
          class="membre"
          data-aos="zoom-in"
        >
          <div class="photo">
            <img
              class="thumbnail"
              :src="membre.photo.mediaItemUrl"
              :alt="membre.photo.altText"
            />
          </div>
          <h3>{{ membre.title }}</h3>
          <ul>
            <li v-for="role in membre.roles" :key="role">{{ role }}</li>
          </ul>
        </li>
      </ul>
    </div>
    <HomeWave :colors="['var(--clr-content3)', 'var(--clr-content4)']" />
  </section>
</template>

<script>
import { MEMBRES } from '@/apollo/queries'

export default {
  data() {
    return {
      error: '',
    }
  },
  apollo: {
    membres: {
      query: MEMBRES,
      update(data) {
        return data.membres.nodes.sort((a, b) => a.ordre - b.ordre)
      },
      error(err) {
        this.error = err.message
      },
    },
  },
  watch: {
    membres() {
      this.$nextTick(() => {
        this.$linkImages()
      })
    },
  },
}
</script>

<style lang="scss">
.membres {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap;
}

.membre {
  flex: 0 1 250px;
  color: var(--clr-secondary);
  padding: 1rem;
  text-align: center;

  h3 {
    font-size: clamp(1.5rem, 2.7vw, 2.5rem);
  }

  .photo {
    padding-bottom: 88%;
    height: 0;
    overflow: hidden;
    border-radius: 50%;
    box-shadow: 5px 5px 15px grey;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 5px 5px 20px 5px grey;
    }
  }

  img {
    max-width: 100%;
  }

  ul {
    font-size: 0.9rem;
  }
}
</style>
