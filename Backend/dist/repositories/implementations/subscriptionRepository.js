"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionRepository = void 0;
const subscriptionSchema_1 = require("../../models/subscriptionSchema");
class SubscriptionRepository {
    async createSubscription(subscription) {
        try {
            const result = await subscriptionSchema_1.Subscription.create(subscription);
            return result;
        }
        catch (error) {
            return null;
        }
    }
}
exports.SubscriptionRepository = SubscriptionRepository;
//# sourceMappingURL=subscriptionRepository.js.map