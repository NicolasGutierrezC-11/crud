
//exportar los objetos

const controller = {};

controller.list = (req, res ) => {
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM comprador', (err, customers) => {
            if(err){
                res.json(err);
            }
            console.log(customers)
            res.render('customers', {
                data: customers
            })
        })
    })
}

controller.save = (req, res) => {
    const data = req.body
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO comprador set ?', [data], (err, customer) => {
            res.redirect('/')
        })
    })
}

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {

        conn.query('SELECT * FROM comprador WHERE id = ?', [id], (err, customer) => {
            res.render('Customers_edit', {
                data: customer[0]
            });
            
        })
    })
};

controller.update = (req, res) => {
    const { id } = req.params;
    const newComprador = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE comprador set ? WHERE id = ?', [newComprador, id], (err, rows) => {
            res.redirect('/')
        })
    })
}


controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM comprador WHERE id = ?', [id], (err, rows) => {
            if (err) {
                console.log(err);
            }
            res.redirect('/');
        });
    });
};


module.exports = controller;