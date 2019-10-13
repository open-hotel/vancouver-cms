<template>
    <v-container class="register text-center pa-3">
        <div class="hangbase">
            <div class="hang">
                <svg width="100%" viewBox="0 0 100 100">
                    <path stroke="black" stroke-width="2" fill="transparent" d="M0 100 L50 0 L100 100" />
                </svg>
            </div>
        </div>
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
                    <v-row>
                        <v-col>
                            <v-select
                                v-model="user.gender"
                                :items="['Male', 'Female', 'None', 'Helicopter']"
                                label="Gender"
                            />
                        </v-col>
                        <v-col>
                            <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :return-value.sync="user.birthday"
                                transition="scale-transition"
                                offset-y
                                min-width="290px"
                            >
                                <template v-slot:activator="{ on }">
                                <v-text-field
                                    v-model="user.birthday"
                                    label="Birthday"
                                    readonly
                                    v-on="on"
                                ></v-text-field>
                                </template>
                                <v-date-picker v-model="user.birthday" no-title scrollable>
                                <v-spacer></v-spacer>
                                <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                                <v-btn text color="primary" @click="$refs.menu.save(user.birthday)">OK</v-btn>
                                </v-date-picker>
                            </v-menu>
                        </v-col>
                    </v-row>
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
                passwordConfirmation: '',
                gender: '',
                birthday: null
            },
            isValid: true,
            menu: null
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
.hangbase {
    position: absolute;
    width: 100%;
    height: 70px;
    left: 0;
    top: -70px;
    display: flex;
    justify-content: center;
}
.hang {
    width: 140px;
    display: flex;
}
.hangline {
    width: 100%;
    height: 100%;
}

.register{
    position: absolute !important;
    z-index: 999;
    right: 150px;
    top: 200px;
    border-radius: 10px;
    background-color: #fff;
    width: 25vw;
    border: 1pt solid #000;
}
.register-title {
    letter-spacing: 2px;
    border-bottom: 1px solid #444;
}
</style>