// select component
import GASelect from '../input/src/select.vue';

GASelect.install = function(Vue){
    Vue.component(GASelect.name,GASelect);
}

export default GASelect;