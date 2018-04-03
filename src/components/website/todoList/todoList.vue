
<template>
  <div class="todo-list">
    <div class="todo-input">
      <span class="des">要干点啥</span>
      <Input  
        ref="todo-input"
        style="width:300px"
        v-model="todoInput" 
        type="text" 
        placeholder="Enter something..." 
        autofocus
        @on-enter = "handleSubmit"
        clearable>
      </Input>
      <Button type="primary" @click="handleSubmit" >保存</Button>
    </div>
    <div class="todo-content">
      <Card style="width:400px; margin:0 auto" >
          <p slot="title">
              <Icon type="ios-list-outline"></Icon>
              todo list
          </p>
          <ul>
            <li v-for="(item, index) in todoList" :key="index">
              <span class="todo-text" v-show="editTagArr[0]">{{`${index+1}.${item.detail}`}}</span>
              <Input class="todo-text" type='text' v-show="!editTagArr[0]" v-model="todoList[0]" autofocus></Input>
              <span>
                <Icon type="edit" size="16" style="margin-right:10px" @click.native="editTodoItem" title="保存"></Icon>
                <Icon type="android-delete" size="18" v-show="editTagArr[0]"></Icon>
                <Icon type="filing" size="18" v-show="!editTagArr[0]"></Icon>
              </span>
            </li>
          </ul>
      </Card>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'todo-list',
  data() {
    return {
      todoInput: '',
      editTagArr: [true],
      todoList: [
        {
          detail: '取钱',
          id: 1,
        },
        {
          detail: '取钱',
          id: 1,
        },
        {
          detail: '取钱',
          id: 1,
        },
      ],
    };
  },
  methods: {
    handleSubmit() {
      if (!this.todoInput) {
        this.$Message.warning('Enter something...');
      } else {
        this.todoInput = '';
        this.$refs['todo-input'].blur();
      }
    },
    editTodoItem() {
      Vue.set(this.editTagArr, 0, !this.editTagArr[0]);
      console.log(this.editTagArr);
    },
  },
};
</script>

<style lang="scss">
.todo-list {
  .todo-input{
    margin-top: 10px;
    .des{
      margin-right: 20px;
    }
  }
  .todo-content{
    margin-top: 40px;
    .ivu-card-body{
      li{
        display:flex;
        justify-content: space-between;
        border-bottom: 1px solid #e9eaec;      
        padding-top: 10px;
        padding-bottom: 10px;  
        &:nth-last-child(1){
          border-bottom: none;
        }
        .todo-text{
          max-width: 300px;
          text-align: left;
        }
        .ivu-input{
          height: auto;
          line-height: normal;
          font-size: 14px;
          padding: 0px;
        }
      }
    }
  }
}
</style>
