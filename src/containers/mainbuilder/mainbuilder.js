import React , { Component } from 'react';
import Dashboard from '../MainContent/Dashboard/Dashboard';
import EmailInbox from '../MainContent/Email/email_inbox';
import EmailRead from '../MainContent/Email/email_read';
import EmailCompose from '../MainContent/Email/email_compose';
import UiAlerts from '../MainContent/UiElements/UiAlerts';
import UiButtons from '../MainContent/UiElements/UiButtons';
import UiCards from '../MainContent/UiElements/UiCards';
import UiCarousel from '../MainContent/UiElements/UiCarousel';
import UiDropdowns from '../MainContent/UiElements/UiDropdowns';
import UiGrid from '../MainContent/UiElements/UiGrid';
import UiImages from '../MainContent/UiElements/UiImages';
import UiModals from '../MainContent/UiElements/UiModals';
import UiLightbox from '../MainContent/UiElements/UiLightbox';
import UiSessionTimeOut from '../MainContent/UiElements/UiSessionTimeOut';
import UiProgressbars from '../MainContent/UiElements/UiProgressbars';
import UiSweetAlert from '../MainContent/UiElements/UiSweetAlert';
import UiRangeslider from '../MainContent/UiElements/UiRangeslider';
import UiTabsAccordions from '../MainContent/UiElements/UiTabsAccordions';
import UiTypography from '../MainContent/UiElements/UiTypography';
import UiVideo from '../MainContent/UiElements/UiVideo';
import UiGeneral from '../MainContent/UiElements/UiGeneral';
import UiColors from '../MainContent/UiElements/UiColors';
import UiRating from '../MainContent/UiElements/UiRating';
import Calendar from '../MainContent/Calendar/Calendar';
import FormElements from '../MainContent/Forms/FormElements';
import FormValidation from '../MainContent/Forms/FormValidation';
import FormAdvanced from '../MainContent/Forms/FormAdvanced';
import FormEditors from '../MainContent/Forms/FormEditors';
import FormUploads from '../MainContent/Forms/FormUploads';
import FormXeditable from '../MainContent/Forms/FormXeditable';
import FormRepeater from '../MainContent/Forms/FormRepeater';
import FormWizard from '../MainContent/Forms/FormWizard';
import FormMask from '../MainContent/Forms/FormMask';
import ChartsMorris from '../MainContent/Charts/ChartsMorris';
import ChartsChartist from '../MainContent/Charts/ChartsChartist';
import ChartsChartjs from '../MainContent/Charts/ChartsChartjs';
// import ChartsFlot from '../MainContent/Charts/ChartsFlot';
// import ChartsKnob from '../MainContent/Charts/ChartsKnob';
// import ChartsEchart from '../MainContent/Charts/ChartsEchart';
import ChartsSparkline from '../MainContent/Charts/ChartsSparkline';

import TablesBasic from '../MainContent/Tables/TablesBasic';
import TablesDatatable from '../MainContent/Tables/TablesDatatable';
import TablesResponsive from '../MainContent/Tables/TablesResponsive';
import TablesEditable from '../MainContent/Tables/TablesEditable';

import IconsMaterial from '../MainContent/Icons/IconsMaterial';
import IconsFontawesome from '../MainContent/Icons/IconsFontawesome';
import IconsIon from '../MainContent/Icons/IconsIon';
import IconsThemify from '../MainContent/Icons/IconsThemify';
import IconsDripicons from '../MainContent/Icons/IconsDripicons';
import IconsTypicons from '../MainContent/Icons/IconsTypicons';

import MapsGoogle from '../MainContent/Maps/MapsGoogle';
import MapsVector from '../MainContent/Maps/MapsVector';

import PagesLogin from '../MainContent/Pages/PagesLogin';
import PagesRegister from '../MainContent/Pages/PagesRegister';
import PagesRecoverpw from '../MainContent/Pages/PagesRecoverpw';
import PagesLockScreen from '../MainContent/Pages/PagesLockScreen';
import PagesLogin2 from '../MainContent/Pages/PagesLogin2';
import PagesRegister2 from '../MainContent/Pages/PagesRegister2';
import PagesRecoverpw2 from '../MainContent/Pages/PagesRecoverpw2';
import PagesLockScreen2 from '../MainContent/Pages/PagesLockScreen2';

import PagesTimeline from '../MainContent/Pages/PagesTimeline';
import PagesInvoice from '../MainContent/Pages/PagesInvoice';
import PagesDirectory from '../MainContent/Pages/PagesDirectory';
import PagesBlank from '../MainContent/Pages/PagesBlank';
import Pages404 from '../MainContent/Pages/Pages404';
import Pages500 from '../MainContent/Pages/Pages500';
import PagesPricing from '../MainContent/Pages/PagesPricing';
import PagesGallery from '../MainContent/Pages/PagesGallery';
import PagesMaintenance from '../MainContent/Pages/PagesMaintenance';
import PagesComingSoon from '../MainContent/Pages/PagesComingSoon';
import PagesFaq from '../MainContent/Pages/PagesFaq';

import EmailTemplateBasic from '../MainContent/Email/EmailTemplateBasic';
import EmailTemplateAlert from '../MainContent/Email/EmailTemplateAlert';
import EmailTemplateBilling from '../MainContent/Email/EmailTemplateBilling';

