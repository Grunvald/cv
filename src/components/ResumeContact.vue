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
