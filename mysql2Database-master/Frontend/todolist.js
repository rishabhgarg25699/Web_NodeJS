$(function() {

    let newTodoBox = $('#newtodo')
    let addtodoBtn = $('#addtodo')
    let todoList = $('#todolist')


    addtodoBtn.click(function() {
        let newTodo = newTodoBox.val()

        $.post(
            '/todos/', { task: newTodo },
            function(data) {
                console.log("In one" + data)
                todoList.empty();
                for (todo of data) {
                    var j = todo.data
                    todoList.append("<l1>" + (j) + "</li> <br>")
                }
            }
        )
    })
})