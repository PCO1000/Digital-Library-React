
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseIsbn, chooseAuthor, chooseTitle, chooseLength, chooseType } from "../redux/slices/RootSlice"

interface BookFormProps {
  id?: string[]
}

const BookForm = ( props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.name } ${ props.id }`)
      setTimeout(() =>{window.location.reload()}, 500);
      event.target.reset()
    } else {
      dispatch(chooseIsbn(data.isbn));
      dispatch(chooseAuthor(data.author));
      dispatch(chooseTitle(data.title));
      dispatch(chooseLength(data.length));
      dispatch(chooseType(data.type));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 500);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="isbn">Isbn</label>
          <Input {...register('isbn')} name='isbn' placeholder="Isbn" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Input {...register('author')} name='author' placeholder="Author" />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="length">Length</label>
          <Input {...register('length')} name='length' placeholder="length" />
        </div>
        <div>
          <label htmlFor="type">Type</label>
          <Input {...register('type')} name='type' placeholder="Type" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default BookForm