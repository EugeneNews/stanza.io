import * as NS from '../namespaces';


export default function (JXT) {

    const Hat = JXT.define({
        name: '_hat',
        namespace: NS.HATS_0,
        element: 'hat',
        fields: {
            lang: JXT.utils.langAttribute(),
            name: JXT.utils.attribute('name'),
            displayName: JXT.utils.attribute('displayName')
        }
    });


    JXT.withPresence(function (Presence) {

        JXT.add(Presence, 'hats', JXT.utils.subMultiExtension(NS.HATS_0, 'hats', Hat));
    });
}
