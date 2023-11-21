import {
    cities,
    setCityId,
    setTownship,
    setTownshipId,
    setUserFormInit,
} from '../constant/base.mjs';
import {
    agreeButton,
    citySelect,
    mmspinAddressInput,
    mmspinButtonContainer,
    mmspinCitySelectContainer,
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
    mmspinTownshipSelectContainer,
    mmspinUserFormContainer,
    previousButton,
    townshipSelect,
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
    $(mmspinCitySelectContainer).css({display: 'none'});
    $(mmspinTownshipSelectContainer).css({display: 'none'});

    $(mmspinInputContainer).append(
        mmspinMobileInputContainer,
        mmspinFullnameInput,
        mmspinCodeInput,
        mmspinCitySelectContainer,
        mmspinTownshipSelectContainer,
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
        mmspinRecaptchaContainer,
        mmspinButtonContainer,
        mmspinResendContainer
    );

    $(mmspinForm).append(mmspinUserFormContainer);

    // default cities
    const option = document.createElement('option');
    option.innerText = 'Select City';
    option.value = 0;
    citySelect.append(option);

    // append cities
    cities.forEach((item) => {
        const option = document.createElement('option');
        option.innerText = item.name;
        option.value = item.id;
        citySelect.append(option);
    });

    mmspinCitySelectContainer.append(citySelect);

    // default township
    const optiontownship = document.createElement('option');
    optiontownship.innerText = 'Select Township';
    optiontownship.value = 0;
    townshipSelect.append(optiontownship);

    mmspinTownshipSelectContainer.append(townshipSelect);

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

    // listen city event change
    citySelect.onchange = (ev) => {
        const cityId = ev.target.value;
        setCityId(cityId);
        $(townshipSelect).empty();

        const optiontownship = document.createElement('option');
        optiontownship.innerText = 'Select Township';
        optiontownship.value = 0;
        townshipSelect.append(optiontownship);
        // cities api
        $.ajax({
            url: `https://mmspin.com/api/townships?city_id=${cityId}`,
            type: 'GET',
            dataType: 'json',
            success: function (response) {
                setTownship(response.townships);
                // append cities
                response.townships.forEach((item) => {
                    const option = document.createElement('option');
                    option.innerText = item.name;
                    option.value = item.id;
                    townshipSelect.append(option);
                });
            },
            error: function (error) {
                console.log(error);
            },
        });
    };

    townshipSelect.onchange = (ev) => {
        setTownshipId(ev.target.value);
    };
}
