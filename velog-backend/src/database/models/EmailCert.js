// @flow
import Sequelize from 'sequelize';
import db from 'database/db';
import shortid from 'shortid';

const EmailAuth = db.define(
  'email_cert',
  {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV1,
      primaryKey: true,
    },
    code: {
      type: Sequelize.STRING,
      unique: true,
      defaultValue: shortid.generate,
    },
    fk_user_id: Sequelize.UUID,
  },
  {
    freezeTableName: true,
    tableName: 'email_cert',
    indexes: [
      {
        fields: ['fk_user_id'],
      },
    ],
  },
);

export default EmailAuth;