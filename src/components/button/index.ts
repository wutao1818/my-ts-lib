import MyButton from './index.vue';

MyButton.install = (Vue: any) => {
  Vue.component(MyButton.name, MyButton);
}

export { MyButton }
