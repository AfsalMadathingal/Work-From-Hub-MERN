import { IAdmin } from "entities/AdminEntity";
import Admin from "../../models/adminModel";
import { IAdminRepository } from "repositories/interface/IAdminRepository";
import { log } from "console";

export default class AdminRepository implements IAdminRepository {
  async findById(userId: string): Promise<IAdmin | null> {
    const adminData = await Admin.findOne({ _id: userId });

    return adminData;
  }

  async findByUserId(userId: string): Promise<IAdmin | null> {

    const adminData = await Admin.findOne({ userId});

    return adminData;


  }

  async saveRefreshToken(
    userId: string,
    refreshToken: string
  ): Promise<IAdmin | null> {
    const adminWithSavedToken = await Admin.findOneAndUpdate(
      { _id: userId },
      { $push: { refreshToken: refreshToken } }
    ).select("-password -refreshToken");

    return adminWithSavedToken;
  }

  async removeRefreshToken(
    userId: string,
    refreshToken: string
  ): Promise<IAdmin | null> {
    const adminWithRemovedToken = await Admin.findOneAndUpdate(
      { _id: userId },
      { $pull: { refreshToken: refreshToken } },
      { new: true }
    ).select("-password -refreshToken");

    return adminWithRemovedToken;
  }
}
