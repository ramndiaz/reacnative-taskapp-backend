import {connect} from '../database'


export const getTasks = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT * FROM tasks');
    //console.log(rows);
    res.json(rows);
};

export const getTask = async (req, res) => {
    const connection = await connect();
    const rows = await connection.execute('SELECT * FROM tasks WHERE id =?', [req.params.id,]);
    res.json(rows[0][0]);
};

export const getTaskCount = async (req, res) => {
    const connection = await connect();
    const [rows] = await connection.query('SELECT COUNT(*) AS count FROM tasks');
    res.json(rows[0]['count']);
};

export const saveTask = async (req, res) => {
    try {
      const connection = await connect();
      const [results] = await connection.execute(
        "INSERT INTO tasks(title, description) VALUES (?, ?)",
        [req.body.title, req.body.description]
      );
  
      const newUser = {
        id: results.insertId,
        ...req.body,
      };
      res.json(newUser);
    } catch (error) {
      console.error(error);
    }
  };

export const deleteTask = async (req, res) => {
    const connection = await connect();
    await connection.query('DELETE FROM tasks WHERE id =?', [req.params.id]);
    res.sendStatus(204);
};

export const updateTask = async (req, res) => {
    const connection = await connect();
    await connection.query('UPDATE tasks SET ? WHERE id =?', [req.body, req.params.id]);
    res.sendStatus(204);
};
