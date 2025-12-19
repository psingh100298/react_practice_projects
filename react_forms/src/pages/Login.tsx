/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input, Space } from 'antd';
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { schemas } from '../validations/validations.schema';
import { UserStore } from '../store/UserStore';

interface LoginData {
  email:string,
  password:string
}

const Login = () =>  {

  const navigate = useNavigate();

  const getUserData = UserStore((s:any)=> s.userData);

  const {handleSubmit, control, formState:{errors}} = useForm<LoginData>({
    resolver: zodResolver(schemas?.login),
    defaultValues:{
      email:'',
      password:''
    }
  })

  const onSubmit = (data:LoginData) => {
    console.log('data from login is', data);
    console.log('user data from login page', getUserData);
    navigate('/')
  }

  return (
    <div className="w-4/12 p-5 m-auto">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Space orientation='vertical' size='middle' style={{width:'100%'}}>
      <Controller
      name='email'
      control={control}
      render={({field})=> {
       return <> <Input {...field} placeholder="Enter Email" />
              {errors.email && <span className='text-xs text-red-500'>
                {errors.email.message}
                </span>}
       </>

      }}
      />
      <Controller
      name='password'
      control={control}
      render={({field})=>{
        return <><Input {...field} placeholder='Enter password'/>
          {errors.password && <span className='text-xs text-red-500'>{errors.password.message}</span>}
        </>
      }}
      />
      <Button type='primary' htmlType='submit' className='w-full'>Login</Button>
      </Space>
      </form>
      
    </div>
  )
}

export default Login
