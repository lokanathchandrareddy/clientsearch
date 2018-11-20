const namespace = "client";
export const LOAD_CLIENT_DATA = `${namespace}/LOAD_CLIENT_DATA`;
export const SELECT_CLIENT = `${namespace}/SELECT_CLIENT`;
export const loadClientData = (clients) => ({
    type: LOAD_CLIENT_DATA,
    payload: clients
});

export const selectClient = (id) => ({
    type: SELECT_CLIENT,
    payload: id
});
