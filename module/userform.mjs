import {setUserFormInit} from '../constant/base.mjs';
import {
    agreeButton,
    mmspinAddressInput,
    mmspinButtonContainer,
    mmspinCodeInput,
    mmspinForm,
    mmspinFullnameInput,
    mmspinInputContainer,
    mmspinMobileInput,
    mmspinMobileInputContainer,
    mmspinRecaptchaContainer,
    mmspinRecaptchaInput,
    mmspinResendBtn,
    mmspinResendContainer,
    mmspinResendText,
    mmspinUserFormContainer,
    previousButton,
} from '../constant/constant.mjs';
import {createGoogleRecaptcha} from '../service/service.mjs';

export function createUserForm() {
    $(mmspinResendContainer).css('display', 'none');
    $(mmspinUserFormContainer).css('display', 'block');

    $(previousButton).css('display', 'block');
    $(previousButton).text('Previous');
    $(previousButton).attr('id', 'previous');
    $(previousButton).attr('type', 'button');
    $(previousButton).addClass('disagree');

    $(agreeButton).text('Submit');
    $(agreeButton).attr('id', 'next');
    $(agreeButton).attr('type', 'button');

    $(mmspinFullnameInput).css({display: 'none'});
    $(mmspinCodeInput).css({display: 'none'});
    $(mmspinAddressInput).css({display: 'none'});

    $(mmspinInputContainer).append(
        mmspinMobileInputContainer,
        mmspinFullnameInput,
        mmspinCodeInput,
        mmspinAddressInput,
        mmspinRecaptchaInput
    );

    $(mmspinButtonContainer).append(previousButton, agreeButton);
    $(mmspinResendContainer).append(
        mmspinResendText,
        mmspinResendBtn
    );

    // google recaptcha
    const googleRecaptcha = `<div id="recaptcha" class="g-recaptcha"></div>`;

    mmspinRecaptchaContainer.innerHTML = googleRecaptcha;

    $(mmspinUserFormContainer).append(
        mmspinInputContainer,
        mmspinButtonContainer,
        mmspinRecaptchaContainer,
        mmspinResendContainer
    );

    $(mmspinForm).append(mmspinUserFormContainer);

    $(mmspinFullnameInput).on('input', function (a) {
        $(mmspinFullnameInput).css({border: '1px solid '});
    });
    $(mmspinMobileInput).on('input', function (a) {
        $(mmspinMobileInput).css({border: '1px solid '});
    });
    $(mmspinCodeInput).on('input', function (a) {
        $(mmspinCodeInput).css({border: '1px solid '});
    });
    $(mmspinAddressInput).on('input', function (a) {
        $(mmspinAddressInput).css({border: '1px solid '});
    });

    $('.mmspin_loading').css('display', 'none');

    createGoogleRecaptcha();

    setUserFormInit(false);
}
