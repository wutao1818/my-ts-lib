import MyArea from './index.vue';

MyArea.install = (Vue: any) => {
  Vue.component(MyArea.name, MyArea);
}

export { MyArea };
