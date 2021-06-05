const LoginForm = ({onSubmit,handleChange}) =>{
    return(
        <form action="" onSubmit={onSubmit} className={"login__form"}>
            <h2>Account Login</h2>
            <label htmlFor="">UserName</label>
            <input
                type="text"
                name={'username'}
                onChange={handleChange}
            />
            <label htmlFor="">PassWord</label>
            <input
                type="password"
                name={'password'}
                onChange={handleChange}
            />
            <button type={'submit'} className={'btn btn-success'}>Login</button>
        </form>
    )
}

export default LoginForm