const base = {
    get() {
        return {
            url : "http://localhost:8080/ssmp4687/",
            name: "ssmp4687",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmp4687/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的足浴城消费系统"
        } 
    }
}
export default base
