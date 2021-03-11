module.exports = {
    devServer: {
        port: 3333,
        open: true
    },
    css: {
        loaderOptions: {
            sass: {
                // 注意： vue3.0版本scss导入全局路径必须用prependData 不能用Data
                prependData: `@import "@/assets/scss/_variable.scss";`
            }
        }
    }
}