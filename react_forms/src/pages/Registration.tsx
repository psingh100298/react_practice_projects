/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input, Radio, Space } from "antd";
import { Controller, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const navigate = useNavigate();

  const { handleSubmit, control, formState: { errors } } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      country: '',
      password: '',
      confirmPassowrd: '',
      gender: ''
    }
  });

  const onSubmit = (data: any) => {
    console.log('registration data is', data);
    navigate('/login') ;
  }

  return (
    <div className="w-4/12 m-auto p-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Space orientation="vertical" size='middle' style={{ width: '100%' }}>
          <Controller
            name='fullName'
            control={control}
            rules={{
              required: 'Full name is required',
            }}
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
            rules={{required:'Email is required'}}
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
            rules={{required:'Phone number is required'}}
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
              return <Input {...field} placeholder="Enter country" />
            }}
          />
          <Controller
            name='password'
            control={control}
            render={({ field }) => {
              return <Input {...field} placeholder="Enter password" />
            }}
          />
          <Controller
            name='confirmPassowrd'
            control={control}
            render={({ field }) => {
              return <Input {...field} placeholder="Confirm password" />
            }}
          />
          <Controller
            name='gender'
            control={control}
            render={({ field }) => {
              return <Radio.Group {...field}
                name="radiogroup"
                defaultValue={'male'}
                options={[
                  { value: 'male', label: 'Male' },
                  { value: 'female', label: 'Female' },
                  { value: 'donotSpecify', label: 'Donot want to specify' },
                ]}
              />
            }}
          />
          <Button type="primary" htmlType="submit" className="w-full">Register</Button>
        </Space>
      </form>
    </div>
  )
}

export default Registration
