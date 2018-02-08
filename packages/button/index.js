import GAButton from './src/main';

GAButton.install = function(Vue){
    Vue.component(GAButton.name,GAButton);
}

export default GAButton;