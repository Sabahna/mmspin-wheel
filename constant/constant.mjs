const mmspinTabTcContainer = document.createElement('div');
$(mmspinTabTcContainer).addClass('mmspin_tab_tc_container');

const mmspinUserFormContainer = document.createElement('div');
$(mmspinUserFormContainer).addClass('mmspin_userform_container');

const mmspinRecaptchaContainer = document.createElement('div');
$(mmspinRecaptchaContainer).addClass('mmspin_recaptcha_container');

const mmspinFormTitle = document.createElement('h1');
$(mmspinFormTitle).addClass('mmspin_form_title');

const disagreeButton = document.createElement('button');
$(disagreeButton).addClass('mmspin_button');

const previousButton = document.createElement('button');
$(previousButton).addClass('mmspin_button');

const agreeButton = document.createElement('button');
$(agreeButton).addClass('mmspin_button');

const mmspinButtonContainer = document.createElement('div');
$(mmspinButtonContainer).addClass('mmspin_button_container');

const mmspinForm = document.createElement('form');
$(mmspinForm).attr('id', 'mmspin_form');

const mmspinResendContainer = document.createElement('div');
$(mmspinResendContainer).addClass('mmspin_resend_container');

const mmspinInputContainer = document.createElement('div');
$(mmspinInputContainer).addClass('mmspin_input_container');

const mmspinFullnameInput = document.createElement('input');
$(mmspinFullnameInput).addClass('mmspin_fullname_input');
$(mmspinFullnameInput).attr({
    placeholder: 'Fullname',
    type: 'text',
});

const mmspinAddressInput = document.createElement('textarea');
$(mmspinAddressInput).addClass('mmspin_address_input');
$(mmspinAddressInput).attr({
    placeholder: 'Address',
});

const mmspinCodeInput = document.createElement('input');
$(mmspinCodeInput).addClass('mmspin_code_input');
$(mmspinCodeInput).attr({
    placeholder: 'Coupon Code',
    type: 'text',
});

const mmspinRecaptchaInput = document.createElement('input');
$(mmspinRecaptchaInput).addClass('mmspin_recaptcha_input');
$(mmspinRecaptchaInput).attr({type: 'hidden'});

const mmspinMobileInput = document.createElement('input');
$(mmspinMobileInput).addClass('mmspin_mobile_input');
$(mmspinMobileInput).attr({
    placeholder: 'Mobile Number - 09xxxxxxx',
    type: 'number',
    required: 'required',
});

const mmspinMobileInputContainer = document.createElement('div');
$(mmspinMobileInputContainer).addClass(
    'mmspin_mobile_input_container'
);
$(mmspinMobileInputContainer).append(
    mmspinMobileInput,
    '<div class="mmspin_loading"><svg width="40px" height="40px" id="loading" aria-hidden="true" focusable="false" role="presentation" class="icon icon-spinner" viewBox="0 0 20 20"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z" fill="#919EAB"/></svg></div>'
);

const mmspinResendText = document.createElement('span');
$(mmspinResendText).addClass('mmspin_resend_text');
$(mmspinResendText).text("Don't receive the Code?");

const mmspinResendBtn = document.createElement('button');
$(mmspinResendBtn).addClass('mmspin_resend_btn');
$(mmspinResendBtn).text('Resend');
$(mmspinResendBtn).attr('type', 'button');

// create wheel container
let wheelContainer = document.createElement('div');

// mmspin touch message
let mmspinTouchMessage = document.createElement('span');
$(mmspinTouchMessage).addClass('mmspin_touch_message');
$(mmspinTouchMessage).text('Touch spin for your lucky');

// create campaign info container
let campaignInfoContainer = document.createElement('div');
$(campaignInfoContainer).addClass('mmspin_campaign_info_container');

// winning
let mmspinWinningContainer = document.createElement('div');
$(mmspinWinningContainer).addClass('mmspin_winning_container');

let mmspinCouponCodeTitle = document.createElement('h4');
$(mmspinCouponCodeTitle).addClass('mmspin_coupon_code_title');
$(mmspinCouponCodeTitle).text('Coupon Code');

let mmspinCouponCodeSubtitle = document.createElement('h5');
$(mmspinCouponCodeSubtitle).addClass('mmspin_coupon_code_subtitle');

let mmspinWinningItemTitle = document.createElement('h4');
$(mmspinWinningItemTitle).addClass('mmspin_winning_item_title');
$(mmspinWinningItemTitle).text('Winning Item');

let mmspinWinningItemSubtitle = document.createElement('h5');
$(mmspinWinningItemSubtitle).addClass('mmspin_winning_item_subtitle');

let mmspinWinningItemImg = document.createElement('img');
$(mmspinWinningItemImg).addClass('mmspin_winning_item_img');

let mmspinWinningItemContainer = document.createElement('div');
$(mmspinWinningItemContainer).addClass(
    'mmspin_winning_item_container'
);

let mmspinWinningCouponContainer = document.createElement('div');
$(mmspinWinningCouponContainer).addClass(
    'mmspin_winning_coupon_container'
);

// home button
let homeButton = document.createElement('button');
$(homeButton).addClass('mmspin_button');
$(homeButton).addClass('agree');
$(homeButton).addClass('mmspin_callback_btn');
$(homeButton).text('Home');
$(homeButton).attr('type', 'button');

export {
    mmspinTabTcContainer,
    mmspinUserFormContainer,
    mmspinFormTitle,
    disagreeButton,
    previousButton,
    agreeButton,
    mmspinButtonContainer,
    mmspinForm,
    mmspinResendContainer,
    mmspinFullnameInput,
    mmspinCodeInput,
    mmspinInputContainer,
    mmspinMobileInputContainer,
    mmspinMobileInput,
    mmspinResendText,
    mmspinResendBtn,
    wheelContainer,
    mmspinTouchMessage,
    campaignInfoContainer,
    mmspinWinningContainer,
    mmspinCouponCodeTitle,
    mmspinCouponCodeSubtitle,
    mmspinWinningItemTitle,
    mmspinWinningItemSubtitle,
    mmspinWinningItemImg,
    mmspinWinningItemContainer,
    mmspinWinningCouponContainer,
    homeButton,
    mmspinRecaptchaContainer,
    mmspinRecaptchaInput,
    mmspinAddressInput,
};
