import { TQueryParam, TResponseRedux } from "@/types/global.type";
import baseApi from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    loginUser: builder.mutation({
      query: (data: any) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["USERS"],
    }),
    getAllFighter: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/athletes/get-athletes",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["USERS"],
      transformResponse: (response: TResponseRedux<any[]>) => {
        console.log({response});
        
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAllCoach: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/coaches/get-coaches",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["USERS"],
      transformResponse: (response: TResponseRedux<any[]>) => {
        console.log({response});
        
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getAllGymOwner: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/gym/get-gyms",
          method: "GET",
          params: params,
        };
      },
      providesTags: ["USERS"],
      transformResponse: (response: TResponseRedux<any[]>) => {
        console.log({response});
        
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getSingleUsers: builder.query({
      query: (id: string) => ({
        url: `/users/${id}`,
        method: "GET",
      }),
      providesTags: ["USERS"],
      transformResponse: (response: TResponseRedux<any>) => {
        return {
          data: response.data,
        };
      },
    }),
    getMe: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
      }),
    }),
    getAdminDetails: builder.query({
      query: () => ({
        url: "/user/admin",
        method: "GET",
      }),
    }),
    getTotal: builder.query({
      query: () => ({
        url: "/user/admin",
        method: "GET",
      }),
    }),


  }),
});

export const {
  useLoginUserMutation,
  useGetMeQuery,
  useGetAllFighterQuery,
  useGetAllCoachQuery,
  useGetAllGymOwnerQuery,
  useGetSingleUsersQuery,
  useGetAdminDetailsQuery,
  useGetTotalQuery
} = userApi;
