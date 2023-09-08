import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/index";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {
        try {
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
            localStorage.setItem("@rocketMovies:token", token);

            api.defaults.headers.common["Authorization"] = `Bearer ${token}`; //axios
            setData({ user, token });

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Could not connect")
            }
        }

    }

    function signOut() {
        localStorage.removeItem("@rocketMovies:user");
        localStorage.removeItem("@rocketMovies:token");

        setData({});
    }

    async function updateUser({ user, avatarFile }) {
        try {
            if (avatarFile) {
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                // console.log(response);
                user.avatar = response.data.avatar
            }
           await api.put("/users", user);
           
           localStorage.setItem("@rocketMovies:user", JSON.stringify(user));
           setData({user, token: data.token});
           alert("User updated successfully");
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Could not update!");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@rocketMovies:token");
        const user = localStorage.getItem("@rocketMovies:user");

        if (user && token) {
            api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            setData({
                token,
                user: JSON.parse(user)
            })
        }
    }, []);

    return (
        <AuthContext.Provider value={{
            signIn,
            signOut,
            updateUser,
            user: data.user
        }
        }>
            {children}
        </AuthContext.Provider>
    );
    }

export function useAuth() {
    const context = useContext(AuthContext); //exec o context
    return context;
}