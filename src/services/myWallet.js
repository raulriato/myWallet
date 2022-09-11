import axios from "axios";

const BASE_URL = 'localhost:5000'

const postSignUp = signUp => axios.post(`${BASE_URL}/sign-up`, signUp);

const postSignIn = signIn => axios.post(`${BASE_URL}/sign-in`, signIn);

const getTransactions = config => axios.get(`${BASE_URL}/`, config);

const postNewTransaction = (body, config) => axios.post(`${BASE_URL}/transactions`, body, config);

export {
    postSignUp,
    postSignIn,
    getTransactions,
    postNewTransaction
}