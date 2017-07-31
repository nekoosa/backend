<template>
  <div>
    <div>
      <input type="text" name="username">
    </div>
    <div>
      <input type="text" name="password">
    </div>
    <div>appid: {{appid}}</div>
    <div>projectid: {{projectid}}</div>
  </div>
</template>
<script>
  export default {
    name: 'login',
    data() {
      username: '',
      password: '',
      appid: '',
      projectid: ''
    },
    created() {
      this.apiGet('foo/1/app/3').then((res) => {
        this.appid = res.data.appid
        this.projectid = res.data.projectid
      })
    }
  }
</script>