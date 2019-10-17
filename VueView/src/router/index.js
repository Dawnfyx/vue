import Vue from 'vue'
import Router from 'vue-router'

import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import TestPagination from '@/pages/testPagination'
import TestLoading from '@/pages/testLoading'
import TestTable from '@/pages/testTable'
import TestAxios from '@/pages/testAxios'
import TestDownPull from '@/pages/testDownPull'
import TestUpPull from '@/pages/testUpPull'
import TestModal from '@/pages/testModal'
import TestAlert from '@/pages/testAlert'
import FileInput from '@/components/global/form/fileInput'
import TestDropdown from '@/pages/testDropdown'
import TestValidator from '@/components/global/form/validator'
import TestAlphabet from '@/pages/testAlphabet'
import TestForm from '@/pages/testForm'
import TestSearch from '@/pages/testSearch'

Vue.use(Router)

export default new Router({
    routes: [
        {
          path: '/',
          name: 'Layout',
          component: Layout
        },
        {
          path: '/Login',
          name: 'Login',
          component: Login
        },
        {
          path: '/TestTable',
          name: 'TestTable',
          component: TestTable
        },
        {
          path: '/TestPagination',
          name: 'TestPagination',
          component: TestPagination
        },
        {
          path: '/TestLoading',
          name: 'TestLoading',
          component: TestLoading
        },
        {
          path: '/TestAxios',
          name: 'TestAxios',
          component: TestAxios
        },
        {
          path: '/TestDownPull',
          name: 'TestDownPull',
          component: TestDownPull
        },
        {
          path: '/TestUpPull',
          name: 'TestUpPull',
          component: TestUpPull
        },{
          path: '/TestModal',
          name: 'TestModal',
          component: TestModal
        },{
          path: "/TestAlert",
          name: "TestAlert",
          component: TestAlert
        },{
          path: "/FileInput",
          name: "FileInput",
          component: FileInput
        },{
          path: "/TestDropdown",
          name: "TestDropdown",
          component: TestDropdown
        },{
          path: "/TestValidator",
          name: "TestValidator",
          component: TestValidator
        },{
          path: "/TestAlphabet",
          name: "TestAlphabet",
          component:TestAlphabet
        },{
           path: "/TestForm",
           name: "TestForm",
           component: TestForm
        },{
          path: "/TestSearch",
          name: "TestSearch",
          component: TestSearch
        }
    ]
})
