
// 暂时不需要按需加载
// const Icon = r => require.ensure([], () => r(require('./view/zh/icon.md')), 'icon')
// const Button = r => require.ensure([], () => r(require('./view/zh/button.md')), 'button')
// const Radio = r => require.ensure([], () => r(require('./view/zh/radio.md')), 'radio')
// const Checkbox = r => require.ensure([], () => r(require('./view/zh/checkbox.md')), 'checkbox')
// const Input = r => require.ensure([], () => r(require('./view/zh/input.md')), 'input')
// const Textarea = r => require.ensure([], () => r(require('./view/zh/textarea.md')), 'textarea')

import Icon from './view/zh/icon.md';
import Button from './view/zh/button.md';
import Radio from './view/zh/radio.md';
import Checkbox from './view/zh/checkbox.md';
import Input from './view/zh/input.md';
import Textarea from './view/zh/textarea.md';
import Select from './view/zh/select.md';


const baseUrl = 'ga-components';
const language = 'zh';
const url = `/${baseUrl}/${language}`;

const routes = [
    { path: `${url}/Icon`, component: Icon },
    { path: `${url}/Button`, component: Button },
    { path: `${url}/Radio`, component: Radio },
    { path: `${url}/Checkbox`, component: Checkbox },
    { path: `${url}/Input`, component: Input },
    { path: `${url}/Textarea`, component: Textarea },
    { path: `${url}/Select`, component: Select },
    { path: '/', redirect: `${url}/Icon` },
    { path: '*', redirect: `${url}/Icon` }
]

export default routes;