import { Route,Switch } from 'react-router-dom';
class mainbuilder extends Component{
    render(){
        return(
                <Switch>  
                    <Route path="/email-inbox" component={EmailInbox} />
                    <Route path="/email-read" component={EmailRead} />
                    <Route path="/email-compose" component={EmailCompose} />
                    <Route path="/ui-alerts" component={UiAlerts} />
                    <Route path="/ui-buttons" component={UiButtons} />
                    <Route path="/ui-cards" component={UiCards} />
                    <Route path="/ui-carousel" component={UiCarousel} />
                    <Route path="/ui-dropdowns" component={UiDropdowns} />
                    <Route path="/ui-grid" component={UiGrid} />
                    <Route path="/ui-images" component={UiImages} />
                    <Route path="/ui-modals" component={UiModals} />
                    <Route path="/ui-lightbox" component={UiLightbox} />
                    <Route path="/ui-session-timeout" component={UiSessionTimeOut} />
                    <Route path="/ui-progressbars" component={UiProgressbars} />
                    <Route path="/ui-sweet-alert" component={UiSweetAlert} />
                    <Route path="/ui-rangeslider" component={UiRangeslider} />
                    <Route path="/ui-tabs-accordions" component={UiTabsAccordions} />
                     <Route path="/ui-typography" component={UiTypography} />
                    <Route path="/ui-video" component={UiVideo} />
                    <Route path="/ui-general" component={UiGeneral} />
                    <Route path="/ui-colors" component={UiColors} />
                    <Route path="/ui-rating" component={UiRating} />
                    <Route path="/calendar" component={Calendar} />
                    <Route path="/form-elements" component={FormElements} />
                    <Route path="/form-validation" component={FormValidation} />
                    <Route path="/form-advanced" component={FormAdvanced} />
                    <Route path="/form-editors" component={FormEditors} />
                    <Route path="/form-uploads" component={FormUploads} />
                    <Route path="/form-xeditable" component={FormXeditable} />
                    <Route path="/form-repeater" component={FormRepeater} />
                    <Route path="/form-wizard" component={FormWizard} />
                    <Route path="/form-mask" component={FormMask} />
                    <Route path="/charts-morris" component={ChartsMorris} />
                    <Route path="/charts-chartist" component={ChartsChartist} />
                    <Route path="/charts-chartjs" component={ChartsChartjs} />
                    {/* <Route path="/charts-flot" component={ChartsFlot} /> */}
                    {/* <Route path="/charts-knob" component={ChartsKnob} /> */}
                    {/* <Route path="/charts-echart" component={ChartsEchart} /> */}
                    <Route path="/charts-sparkline" component={ChartsSparkline} />

                    <Route path="/tables-basic" component={TablesBasic} />
                    <Route path="/tables-datatable" component={TablesDatatable} />
                    <Route path="/tables-responsive" component={TablesResponsive} />
                    <Route path="/tables-editable" component={TablesEditable} />


                    <Route path="/icons-material" component={IconsMaterial} />
                    <Route path="/icons-fontawesome" component={IconsFontawesome} />
                    <Route path="/icons-ion" component={IconsIon} />
                    <Route path="/icons-themify" component={IconsThemify} />
                    <Route path="/icons-dripicons" component={IconsDripicons} />
                    <Route path="/icons-typicons" component={IconsTypicons} />

                    <Route path="/maps-google" component={MapsGoogle} />
                    <Route path="/maps-vector" component={MapsVector} />

                    
                    <Route path="/pages-login" component={PagesLogin} />
                    <Route path="/pages-register" component={PagesRegister} />
                    <Route path="/pages-recoverpw" component={PagesRecoverpw} />
                    <Route path="/pages-lock-screen" component={PagesLockScreen} />
                    <Route path="/pages-login-2" component={PagesLogin2} />
                    <Route path="/pages-register-2" component={PagesRegister2} />
                    <Route path="/pages-recoverpw-2" component={PagesRecoverpw2} />
                    <Route path="/pages-lock-screen-2" component={PagesLockScreen2} />

                    
                    <Route path="/pages-timeline" component={PagesTimeline} />
                    <Route path="/pages-invoice" component={PagesInvoice} />
                    <Route path="/pages-directory" component={PagesDirectory} />
                    <Route path="/pages-blank" component={PagesBlank} />
                    <Route path="/pages-404" component={Pages404} />
                    <Route path="/pages-500" component={Pages500} />
                    <Route path="/pages-pricing" component={PagesPricing} />
                    <Route path="/pages-gallery" component={PagesGallery} />
                    <Route path="/pages-maintenance" component={PagesMaintenance} />
                    <Route path="/pages-comingsoon" component={PagesComingSoon} />
                    <Route path="/pages-faq" component={PagesFaq} />

                    
                    <Route path="/email-template-basic" component={EmailTemplateBasic} />
                    <Route path="/email-template-Alert" component={EmailTemplateAlert} />
                    <Route path="/email-template-Billing" component={EmailTemplateBilling} />

                                

                    <Route path="/" component={Dashboard} />
                    
                </Switch>
        );
    }
}

export default mainbuilder;