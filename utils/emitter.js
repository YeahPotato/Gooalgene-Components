function broadcast(componentsName, event, params) {
    this.$children.forEach(child => {
        var name = child.$options.name;

        if (componentsName === name) {
            child.$emit.apply(child, [event].concat(params));
        } else {
            broadcast.apply(child, [componentsName, event].concat(params));
        }
    })
}


export default {
    methods: {
        dispatch(componentName, eventName, params) {
            var parent = this.$parent || this.$root;
            var name = parent.$options.name;

            while (parent && (!name || name !== componentName)) {
                parent = parent.$parent;

                if (parent) {
                    name = parent.$options.name;
                }
            }
            if (parent) {
                parent.$emit.apply(parent, [eventName].concat(params));
            }
        },
        broadcast(componentName, eventName, params) {
            broadcast.call(this, componentName, eventName, params);
        }
    }
}