import { sequelize } from "../shared/utils";
import { DataTypes, Model } from "sequelize";

export interface GeneralSettingsAttributes {
  id?: number;
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
