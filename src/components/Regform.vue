<template>
  <div class="regform">

    <div v-if="isLoggedIn">
      <a href="/profile" class="dialogbtn">Личный кабинет</a>
      <a href="#" @click="logOut"  class="dialogbtn">выйти</a>
    </div>
    <div v-else>
      <a href="#" @click="regDialogVisible = true" class="dialogbtn">Зарегистрироваться</a>
      <a href="#" @click="loginDialogVisible = true"  class="dialogbtn">войти</a>
    </div>
    <el-dialog :visible="regDialogVisible">
      <div class="form-header">
        <div class="loginBtn" @click="loginDialogVisible = true, regDialogVisible = false">У меня уже есть аккаунт</div>
        <button class="close-btn" type="button" @click="regDialogVisible = false">
          <img src="/img/close-btn.svg" alt="">
        </button>
        <div class="title">Регистрация</div>
      </div>
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.lastname" placeholder="Фамилия"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.firstname" placeholder="Имя"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.patronymic" placeholder="Отчество"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.email" placeholder="E-mail"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.phone" placeholder="Телефон"></el-input>
        </el-form-item>
        <el-form-item label="" label-width="200">
          <el-input v-model="form.inn" placeholder="Компания или ИНН"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.position" placeholder="Должность"></el-input>
        </el-form-item>
        <el-form-item>
          <el-select v-model="form.representative" placeholder="Я представляю">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.value"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password" placeholder="Пароль"></el-input>
        </el-form-item>
      </el-form>
      <div class="agreement">
        <el-checkbox class="checkAgreement">
          Даю согласие на обработку моих персональных данных<br>
          <a href="/files/innoagency_soglashenie_pd.pdf" target="_blank">Соглашения об обработке персональных данных</a>
        </el-checkbox>
      </div>
      <div class="dialog-footer">
          <el-button type="primary" @click="regUser()" class="sendBtn">Зарегистрироваться</el-button>
      </div>
    </el-dialog>
    <el-dialog :visible="loginDialogVisible">
      <div class="form-header">
        <div class="loginBtn" @click="regDialogVisible = true, loginDialogVisible = false">Зарегистрироваться</div>
        <button class="close-btn" type="button" @click="loginDialogVisible = false">
          <img src="/img/close-btn.svg" alt="">
        </button>
        <div class="title">Войти</div>
      </div>
      <el-form :model="form">
        <el-form-item>
          <el-input v-model="form.email" placeholder="Email"></el-input>
        </el-form-item>
        <el-form-item>
          <el-input v-model="form.password" type="password" placeholder="Пароль"></el-input>
        </el-form-item>
      </el-form>
      <div class="agreement">
        <el-checkbox class="checkAgreement">
          Запомнить меня
        </el-checkbox>
      </div>
      <div class="dialog-footer">
        <el-button type="primary" @click="loginUser()" class="sendBtn">Войти</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
const formFields = () => ({
  firstname: '',
  lastname: '',
  patronymic: '',
  email: '',
  phone: '',
  inn: '',
  position: '',
  representative: '',
  password: ''
})
export default {
  name: 'App',
  data() {
    return {
      form: {
        ...formFields()
      },
      regDialogVisible: false,
      loginDialogVisible: false,
      options: [
        {
          value: 'Стартап'
        },
        {
          value: 'Объект инновационной инфраструктуры'
        },
        {
          value: 'Инвестор'
        },
        {
          value: 'Корпорация'
        },
        {
          value: 'Органы власти'
        },
        {
          value: 'Другое'
        }
      ]
    }
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuthenticated
    }
  },
  methods: {
    regUser () {
      this.regDialogVisible = false
      this.loginDialogVisible = false
      this.$store.dispatch('regUser', this.form)
      this.form = {...formFields()}
    },
    loginUser () {
      this.regDialogVisible = false
      this.loginDialogVisible = false
      this.$store.dispatch('loginUser', this.form)
      this.form = {...formFields()}
    },
    logOut () {
      this.$store.dispatch('logOut')
    }
  }
}
</script>

<style lang="scss">
  .regform {
    
    .el-dialog {
      width: 525px;
      background: #F2F3F6;
    }

    .el-dialog__headerbtn .el-dialog__close {
      display: none;
    }

    .form-header {
      margin-bottom: 25px;
      text-align: left;
      .title {
        font-weight: 500;
        font-size: 22px;
        line-height: 26px;
        color: #1D2435;
        margin-right: 110px;
      }
      .loginBtn {
        float: right;
        background: #F2F3F6;
        box-shadow: 0px -3px 10px #ffffff, 0px 10px 10px #e1e4f4;
        border-radius: 47px;
        font-weight: 500;
        font-size: 12px;
        border: none;
        padding: 8px 18px;
        color: #0459FF;
        cursor: pointer;
      }
      .close-btn {
        position: absolute;
        right: 10px;
        top: 10px;
        background: transparent;
        border: 0;
        cursor: pointer;
      }
    }

    .el-form {
      border: 1px solid #fff;
      border-radius: 8px;
      .el-form-item {
        margin-bottom: 0;
        .el-input__inner {
          border-radius: 0;
          background: transparent;
          border: 0;
          border-bottom: 1px solid #fff;
          height: 50px;
        }
        .el-select {
          width: 100%;
        }
      }
    }
    .agreement {
      margin: 1rem !important;
      text-align: left;
      .checkAgreement {
        font-weight: normal;
        font-size: 12px;
        line-height: 16px;
        color: #6D798F;
        text-align: left;
        a {
          color: #1F5EFF;
          text-decoration: none;
          background-color: transparent;
        }
      }
    }
    .el-dialog__footer {
      text-align: center !important;
    }
    .sendBtn {
      margin: 1rem;
      font-weight: bold;
      font-size: 12px;
      line-height: 16px;
      display: inline-flex;
      align-items: center;
      text-align: center;
      letter-spacing: 0.05em;
      text-transform: uppercase;
      color: #FFFFFF;
      background-color: #FF1F55;
      box-shadow: 0px -3px 10px #ffffff, 0px 10px 10px #e1e4f4;
      border-radius: 149px;
      border: none;
      padding: 21px 60px;
      outline: none;
      transition: all 0.3s;
      min-width: 260px;
      justify-content: center;
    }
  }
</style>