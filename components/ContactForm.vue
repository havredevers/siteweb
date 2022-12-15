<template>
  <div>
    <!-- <LoaderApple v-if="$apollo.queries.page.loading" /> -->
    <div v-if="error" class="form-msg form-error">
      Une erreur est apparue lors de l'envoi de votre message : <br />{{
        error
      }}
    </div>
    <div v-else-if="isSent" class="form-msg form-success">
      Votre message a bien été envoyé.
    </div>
    <form
      v-else
      aria-label="Formulaire de contact"
      method="post"
      novalidate
      @submit="submit($event)"
    >
      <div>
        <label for="name">Votre nom</label>
        <input
          id="name"
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
        <label for="email"> Votre e-mail</label>
        <input
          id="email"
          v-model="saisie.email"
          autocomplete="email"
          name="your-email"
          required=""
          type="email"
          minlength="8"
          aria-required="true"
          placeholder="Votre e-mail"
        />
        <p class="valid-feedback">OK !</p>
        <p class="invalid-feedback">Veuillez saisir une adresse email valide</p>
      </div>
      <div>
        <label for="subject">Sujet</label>
        <input
          id="subject"
          v-model="saisie.objet"
          name="your-subject"
          required=""
          type="text"
          minlength="5"
          aria-required="true"
          placeholder="Sujet"
        />
        <p class="valid-feedback">OK !</p>
        <p class="invalid-feedback">
          Veuillez saisir un objet pour votre demande
        </p>
      </div>
      <div>
        <label for="message">Votre message</label>
        <textarea
          id="message"
          v-model="saisie.msg"
          name="your-message"
          required=""
          minlength="20"
          rows="10"
          aria-required="true"
          placeholder="Votre message"
        ></textarea>
        <p class="valid-feedback">OK !</p>
        <p class="invalid-feedback">Veuillez saisir votre demande</p>
      </div>
      <button class="cta">Envoyer</button>
    </form>
  </div>
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

      if (form.checkValidity()) {
        form.classList.add('sent')
        this.sendMail()
      } else {
        form.classList.add('submitted')
      }
    },
    sendMail() {
      this.$apollo
        .mutate({
          mutation: SEND_MAIL,
          variables: {
            replyTo: this.saisie.email,
            subject: this.saisie.objet,
            body:
              this.saisie.nom +
              ' vous a écrit un message sur le site Internet du Havre de Vers :<br>' +
              this.saisie.msg,
          },
        })
        .then((data) => {
          this.isSent = data.data.sendEmail.sent
          if (!this.isSent) {
            this.setError(data.data.sendEmail.message)
          }
        })
        .catch((error) => {
          this.setError(error)
        })
    },
    setError(str) {
      this.error = str
    },
  },
}
</script>

<style lang="scss">
.form-msg {
  font-family: var(--font-changa);
  text-align: center;
  font-size: clamp(1.1rem, 3vw, 2rem);
  color: white;
  margin-bottom: 1rem;
  border-radius: 15px;
  padding: 0.5rem;
}

.form-error {
  background-color: var(--clr-secondary);
}

.form-success {
  background-color: var(--clr-primary);
}

.valid-feedback,
.invalid-feedback {
  display: none;
  font-weight: 300;
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
  transition: all 0.3s ease-in-out;

  label {
    font-family: var(--font-changa);
    letter-spacing: 0.1em;
  }

  input,
  textarea {
    margin: 0.5rem 0;
    border-radius: 0.375rem;
    padding: 0.375rem 0.75rem;
    appearance: none;
    border: 1px solid #ced4da;
    line-height: 1.5;
    font-size: 1rem;
  }

  *:focus-visible {
    border-color: var(--clr-secondary);
    outline: none;
    box-shadow: 0 0 0 0.25rem rgba(227, 173, 137, 0.5);
  }

  & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  &.sent {
    opacity: 0;
  }

  &.submitted {
    :not(button):valid {
      border: 1px solid var(--clr-primary);

      &:focus-visible {
        box-shadow: 0 0 0 0.25rem rgba(132, 170, 75, 0.5);
      }

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
