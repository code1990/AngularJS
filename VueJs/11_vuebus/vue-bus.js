/*Vue 添加 个属性$bus ，并代理 $emit $on $off 个方法。*/
/*使用 vue-bus 有两点需要注意 第一是$bus on 应该在 created 钩子内使用，如果在 mounted用，它可能接收不到其他组件来自 created 钩子内发出的事件：第 点是使用了 bus. on ，在beforeDestroy 钩子里应该再使用 $bus.off 解除，因为组件销毁后，就没必要把监听的句柄储存在vue-bus 里了*/
const install = function (Vue) {
    const Bus = new Vue({
        methods: {
            emit (event, ...args) {
                this.$emit(event, ...args);
            },
            on (event, callback) {
                this.$on(event, callback);
            },
            off (event, callback) {
                this.$off(event, callback);
            }
        }
    });
    Vue.prototype.$bus = Bus;
};

export default install;