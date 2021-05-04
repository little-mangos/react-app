import React,{Component} from "react"
import Header from "./components/Header"
import List from "./components/List"
import Footer from "./components/Footer"
import "./App.css"
 class App extends Component {

state={
todos:[
{id:"001",name:"吃饭",done:true},
{id:"002",name:"睡觉",done:true},
{id:"003",name:"写代码",done:false},
{id:"004",name:"购物",done:true},
]
}


addTodo=(todoObj)=>{
//获取原来的todo对象
const {todos}=this.state;
//追加一个todos
const newtodos=[todoObj,...todos];
//更新状态
this.setState({todos:newtodos})

}

updateTodo=(id,done)=>{
const {todos}=this.state
const newtodos=todos.map((todoObj)=>{
if(todoObj.id===id)return {...todoObj,done}
else return todoObj

})
this.setState({todos:newtodos})




}

deleteTodo=(id)=>{
const {todos}=this.state
const newTodos=todos.filter((todoObj)=>{

return todoObj.id!==id



})
this.setState({todos:newTodos})



}

checkAllTodo=(done)=>{
  const {todos}=this.state
 const newtodos=todos.map((todoObj)=>{
return {...todoObj,done:done}



 })
this.setState({todos:newtodos})


}


clearAllDone=()=>{

  const {todos}=this.state
  const newTodos=todos.filter((todoObj)=>{
  
  return !todoObj.done
  
  })
  this.setState({todos:newTodos})
  


}






  render() {

    const {todos}=this.state

    return (
      
    <div className="todo-container">
    <div className="todo-wrap">
    <Header addTodo={this.addTodo}/>
    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
     
    </div>
  </div> 
    
      
    )
  }
}



export default App;
