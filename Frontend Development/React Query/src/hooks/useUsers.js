import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { userApi } from "../services/userApi";

export const useUser = () => {
    return useQuery({
        queryKey: ["user"],
        queryFn: userApi.getAll,
        staleTime: 1000 * 60 * 5,
    });
};

export const useUserById = (id) => {
    return useQuery({
        queryKey: ["user", id],
        queryFn: () => userApi.getById(id),
        enabled: !!id,
        staleTime: 1000 * 60 * 5,
    });
};

export const useCreateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: userApi.create,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        }
    })
}

export const useUpdateUser = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }) => userApi.update(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["user"],
            });
        },
    });
};

export const useDeleteUser = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: userApi.delete,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['user']
            })
        }
    })
}