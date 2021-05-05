import React, { Component } from 'react'
import PropTypes from "prop-types"
import  {nanoid} from "nanoid"
import   "./index.css";

export default class Header extends Component {
static propTypes={
addTodo:PropTypes.func.isRequired




}






handleKeyUp=(event)=>{
    const {keyCode,target}=event
    //判断是否是回车按键
     if(keyCode!==13)return 
     if(target.value.trim()===""){

           alert("用户名不能为空");
             return
     }

        //将todoobj传递给app
         this.props.addTodo({id:nanoid(),name:target.value,done:false})
         target.value=""
    
      }

     


    render() {
        return (
            <div className="todo-header">
            <input  onKeyUp={this.handleKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认"/>
          </div>
        )
    }
}
