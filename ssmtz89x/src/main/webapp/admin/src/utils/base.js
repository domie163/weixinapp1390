const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmtz89x/",
            name: "ssmtz89x",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmtz89x/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "自助购药小程序"
        } 
    }
}
export default base
