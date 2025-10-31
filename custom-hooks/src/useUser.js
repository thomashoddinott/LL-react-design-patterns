import { useResource } from "./useResource";

export const useUser = (userId) => {
  const { isLoading, data: user } = useResource("/users/" + userId);
  return { isLoading, user };
};

// // i.e. useProduct.js or change this file name.. `useData..?`
// export const useProduct = (productId) => {
//   const { isLoading, data: product } = useResource("/products/" + productId);
//   return { isLoading, product };
// };