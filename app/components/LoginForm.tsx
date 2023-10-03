import { Form } from "@remix-run/react"
import { FormInput } from "./FormInput"
import { FormSelect } from "./FormSelect"
import { SubmitButton } from "./SubmitButton"
import { ValidatedForm } from "remix-validated-form";

export default function LoginForm() {
  return (
    <ValidatedForm validator={empty} method="post">
      <div className="flex h-screen justify-center items-center bg-gray-100">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 w-1/4">
          <FormInput name="username" label="username" />
          <FormInput name="password" label="password" type="password" />
          {/* <FormSelect
            label="User Type"
            name="user_type"
            options={userTypeList}
          /> */}
          <SubmitButton />
        </div>
      </div>
    </ValidatedForm>  )
}
