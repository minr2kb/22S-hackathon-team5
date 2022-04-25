import axios from "axios"

export const requestToken = async () => {
    await axios.get('https://skcshackathon2022-team5.herokuapp.com/gmail/authorize');
}