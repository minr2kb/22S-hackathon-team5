import axios from "axios"

export const getUserProfile = async (accessToken: string, userId: string) => {
    const d = await axios.get(`https://people.googleapis.com/v1/people/me?personFields=photos,names&access_token=${accessToken}`)
    const nameAndPhoto = { displayName: d.data.names[0].displayName, photo: d.data.photos[0]};
    return nameAndPhoto
}
