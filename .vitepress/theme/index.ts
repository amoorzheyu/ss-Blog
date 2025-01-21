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
/***
 * @link :https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-enhanced-mark/
 * @description:<mark> 元素增强 
 * @state :未能集成成功 
 * */
import '@nolebase/vitepress-plugin-enhanced-mark/client/style.css'

/**
 * @link : https://nolebase-integrations.ayaka.io/pages/zh-CN/integrations/vitepress-plugin-enhanced-readabilities/
 * @description:阅读增强
 * @state : 集成成功但导致mylayout组件无法使用
 */
import {
    NolebaseEnhancedReadabilitiesMenu,
    NolebaseEnhancedReadabilitiesScreenMenu,
} from '@nolebase/vitepress-plugin-enhanced-readabilities/client'

import '@nolebase/vitepress-plugin-enhanced-readabilities/client/style.css'

export default {
    extends: DefaultTheme,
    async enhanceApp({ app }) {
        // 注册全局组件
        app.component('bsz', bsz)
        app.component('confetti', confetti)
        app.component('update', update)
        app.component('ArticleMetadata', ArticleMetadata)
        
        if (!import.meta.env.SSR) {
            app.component('HomeUnderline', HomeUnderline)
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
                    errorColor: '#33363E',
                    loadFailMessage: '看板小猫加载失败',
                    loadingMessage: '看板小猫加载中',
                    reloadMessage: '重新召唤看板小猫',
                    restMessage: '看板小猫休息中',
                    loadSuccessMessage: '看板小猫加载成功',
                }

            });
        }
    },
    Layout() {
        return h(MyLayout, null, {
            // 为较宽的屏幕的导航栏添加阅读增强菜单
            'nav-bar-content-after': () => h(NolebaseEnhancedReadabilitiesMenu),
            // 为较窄的屏幕（通常是小于 iPad Mini）添加阅读增强菜单
            'nav-screen-content-after': () => h(NolebaseEnhancedReadabilitiesScreenMenu),
        })
    },


}