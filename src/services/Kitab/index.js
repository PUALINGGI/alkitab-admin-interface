const axios = require("axios");

export const getKitab = async (setData, setIsFetching) => {
    await setIsFetching(true);
    axios({
        method: "GET",
        url: "https://alkitab-mamasa.herokuapp.com/kitab",
    }).then(async (response) => {
        await setIsFetching(false);
        await setData(response.data);
    })
}

export const postKitab = async (setError, setPesan, namaKitab, refreshList) => {
    axios({
        method: "POST",
        url: "https://alkitab-mamasa.herokuapp.com/kitab",
        data: { nama: namaKitab },
        auth: {
            username: 'pualinggi',
            password: 'pualinggi'
        },
    }).then(async (response) => {
        await setError(false);
        await setPesan(response.data.sukses);
        await refreshList();
    }).catch(async (err) => {
        await setError(true);
        await setPesan(err.response.data.error);
    })
}