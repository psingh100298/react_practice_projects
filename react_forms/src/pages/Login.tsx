/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Input, Space } from 'antd';
import { useForm, Controller } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Login = () =>  {

  const navigate = useNavigate();

  const {handleSubmit, control} = useForm({
    defaultValues:{
      email:'',
      password:''
    }
  })

  const onSubmit = (data:any) => {
    console.log('data from login is', data);
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
       return  <Input {...field} placeholder="Enter Email" />;

      }}
      />
      <Controller
      name='password'
      control={control}
      render={({field})=>{
        return <Input {...field} placeholder='Enter password'/>
      }}
      />
      <Button type='primary' htmlType='submit' className='w-full'>Login</Button>
      </Space>
      </form>
      
    </div>
  )
}

export default Login
