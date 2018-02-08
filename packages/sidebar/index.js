import GASidebar from './src/main';
GASidebar.install = function(Vue){
    Vue.component(GASidebar.name,GASidebar);
};

export default GASidebar;