import {
    basePath,
    callBackUrl,
    campaign,
    campaignAPIKey,
    cities,
    cityId,
    couponData,
    dataAPIKey,
    promotions,
    setCities,
    setCityId,
    setTownship,
    setTownshipId,
    townshipId,
    townships,
} from '../constant/base.mjs';
import {
    campaignInfoContainer,
    citySelect,
    homeButton,
    mmspinAddressInput,
    mmspinCitySelectContainer,
    mmspinCodeInput,
    mmspinCouponCodeSubtitle,
    mmspinCouponCodeTitle,
    mmspinFullnameInput,
    mmspinMobileInput,
    mmspinResendBtn,
    mmspinResendContainer,
    mmspinTouchMessage,
    mmspinTownshipSelectContainer,
    mmspinWinningContainer,
    mmspinWinningCouponContainer,
    mmspinWinningItemContainer,
    mmspinWinningItemImg,
    mmspinWinningItemSubtitle,
    mmspinWinningItemTitle,
    townshipSelect,
    wheelContainer,
} from '../constant/constant.mjs';

function clearInput() {
    $(mmspinMobileInput).val('');
    $(mmspinFullnameInput).val('');
    $(mmspinCodeInput).val('');
    $(citySelect).val('');
    $(townshipSelect).val('');
    $(townshipSelect).empty();
    setTownship([]);
}

function checkPhoneNumber(mobileValue, captchaToken) {
    const payload = {
        cid: campaignAPIKey,
        phone: mobileValue,
        client_api_key: dataAPIKey,
        captcha_token: captchaToken,
    };

    // cities api
    $.ajax({
        url: 'https://mmspin.com/api/cities',
        type: 'GET',
        dataType: 'json',
        success: function (response) {
            setCities(response.cities);
        },
        error: function (error) {
            console.log(error);
        },
    });

    return new Promise(function (resolve, reject) {
        $.ajax({
            url: basePath + 'api/ac/check',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(payload),
            success: function (response) {
                if (response) {
                    $(mmspinFullnameInput).css({
                        display: 'block',
                    });
                    $(mmspinCodeInput).css({display: 'block'});
                    $(mmspinAddressInput).css({display: 'block'});
                    $(mmspinCitySelectContainer).css({
                        display: 'block',
                    });
                    $(mmspinTownshipSelectContainer).css({
                        display: 'block',
                    });

                    if (response.message) {
                        $(mmspinMobileInput).val(mobileValue);
                        $(mmspinFullnameInput).val(
                            response.name ?? ''
                        );
                        $(mmspinCodeInput).val(response.code);
                        $(mmspinAddressInput).val(
                            response.address ?? ''
                        );

                        $(mmspinMobileInput).attr('disabled', !0);
                        $(mmspinCodeInput).attr('disabled', !0);

                        if (response.city_id) {
                            setCityId(response.city_id);
                            $(citySelect).val(response.city_id);
                            $(citySelect).attr('disabled', !0);
                            $.ajax({
                                url: `https://mmspin.com/api/townships?city_id=${response.city_id}`,
                                type: 'GET',
                                dataType: 'json',
                                success: function (result) {
                                    setTownship(result.townships);
                                    // append cities
                                    result.townships.forEach(
                                        (item) => {
                                            const option =
                                                document.createElement(
                                                    'option'
                                                );
                                            option.innerText =
                                                item.name;
                                            option.value = item.id;
                                            townshipSelect.append(
                                                option
                                            );
                                        }
                                    );

                                    setTownshipId(
                                        response.township_id
                                    );
                                    $(townshipSelect).val(
                                        response.township_id
                                    );
                                    $(townshipSelect).attr(
                                        'disabled',
                                        !0
                                    );
                                },
                                error: function (error) {
                                    console.log(error);
                                },
                            });
                        }

                        if (response.name) {
                            $(mmspinFullnameInput).attr(
                                'disabled',
                                !0
                            );
                        }
                        if (response.address) {
                            $(mmspinAddressInput).attr(
                                'disabled',
                                !0
                            );
                        }
                    } else {
                        $(mmspinResendContainer).css(
                            'display',
                            'block'
                        );

                        $(mmspinResendBtn).click(function () {
                            resendOTP({
                                phone: mobileValue,
                                campaign_api_key: campaignAPIKey,
                                client_api_key: dataAPIKey,
                                cid: campaignAPIKey,
                                captcha_token: captchaToken,
                            })
                                .then(function (response) {
                                    if (response.code) {
                                        $(mmspinResendContainer).css(
                                            'display',
                                            'none'
                                        );
                                    }
                                })
                                .catch(function (a) {
                                    console.log(a);
                                });
                        });
                    }
                }
                resolve(response);
            },
            error: function (error) {
                reject(error);
            },
        });
    });
}

