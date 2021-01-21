import type PcfManifest from 'webpack-pcf-plugin/lib/manifest/PcfManifest';
import version from './version';

/*
You can add more controls if you want or edit the control listed here as an example control
*/

const exampleControl: PcfManifest = {
    namespace: 'yourns',
    constructorName: 'ExampleControl',
    version,
    displayNameKey: 'Example',
    descriptionKey: 'Example Textfeld ',
    usedFeatures: [], // add more features if you control requires WebAPI, Utility or device features
    apiVersion: '1.2.1',
    controlType: 'standard',
    properties: [{
        name: 'textField',
        displayNameKey: 'Text Feld',
        descriptionKey: 'Feld welches den Wert setzen wird.',
        ofType: 'SingleLine.Text',
        required: true,
        usage: 'bound'
    },],
    resources: [],
    codeResource: {
        path: './src/ExampleControl.ts',
        type: 'code',
        order: 1,
        version
    }
};

export default [exampleControl];