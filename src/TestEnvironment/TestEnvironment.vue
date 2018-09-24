<template>
  <div id="test" class="Tes Environment">
    <TaskList></TaskList>
    <AuthForm></AuthForm>
  </div>
</template>


<script>
  import TaskList from './component/task-list.vue';
  import AuthForm from './component/auth-form.vue'

  export default {
      name: ' test',
      components: {TaskList, AuthForm}
  }

</script>