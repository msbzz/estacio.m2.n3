import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '@/classes/controle/ControleLivros';

const controleLivro = new ControleLivros();

export default function livros(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Lógica para obter os livros
    try {
      res.setHeader('Access-Control-Allow-Origin', '*');
      const livros = controleLivro.obterLivros();
      res.status(200).json(livros);
    } catch (e) {
      res.status(500).send('Erro interno do servidor');
    }
  } else if (req.method === 'POST') {
    // Lógica para inclusão de um novo livro
    const novoLivro = req.body;
    controleLivro.incluir(novoLivro);
    res.status(200).json({ mensagem: 'Livro adicionado com sucesso!' });
  } else if (req.method === 'DELETE') {
    // Lógica para exclusão de um livro
    const id = parseInt(req.query.codigo as string, 10);
    controleLivro.excluir(id);
    res.status(200).send('Exclusão realizada com sucesso');
  } else {
    res.status(405).send('Método não permitido');
  }
}
