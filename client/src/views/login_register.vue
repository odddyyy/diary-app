<template>
<div>
  <div class="container login-container" style="margin-top:20px;">
    <img src="https://www.rookiemag.com/wp-content/themes/rookie/assets/img/categories/dear-diary.png" alt="">
    <div class="row">
      <div class="col-md-6 login-form-1">
        <h1>Login</h1>
        <form @submit.prevent="doLogin">
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email" v-model="login_email" required/>
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="login_password"
              required
            />
          </div>
          <div class="form-group" style="margin-top:70px;">
            <input type="submit" class="btnSubmit" value="Login" />
          </div>
        </form>
      </div>

      <div class="col-md-6 login-form-2">
        <h1>Register</h1>
        <form @submit.prevent="doRegister">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Name" v-model="register_name" required/>
          </div>
          <div class="form-group">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              v-model="register_email"
              required
            />
          </div>
          <div class="form-group">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              v-model="register_password"
              required
            />
          </div>
          <div class="form-group">
            <input type="submit" class="btnSubmit" value="Register" />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            login_email: '',
            login_password: '',
            register_name: '',
            register_email: '',
            register_password: '',
        }
    },
    methods: {
        doLogin() {
            this.$store.dispatch('doLogin', {
                email: this.login_email,
                password: this.login_password
            })
        },
        doRegister() {
            this.$store.dispatch('doRegister', {
                name: this.register_name,
                email: this.register_email,
                password: this.register_password
            })
        }
    }
};
</script>

<style>
.login-container{
    margin-top: 5%;
    margin-bottom: 5%;
}
.login-logo{
    position: relative;
    margin-left: -41.5%;
}
.login-logo img{
    position: absolute;
    width: 20%;
    margin-top: 19%;
    background: #282726;
    border-radius: 4.5rem;
    padding: 5%;
}
.login-form-1{
    padding: 9%;
    background:#282726;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-1 h3{
    text-align: center;
    margin-bottom:12%;
    color:#fff;
}
.login-form-2{
    padding: 9%;
    background: #f05837;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
}
.login-form-2 h3{
    text-align: center;
    margin-bottom:12%;
    color: #fff;
}
.btnSubmit{
    font-weight: 600;
    width: 20%;
    color: #282726;
    background-color: #fff;
    border: none;
    border-radius: 1.5rem;
    padding:2%;
    font-family: monospace;
}
.btnForgetPwd{
    color: #fff;
    font-weight: 600;
    text-decoration: none;
}
.btnForgetPwd:hover{
    text-decoration:none;
    color:#fff;
}

h1 {
    font-family:fantasy;
    color: white
}
</style>
