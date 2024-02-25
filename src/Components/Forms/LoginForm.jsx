import Field from "../Form/Field";
import FieldSet from "../Form/FieldSet";

const LoginForm = () => {
    return (
        <div>
            <form action="">
                <FieldSet label={"Enter Login Details"}>
                    {/* Email Field */}
                    <Field label={"Email:"}>
                        <input
                            className="p-2 border box-border w-[300px] rounded-md border-gray-200"
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Enter Email Address" />
                    </Field>
                    {/* Password Field */}
                    <Field label={"Password:"}>
                        <input
                            className="p-2 border box-border w-[300px] rounded-md border-gray-200"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter Password" />
                    </Field>

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