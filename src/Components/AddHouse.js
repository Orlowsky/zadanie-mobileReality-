import React from 'react'
import { useForm } from "react-hook-form";
import uniqid from 'uniqid'
const AddHouse = ({updateHouseList}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
    data.createdAt = new Date().toDateString();
    data.updatedAt = new Date().toDateString();
    data.__v = 0;
    data._id = uniqid();
    
    updateHouseList(data)
    }
   
  
    return (
      /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <div><label>address</label>
        <input defaultValue="address" {...register("address", { required: true })} /></div>
        <div><label>description</label>
        <input defaultValue="description" {...register("description", { required: true })} /></div>
        <div><label>floorsNumber</label>
        <input defaultValue="floorsNumber" {...register("floorsNumber", { required: true })} /></div>
        <div><label>label</label>
        <input defaultValue="label" {...register("label", { required: true })} /></div>
        
        
        
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input type="submit" />
      </form>
    );
}

export default AddHouse
