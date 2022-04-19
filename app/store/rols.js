export const state = () => ({
    data:[]
})

export const mutations = {
    storeRols:(state,data) =>{
        console.log(data)
        state.data = data
    }
}
