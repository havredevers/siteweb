<template>
  <div>
    <LoaderApple v-if="isLoading" />
    <div v-else-if="error" class="form-msg form-error">
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
      <div class="form-item">
        <input
          id="name"
          v-model="saisie.nom"
          autocomplete="off"
          name="your-name"
          required=""
          type="text"
          minlength="5"
          aria-required="true"
          :class="{
            filled: saisie.nom !== '',
          }"
        />
        <label for="name">Votre nom&nbsp;<sup>*</sup></label>
        <span class="line"></span>
        <p class="valid-feedback">Votre saisie est valide.</p>
        <p class="invalid-feedback">Veuillez saisir un nom</p>
      </div>
      <div class="form-item">
        <input
          id="email"
          v-model="saisie.email"
          autocomplete="off"
          name="your-email"
          required=""
          type="email"
          minlength="8"
          aria-required="true"
          :class="{
            filled: saisie.email !== '',
          }"
        />
        <label for="email">Votre e-mail&nbsp;<sup>*</sup></label>
        <span class="line"></span>
        <p class="valid-feedback">Votre saisie est valide.</p>
        <p class="invalid-feedback">Veuillez saisir une adresse email valide</p>
      </div>
      <div class="form-item">
        <textarea
          id="message"
          v-model="saisie.msg"
          name="your-message"
          required=""
          minlength="20"
          aria-required="true"
          :class="{
            filled: saisie.msg !== '',
          }"
        ></textarea>
        <label for="message">Votre message&nbsp;<sup>*</sup></label>
        <span class="line"></span>
        <p class="valid-feedback">Votre saisie est valide.</p>
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
      isLoading: false,
      error: '',
      saisie: {
        nom: '',
        email: '',
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
        this.isLoading = true
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
            subject: '[Contact Site] ' + this.saisie.nom + ' vous a écrit',
            body:
              this.saisie.nom +
              ' ( ' +
              this.saisie.email +
              ' ) ' +
              ' vous a écrit un message sur le site Internet du Havre de Vers :<br><br>' +
              this.saisie.msg,
          },
        })
        .then((data) => {
          this.isLoading = false
          this.isSent = data.data.sendEmail.sent
          if (!this.isSent) {
            this.setError(data.data.sendEmail.message)
          }
        })
        .catch((error) => {
          this.isLoading = false
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

.form-item {
  position: relative;
  border-bottom: 2px solid var(--clr-font);
  margin-bottom: 65px;
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

  .line {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;

    &::before {
      content: '';
      display: block;
      position: absolute;
      background: var(--clr-secondary);
      bottom: -2px;
      left: 0;
      width: 0;
      height: 2px;
      transition: all 0.4s;
    }
  }

  .cta {
    margin: 1rem 0;
  }

  label {
    font-family: var(--font-changa);
    color: grey;
    letter-spacing: 0.1em;
    position: absolute;
    top: 1rem;
    left: 1rem;
    transition: all 0.4s ease-in-out;

    sup {
      color: var(--clr-secondary);
    }
  }

  input,
  textarea {
    appearance: none;
    border: none;
    line-height: 1.5;
    font-size: 1rem;
    font-family: inherit;
    background: var(--clr-content1);
    padding: 1rem 0;
    height: 3.5rem;
    transition: all 0.4s ease-in-out;
    resize: none;
    overflow: hidden;
  }

  textarea:hover,
  textarea:focus {
    height: 10rem;
  }

  *:focus {
    outline: none;

    & ~ .line::before {
      width: 100%;
    }
  }

  .filled ~ label,
  *:focus ~ label,
  *:hover ~ label {
    top: -1rem;
    left: 0;
    color: var(--clr-font);
  }

  & > div {
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
  }

  &.sent {
    opacity: 0;
  }

  *:not(button):valid ~ .line::before {
    background: var(--clr-primary);
    width: 100%;
  }

  &.submitted {
    :not(button):valid ~ .valid-feedback {
      display: block;
    }

    :invalid {
      & ~ .line::before {
        width: 100%;
      }

      & ~ .invalid-feedback {
        display: block;
      }
    }
  }
}
</style>
