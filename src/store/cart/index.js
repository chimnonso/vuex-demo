
import cartGetters from "./getters.js";
import cartMutations from "./mutations.js";
import cartActions from "./actions";

export default {
    namespaced: true,
    state() {
        return {
            cart: { items: [], total: 0, qty: 0 },
        }
    },
    getters: cartGetters,
    mutations: cartMutations,
    actions: cartActions,
}