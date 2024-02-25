import { useForm } from "react-hook-form";
import Field from "../Form/Field";
import FieldSet from "../Form/FieldSet";

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();

    const submitForm = (formData) => {
        console.log(formData);
        const user = {
            email: "abc@gmail.com",
            password: "qwerasdfzxcv",
        }
        const found = user.email === formData.email && user.password === formData.password;
        if (!found) {
            setError("root.random", {
                message: `User with email id: ${formData.email} not found`,
                type: "UserNotFoundError"
            })
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <form onSubmit={handleSubmit(submitForm)}>
                <FieldSet label={"Enter Login Details"}>
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
export default LoginForm;