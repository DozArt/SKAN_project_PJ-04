export const blurHandler = (e) => {
    switch (e.target.name) {
        case 'login':
            setLoginDitry(true)
            break
        case 'password':
            setPasswordDitry(true)
            break
    }
}

export const emailHandler = (e) => {
    setLogin(e.target.value)
    const re_name =  /^[a-z0-9_\.]+$/

    if (re_name.test(String(e.target.value).toLowerCase())) {
        setLoginError('')
    } else {
        setLoginError('Введите корректные данные')
    }
}

export const passwordHandler = (e) => {
    setPassword(e.target.value)

    if (e.target.value.length < 5) {
        setPasswordError('Неправильный пароль')
    } else {
        setPasswordError('')
    }
}
