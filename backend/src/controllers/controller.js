const db = require('../../database/models/games')

exports.findAllGame = function (req, res) {
    db.findAll().then((posts) => {
        res.status(200).json(posts);
    })
}

exports.findGameById = async function (req, res) {
    const post_id = await db.findByPk(req.params.id);

    if (!post_id) {
        res.status(404).json({ message: 'Jogo não existe!' });
    } else {
        db.findByPk(req.params.id).then((post) => {
            res.status(200).json(post);
        })
    }
}

exports.createGame = function (req, res) {

    db.create({ nome_jogo: req.body.nome_jogo, descricao: req.body.descricao, link_imagem: req.body.link_imagem,
                preco: req.body.preco, plataformas: req.body.plataformas, lojas: req.body.lojas
    }).then(() => {
        res.status(200).json({ message: 'Jogo criado com sucesso' });
    }).catch(() => {
        res.status(400).json({ error: 'Erro ao criar jogo' })
    })
}

exports.updateGame = async function (req, res) {
    const post_id = await db.findByPk(req.params.id);

    if (!post_id) {
        res.status(404).json({ message: 'O jogo não existe!' });
    } else {
        db.update({ nome_jogo: req.body.nome_jogo, descricao: req.body.descricao, link_imagem: req.body.link_imagem,
                    preco: req.body.preco, plataformas: req.body.plataformas, lojas: req.body.lojas}, { where: { 'id': req.params.id } })
            .then(() => {
                res.status(200).json({ message: 'Atualizado com sucesso' })
            })
    }
}

exports.deleteGame = async function (req, res) {
    const post_id = await db.findByPk(req.params.id);

    if (!post_id) {
        res.status(404).json({ message: 'O jogo não existe!' });
    } else {
        db.destroy({ where: { 'id': req.params.id } }).then(() => {
            res.status(200).json({ message: 'Jogo deletado com sucesso' });
        })
    }
}