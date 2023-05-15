import { sequelize } from "../shared/utils";
import { DataTypes, Model, UUIDV4 } from "sequelize";

export interface GeneralSettingsAttributes {
  id?: number;
  uuid?: string;
  settingKey?: string;
  settingValue?: string | boolean;
}

interface GeneralSettingsInstance
  extends Model<GeneralSettingsAttributes>,
    GeneralSettingsAttributes {}

export const GeneralSettingModel = sequelize.define<
  GeneralSettingsInstance,
  GeneralSettingsAttributes
>(
  "GeneralSetting",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      defaultValue: UUIDV4,
    },
    settingKey: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true,
    },
    settingValue: {
      type: DataTypes.JSONB,
    },
  },
  {
    underscored: true,
  }
);
