// siderbar.ts

import path from 'path'
import fs from 'fs'

const mdRoot = './docs/'

export const getSiderBarConfig = () => {
    return {
        // '/Linux/': [
        //     {
        //         text: 'Linux',
        //         collapsed: true,
        //         items: [
        //             { text: '该虚拟机似乎正在使用中', link: '/Linux/note-1.md' },
        //             { text: '该虚拟机似乎正在使用中', link: '/Linux/note-2.md' },
        //         ]
        //     },
        // ],
        // '/嵌入式/': [
        //     {
        //         text: '嵌入式',
        //         items: [
        //             { text: '该虚拟机似乎正在使用中', link: '/VM虚拟机/note-1.md' },
        //             { text: '该虚拟机似乎正在使用中', link: '/VM虚拟机/note-2.md' },
        //         ]
        //     }
        // ]
    }
}


// 动态生成侧边栏函数
// export const walk = function (dir, subDir = '') {
//     let results: string[] = []// 存放所有md文件路径
//     const list = fs.readdirSync(dir + subDir)// 获取当前目录下所有文件和文件夹

//     list.forEach((file: string) => {
//         file = dir + subDir + '/' + file

//         const stats = fs.statSync(file)// 获取文件信息

//         // 如果是下级目录
//         if (stats.isDirectory()) {
//             const list2 = fs.readdirSync(file)// 获取下级目录下所有文件和文件夹

//             list2
//                 .forEach((file2: string) => {
//                     file2 = file + '/' + file2
//                     if (path.extname(file2) === '.md') results.push(file2.replace(mdRoot, ''))
//                 })
//                 ?.sort((a, b) => {
//                     const index1 = Number(a.text.split('.')[0])
//                     const index2 = Number(b.text.split('.')[0])
//                     return index1 - index2
//                 })
//         }
//         // 找到md文件
//         if (path.extname(file) === '.md') {
//             results.push(file.replace(mdRoot, ''))
//         }
//     })
//     const items = results.map((item) => {
//         return {
//             text: path.basename(item, '.md'),
//             link: item.replace(mdRoot, '').replace('.md', '')
//         }
//     })

//     return {
//         text: subDir,
//         collapsible: true,
//         collapsed: false,
//         items: items
//     }
// }

