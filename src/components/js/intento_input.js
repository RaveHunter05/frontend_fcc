import React from 'react';
import {useForm} from 'react-hook-form';

const Imput = () => {
    const {register, handleSubmit} = useForm();
    
    const onSubmit =(data)=>{
        console.log(data);
    }
    
    return(
        <div> 
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
                <input  
                    type="text"
                    placeholder="E-mail"
                    name="email"
                    ref={register}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    ref={register}
                /> 
                <input
                    type="submit"
                />
            </form>
        </div>
    )
}

export default Imput;