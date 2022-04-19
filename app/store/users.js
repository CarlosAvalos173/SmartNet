export const estado = () => ({
    data:[]
})

export const mutations = {
    storeUsers:(estado,data) =>{
        estado.data = data
    },
}
