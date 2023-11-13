import {basePath, campaign, promotions} from '../constant/base.mjs';
import {
    campaignInfoContainer,
    mmspinForm,
    mmspinTouchMessage,
    mmspinUserFormContainer,
    wheelContainer,
} from '../constant/constant.mjs';

export function createWheel() {
    $(mmspinUserFormContainer).css('display', 'none');
    $(wheelContainer).addClass('wheel_container');

    // create circleContainer
    let circleContainer = document.createElement('div');
    $(circleContainer).addClass('circle-container');
    $(circleContainer).css({
        '--ring-color': campaign.border_color,
    });

    for (let a = 0; a < 15; a++) {
        let circel = document.createElement('div');
        $(circel).addClass('circle');
        $(circel).css({
            '--circle-index': a,
            '--circle-color': a % 2 ? 'white' : '#f5e137',
            '--circle-count': 15,
        });
        $(circleContainer).append(circel);
    }

    // cirecel arrow image
    let circelArrowImage = document.createElement('img');
    $(circelArrowImage).addClass('circle-arrow');
    $(circelArrowImage).attr(
        'src',
        'https://plugin.mickhae.com/arrow.png'
    );
    $(circleContainer).append(circelArrowImage);

    // spin button
    let spinButton = document.createElement('p');
    $(spinButton).addClass('spin');
    $(spinButton).attr('id', 'spin-btn');
    $(spinButton).append('Spin');
    $(circleContainer).append(spinButton);

    let circelCenter = document.createElement('div');
    $(circelCenter).addClass('center');
    $(circleContainer).append(circelCenter);

    let wheel = document.createElement('div');
    $(wheel).addClass('wheel');
    $(wheel).css({
        '--nb-item': promotions.length,
        '--wheel-color': campaign.bg_color,
        '--spin-btn-color': 'white',
    });
    $(circelCenter).append(wheel);

    promotions.forEach((item, index) => {
        let wheelItem = document.createElement('div');
        $(wheelItem).addClass('wheel-item');
        $(wheelItem).css({
            '--item-nb': index,
            '--slice-background': item.bg_color,
            '--slice-font-color': item.font_color,
            '--slice-font-size': item.font_size,
        });
        $(wheel).append(wheelItem);

        let title = document.createElement('span');
        $(title).addClass('title');

        let promoImage = document.createElement('img');
        $(promoImage).addClass('pro-image');
        $(promoImage).attr('src', basePath + item.image);
        $(title).append(item.title);
        item.image
            ? $(wheelItem).append(promoImage)
            : $(wheelItem).append(title);
    });

    let mmspinCampaignTitle = document.createElement('h2');
    $(mmspinCampaignTitle).addClass('mmspin_campaign_title');
    $(mmspinCampaignTitle).text(campaign.event_title);

    let mmspinCampaignDuration = document.createElement('p');
    $(mmspinCampaignDuration).addClass('mmspin_campaign_duration');
    $(mmspinCampaignDuration).text(
        formatDate(campaign.start) + ' ~ ' + formatDate(campaign.end)
    );

    let mmspinCampaignDescription = document.createElement('p');
    $(mmspinCampaignDescription).addClass(
        'mmspin_campaign_description'
    );
    $(mmspinCampaignDescription).text(campaign.description);

    campaignInfoContainer.append(
        mmspinCampaignTitle,
        mmspinCampaignDuration,
        mmspinCampaignDescription
    );
    let mmspinSpinContainer = document.createElement('div');
    $(mmspinSpinContainer).addClass('mmspin_spin_container');

    $(mmspinSpinContainer).append(
        circleContainer,
        mmspinTouchMessage
    );
    wheelContainer.append(campaignInfoContainer, mmspinSpinContainer);

    $(mmspinForm).append(wheelContainer);
}

function formatDate(date) {
    let newDate = new Date(date);
    let day = newDate.getDate();
    let month = newDate.getMonth();
    month += 1;
    var year = newDate.getFullYear();
    return day + '-' + month + '-' + year;
}