function sendUserData() {
    return new Promise((resolve, reject) => {
        var phone = $(mmspinMobileInput).val();
        var fullname = $(mmspinFullnameInput).val();
        var code = $(mmspinCodeInput).val();
        var address = $(mmspinAddressInput).val();

        if (
            phone === '' &&
            fullname === '' &&
            code === '' &&
            address === ''
        ) {
            $(mmspinMobileInput).css({border: '1px solid red'});
            $(mmspinFullnameInput).css({border: '1px solid red'});
            $(mmspinCodeInput).css({border: '1px solid red'});
            $(mmspinAddressInput).css({border: '1px solid red'});
        } else if (phone === '') {
            $(mmspinMobileInput).css({border: '1px solid red'});
        } else if (fullname === '') {
            $(mmspinFullnameInput).css({border: '1px solid red'});
        } else if (mmspinCodeInput === '') {
            $(mmspinCodeInput).css({border: '1px solid red'});
        } else if (mmspinAddressInput === '') {
            $(mmspinAddressInput).css({border: '1px solid red'});
        } else if (cityId === null || cityId === '0') {
            $(citySelect).css({border: '1px solid red'});
        } else if (townshipId === null || townshipId === '0') {
            $(townshipSelect).css({border: '1px solid red'});
        } else {
            let data = {
                phone: phone,
                name: fullname,
                code: code,
                address: address,
                cid: campaignAPIKey,
                client_api_key: dataAPIKey,
                city_id: parseInt(cityId),
                city_name: cities.find(
                    (item) => item.id === parseInt(cityId)
                ).name,
                township_id: parseInt(townshipId),
                township_name: townships.find(
                    (item) => item.id === parseInt(townshipId)
                ).name,
            };

            storeUserInfo(data)
                .then(function (response) {
                    resolve(response);
                })
                .catch(function (err) {
                    reject(err);
                });
        }
    });
}

function storeUserInfo(data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: basePath + 'api/mmspin/store',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            success: function (response) {
                resolve(response);
            },
            error: function (err) {
                reject(err);
            },
        });
    });
}

