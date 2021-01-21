import type PcfSolutionSettings from 'webpack-pcf-plugin/lib/solution/PcfSolution'
import version from './version';

let solutionSettings: PcfSolutionSettings = {
    uniqueName: 'ExmapleWebpackSvelteControl',
    version: version,
    publisher: {
        addresses: [{
            addressTypeCode: 0,
        }],
        customizationPrefix: 'new_',
        customizationOptionValuePrefix: 12345,
        uniqueName: 'YourUniquePublisherName',
        emailAddress: 'info@website.com',
        supportingWebsiteUrl: 'https://website.com'
    },
    managed: false,
};

export default solutionSettings;