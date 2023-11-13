import {termsAndConditions} from '../constant/base.mjs';
import {
    agreeButton,
    disagreeButton,
    mmspinButtonContainer,
    mmspinForm,
    mmspinFormTitle,
    mmspinTabTcContainer,
    mmspinUserFormContainer,
    previousButton,
} from '../constant/constant.mjs';

export function createTCForm() {
    $(mmspinTabTcContainer).css('display', 'block');
    $(mmspinUserFormContainer).css('display', 'none');
    let mmspinTcList = document.createElement('ul');
    $(mmspinTcList).addClass('mmspin_tc_list');

    termsAndConditions.forEach((value) => {
        let mmspinTcListItem = document.createElement('li');
        $(mmspinTcListItem).addClass('mmspin_tc_list_item');
        $(mmspinTcListItem).text(value.description);
        $(mmspinTcList).append(mmspinTcListItem);
    });

    $(mmspinFormTitle).text('Terms and Conditions');

    $(disagreeButton).css('display', 'block');
    $(previousButton).css('display', 'none');

    $(disagreeButton).text('Disagree');
    $(disagreeButton).addClass('disagree');
    $(disagreeButton).attr('id', 'disagree');
    $(disagreeButton).attr('type', 'button');

    $(agreeButton).text('Agree');
    $(agreeButton).addClass('agree');
    $(agreeButton).attr('id', 'agree');
    $(agreeButton).attr('type', 'button');

    $(mmspinButtonContainer).append(disagreeButton, agreeButton);

    $(mmspinTabTcContainer).append(
        mmspinFormTitle,
        mmspinTcList,
        mmspinButtonContainer
    );

    $(mmspinForm).append(mmspinTabTcContainer);
    $('#mmspin-main').append(mmspinForm);
}
