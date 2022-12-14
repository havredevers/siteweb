<template>
  <form
    aria-label="Formulaire de contact"
    method="post"
    novalidate
    @submit="submit($event)"
  >
    <div>
      <label> Votre nom </label>
      <input
        v-model="saisie.nom"
        autocomplete="name"
        name="your-name"
        required=""
        type="text"
        minlength="5"
        aria-required="true"
        placeholder="Votre nom"
      />
      <p class="valid-feedback">OK !</p>
      <p class="invalid-feedback">Veuillez saisir un nom</p>
    </div>
    <div>
      <label> Votre e-mail</label>
      <input
        v-model="saisie.email"
        autocomplete="email"
        name="your-email"
        required=""
        type="email"
        minlength="8"
        aria-required="true"
      />
      <p class="valid-feedback">OK !</p>
      <p class="invalid-feedback">Veuillez saisir une adresse email valide</p>
    </div>
    <div>
      <label> Objet</label>
      <input
        v-model="saisie.objet"
        name="your-subject"
        required=""
        type="text"
        minlength="5"
        aria-required="true"
      />
      <p class="valid-feedback">OK !</p>
      <p class="invalid-feedback">
        Veuillez saisir un objet pour votre demande
      </p>
    </div>
    <div>
      <label> Votre message</label>
      <textarea
        v-model="saisie.msg"
        name="your-message"
        required=""
        minlength="20"
        rows="10"
        aria-required="true"
      ></textarea>
      <p class="valid-feedback">OK !</p>
      <p class="invalid-feedback">Veuillez saisir votre demande</p>
    </div>
    <button class="cta">Envoyer</button>
  </form>
</template>

<script>
import { SEND_MAIL } from '@/apollo/queries'

export default {
  data() {
    return {
      isSent: false,
      error: '',
      saisie: {
        nom: '',
        email: '',
        objet: '',
        msg: '',
      },
    }
  },
  methods: {
    submit(e) {
      e.preventDefault()
      e.stopPropagation()

      const form = e.target
      form.classList.add('submitted')
      console.log(form)

      if (form.checkValidity()) {
        this.sendMail()
      }
    },
    sendMail() {
      // const saisie = this.saisie
      Object.entries(this.saisie).forEach((el) => {
        el = ''
      })

      this.$apollo
        .mutate({
          mutation: SEND_MAIL,
          // variables: {
          //   label: newTag,
          // },
          // update: (store, { data: { addTag } }) => {
          //   console.log(store)
          //   console.log(addTag)
          // },
        })
        .then((data) => {
          console.log(data)
        })
        .catch((error) => {
          this.error = error
        })
    },
  },
}
</script>

<style lang="scss">
.valid-feedback,
.invalid-feedback {
  display: none;
}

.valid-feedback {
  color: var(--clr-primary);
}

.invalid-feedback {
  color: var(--clr-secondary);
}

form {
  max-width: 500px;
  margin: auto;

  & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  &.submitted {
    :not(button):valid {
      border: 1px solid var(--clr-primary);

      & ~ .valid-feedback {
        display: block;
      }
    }

    :invalid {
      border: 1px solid var(--clr-secondary);

      & ~ .invalid-feedback {
        display: block;
      }
    }
  }
}
</style>
