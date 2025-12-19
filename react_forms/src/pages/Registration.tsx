/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input, Radio, Space } from "antd";
import { Controller, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import { schemas } from "../validations/validations.schema";
import { UserStore } from "../store/UserStore";

interface registrationData {
  fullName:string,
  email:string,
  phoneNumber:string,
  country:string,
  password:string,
  confirmPassword:string,
  gender:string
}

const Registration = () => {

  const navigate = useNavigate();
  const setUserData = UserStore((s:any)=> s.setUserData);

  const { handleSubmit, control,  formState: { errors } } = useForm<registrationData>({
    resolver: zodResolver(schemas?.registration),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      country: '',
      password: '',
      confirmPassword: '',
      gender: ''
    }
  });


  const onSubmit = (data: registrationData) => {
    console.log('registration data is', data);
    setUserData(data);
    navigate('/login') ;
  }

  return (
    <div className="w-4/12 m-auto p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Space orientation="vertical" size='middle' style={{ width: '100%' }}>
          <Controller
            name='fullName'
            control={control}
            render={({ field }) => {
              return <> <Input {...field} placeholder="Enter Full Name" />
                {errors.fullName && (
                  <span className="text-red-500 text-sm">
                    {errors.fullName.message}
                  </span>
                )}
              </>
            }}
          />
          <Controller
            name='email'
            control={control}
            render={({ field }) => {
              return <><Input {...field} placeholder="Enter email" />
              {errors.email && <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span> }
              </>
            }}
          />
          <Controller
            name='phoneNumber'
            control={control}
            render={({ field }) => {
              return <><Input {...field} placeholder="Enter phone number" />
              {errors.phoneNumber && <span className="text-red-500 text-sm">
                    {errors.phoneNumber.message}
                  </span>}
              </>
            }}
          />
          <Controller
            name='country'
            control={control}
            render={({ field }) => {
              return <><Input {...field} placeholder="Enter country" />
              {errors.country && <span className="text-red-500 text-sm">
                    {errors.country.message}
                  </span>}
              </>
            }}
          />
          <Controller
            name='password'
            control={control}
            render={({ field }) => {
              return <><Input {...field} placeholder="Enter password" />
              {errors.password && <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>}
              </>
            }}
          />
          <Controller
            name='confirmPassword'
            control={control}
            render={({ field }) => {
              return <><Input {...field} placeholder="Confirm password" />
              {errors.confirmPassword && <span className="text-xs text-red-500">{errors?.confirmPassword?.message}</span>}
              </>
            }}
          />
          <Controller
            name='gender'
            control={control}
            render={({ field }) => {
              return <> <Radio.Group {...field}
                name="radiogroup"
                defaultValue='male'
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'donotSpecify', label: 'Donot want to specify' },
                ]}
              />{errors.gender && <span className="text-xs text-red-500">{errors?.gender?.message}</span>}</>
            }}
          />
          <Button type="primary" htmlType="submit" className="w-full">Register</Button>
        </Space>
      </form>
    </div>
  )
}

export default Registration
