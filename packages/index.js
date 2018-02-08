import GASidebar from './sidebar/index';
import GAButton from './button/index';
import GAIcon from './icon/index';
import './style/default.scss';


const components = {
    GASidebar,
    GAButton,
    GAIcon
}

const install = function (Vue, locale) {
    for (let i in components) {
        Vue.component(i, components[i])
    }

    // Vue.directive('n3Position', position)
    // Vue.prototype.n3Modal = n3ModalMethod
    // Vue.prototype.n3Alert = n3AlertMethod
    // Vue.prototype.n3Toast = n3ToastMethod
    // Vue.prototype.n3Locale = locale || 'zh'
    // window.n3Locale = locale || 'zh'
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

components.install = install

export default components