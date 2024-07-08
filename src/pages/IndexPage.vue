<template>
  <div class="wrapper">
    <div class="photo">
      <div class="wrapper_photo">
        <img src="../assets/img/men.png" class="img_p" alt="" />
      </div>
    </div>

    <div class="card">
      <span class="nome">Nathan Silvério</span>
      <span class="descricao">Candidato a Vereador por Goiânia</span>
      <span class="numero">44940</span>
    </div>

    <q-btn
      no-caps
      style="color: #000; font-size: 1rem; background-color: #fff"
      label="Instalar APP"
      @click="installPWA"
    ></q-btn>

    <div class="actions">
      <div class="item">
        <img src="../assets/img/zap.png" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/insta.png" alt="" />
      </div>
      <div class="item">
        <img src="../assets/img/email.png" alt="" />
      </div>
    </div>

    <div class="video">
      <video autoplay muted loop controls>
        <source src="../assets/video/video.mp4" type="video/mp4" />
        Seu navegador não suporta a tag de vídeo.
      </video>
    </div>

    <div class="btn_item">
      <span>Quem sou?</span>
      <q-btn no-caps flat label="ver" class="btn_action"></q-btn>
    </div>

    <div class="btn_item">
      <span>Apoio</span>
      <q-btn no-caps flat label="ver" class="btn_action"></q-btn>
    </div>

    <div class="btn_item">
      <span>Projetos</span>
      <q-btn no-caps flat label="ver" class="btn_action"></q-btn>
    </div>

    <div class="btn_item">
      <span>Entrar no grupo</span>
      <q-btn no-caps flat label="ver" class="btn_action"></q-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const deferredPrompt = ref<BeforeInstallPromptEvent | null>(null);
const showBanner = ref(true);

const installPWA = async () => {
  if (deferredPrompt.value) {
    await deferredPrompt.value.prompt();

    const choiceResult = await deferredPrompt.value.userChoice;
    console.log('User choice:', choiceResult.outcome);
    showBanner.value = false;
    deferredPrompt.value = null;
  }
};

onMounted(() => {
  const handleBeforeInstallPrompt = (event: Event) => {
    event.preventDefault();

    deferredPrompt.value = event as BeforeInstallPromptEvent;
  };

  window.addEventListener(
    'beforeinstallprompt',
    handleBeforeInstallPrompt as EventListener
  );

  onBeforeUnmount(() => {
    window.removeEventListener(
      'beforeinstallprompt',
      handleBeforeInstallPrompt as EventListener
    );
  });
});
</script>

<style scoped>
.wrapper {
  width: 100dvw;
  height: 100dvh;
  overflow-x: hidden;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.photo {
  width: 300px;
  height: 300px;

  border: 7px solid #ffffff3d;
  border-radius: 50px;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  overflow: hidden;

  margin-top: 30px;
}

.wrapper_photo {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: rgb(255, 255, 255);
}

.img_p {
  max-width: 100%;
  max-height: 100%;
}

.card {
  margin-top: 30px;

  display: flex;
  flex-direction: column;
}

.card span {
  text-align: center;
  color: white;
}

.nome {
  font-weight: 800;
  font-size: 2rem;
}

.descricao {
  font-size: 1.2rem;
}

.numero {
  font-size: 3rem;
  font-weight: 800;
}

.actions {
  margin-top: 30px;
  width: 100%;
  padding: 0 40px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.actions .item {
  width: 70px;
  height: 70px;

  margin: 0 20px;

  display: flex;

  flex-direction: row;

  align-items: center;
}

.actions .item img {
  width: 100%;
}

.btn_item {
  margin-top: 40px;
  width: 340px;
  background-color: #fff;

  padding: 12px 24px;

  font-weight: 500;
  font-size: 1.2rem;

  border-radius: 40px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn_action {
  height: 55px;
  background-color: #023059;

  color: #fff;
  border-radius: 30px;

  font-size: 1.2rem;

  padding: 0 30px;
}

.video {
  margin-top: 30px;
  width: 90dvw;

  overflow: hidden;
}

.video video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
