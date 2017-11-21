import axios from "axios";
const url = "http://localhost:9010/users/";

export function loadUsers() {
    return (dispatch) => {
        axios.get(url).then(response => {
            dispatch({
                type: "LOAD_USERS",
                users: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    };
}

export function addUser(userToAdd) {
    return (dispatch) => {
        axios.post(url, userToAdd).then(response => {
            dispatch({
                type: "ADD_USER",
                newUser: response.data
            });
        }).catch(err => {
            console.log(err);
        });
    }
}
