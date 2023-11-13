export let campaignAPIKey = $('#mmspin-main').attr(
    'data-campaign-api-id'
);
export let dataAPIKey = $('#mmspin-main').attr('data-api-key');
export let termsAndConditions = [];
export let promotions = [];
export let campaign = null;
export let couponData = null;
export let disagreeUrl = '';
export let callBackUrl = '';
export let basePath = 'https://mmspin.com/';
export let initUserForm = true;

export function setTnc(tnc) {
    termsAndConditions = tnc;
}

export function setPromo(promos) {
    promotions = promos;
}

export function setCampaign(campaignData) {
    campaign = campaignData;
}

export function setCoupon(coupon) {
    couponData = coupon;
}

export function setDisagreeUrl(disUrl) {
    disagreeUrl = disUrl;
}

export function setCallBackUrl(callUrl) {
    callBackUrl = callUrl;
}

export function setUserFormInit(value) {
    initUserForm = value;
}
