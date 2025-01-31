<template>
  <RoutineForm :routineId="routineId" />
</template>

<script>
import RoutineForm from '@/components/routines/RoutineForm.vue';

export default {
  name: 'RoutineFormView',
  components: {
    RoutineForm
  },
  computed: {
    routineId() {
      return this.$route.params.id ? Number(this.$route.params.id) : null;
    }
  }
}
</script> 