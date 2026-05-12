import { useQuery } from "@tanstack/react-query";
 import useAxiosSecure from "./useAxiosSecure";  
import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const useRole = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    const { data: userData = {}, isLoading: isRoleLoading, refetch } = useQuery({
        queryKey: [user?.email, 'userRole'],
        enabled: !loading && !!user?.email,   
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user.email}`);
            return res.data;
        }
    });

     return [userData?.role, userData?.coins, isRoleLoading, refetch, userData];
};

export default useRole;