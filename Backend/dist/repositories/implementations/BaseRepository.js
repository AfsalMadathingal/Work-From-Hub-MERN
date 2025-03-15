"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
class BaseRepository {
    model;
    constructor(model) {
        this.model = model;
    }
    async create(item) {
        const createdItem = new this.model(item);
        return null;
    }
    async findById(id) {
        return await this.model.findById(id).exec();
    }
    async findAll() {
        return await this.model.find().exec();
    }
    async update(id, item) {
        return await this.model.findByIdAndUpdate(id, item, { new: true }).exec();
    }
    async delete(id) {
        const result = await this.model.findByIdAndDelete(id).exec();
        return result !== null;
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=BaseRepository.js.map