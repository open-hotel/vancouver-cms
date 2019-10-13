<template>
    <v-container class="register text-center pa-3">
        <v-row>
            <v-col cols="12">
                <h3 class="register-title pb-2">
                    Register
                </h3>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-form v-model="isValid" ref="form" lazy-validation>
                    <v-text-field
                        v-model="user.email"
                        placeholder="E-mail"
                        :rules="[v => !!v || 'E-mail is required']"
                        required
                        />
                    <v-text-field
                        v-model="user.username"
                        placeholder="Username"
                        :rules="[v => !!v || 'Username is required']"
                        required
                    />
                    <v-text-field
                        v-model="user.password"
                        type="password"
                        placeholder="Password"
                        :rules="[v => !!v || 'Password is required']"
                        required
                    />
                    <v-text-field
                        v-model="user.passwordConfirmation"
                        type="password"
                        placeholder="Confirm Password"
                        :rules="[v => !!v || 'Confirm Password is required']"
                        required
                    />
                    <v-btn @click="signup" class="primary mt-3">
                        Sign Up
                    </v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
    name: 'Register',
    data(){
        return {
            user: {
                email: '',
                username: '',
                password: '',
                passwordConfirmation: ''
            },
            isValid: true
        }
    },
    methods: {
        signup () {
            if (!this.$refs.form.validate()) {
                return
            }
            const apiUrl = process.env.VUE_APP_API_URL
            fetch(`${apiUrl}/register`, {
                method: 'POST',
                body: this.user
            })
        }
    }
}
</script>

<style scoped>
.register{
    position: absolute !important;
    z-index: 999;
    right: 200px;
    top: 200px;
    border-radius: 10px;
    background-color: #fff;
    width: 20vw;
    border: 1pt solid #000;
}
.register-title {
    letter-spacing: 2px;
    border-bottom: 1px solid #444;
}
</style>