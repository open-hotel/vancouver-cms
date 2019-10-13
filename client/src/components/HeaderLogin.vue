<template>
    <v-container class="header-login" fluid>
        <v-row class="navbar">
            <v-col cols="2" class="nopadding">
                <v-img src="@/assets/logo.jpeg" class="logo"></v-img>
                <p class="header-title">Open Hotel</p>
            </v-col>
            <v-col class="nopadding" cols="6">
                <v-row>
                    <v-col class="nopadding" cols="6">
                        <v-text-field
                            label="E-mail"
                            dark
                            filled
                            type="email"
                            v-model="email"
                            :error="!isFormValid"
                        ></v-text-field>
                    </v-col>
                    <v-col class="nopadding" cols="6">
                        <v-text-field
                            label="Password"
                            filled
                            dark
                            type="password"
                            v-model="password"
                            :error="!isFormValid"
                        ></v-text-field>
                    </v-col>
                </v-row>
                
            </v-col>
            <v-col class="nopadding" cols="2">
                <v-row>
                    <v-col cols="12" class="nopadding">
                        <v-btn
                            block
                            x-large
                            @click="authUser"
                            @click.once="hasClicked=true"
                        ><b>SIGN IN</b></v-btn>
                    </v-col>
                </v-row>
                
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Header',
    data(){
        return{
            email: '',
            password: '',
            hasClicked: false
        }
    },
    methods:{
        authUser(){
            this.$emit('authUser', {email: this.email, password: this.password});
        }
    },
    computed:{
        isFormValid(){
            if(!this.hasClicked){
                return true;
            }

            if(!this.email || !this.password){
                return false;
            }

            return true;
        }
    }
}
</script>

<style scoped>
    .header-login{
        padding: 0;
    }
    .navbar{
        background-color: #00334cdc;
        padding: 0 100px 0 100px;
        color: #fff;
    }
    .logo{
        width: 40%;
        border-radius: 50%;
        box-shadow: 1px 1px 5px #222;
        display: block;
        margin: 0 auto;
    }
    .header-title{
        font-size: 15px;
        font-family: 'Notable';
        text-align: center;
        transform: scaleX(.9);
    }
    .nopadding{
        padding-bottom: 0 !important;
    }
    

</style>