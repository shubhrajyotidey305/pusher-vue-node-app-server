<template>
  <div id="nav">
    
  </div>
  <router-view :sender="sender" />
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      sender: 'Anonymous'
    }
  },
  created () {
    const currentUsername = window.prompt('Enter username: ', 'Annonymous')
    this.sender = currentUsername
  }
}
</script>