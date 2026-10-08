import { useForm, type SubmitHandler } from "react-hook-form";
import type { Todo } from "../types/todo";
import { useTodos } from "../hooks/useTodos";

function TodoForm() {
  const { saveTodo } = useTodos();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Todo>();

  const onSubmit: SubmitHandler<Todo> = (data) => {
    // {title:"le titre",completed: false}
    console.log(data);
    saveTodo(data);
  };
  // register("title") => {name:"title"}
  return (
    <>
      <h2>TodoForm</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Todo title ..."
          {...register("title", { required: true })}
        />
        {errors.title && <span>This title is required</span>}
        <br />
        Done ?<input type="checkbox" {...register("completed")} />
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default TodoForm;
