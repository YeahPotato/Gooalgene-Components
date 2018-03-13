import gaSidebar from './sidebar/index';
import gaButton from './button/index';
import gaIcon from './icon/index';
import gaMore from './more/index';
import gaRadio from './radio/index';
import gaRadioGroup from './radio-group/index';
import gaCheckbox from './checkbox/index';
import gaCheckboxGroup from './checkbox-group/index';
import gaInput from './input/index';
import gaTextarea from './textarea/index';

import './style/default.scss';


const components = {
    gaSidebar,
    gaButton,
    gaIcon,
    gaMore,
    gaRadio,
    gaRadioGroup,
    gaCheckbox,
    gaCheckboxGroup,
    gaInput,
    gaTextarea
}

const install = function (Vue, locale) {
    for (let i in components) {
        Vue.component(i, components[i])
    }
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

components.install = install

export default components;