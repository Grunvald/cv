<template>
  <div class="resume__contact">
    <span class="resume__icon" aria-hidden="true" :class="`resume__icon--${contact.type}`">
      <component :is="iconComponent" />
    </span>
    <span class="resume__contact-text">{{ contact.label }}</span>
  </div>
</template>

<script setup>
import PhoneIcon from "./icons/PhoneIcon.vue";
import MailIcon from "./icons/MailIcon.vue";

import { computed } from "vue";

const props = defineProps({
  contact: {
    type: Object,
    required: true,
  },
});

const icons = {
  phone: PhoneIcon,
  email: MailIcon,
};

const iconComponent = computed(() => icons[props.contact.type] || "span");
</script>

<style scoped>
.resume__contact {
  display: flex;
  align-items: center;
  gap: 14px;
  font-weight: 500;
  color: #1f2a3d;
}

.resume__contact-text {
  font-size: 15px;
  letter-spacing: 0.3px;
}

.resume__icon {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: #111827;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(17, 24, 39, 0.16);
  color: #ffffff;
}

.resume__icon svg {
  width: 19px;
}
</style>
