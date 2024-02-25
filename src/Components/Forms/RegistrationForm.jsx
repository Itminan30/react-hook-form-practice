import { useFieldArray, useForm } from "react-hook-form";
import Field from "../Form/Field";
import FieldSet from "../Form/FieldSet";

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors }, setError, control } = useForm();
    const { fields, append, remove } = useFieldArray({
        name: "socials",
        control
    });

    const submitForm = (formData) => {
        console.log(formData);
    }
    console.log(fields);
    return (
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(submitForm)}>
                <FieldSet label={"Enter Login Details"}>
                    {/* FullName Field */}
                    <Field label={"Full Name:"} error={errors["fname"]}>
                        <input
                            {...register("fname", { required: "Full Name is required" })}
                            className={`p-2 border box-border w-[300px] rounded-md ${errors["fname"] ? "border-red-500" : "border-gray-200"}`}
                            type="text"
                            name="fname"
                            id="fname"
                            placeholder="Enter Full Name" />
                    </Field>
                    {/* Age Field */}
                    <Field label={"Age:"} error={errors["age"]}>
                        <input
                            {...register(
                                "age",
                                {
                                    required: "Age is required",
                                    max: {
                                        value: 100,
                                        message: "Age must be between 0 and 100"
                                    },
                                    min: {
                                        value: 0,
                                        message: "Age must be between 0 and 100"
                                    }
                                }
                            )}
                            className={`p-2 border box-border w-[300px] rounded-md ${errors["age"] ? "border-red-500" : "border-gray-200"}`}
                            type="number"
                            name="age"
                            id="age"
                            placeholder="Enter Age" />
                    </Field>
                    {/* Email Field */}
                    <Field label={"Email:"} error={errors["email"]}>
                        <input
                            {...register("email", { required: "Email is required" })}
                            className={`p-2 border box-border w-[300px] rounded-md ${errors["email"] ? "border-red-500" : "border-gray-200"}`}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter Email Address" />
                    </Field>
                    {/* Password Field */}
                    <Field label={"Password:"} error={errors["password"]}>
                        <input
                            {...register(
                                "password",
                                {
                                    required: "Password is required",
                                    minLength: {
                                        value: 8,
                                        message: "Your Password must be atleast 8 characters"
                                    }
                                }
                            )}
                            className={`p-2 border box-border w-[300px] rounded-md ${errors["password"] ? "border-red-500" : "border-gray-200"}`}
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password" />
                    </Field>
                    {/* Social Fieldsets */}
                    <FieldSet label={"Enter Social Handles"} >
                        {
                            fields.map((field, index) => (
                                <div
                                    className="flex justify-between items-center w-max"
                                    key={field.id}>
                                        <Field label={"Social Name"}>
                                            <input 
                                            {...register(`socials[${index}].name`)}
                                            id={`socials[${index}].name`}
                                            name={`socials[${index}].name`}
                                            type="text"
                                            className="p-2 border box-border rounded-md w-full"/>
                                        </Field>
                                        <Field label={"Social URL"}>
                                            <input 
                                            {...register(`socials[${index}].url`)}
                                            id={`socials[${index}].url`}
                                            name={`socials[${index}].url`}
                                            type="text"
                                            className="p-2 border box-border rounded-md w-full"/>
                                        </Field>
                                </div>
                            ))
                        }
                        <button
                            className="mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-2 m-auto"
                            onClick={() => append({ name: "", url: "" })}
                        >
                            Add a Social Handle
                        </button>
                    </FieldSet>
                    <div className="text-red-500">
                        {errors?.root?.random?.message}
                    </div>
                    <Field>
                        <button
                            className="text-md text-white cursor-pointer p-2 border rounded-lg bg-purple-500">
                            Login
                        </button>
                    </Field>
                </FieldSet>
            </form>
        </div>
    );
};
export default RegistrationForm;