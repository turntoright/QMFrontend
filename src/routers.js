import Vue from 'vue'
import VueRouter from 'vue-router'
import Quotes from './Views/Quotes'
import NewQuote from './Views/NewQuote'
import EditQuote from './Views/QuoteEditView'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        // {
        //     path: '/',
        //     name: 'quotes',
        //     component: Quotes,
        // },
        // {
        //     path: '/Quotes/',
        //     name: 'quotes',
        //     component: Quotes,
        // },
        {
            path: '/quotes/list',
            name: 'quotes',
            component: Quotes,
        },
        {
            path: '/quotes/new',
            name: 'newquote',
            component: NewQuote,
        },
        {
            path: '/quotes/edit/:id',
            name: 'eidtquote',
            component: EditQuote,
        },
    ]
})