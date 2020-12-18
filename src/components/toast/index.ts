import MyToast from './index.vue';

MyToast.install = (Vue: any) => {
  Vue.prototype.$MyToast = (msg = '操作成功', duration = 2000) => {
    const contruct = Vue.extend(MyToast);
    const instance = new contruct();
    instance.msg = msg;
    const tpl = instance.$mount().$el;

    const body = <HTMLBodyElement>document.querySelector('body');
    body.appendChild(tpl);
    setTimeout(() => {
      body.removeChild(tpl)
    }, duration);

  }
}

export { MyToast };






