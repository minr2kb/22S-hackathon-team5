import axios from "axios"

export const requestToken = async () => {
    const d = await axios.get('https://skcshackathon2022-team5.herokuapp.com/gmail/authorize');
}