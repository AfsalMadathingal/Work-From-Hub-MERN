"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkspaceRepository = void 0;
const workspace_1 = require("../../models/workspace");
class WorkspaceRepository {
    collection;
    constructor() {
        this.collection = workspace_1.WorkspaceModel;
    }
    async findByIdAndUpdate(workspaceId, data) {
        try {
            const updatedWorkspace = await this.collection.findByIdAndUpdate(workspaceId, data, { new: true });
            return updatedWorkspace;
        }
        catch (error) {
            console.error(error);
            return null;
        }
    }
    async create(workspace) {
        try {
            console.log(workspace);
            const result = await this.collection.create(workspace);
            return result;
        }
        catch (error) {
            console.log(error);
            throw error;
            return null;
        }
    }
    async findWithPagination(page, limit, approved = false) {
        try {
            const data = await workspace_1.WorkspaceModel.find({ approved })
                .skip((page - 1) * limit)
                .limit(limit)
                .select("-password -refreshToken");
            const approvedWorkspaces = approved ? data : null;
            const pendingSubmissions = approved ? null : data;
            const totalUser = await workspace_1.WorkspaceModel.countDocuments({ approved });
            const totalPages = Math.ceil(totalUser / limit);
            if (approved) {
                return { approvedWorkspaces, totalPages };
            }
            return { pendingSubmissions, totalPages };
        }
        catch (error) {
            return null;
        }
    }
    async approveWorkspace(id) {
        try {
            const updateResult = await this.collection.findByIdAndUpdate(id, {
                approved: true,
                rejected: false,
            }, {
                new: true,
            });
            return updateResult;
        }
        catch (error) {
            return null;
        }
    }
    async rejectWorkspace(id) {
        try {
            const updateResult = await this.collection.findByIdAndUpdate(id, {
                approved: false,
                rejected: true,
            }, {
                new: true,
            });
            return updateResult;
        }
        catch (error) {
            return null;
        }
    }
    async unHoldWorkspace(workspaceId) {
        try {
            const workspace = await this.collection.findById(workspaceId);
            const updateResult = await this.collection.findByIdAndUpdate(workspaceId, {
                isOnHold: !workspace.isOnHold,
                holdingReason: "Property held by owner"
            }, {
                new: true,
            });
            return updateResult;
        }
        catch (error) {
            return null;
        }
    }
    async getAllWorkspaces() {
        try {
            const allWorkspaces = await this.collection
                .find({})
                .sort({ createdAt: -1 });
            return allWorkspaces;
        }
        catch (error) {
            return null;
        }
    }
    async findById(id) {
        try {
            const workspaceData = await this.collection.findOne({
                _id: id,
                approved: true,
            });
            return workspaceData;
        }
        catch (error) {
            return null;
        }
    }
    async getWithFilters(query, filter, page, limit, sortOrder) {
        try {
            const newFilter = { ...filter };
            if (filter.rating) {
                newFilter.rating = { $gte: filter.rating };
            }
            const searchQuery = {
                $or: [
                    { buildingName: { $regex: query, $options: "i" } },
                    { district: { $regex: query, $options: "i" } },
                    { street: { $regex: query, $options: "i" } },
                    { state: { $regex: query, $options: "i" } },
                ],
            };
            // Combine search query with filters using $and operator
            const combinedQuery = {
                $and: [
                    searchQuery,
                    newFilter // This includes the filter conditions like ac, bathroom, etc.
                ]
            };
            console.log('==============dfdfd======================');
            console.log(page, limit);
            console.log('====================================');
            const ct = await this.collection
                .find(filter.all ? { approved: true } : combinedQuery).countDocuments();
            const workspaces = await this.collection
                .find(filter.all ? { approved: true } : combinedQuery)
                .skip((page - 1) * limit)
                .limit(limit)
                .sort(sortOrder);
            const count = await this.collection
                .find(filter.all ? { approved: true } : combinedQuery)
                .countDocuments();
            return { Workspaces: workspaces, totalPages: count };
        }
        catch (error) {
            return null;
        }
    }
    async searchWorkspace(query, page, limit) {
        try {
            const workspaces = await this.collection
                .find({
                $or: [
                    { buildingName: { $regex: query, $options: "i" } },
                    { district: { $regex: query, $options: "i" } },
                    { street: { $regex: query, $options: "i" } },
                    { state: { $regex: query, $options: "i" } },
                ],
            })
                .skip((page - 1) * limit)
                .limit(limit);
            return workspaces;
        }
        catch (error) {
            return null;
        }
    }
    async findByOwnerId(id) {
        try {
            const workspaces = await this.collection.find({ ownerId: id });
            return workspaces;
        }
        catch (error) {
            throw error;
        }
    }
    async getTotalWorkspace() {
        try {
            const totalWorkspaces = await this.collection.countDocuments({ approved: true });
            return totalWorkspaces;
        }
        catch (error) {
            return null;
        }
    }
    async findApprovedByOwnerId(id, page, limit) {
        try {
            const data = await workspace_1.WorkspaceModel.find({ approved: true, ownerId: id })
                .skip((page - 1) * limit)
                .limit(limit);
            const approvedWorkspaces = data;
            const totalUser = await workspace_1.WorkspaceModel.countDocuments({ approved: true, ownerId: id });
            const totalPages = Math.ceil(totalUser / limit);
            return { approvedWorkspaces, totalPages };
        }
        catch (error) {
        }
    }
    async findBothById(id) {
        try {
            const workspace = await this.collection.findOne({ _id: id }).populate('ownerId', '-password');
            return workspace;
        }
        catch (error) {
            return null;
        }
    }
}
exports.WorkspaceRepository = WorkspaceRepository;
//# sourceMappingURL=WorkspaceRepository.js.map