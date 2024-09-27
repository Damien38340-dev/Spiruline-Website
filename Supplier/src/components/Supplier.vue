<script>
import {format} from 'timeago.js';

export default {
  props: {
  name: String,
  status: Number,
checkedAt: String,
  },
  computed: {
    timeAgo() {
      return format(this.checkedAt);
    }
  }
}
</script>

<template>
  <div class="supplier-card">
    <h2>{{ name }}</h2>
    <p class="status" :class="status ? 'status-ok' : 'status-ko'">
      Stock: {{ status ? 'OK' : 'KO' }}
    </p>
    <p class="checked-at">Last checked: {{ timeAgo }}</p>
  </div>
</template>

<style scoped>
/* Styling for each supplier card */
.supplier-card {
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Adds a subtle shadow for card effect */
  border: 1px solid #e0e0e0;
  transition: transform 0.3s;
}

/* Add slight zoom effect on hover */
.supplier-card:hover {
  transform: scale(1.02);
}

/* Supplier name styling */
h2 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
}

/* Status indicator styles */
.status {
  font-weight: bold;
  margin-bottom: 1rem;
}

/* Different color for OK and KO status */
.status-ok {
  color: green;
}

.status-ko {
  color: red;
}

/* Date formatting */
.checked-at {
  color: #666;
  font-size: 0.9rem;
}
</style>