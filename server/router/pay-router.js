import Express from 'express';
import Pay from '../controller/pay-controller.js';
import tryCatch from '../utils/try-catch.event.js';
import checkOrganization from '../middlewares/check-organization.js'

const router = Express.Router();
router.get('/coupons', checkOrganization, tryCatch(Pay.getCoupons));
router.get('/coupon/:id/promo-codes', checkOrganization, tryCatch(Pay.getPromoCodes));

router.post('/create/coupon', tryCatch(Pay.createCoupon));
router.post('/coupon/:id/create/promo-codes', tryCatch(Pay.createPromoCode));

router.post('/create-session-intent', tryCatch(Pay.createSessionIntent));
router.post('/create-session-retrieve', tryCatch(Pay.createSessionRetrive));
router.post('/create-refunds-payment', tryCatch(Pay.createRefundsPayment));

router.delete('/coupon/:id', tryCatch(Pay.deleteCoupon));

export default router;
