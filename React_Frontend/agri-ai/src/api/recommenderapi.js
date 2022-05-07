import axios from "axios"

export default axios.create({
    baseURL:" https://flask-mk1.herokuapp.com/",
    headers: { "Content-Type": "multipart/form-data" },
})