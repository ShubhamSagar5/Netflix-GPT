

export const CheckValidData = (email,password) => {

    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)

    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/.test(password)

    if(!isEmailValid) return "Email is Invalid"

    if(!isPasswordValid){
        return (
            " Min 1 uppercase letter.Min 1 lowercase letter.Min 1 special character.Min 1 number.Min 8 characters.Max 30 characters"
        )
    }

    return null
}


const Condition = {
    1 : "Min 1 uppercase letter",
    2 : "Min 1 lowercase letter",
    3 : "Min 1 special character",
    4 : "Min 1 number",
    5 : "Min 8 characters.Max 30 characters"
}

//" Min 1 uppercase letter.Min 1 lowercase letter.Min 1 special character.Min 1 number.Min 8 characters.Max 30 characters"