function spin() {
    let spinRotation = 0;
    let ramdomItem = null;

    const payload = {
        campaign_id: campaign.id,
        coupon_id: couponData.id,
        client_api_key: dataAPIKey,
    };

    getLuckyNumber(payload).then(function (response) {
        ramdomItem = promotions.findIndex(
            (item) => item.id === response.lucky_number.id
        );

        spinRotation =
            (360 * (promotions.length - ramdomItem)) /
                promotions.length +
            2160;

        $('.wheel').css({
            transform: `rotate(calc(1deg * ${spinRotation}))`,
            transition: '12s',
        });

        let winningItem = promotions.find(
            (item) => item.id === response.lucky_number.id
        );

        setTimeout(() => {
            $(mmspinWinningCouponContainer).append(
                mmspinCouponCodeTitle,
                mmspinCouponCodeSubtitle
            );
            $(mmspinCouponCodeSubtitle).text(couponData.code);

            let imagePath = basePath + winningItem.image;
            $(mmspinWinningItemImg).attr('src', imagePath);

            $(mmspinWinningItemSubtitle).text(
                winningItem.description
            );

            winningItem.image
                ? $(mmspinWinningItemContainer).append(
                      mmspinWinningItemTitle,
                      mmspinWinningItemImg,
                      mmspinWinningItemSubtitle,
                      homeButton
                  )
                : $(mmspinWinningItemContainer).append(
                      mmspinWinningItemTitle,
                      mmspinWinningItemSubtitle,
                      homeButton
                  );

            $(mmspinWinningContainer).append(
                mmspinWinningCouponContainer,
                mmspinWinningItemContainer
            );

            $(wheelContainer).append(mmspinWinningContainer);

            known({
                cpcode: couponData.code,
                campaign_id: campaign.id,
                client_api_key: dataAPIKey,
            });
        }, 12000);

        $(mmspinTouchMessage).css('display', 'none');
        $(homeButton).click(function (a) {
            window.location.href = callBackUrl;
        });
        $('#spin-btn').unbind('click');
    });
}

function getLuckyNumber(data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: basePath + 'api/coupons/spin',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            success: function (response) {
                resolve(response);
            },
            error: function (err) {
                reject(err);
                $(mmspinTouchMessage).css('display', 'none');
                let mmspinConnectionContainer =
                    document.createElement('div');
                $(mmspinConnectionContainer).addClass(
                    'mmspin_connection_container'
                );
                let mmspinConnectionTitle =
                    document.createElement('h4');
                $(mmspinConnectionTitle).addClass(
                    'mmspin_connection_title'
                );
                $(mmspinConnectionTitle).text('Connection Timeout!');
                // refresh
                let refreshButton = document.createElement('button');
                $(refreshButton).addClass('mmspin_button');
                $(refreshButton).addClass('connection_btn');
                $(refreshButton).text('Refresh');
                $(refreshButton).attr('type', 'button');
                $(mmspinConnectionContainer).append(
                    mmspinConnectionTitle,
                    refreshButton
                );

                $(campaignInfoContainer).append(
                    mmspinConnectionContainer
                );
                $(refreshButton).click(function (a) {
                    window.location.reload();
                    $(mmspinTouchMessage).css('display', 'block');
                });
            },
        });
    });
}

function known(data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: basePath + 'api/coupons/known',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            success: function (response) {
                resolve(response);
            },
            error: function (err) {
                reject(err);
            },
        });
    });
}

function resendOTP(data) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            url: basePath + 'api/ac/resend-otp',
            type: 'POST',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
            success: function (response) {
                resolve(response);
            },
            error: function (err) {
                reject(err);
            },
        });
    });
}

function createGoogleRecaptcha() {
    try {
        grecaptcha.render('recaptcha', {
            sitekey: '6LeVZwspAAAAALDIRp6lmhuBFU9AzMhu1UpKlhQM',
            callback: function (payload) {
                document.querySelector(
                    '.mmspin_recaptcha_input'
                ).value = payload;
            },
        });
    } catch (error) {}
}

function createImage(desktop, mobile) {
    let mmspinBannerImage = document.createElement('img');
    let mmspinMobileBannerImage = document.createElement('img');
    $(mmspinBannerImage).addClass('mmspin_banner_image');
    $(mmspinMobileBannerImage).addClass('mmspin_mobile_banner_image');
    const imageSrc = basePath + desktop;
    const imageMobileSrc = basePath + mobile;
    $(mmspinBannerImage).attr('src', imageSrc);
    $(mmspinMobileBannerImage).attr('src', imageMobileSrc);
    $('#mmspin-main').append(
        mmspinBannerImage,
        mmspinMobileBannerImage
    );
}

export {
    clearInput,
    checkPhoneNumber,
    sendUserData,
    spin,
    createGoogleRecaptcha,
    createImage,
};
