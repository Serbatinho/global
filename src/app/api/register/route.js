let usersDB = []; // Este é um banco de dados fictício para fins de demonstração

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        // Verifique se o usuário já existe
        const userExists = usersDB.find(user => user.username === username);
        if (userExists) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Adicione o novo usuário ao banco de dados
        usersDB.push({ username, password });

        return res.status(200).json({ message: 'Usuário registrado com sucesso' });
    } else {
        return res.status(405).json({ message: 'Método não permitido' });
    }
}