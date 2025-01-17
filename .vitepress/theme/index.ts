/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import './style/index.css'
import { h } from 'vue'
import MyLayout from "./components/MyLayout.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import confetti from "./components/confetti.vue"
import bsz from "./components/bsz.vue"
import update from "./components/update.vue"
import ArticleMetadata from "./components/ArticleMetadata.vue"
import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
    extends: DefaultTheme,
    async enhanceApp({ app }) {
        // 注册全局组件
        app.component('bsz',bsz)
        app.component('confetti' , confetti)
        app.component('update' , update)
        app.component('ArticleMetadata' , ArticleMetadata)
        if (!import.meta.env.SSR) {
            app.component('HomeUnderline' , HomeUnderline)
            // app.component('DataPanel' , bsz)
            const { loadOml2d } = await import('oh-my-live2d');
            loadOml2d({
                menus: {
                    disable: true
                },
                models: [
                    {
                        path: 'https://raw.githubusercontent.com/iCharlesZ/vscode-live2d-models/master/model-library/hijiki/hijiki.model.json',
                        position: [0, 45],
                        scale: 0.15
                    }],
                statusBar: {
                    // disable: true
                    errorColor:'#33363E',
                    loadFailMessage:'看板小猫加载失败',
                    loadingMessage:'看板小猫加载中',
                    reloadMessage:'重新召唤看板小猫',
                    restMessage:'看板小猫休息中',
                    loadSuccessMessage:'看板小猫加载成功',
                }

            });
        }
    },
    Layout() {
        return h(MyLayout, null)
    },


}