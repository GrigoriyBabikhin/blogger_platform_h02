import {config} from 'dotenv'

config() // добавление переменных из файла .env в process.env

export const SETTINGS = {
    PORT: process.env.PORT || 3003,
    PATH: {
        TESTINGBLOGS: '/__test__/blogs',
        TESTING: '/testing/all-data',
        BLOGS: '/blogs',
        POSTS: '/posts'
    },
    ADMIN_AUTH: 'admin:qwerty'
}
//admin\qwerty
//"/testing/all-data"