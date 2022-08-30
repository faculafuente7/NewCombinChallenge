import { useState } from "react";
import { useForm } from "react-hook-form";
import { uploadUser } from "../../config/functions";
import {useSelector} from 'react-redux'

const Form = () => {
    const { register, handleSubmit, formState: { errors, isValid, isDirty }, reset } = useForm();

    const onSubmit = (user) => {
        uploadUser(user)    
    }


    const messages = {
        req: "Este campo es obligatorio",
        name: "El formato introducido no es el correcto",
        length: "El mínimo es de 2 carácteres"
    };

    return (
        <form onSubmit={handleSubmit( (data) => onSubmit(data))} className="form" >
            <label htmlFor="firstName">Nombre</label>
            <input
                {...register("firstName",
                    {
                        required: {
                            value: true,
                            message: messages.req
                        },
                        minLength: {
                            value: 2,
                            message: messages.length
                        }
                    })}
                name="firstName"
                type="text"
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}

            <label htmlFor="lastName">Apellido</label>
            <input
                {...register("lastName",
                    {
                        required: {
                            value: true,
                            message: messages.req
                        },
                        minLength: {
                            value: 2,
                            message: messages.length
                        }
                    })}
                name="lastName"
                type="text"
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}

            <label htmlFor="address">Dirección</label>
            <input
                {...register("address",
                    {
                        required: {
                            value: true,
                            message: messages.req
                        },
                        minLength: {
                            value: 2,
                            message: messages.length
                        }
                    })}
                name="address"
                type="text"
            />
            {errors.address && <p>{errors.address.message}</p>}

            <label htmlFor="ssn">Seguro Social</label>
            <input
                {...register("ssn", {
                    required: {
                        value: true,
                        message: messages.req
                    },
                    pattern: {
                        value: /^[0-9]\d{2}-\d{2}-\d{4}$/i,
                        message: messages.name
                    }
                })}
                name="ssn"
                type="tel"
            />
            {errors.ssn && <p>{errors.ssn.message}</p>}
            <div>
                <button onClick={() => reset()} >Reset Form</button>
                <input  type="submit" />
            </div>
        </form>
    )
}

export default Form;