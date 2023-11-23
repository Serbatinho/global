

export default async function Login() {
    let email = 'silvaa_joao@gmail.com'
    let password = 'js556677'
    let auth = btoa(`${email}:${password}`)
    let response = await fetch('http://localhost:8080/GSApi/api/paciente/auth', {
        headers: {
            'Authorization': `Basic ${auth}`
        }
    })
    let data = await response.json()
    console.log(data)

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Username"  />
            <input type="password" placeholder="Password"  />
            <button>Login</button>
        </div>
    );
}