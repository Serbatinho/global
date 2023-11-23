export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Verifique se o usuário existe e a senha está correta
        const user = usersDB.find(user => user.username === username && user.password === password);
        if (!user) {
            return res.status(401).json({ message: 'Usuário ou senha inválidos' });
        }

        return res.status(200).json({ message: 'Usuário autenticado com sucesso' });
    } else {
        return res.status(405).json({ message: 'Método não permitido' });
    }
}