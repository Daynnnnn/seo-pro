import SeoProFieldtype from './components/fieldtypes/SeoProFieldtype.vue';
import SourceFieldtype from './components/fieldtypes/SourceFieldtype.vue';
import Reports from './components/reporting/Reports.vue';

Statamic.$components.register('seo_pro-fieldtype', SeoProFieldtype);
Statamic.$components.register('seo_pro_source-fieldtype', SourceFieldtype);
Statamic.$components.register('seo-reports', Reports);
