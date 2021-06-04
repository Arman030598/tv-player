const LoginForm = ({onSubmit,handleChange}) =>{
    return(
        <form action="" onSubmit={onSubmit}>
            <input
                type="text"
                name={'username'}
                onChange={handleChange}
            />
            <input
                type="password"
                name={'password'}
                onChange={handleChange}
            />
            <button type={'submit'}>Login</button>
        </form>
    )
}

export default LoginForm