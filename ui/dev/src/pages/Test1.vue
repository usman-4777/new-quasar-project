<template>
  <q-page padding>
    
    <Mycomponent />
    
    
    <div v-my-directive class="directive-target">
      x
    </div>
    
  </q-page>
</template>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>
