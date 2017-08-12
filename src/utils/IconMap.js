import IonIcon from 'react-native-vector-icons/Ionicons';
import LineIcon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const icons = {
    share: [LineIcon, 'share', 20, '#fff'],
    menu: [FontAwesome, 'bars', 24, '#fff'],
};

let IconsMap = {};
let IconsLoaded = new Promise((resolve, reject) => {
    new Promise.all(
        Object.keys(icons).map(iconName =>
            icons[iconName][0].getImageSource(
                icons[iconName][1],
                icons[iconName][2],
                icons[iconName][3]
            )
        )).then(sources => {
            Object.keys(icons)
            .forEach((iconName, idx) => IconsMap[iconName] = sources[idx]);
            resolve(true);
        })
});

export {
    IconsMap,
    IconsLoaded
};
