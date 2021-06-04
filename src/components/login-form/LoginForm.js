const LoginForm = ({onSubmit,handleChange}) =>{
    return(
        <form action="" onSubmit={onSubmit} className={"login__form"}>
            <input
                className={"login__form--inp"}
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