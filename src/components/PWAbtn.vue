<template>
  <div class="pwa" v-if="showBanner">
    <q-btn
      @click="installPWA"
      class="btn_pwa"
      label="Instalar app"
      no-caps
      flat
    />

    <q-icon @click="installPWA" name="close" class="close_btn"></q-icon>
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
.pwa {
  position: absolute;
  top: 0;
  width: 100%;

  height: 70px;
  background-color: #6d6b6b;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn_pwa {
  padding: 10px 50px;
  color: #fff;
  font-size: 1.2rem;
}

.close_btn {
  padding: 0 20px;
  color: #fff;
}
</style>
