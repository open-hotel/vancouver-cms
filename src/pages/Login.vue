<template>
    <v-container class="header" fluid>
        <HeaderLogin
            @authUser="authUser"
            class="header-login"
        />
        <Register/>
        <v-img src="@/assets/render.png" class="overlay"></v-img>
    </v-container>
</template>

<script>
import HeaderLogin from '@/components/HeaderLogin';
import Register from '@/components/Register'
export default {
    name: 'Login',
    components:{
        HeaderLogin,
        Register
    },
    methods:{
        authUser(data){
            console.log(data);
        }
    }
}
</script>

<style scoped>
    .header{
        background: url('/background.png');
        height: 100vh;
        padding: 0;
        font-family: 'Comfortaa';
    }
    .header-login{
        position: absolute;
        width: 100%;
        z-index: 99999;
        top: 0;
    }
    .overlay{
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        z-index: 1;
    }
</style>