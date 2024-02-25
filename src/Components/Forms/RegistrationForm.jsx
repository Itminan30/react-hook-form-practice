import { useForm } from "react-hook-form";
import Field from "../Form/Field";
import FieldSet from "../Form/FieldSet";

const RegistrationForm = () => {
    const { register, handleSubmit, formState: { errors }, setError } = useForm();

    const submitForm = (formData) => {
        console.log(formData);
    }

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
export default RegistrationForm;