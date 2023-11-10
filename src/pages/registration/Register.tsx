import { Button, Input, Grid } from '@mantine/core'
import { useForm, SubmitHandler } from 'react-hook-form'
// import { DateInput } from '@mantine/dates'

type RegisterInputs = {
    firstname: string,
    lastname: string,
    dateOfBirth: Date,
    email: string,
    phone: string,
    password: string
}

const Register = (): JSX.Element => {
    const {
        register,
        handleSubmit
    } = useForm<RegisterInputs>()
    
    const handleRegister: SubmitHandler<RegisterInputs> = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(handleRegister)}>
            <Grid>
                <Grid.Col>
                    <Input.Wrapper label='First Name'>
                        <Input placeholder='First name' {...register('firstname', { required: true })}></Input>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col>
                    <Input.Wrapper label='Last Name'>
                        <Input placeholder='Last name' {...register('lastname', { required: true })}></Input>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col>
                    <Input.Wrapper label='Date Of Birth'>
                        <Input type='date' {...register('dateOfBirth')}></Input>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col>
                    <Input.Wrapper label='Email'>
                        <Input placeholder='Email' {...register('email', { required: true })}></Input>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col>
                    <Input.Wrapper label='Phone'>
                        <Input placeholder='Phone no.' {...register('phone', { required: true })}></Input>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col>
                    <Input.Wrapper label='Password'>
                        <Input placeholder='Password' {...register('password', { required: true })} type='password'></Input>
                    </Input.Wrapper>
                </Grid.Col>
                <Grid.Col className='center mt-1'>
                    <Button fullWidth type='submit'>Register</Button>
                </Grid.Col>
            </Grid>
        </form>
    )
}

export default Register